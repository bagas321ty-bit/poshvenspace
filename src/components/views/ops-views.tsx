import { useEffect, useMemo, useRef, useState } from "react";
import { Camera, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { HISTORIC_ORDER_IDS, VENUE_EXTRAS, VENUE_PACKAGES } from "@/data/seed";
import { formatDateID, formatIDR, formatTimeID, hourJakarta, shiftDateISO, todayISO } from "@/lib/format";
import { usePos } from "@/lib/store";
import { DAILY_TARGET, type Attendance, type KdsStatus, type PaymentMethod, type WorkShift } from "@/lib/types";
import { cn } from "@/lib/utils";
import { detectWorkShift, isNightCorruptAttempt, shiftRangeLabel, workRangeLabel } from "@/lib/work-shift";
import { openWhatsApp, receiptWaText } from "@/lib/whatsapp";

export function OrdersView() {
  const orders = usePos((s) => s.orders);
  const voidOrder = usePos((s) => s.voidOrder);
  const setReceipt = (id: string) => {
    const o = usePos.getState().orders.find((x) => x.id === id);
    if (o) usePos.setState({ lastReceipt: o, receiptOpen: true });
  };
  return (
    <div className="h-full overflow-auto p-4">
      <h2 className="mb-4 font-display text-xl font-medium">Order List</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              {["Nomor", "Waktu", "Tipe", "Tamu", "Total", "Bayar", "KDS", "Status", ""].map((h) => (
                <th key={h} className="px-3 py-2 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-border">
                <td className="px-3 py-2 font-mono text-xs">{o.number}</td>
                <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{formatTimeID(o.createdAt)}</td>
                <td className="px-3 py-2">{o.type}</td>
                <td className="px-3 py-2">
                  {o.customer} {o.table !== "-" ? `· ${o.table}` : ""}
                </td>
                <td className="px-3 py-2 font-mono tabular-nums">{formatIDR(o.total)}</td>
                <td className="px-3 py-2">{o.payment}</td>
                <td className="px-3 py-2">
                  <Badge tone={o.kdsStatus === "done" ? "success" : "warning"}>{o.kdsStatus}</Badge>
                </td>
                <td className="px-3 py-2">
                  <Badge tone={o.status === "void" ? "danger" : "success"}>{o.status}</Badge>
                </td>
                <td className="px-3 py-2 text-right">
                  <Button size="sm" variant="ghost" onClick={() => setReceipt(o.id)}>
                    Struk
                  </Button>
                  {o.status === "paid" && (
                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => voidOrder(o.id)}>
                      Void
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const KDS_COLS: { id: KdsStatus; label: string }[] = [
  { id: "new", label: "Baru" },
  { id: "cooking", label: "Dimasak" },
  { id: "ready", label: "Siap" },
  { id: "done", label: "Selesai" },
];

export function KitchenView() {
  const allOrders = usePos((s) => s.orders);
  const orders = allOrders.filter(
    (o) => o.status === "paid" && o.items.some((i) => i.kitchen) && !HISTORIC_ORDER_IDS.has(o.id),
  );
  const setKds = usePos((s) => s.setKds);
  const waKitchen = usePos((s) => s.waKitchen);
  const next: Record<KdsStatus, KdsStatus | null> = { new: "cooking", cooking: "ready", ready: "done", done: null };
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <h2 className="font-display text-xl font-medium">Kitchen Display</h2>
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-4">
        {KDS_COLS.map((col) => {
          const list = orders.filter((o) => o.kdsStatus === col.id);
          return (
            <div key={col.id} className="flex min-h-0 flex-col rounded-xl border border-border bg-card p-3">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">{col.label}</span>
                <Badge>{list.length}</Badge>
              </div>
              <div className="min-h-0 flex-1 space-y-2 overflow-y-auto">
                {list.map((o) => (
                  <div key={o.id} className="rounded-lg border border-border bg-muted/40 p-3">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="font-mono text-foreground">{o.number}</span>
                      <span>
                        {o.type} {o.table !== "-" ? o.table : ""}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm">
                      {o.items
                        .filter((i) => i.kitchen)
                        .map((i) => (
                          <li key={i.key}>
                            {i.qty}× {i.name}
                            {i.note ? <span className="text-primary"> — {i.note}</span> : null}
                          </li>
                        ))}
                    </ul>
                    {o.kdsStatus === "new" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2 w-full"
                        onClick={() => {
                          if (!openWhatsApp(waKitchen, receiptWaText(o))) {
                            toast.error("Isi nomor WA dapur di Akun Staf dulu.");
                          }
                        }}
                      >
                        <MessageCircle className="size-3.5" /> WA dapur
                      </Button>
                    )}
                    {next[o.kdsStatus] && (
                      <Button size="sm" className="mt-2 w-full" onClick={() => setKds(o.id, next[o.kdsStatus]!)}>
                        {next[o.kdsStatus] === "cooking" ? "Mulai masak" : next[o.kdsStatus] === "ready" ? "Siap disaji" : "Selesai"}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AttendanceView() {
  const allStaff = usePos((s) => s.staff);
  const staff = allStaff.filter((s) => s.id !== "bagas");
  const attendance = usePos((s) => s.attendance);
  const clock = usePos((s) => s.clock);
  const role = usePos((s) => s.role);
  const setAttendanceValid = usePos((s) => s.setAttendanceValid);
  const workShifts = usePos((s) => s.workShifts);
  const shiftLogs = usePos((s) => s.shiftLogs);
  const updateWorkShifts = usePos((s) => s.updateWorkShifts);
  const [id, setId] = useState(staff[0]?.id ?? "randy");
  const [pin, setPin] = useState("");
  const [note, setNote] = useState("");
  const [photo, setPhoto] = useState("");
  const [err, setErr] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [voidRow, setVoidRow] = useState<Attendance | null>(null);
  const [voidReason, setVoidReason] = useState("");
  const [tab, setTab] = useState<string>(() => {
    const now = new Date().toISOString();
    return detectWorkShift(now, workShifts)?.id ?? (isNightCorruptAttempt(now) ? "malam" : "pagi");
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<WorkShift[]>(workShifts);
  const today = todayISO();
  const detected = detectWorkShift(new Date().toISOString(), workShifts);
  const validRows = attendance.filter((a) => a.valid !== false);
  const meOpen = validRows.find((a) => a.staffId === id && a.date === today && !a.clockOut);
  const presentPagi = new Set(validRows.filter((a) => a.date === today && a.shiftId === "pagi" && !a.clockOut).map((a) => a.staffId)).size;
  const presentMalam = new Set(validRows.filter((a) => a.date === today && a.shiftId === "malam" && !a.clockOut).map((a) => a.staffId)).size;
  const lateToday = validRows.filter((a) => a.date === today && a.status === "Terlambat").length;
  const corrupt = attendance.filter((a) => a.status === "Korupsi Waktu").length;
  const rows = attendance.filter((a) => (a.shiftId ?? "pagi") === tab);
  const activeShift = workShifts.find((s) => s.id === tab);

  const submit = () => {
    const s = staff.find((x) => x.id === id);
    if (!s || s.pin !== pin) {
      setErr("PIN staf salah");
      return;
    }
    if (!photo) {
      setErr("Ambil bukti foto dulu");
      return;
    }
    const msg = clock(id, note, photo);
    if (msg) {
      setErr(msg);
      return;
    }
    const last = usePos.getState().attendance.find((a) => a.staffId === id && a.date === today);
    if (last?.status === "Terlambat") {
      toast.warning(`Terlambat. Sanksi potong gaji Rp 10.000 masuk log insiden.`);
    }
    setPin("");
    setNote("");
    setPhoto("");
    setErr("");
  };

  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-medium">Absensi Anti-Curang</h2>
          <p className="text-sm text-muted-foreground">
            Pagi kerja 10.00–17.00 (absen 08.00–15.00) · Malam kerja 17.00–01.00 (absen 15.00–00.00) · telat 1 menit tercatat.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Hadir pagi" value={`${presentPagi}`} />
          <Stat label="Hadir malam" value={`${presentMalam}`} />
          <Stat label="Telat hari ini" value={`${lateToday}`} />
          <Stat label="Korupsi waktu" value={`${corrupt}`} />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {workShifts.map((s) => (
          <Button key={s.id} size="sm" variant={tab === s.id ? "default" : "secondary"} onClick={() => setTab(s.id)}>
            Shift {s.name} · {workRangeLabel(s)}
          </Button>
        ))}
        <Button
          size="sm"
          variant="outline"
          className="ml-auto"
          onClick={() => {
            if (role !== "owner") {
              usePos.setState({ pinOpen: true, pendingView: "attendance" });
              toast.error("PIN owner untuk atur jam shift.");
              return;
            }
            setDraft(workShifts.map((s) => ({ ...s })));
            setSettingsOpen(true);
          }}
        >
          Atur jam shift
        </Button>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <form
          className="min-w-0 space-y-3 rounded-xl border border-border bg-card p-4"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <p className="flex items-center gap-2 text-sm font-medium">
            <Camera className="size-4 text-primary" /> {meOpen ? "Clock out + foto pulang" : "Clock in + foto masuk"}
          </p>
          {meOpen ? (
            <p className="text-xs text-muted-foreground">
              Tiket terbuka: {meOpen.staffName} · shift {workShifts.find((s) => s.id === meOpen.shiftId)?.name ?? meOpen.shiftId} · pulang malam s/d 01.00.
            </p>
          ) : detected ? (
            <p className="text-xs text-primary">
              Terdeteksi shift {detected.name} · absen {shiftRangeLabel(detected)} · mulai kerja {detected.workStart}.
            </p>
          ) : (
            <p className="text-xs text-destructive">
              Di luar jendela absen masuk. Pagi 08.00–15.00 · Malam 15.00–00.00. Kalau masih di shift malam, catat pulang.
            </p>
          )}
          <select
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            value={id}
            onChange={(e) => setId(e.target.value)}
          >
            {staff.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} · {s.role}
              </option>
            ))}
          </select>
          <Input type="password" maxLength={4} placeholder="PIN 4 digit" value={pin} onChange={(e) => setPin(e.target.value)} />
          <Input placeholder="Catatan / tugas" value={note} onChange={(e) => setNote(e.target.value)} />
          <PhotoCapture value={photo} onChange={setPhoto} />
          {err && <p className="text-xs text-destructive">{err}</p>}
          <Button className="w-full" type="submit" disabled={!photo}>
            {meOpen ? "Catat pulang" : "Catat masuk"}
          </Button>
          <p className="text-xs text-muted-foreground">Shift terdeteksi otomatis dari jam perangkat. Telat 1 menit = Terlambat.</p>
        </form>
        <div className="min-w-0 overflow-x-auto rounded-xl border border-border lg:col-span-2">
          <div className="border-b border-border px-3 py-2 text-xs text-muted-foreground">
            Log shift {activeShift?.name ?? tab}
            {activeShift ? ` · kerja ${workRangeLabel(activeShift)} · absen ${shiftRangeLabel(activeShift)}` : ""}
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                {["Nama", "Tanggal", "Masuk", "Keluar", "Bukti", "Status", "Validitas", "Catatan"].map((h) => (
                  <th key={h} className="px-3 py-2">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-3 py-8 text-center text-sm text-muted-foreground">
                    Belum ada absen shift ini.
                  </td>
                </tr>
              )}
              {rows.map((a) => (
                <tr key={a.id} className={cn("border-t border-border", a.valid === false && "bg-destructive/5 text-muted-foreground")}>
                  <td className="px-3 py-2 font-medium text-foreground">{a.staffName}</td>
                  <td className="px-3 py-2 font-mono text-xs">{formatDateID(a.date)}</td>
                  <td className="px-3 py-2 font-mono text-xs">{formatTimeID(a.clockIn)}</td>
                  <td className="px-3 py-2 font-mono text-xs">{a.clockOut ? formatTimeID(a.clockOut) : "—"}</td>
                  <td className="px-3 py-2">
                    <div className="flex gap-1">
                      {a.photoIn ? (
                        <button type="button" onClick={() => setPreview(a.photoIn!)} title="Foto masuk">
                          <img src={a.photoIn} alt={`Masuk ${a.staffName}`} className="size-10 rounded-md object-cover" />
                        </button>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                      {a.photoOut ? (
                        <button type="button" onClick={() => setPreview(a.photoOut!)} title="Foto pulang">
                          <img src={a.photoOut} alt={`Pulang ${a.staffName}`} className="size-10 rounded-md object-cover" />
                        </button>
                      ) : null}
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <Badge tone={a.status === "Terlambat" || a.status === "Korupsi Waktu" ? (a.status === "Korupsi Waktu" ? "danger" : "warning") : "success"}>
                      {a.status}
                    </Badge>
                  </td>
                  <td className="px-3 py-2">
                    {a.valid === false ? (
                      <div className="space-y-1">
                        <Badge tone="danger">Tidak valid</Badge>
                        {a.voidReason ? <p className="text-xs">{a.voidReason}</p> : null}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            if (!setAttendanceValid(a.id, true)) toast.error("PIN owner dulu.");
                          }}
                        >
                          Pulihkan
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <Badge tone="success">Valid</Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-destructive"
                          onClick={() => {
                            if (role !== "owner") {
                              usePos.setState({ pinOpen: true, pendingView: "attendance" });
                              toast.error("PIN owner dulu.");
                              return;
                            }
                            setVoidRow(a);
                            setVoidReason("");
                          }}
                        >
                          Batalkan
                        </Button>
                      </div>
                    )}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{a.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Dialog open={!!preview} onOpenChange={(v) => !v && setPreview(null)}>
        <DialogContent title="Bukti foto absen" className="max-w-sm">
          {preview && <img src={preview} alt="Bukti absen" className="w-full rounded-lg object-cover" />}
        </DialogContent>
      </Dialog>
      <Dialog open={!!voidRow} onOpenChange={(v) => !v && setVoidRow(null)}>
        <DialogContent title="Batalkan absensi" className="max-w-sm">
          <p className="text-sm text-muted-foreground">
            {voidRow ? `${voidRow.staffName} · ${formatDateID(voidRow.date)}` : ""} tidak dihitung hadir. Foto dan jam tetap tersimpan.
          </p>
          <Input
            className="mt-3"
            placeholder="Alasan (wajib)"
            value={voidReason}
            onChange={(e) => setVoidReason(e.target.value)}
          />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button variant="secondary" onClick={() => setVoidRow(null)}>
              Batal
            </Button>
            <Button
              variant="destructive"
              disabled={!voidReason.trim()}
              onClick={() => {
                if (!voidRow) return;
                if (setAttendanceValid(voidRow.id, false, voidReason.trim())) {
                  toast.success("Absensi ditandai tidak valid.");
                  setVoidRow(null);
                } else {
                  toast.error("PIN owner dulu.");
                }
              }}
            >
              Tidak valid
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog
        open={settingsOpen}
        onOpenChange={(v) => {
          if (!v) setSettingsOpen(false);
        }}
      >
        <DialogContent title="Jam shift staf" className="max-w-lg">
          <p className="mb-3 text-xs text-muted-foreground">
            Hanya owner. Penyesuaian tercatat di log. Tidak mengubah absen 8–9 Sep yang sudah ada.
          </p>
          <div className="space-y-4">
            {draft.map((s, i) => (
              <div key={s.id} className="rounded-lg border border-border p-3 space-y-2">
                <p className="text-sm font-medium">Shift {s.name}</p>
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-xs text-muted-foreground">
                    Kerja mulai
                    <Input
                      type="time"
                      className="mt-1"
                      value={s.workStart}
                      onChange={(e) => {
                        const next = draft.map((x, j) => (j === i ? { ...x, workStart: e.target.value } : x));
                        setDraft(next);
                      }}
                    />
                  </label>
                  <label className="text-xs text-muted-foreground">
                    Kerja selesai / pulang
                    <Input
                      type="time"
                      className="mt-1"
                      value={s.workEnd}
                      onChange={(e) => {
                        const next = draft.map((x, j) => (j === i ? { ...x, workEnd: e.target.value } : x));
                        setDraft(next);
                      }}
                    />
                  </label>
                  <label className="text-xs text-muted-foreground">
                    Absen dari
                    <Input
                      type="time"
                      className="mt-1"
                      value={s.absenFrom}
                      onChange={(e) => {
                        const next = draft.map((x, j) => (j === i ? { ...x, absenFrom: e.target.value } : x));
                        setDraft(next);
                      }}
                    />
                  </label>
                  <label className="text-xs text-muted-foreground">
                    Absen sampai
                    <Input
                      type="time"
                      className="mt-1"
                      value={s.absenTo}
                      onChange={(e) => {
                        const next = draft.map((x, j) => (j === i ? { ...x, absenTo: e.target.value } : x));
                        setDraft(next);
                      }}
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="mt-3 w-full"
            onClick={() => {
              if (updateWorkShifts(draft)) {
                toast.success("Jam shift disimpan.");
                setSettingsOpen(false);
              } else {
                toast.error("PIN owner dulu.");
              }
            }}
          >
            Simpan jam shift
          </Button>
          <div className="mt-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Log perubahan</p>
            {shiftLogs.length === 0 ? (
              <p className="text-xs text-muted-foreground">Belum ada penyesuaian.</p>
            ) : (
              <ul className="max-h-36 space-y-1 overflow-auto text-xs text-muted-foreground">
                {shiftLogs.map((l) => (
                  <li key={l.id}>
                    {formatTimeID(l.createdAt)} · {l.actor} · {l.summary}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function compressImage(src: HTMLImageElement | HTMLVideoElement, maxW = 360): string {
  const c = document.createElement("canvas");
  const sw = "videoWidth" in src ? src.videoWidth || src.clientWidth : src.naturalWidth;
  const sh = "videoHeight" in src ? src.videoHeight || src.clientHeight : src.naturalHeight;
  const w = Math.min(maxW, sw || maxW);
  const h = Math.round(((sh || w) / (sw || w)) * w);
  c.width = w;
  c.height = h || w;
  c.getContext("2d")?.drawImage(src, 0, 0, c.width, c.height);
  return c.toDataURL("image/jpeg", 0.72);
}

function PhotoCapture({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [live, setLive] = useState(false);
  const [camErr, setCamErr] = useState("");

  useEffect(() => {
    return () => {
      const stream = videoRef.current?.srcObject as MediaStream | null;
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const startCam = async () => {
    setCamErr("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 480 } },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setLive(true);
      }
    } catch {
      setCamErr("Kamera diblokir di preview. Unggah foto atau ambil dari HP.");
    }
  };

  const snap = () => {
    const v = videoRef.current;
    if (!v) return;
    onChange(compressImage(v));
    const stream = v.srcObject as MediaStream | null;
    stream?.getTracks().forEach((t) => t.stop());
    v.srcObject = null;
    setLive(false);
  };

  const onFile = (file: File) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      onChange(compressImage(img));
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground">Bukti foto wajah (wajib)</p>
      {value ? (
        <div className="flex items-center gap-3">
          <img src={value} alt="Pratinjau bukti" className="size-20 rounded-lg object-cover" />
          <Button type="button" variant="secondary" size="sm" onClick={() => onChange("")}>
            Ambil ulang
          </Button>
        </div>
      ) : (
        <>
          <div className="relative overflow-hidden rounded-lg border border-border bg-muted">
            <video
              ref={videoRef}
              playsInline
              muted
              className={live ? "block h-40 w-full object-cover" : "pointer-events-none absolute size-0 opacity-0"}
            />
            {!live && (
              <div className="flex h-28 flex-col items-center justify-center gap-1 text-xs text-muted-foreground">
                <Camera className="size-5 text-primary" />
                Kamera siap untuk bukti absen
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {live ? (
              <Button type="button" onClick={snap}>
                Ambil foto
              </Button>
            ) : (
              <Button type="button" variant="secondary" onClick={() => void startCam()}>
                Buka kamera
              </Button>
            )}
            <Button type="button" variant="outline" onClick={() => fileRef.current?.click()}>
              Unggah foto
            </Button>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            capture="user"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
              e.target.value = "";
            }}
          />
          {camErr && <p className="text-xs text-warning">{camErr}</p>}
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-mono text-sm tabular-nums">{value}</p>
    </div>
  );
}

export function ShiftView() {
  const shift = usePos((s) => s.shift);
  const openShift = usePos((s) => s.openShift);
  const closeShift = usePos((s) => s.closeShift);
  const [cash, setCash] = useState(500000);
  const expected = shift.openingCash + shift.cashSales;
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <h2 className="font-display text-xl font-medium">Shift Kasir</h2>
      <p className="text-sm text-muted-foreground">Jam operasional 07.00–02.00. Transaksi jam 00–01.59 masuk hari kemarin.</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Status" value={shift.open ? "Aktif" : "Tutup"} />
        <Stat label="Kasir" value={shift.cashier} />
        <Stat label="Modal awal" value={formatIDR(shift.openingCash)} />
        <Stat label="Kas diharapkan" value={formatIDR(expected)} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
          <p className="text-sm text-muted-foreground">Penjualan tunai</p>
          <p className="font-mono text-2xl tabular-nums text-primary">{formatIDR(shift.cashSales)}</p>
          <p className="text-sm text-muted-foreground">Non-tunai (QRIS / Debit / Transfer)</p>
          <p className="font-mono text-2xl tabular-nums">{formatIDR(shift.nonCashSales)}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 space-y-3">
          <label className="text-sm text-muted-foreground">Modal kas buka shift</label>
          <Input type="number" value={cash} onChange={(e) => setCash(Number(e.target.value))} />
          <div className="flex gap-2">
            <Button className="flex-1" disabled={shift.open} onClick={() => openShift(cash)}>
              Buka shift
            </Button>
            <Button className="flex-1" variant="secondary" disabled={!shift.open} onClick={closeShift}>
              Tutup shift
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IncidentsView() {
  const incidents = usePos((s) => s.incidents);
  const addIncident = usePos((s) => s.addIncident);
  const staff = usePos((s) => s.staff);
  const [form, setForm] = useState({
    date: todayISO(),
    staff: "randy",
    category: "Pelanggaran SOP",
    desc: "",
    action: "",
    loss: 0,
    status: "Selesai",
  });
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <h2 className="font-display text-xl font-medium">Log Insiden Kafe</h2>
      <div className="grid gap-4 lg:grid-cols-3">
        <form
          className="space-y-2 rounded-xl border border-border bg-card p-4"
          onSubmit={(e) => {
            e.preventDefault();
            addIncident(form);
            setForm({ ...form, desc: "", action: "", loss: 0 });
          }}
        >
          <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <select
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            value={form.staff}
            onChange={(e) => setForm({ ...form, staff: e.target.value })}
          >
            {staff.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <select
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {["Pelanggaran SOP", "Keterlambatan", "Kerusakan", "Komplain Tamu"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <Input placeholder="Deskripsi" required value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
          <Input placeholder="Tindakan / sanksi" value={form.action} onChange={(e) => setForm({ ...form, action: e.target.value })} />
          <Input type="number" placeholder="Estimasi kerugian" value={form.loss || ""} onChange={(e) => setForm({ ...form, loss: Number(e.target.value) })} />
          <Button type="submit" className="w-full">
            Catat insiden
          </Button>
        </form>
        <div className="lg:col-span-2 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                {["Tanggal", "Staf", "Kategori", "Kejadian", "Sanksi", "Denda", "Status"].map((h) => (
                  <th key={h} className="px-3 py-2">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {incidents.map((i) => (
                <tr key={i.id} className="border-t border-border">
                  <td className="px-3 py-2 font-mono text-xs">{formatDateID(i.date)}</td>
                  <td className="px-3 py-2 capitalize">{i.staff}</td>
                  <td className="px-3 py-2">
                    <Badge tone="danger">{i.category}</Badge>
                  </td>
                  <td className="px-3 py-2">{i.desc}</td>
                  <td className="px-3 py-2">{i.action}</td>
                  <td className="px-3 py-2 font-mono text-xs tabular-nums">{i.loss ? formatIDR(i.loss) : "—"}</td>
                  <td className="px-3 py-2">
                    <Badge tone={i.status === "Dibatalkan" ? "muted" : i.category === "Keterlambatan" ? "warning" : "success"}>
                      {i.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function VenueView() {
  const addToCartWait = usePos((s) => s.addIncome);
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div>
        <h2 className="font-display text-xl font-medium">Pricelist Sewa Gedung Diantara</h2>
        <p className="text-sm text-muted-foreground">Acara, seminar, workshop. Hari besar harga khusus.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {VENUE_PACKAGES.map((p) => (
          <div key={p.id} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg">{p.name}</h3>
              <p className="font-mono text-xl text-primary">{formatIDR(p.price)}</p>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {p.points.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <Button
              className="mt-4"
              variant="outline"
              onClick={() =>
                addToCartWait({
                  date: new Date().toISOString().slice(0, 10),
                  category: "Sewa Tempat",
                  desc: p.name,
                  amount: p.price,
                  status: "DP",
                })
              }
            >
              Catat sebagai DP sewa
            </Button>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-3 font-medium">Lain-lain</h3>
        <ul className="divide-y divide-border text-sm">
          {VENUE_EXTRAS.map((x) => (
            <li key={x.name} className="flex justify-between py-2">
              <span>{x.name}</span>
              <span className="font-mono text-muted-foreground">{x.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1];
const PAY_METHODS: PaymentMethod[] = ["Cash", "QRIS", "Debit", "Transfer"];

export function SalesLogView() {
  const orders = usePos((s) => s.orders);
  const dailySales = usePos((s) => s.dailySales);
  const today = todayISO();
  const [day, setDay] = useState(today);
  const dayOptions = [
    { id: "2026-09-08", label: "8 Sep" },
    { id: "2026-09-09", label: "9 Sep" },
    { id: today, label: "Hari ini" },
  ].filter((d, i, arr) => arr.findIndex((x) => x.id === d.id) === i);

  const stats = useMemo(() => {
    const paid = orders.filter((o) => o.status === "paid" && shiftDateISO(o.createdAt) === day);
    const fromOrders = paid.reduce((s, o) => s + o.total, 0);
    const fromBook = dailySales.find((d) => d.date === day)?.omzet ?? 0;
    const total = Math.max(fromOrders, fromBook);
    const bills = paid.length;
    const avg = bills ? Math.round(fromOrders / bills) : 0;
    const byPay = Object.fromEntries(PAY_METHODS.map((m) => [m, 0])) as Record<PaymentMethod, number>;
    for (const o of paid) byPay[o.payment] += o.total;
    const cash = byPay.Cash;
    const nonCash = fromOrders - cash;
    const hourly = HOURS.map((h) => ({
      name: `${String(h).padStart(2, "0")}.00`,
      Omzet: paid.filter((o) => hourJakarta(o.createdAt) === h).reduce((sum, o) => sum + o.total, 0),
    }));
    const payRows = PAY_METHODS.map((m) => ({ name: m === "Cash" ? "Tunai" : m, value: byPay[m] }));
    return { fromOrders, total, bills, avg, cash, nonCash, hourly, payRows };
  }, [orders, dailySales, day]);

  const hit = stats.total >= DAILY_TARGET;
  const pct = Math.min(100, (stats.total / DAILY_TARGET) * 100);

  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div>
        <h2 className="font-display text-xl font-medium">Log Omzet Hari Ini</h2>
        <p className="text-sm text-muted-foreground">{formatDateID(day)} · shift 07.00–02.00 · sinkron spreadsheet 8–9 Sep + penjualan kasir</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {dayOptions.map((d) => (
            <Button key={d.id} size="sm" variant={day === d.id ? "default" : "secondary"} onClick={() => setDay(d.id)}>
              {d.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-xl border border-border bg-card p-4 sm:col-span-2">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Omzet hari ini</p>
          <p className="mt-1 font-display text-3xl font-medium tabular-nums text-primary">{formatIDR(stats.total)}</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
            <div className={`h-full ${hit ? "bg-success" : "bg-primary"}`} style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Target harian {formatIDR(DAILY_TARGET)} · {hit ? "Tembus target" : `sisa ${formatIDR(Math.max(0, DAILY_TARGET - stats.total))}`}
          </p>
        </div>
        <OmzetStat label="Jumlah bill" value={String(stats.bills)} hint="Transaksi lunas" />
        <OmzetStat label="Rata-rata bill" value={formatIDR(stats.avg)} hint="Per struk" />
        <OmzetStat label="Tunai" value={formatIDR(stats.cash)} hint={`Non-tunai ${formatIDR(stats.nonCash)}`} />
      </div>

      <div className="h-64 rounded-xl border border-border bg-card p-4">
        <h3 className="mb-2 text-sm font-medium">Omzet per jam</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={stats.hourly}>
            <CartesianGrid stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }} interval={1} />
            <YAxis
              tickFormatter={(v) => `${Math.round(Number(v) / 1000)}rb`}
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
              width={40}
            />
            <Tooltip
              formatter={(v: number) => formatIDR(Number(v))}
              contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              labelStyle={{ color: "var(--color-muted-foreground)" }}
            />
            <Bar dataKey="Omzet" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="mb-3 text-sm font-medium">Total per metode bayar</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stats.payRows.map((row) => (
            <div key={row.name} className="rounded-lg bg-muted/50 px-3 py-3">
              <p className="text-xs text-muted-foreground">{row.name}</p>
              <p className="mt-1 font-mono text-sm tabular-nums">{formatIDR(row.value)}</p>
            </div>
          ))}
        </div>
        {stats.bills === 0 && (
          <p className="mt-3 text-center text-sm text-muted-foreground">Belum ada bill lunas hari ini.</p>
        )}
      </div>
    </div>
  );
}

function OmzetStat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 font-mono text-xl tabular-nums">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

