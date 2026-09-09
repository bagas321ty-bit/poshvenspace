import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EXECUTIVE } from "@/data/seed";
import { formatDateID, formatIDR, formatIDRCompact, formatPct, todayISO } from "@/lib/format";
import { usePos } from "@/lib/store";
import { DAILY_TARGET, MONTHLY_TARGET, type Quadrant } from "@/lib/types";

function Kpi({ label, value, hint, tone }: { label: string; value: string; hint?: string; tone?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={`mt-1 font-mono text-xl tabular-nums ${tone ?? "text-foreground"}`}>{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function TargetView() {
  const products = usePos((s) => s.products);
  const dailySales = usePos((s) => s.dailySales);
  const mtd = EXECUTIVE.mtdOmzet;
  const pct = mtd / MONTHLY_TARGET;
  const remain = MONTHLY_TARGET - mtd;
  const today = dailySales.find((d) => d.date === "2026-09-09")?.omzet ?? 0;
  const stars = products.filter((p) => p.quadrant === "Star").slice(0, 8);
  const horses = products.filter((p) => p.quadrant === "Workhorse").slice(0, 8);
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <h2 className="font-display text-xl font-medium">Dashboard Target Rp 60 Juta</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Kpi label="Target bulanan" value={formatIDR(MONTHLY_TARGET)} hint="Siklus cut-off 7–6" tone="text-primary" />
        <Kpi label="Realisasi MTD" value={formatIDR(mtd)} hint="Periode berjalan" tone="text-success" />
        <Kpi label="Capaian" value={formatPct(pct, 2)} hint={`${formatIDR(remain)} sisa`} />
        <Kpi label="Omzet hari ini" value={formatIDR(today)} hint={`Target harian ${formatIDR(DAILY_TARGET)}`} tone={today >= DAILY_TARGET ? "text-success" : "text-destructive"} />
        <Kpi label="Porsi MTD" value={`${EXECUTIVE.mtdCups} cup`} />
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-primary" style={{ width: `${Math.min(100, pct * 100)}%` }} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-medium">Misi upselling (Star)</h3>
          <ul className="space-y-2">
            {stars.map((p) => (
              <li key={p.id} className="flex justify-between rounded-md bg-muted/50 px-3 py-2 text-sm">
                <span>{p.name}</span>
                <span className="font-mono text-success">{formatPct(p.margin)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-medium">Pantauan takaran (Workhorse)</h3>
          <ul className="space-y-2">
            {horses.map((p) => (
              <li key={p.id} className="flex justify-between rounded-md bg-muted/50 px-3 py-2 text-sm">
                <span>{p.name}</span>
                <span className="text-xs text-muted-foreground">{p.soldQty} porsi</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function DashboardView() {
  const weekly = usePos((s) => s.weekly);
  const dailySales = usePos((s) => s.dailySales);
  const dailyBooks = usePos((s) => s.dailyBooks);
  const expenses = usePos((s) => s.expenses);
  const incomes = usePos((s) => s.incomes);
  const orders = usePos((s) => s.orders);
  const incidents = usePos((s) => s.incidents);
  const attendance = usePos((s) => s.attendance);
  const inventory = usePos((s) => s.inventory);
  const products = usePos((s) => s.products);
  const adjustLogs = usePos((s) => s.adjustLogs);
  const tutupBuku = usePos((s) => s.tutupBuku);
  const staff = usePos((s) => s.staff);
  const today = todayISO();
  const e = EXECUTIVE;

  const f = useMemo(() => {
    const paid = orders.filter((o) => o.status === "paid");
    const omzetStruk = paid.reduce((s, o) => s + o.total, 0);
    const omzetBuku = dailySales.reduce((s, d) => s + d.omzet, 0);
    const omzetToday = dailySales.find((d) => d.date === today)?.omzet ?? 0;
    const salesFrom = dailySales[0]?.date ?? today;
    const salesTo = dailySales[dailySales.length - 1]?.date ?? today;
    const expenseTotal = expenses.reduce((s, x) => s + x.amount, 0);
    const incomeOther = incomes.reduce((s, x) => s + x.amount, 0);
    const prive = expenses.filter((x) => x.category.toLowerCase() === "prive").reduce((s, x) => s + x.amount, 0);
    const cogsBooks = dailyBooks.reduce((s, d) => s + d.cogs, 0);
    const cogs = cogsBooks || Math.round(omzetBuku * e.cogsRatio);
    const discount = paid.reduce((s, o) => s + (o.discount || 0), 0);
    const tax = paid.reduce((s, o) => s + (o.tax || 0), 0);
    const activeInc = incidents.filter((i) => i.status !== "Dibatalkan");
    const lateFine = activeInc.filter((i) => i.category === "Keterlambatan").reduce((s, i) => s + i.loss, 0);
    const incidentLoss = activeInc.reduce((s, i) => s + i.loss, 0);
    const labaKas = omzetBuku + incomeOther - expenseTotal;
    const byExp = new Map<string, number>();
    expenses.forEach((x) => byExp.set(x.category, (byExp.get(x.category) ?? 0) + x.amount));
    const expCat = [...byExp.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
    const dayMap = new Map<string, { omzet: number; keluar: number }>();
    dailySales.forEach((d) => dayMap.set(d.date, { omzet: d.omzet, keluar: 0 }));
    expenses.forEach((x) => {
      const row = dayMap.get(x.date) ?? { omzet: 0, keluar: 0 };
      row.keluar += x.amount;
      dayMap.set(x.date, row);
    });
    const days = [...dayMap.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .slice(-10)
      .map(([date, v]) => ({
        name: formatDateID(date).replace(/ 2026/, ""),
        Omzet: v.omzet,
        Keluar: v.keluar,
      }));
    const validAtt = attendance.filter((a) => a.valid !== false);
    const lateAtt = validAtt.filter((a) => a.status === "Terlambat");
    const corrupt = attendance.filter((a) => a.status === "Korupsi Waktu");
    const lowStock = inventory.filter((i) => i.stock <= i.minStock);
    const nameOf = (id: string) => staff.find((s) => s.id === id)?.name ?? id;
    return {
      omzetStruk,
      omzetBuku,
      omzetToday,
      salesFrom,
      salesTo,
      salesDays: dailySales.length,
      expenseTotal,
      incomeOther,
      prive,
      cogs,
      discount,
      tax,
      lateFine,
      incidentLoss,
      labaKas,
      expCat,
      days,
      paidCount: paid.length,
      lateAtt: lateAtt.length,
      corrupt: corrupt.length,
      hadir: validAtt.length,
      lowStock,
      openBooks: tutupBuku.filter((t) => t.status !== "Selesai").length,
      discLogs: adjustLogs.filter((a) => a.kind === "discount" && !a.historic).length,
      stars: products.filter((p) => p.quadrant === "Star").length,
      recentInc: activeInc.slice(0, 5).map((i) => ({ ...i, staffName: nameOf(i.staff) })),
      recentExp: [...expenses].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5),
      incidentCount: activeInc.length,
    };
  }, [
    orders,
    dailySales,
    dailyBooks,
    expenses,
    incomes,
    incidents,
    attendance,
    inventory,
    products,
    adjustLogs,
    tutupBuku,
    staff,
    today,
    e.cogsRatio,
  ]);

  const notes: string[] = [];
  if (e.freeCash < 0) notes.push(`Kas bebas ${formatIDR(e.freeCash)} — tunda prive sampai stok & gaji tercover.`);
  else notes.push(`Kas bebas ${formatIDR(e.freeCash)} — penarikan prive masih longgar.`);
  notes.push(
    f.omzetToday >= DAILY_TARGET
      ? `Omzet hari operasional ini ${formatIDR(f.omzetToday)} sudah di atas target harian.`
      : `Omzet hari ini ${formatIDR(f.omzetToday)} dari target ${formatIDR(DAILY_TARGET)}.`,
  );
  notes.push(
    `Struk POS ${formatIDR(f.omzetStruk)} (${f.paidCount} tiket). Log harian ${formatIDR(f.omzetBuku)} (${formatDateID(f.salesFrom)}–${formatDateID(f.salesTo)}, ${f.salesDays} hari) + non-kasir ${formatIDR(f.incomeOther)} − pengeluaran ${formatIDR(f.expenseTotal)} = laba kas ${formatIDR(f.labaKas)}.`,
  );
  if (f.lateFine > 0) notes.push(`Sanksi telat terkumpul ${formatIDR(f.lateFine)} (${f.lateAtt} clock-in).`);
  if (f.lowStock.length) notes.push(`${f.lowStock.length} bahan di bawah stok minimum.`);
  if (f.openBooks) notes.push(`${f.openBooks} periode tutup buku masih terbuka.`);
  const liquidity = e.freeCash < 0 ? "Tunda penarikan" : "Aman ditarik";
  const weekData = weekly.map((w) => ({
    name: w.week.replace("2026-", ""),
    Omzet: w.income,
    Pengeluaran: w.expense,
    COGS: w.cogs,
  }));

  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div>
        <h2 className="font-display text-xl font-medium">Dashboard Owner</h2>
        <p className="text-sm text-muted-foreground">Terkunci PIN. Ringkasan log — tanpa layar kasir. Finance diutamakan.</p>
      </div>

      <section className="space-y-3">
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Finance</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi
            label="Omzet struk POS"
            value={formatIDRCompact(f.omzetStruk)}
            hint={`${f.paidCount} tiket 8–9 Sep + transaksi baru`}
          />
          <Kpi
            label="Omzet log harian"
            value={formatIDRCompact(f.omzetBuku)}
            hint={`${formatDateID(f.salesFrom)} – ${formatDateID(f.salesTo)} · ${f.salesDays} hari`}
          />
          <Kpi label="Pemasukan non-kasir" value={formatIDRCompact(f.incomeOther)} hint="Sewa / event" tone="text-success" />
          <Kpi label="Pengeluaran" value={formatIDRCompact(f.expenseTotal)} hint={`Prive ${formatIDR(f.prive)}`} tone="text-destructive" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi
            label="Laba kas"
            value={formatIDRCompact(f.labaKas)}
            hint="Log harian + non-kasir − keluar"
            tone={f.labaKas >= 0 ? "text-success" : "text-destructive"}
          />
          <Kpi label="Omzet hari ini" value={formatIDR(f.omzetToday)} hint={`Target ${formatIDR(DAILY_TARGET)}`} tone={f.omzetToday >= DAILY_TARGET ? "text-success" : "text-destructive"} />
          <Kpi label="Akumulasi omzet" value={formatIDRCompact(e.totalOmzet)} hint="YTD spreadsheet" />
          <Kpi label="Kas bebas" value={formatIDRCompact(e.freeCash)} tone="text-destructive" hint={liquidity} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi label="Laba operasional YTD" value={formatIDRCompact(e.netProfit)} tone="text-success" />
          <Kpi label="Prive diambil" value={formatIDRCompact(e.priveTaken)} />
          <Kpi label="COGS (buku)" value={formatIDRCompact(f.cogs)} hint={`Rasio ${formatPct(e.cogsRatio)}`} />
          <Kpi label="Diskon diberikan" value={formatIDRCompact(f.discount)} hint={`${f.discLogs} log baru`} />
          <Kpi label="PB1 tertagih" value={formatIDRCompact(f.tax)} />
          <Kpi label="Denda keterlambatan" value={formatIDRCompact(f.lateFine)} hint="Potong gaji Rp 10.000 / telat" />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <RatioCard title="COGS ratio" value={e.cogsRatio} bench="28–35%" status="Aman" note="HPP terkendali di bawah 35%" />
          <RatioCard title="Labor ratio" value={e.laborRatio} bench="15–20%" status="Ideal" note="Beban gaji proporsional" />
          <RatioCard
            title="Net profit margin"
            value={e.netMargin}
            bench="20–35%"
            status="Sehat"
            note="Ruang prive ketat karena kas bebas negatif"
          />
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-2 text-sm font-medium">Kesimpulan finance</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {notes.map((n) => (
              <li key={n} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {n}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="h-64 rounded-xl border border-border bg-card p-4">
            <h3 className="mb-2 text-sm font-medium">Omzet vs pengeluaran harian</h3>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={f.days}>
                <CartesianGrid stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }} />
                <YAxis tickFormatter={(v) => `${(v / 1e6).toFixed(1)}jt`} tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }} />
                <Tooltip formatter={(v: number) => formatIDR(v)} contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }} />
                <Bar dataKey="Omzet" fill="var(--color-primary)" radius={4} />
                <Bar dataKey="Keluar" fill="var(--color-destructive)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="h-64 rounded-xl border border-border bg-card p-4">
            <h3 className="mb-2 text-sm font-medium">Omzet vs beban mingguan</h3>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={weekData}>
                <CartesianGrid stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }} />
                <YAxis tickFormatter={(v) => `${(v / 1e6).toFixed(0)}jt`} tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }} />
                <Tooltip formatter={(v: number) => formatIDR(v)} contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }} />
                <Bar dataKey="Omzet" fill="var(--color-primary)" radius={4} />
                <Bar dataKey="Pengeluaran" fill="var(--color-destructive)" radius={4} />
                <Bar dataKey="COGS" fill="var(--color-muted-foreground)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-medium">Owner drawing</h3>
            <ul className="space-y-2 text-sm">
              <Row k="Kas masuk omzet" v={formatIDR(e.totalOmzet)} />
              <Row k="Cadangan belanja bahan" v={formatIDR(e.stockReserve)} />
              <Row k="Cadangan gaji berikutnya" v={formatIDR(e.payrollReserve)} />
              <Row k="Prive sudah ditarik" v={formatIDR(e.priveTaken)} />
              <Row k="Sisa kas bebas" v={formatIDR(e.freeCash)} />
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-medium">Pengeluaran per kategori</h3>
            <ul className="space-y-2 text-sm">
              {f.expCat.map(([k, v]) => (
                <Row key={k} k={k} v={formatIDR(v)} />
              ))}
              {f.expCat.length === 0 && <li className="text-muted-foreground">Belum ada pengeluaran.</li>}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Kesimpulan log lain</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi label="Absensi valid" value={`${f.hadir}`} hint={`${f.lateAtt} telat · ${f.corrupt} korupsi waktu`} />
          <Kpi label="Insiden aktif" value={`${f.incidentCount}`} hint={`Kerugian ${formatIDR(f.incidentLoss)}`} />
          <Kpi label="Stok kritis" value={`${f.lowStock.length}`} hint="Bahan ≤ minimum" tone={f.lowStock.length ? "text-destructive" : "text-success"} />
          <Kpi label="Menu Star" value={`${f.stars}`} hint="Kuadran Kasavana" />
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-medium">Insiden terbaru</h3>
            {f.recentInc.length === 0 ? (
              <p className="text-sm text-muted-foreground">Belum ada insiden aktif.</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {f.recentInc.map((i) => (
                  <li key={i.id} className="flex justify-between gap-3 border-b border-border/60 py-1">
                    <span>
                      <span className="font-medium">{i.staffName}</span>
                      <span className="text-muted-foreground"> · {i.category}</span>
                      <span className="block text-xs text-muted-foreground">{i.action}</span>
                    </span>
                    <span className="shrink-0 font-mono text-xs tabular-nums text-destructive">{i.loss ? formatIDR(i.loss) : "—"}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-medium">Kas keluar terbaru</h3>
            <ul className="space-y-2 text-sm">
              {f.recentExp.map((x) => (
                <li key={x.id} className="flex justify-between gap-3 border-b border-border/60 py-1">
                  <span>
                    {x.desc}
                    <span className="block text-xs text-muted-foreground">
                      {formatDateID(x.date)} · {x.category}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-destructive">{formatIDR(x.amount)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {f.lowStock.length > 0 && (
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-medium">Bahan di bawah minimum</h3>
            <div className="flex flex-wrap gap-2">
              {f.lowStock.map((i) => (
                <Badge key={i.id} tone="danger">
                  {i.name} {i.stock}/{i.minStock} {i.unit}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function RatioCard({ title, value, bench, status, note }: { title: string; value: number; bench: string; status: string; note: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className="font-mono text-2xl tabular-nums">{formatPct(value)}</p>
      <p className="text-xs text-muted-foreground">Benchmark {bench}</p>
      <Badge tone="success" className="mt-2">
        {status}
      </Badge>
      <p className="mt-2 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex justify-between border-b border-border/60 py-1">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-mono tabular-nums">{v}</span>
    </li>
  );
}

export function ExpensesView() {
  const expenses = usePos((s) => s.expenses);
  const addExpense = usePos((s) => s.addExpense);
  const deleteExpense = usePos((s) => s.deleteExpense);
  const [form, setForm] = useState({ date: todayISO(), category: "Bahan Baku", desc: "", amount: 0 });
  const [day, setDay] = useState<"all" | "2026-09-08" | "2026-09-09">("all");
  const rows = day === "all" ? expenses : expenses.filter((e) => e.date === day);
  const total = rows.reduce((s, e) => s + e.amount, 0);
  const byCat = useMemo(() => {
    const m = new Map<string, number>();
    rows.forEach((e) => m.set(e.category, (m.get(e.category) ?? 0) + e.amount));
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [rows]);
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 className="font-display text-xl font-medium">Buku Kas Keluar</h2>
        <p className="font-mono text-sm text-destructive">Total {formatIDR(total)}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["all", "Semua"],
            ["2026-09-08", "8 Sep"],
            ["2026-09-09", "9 Sep"],
          ] as const
        ).map(([id, label]) => (
          <Button key={id} size="sm" variant={day === id ? "default" : "secondary"} onClick={() => setDay(id)}>
            {label}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {byCat.map(([c, n]) => (
          <Badge key={c} tone="muted">
            {c} {formatIDRCompact(n)}
          </Badge>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <form
          className="space-y-2 rounded-xl border border-border bg-card p-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.desc || form.amount <= 0) return;
            addExpense(form);
            setForm({ ...form, desc: "", amount: 0 });
          }}
        >
          <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <select
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {["Bahan Baku", "Gaji", "Operasional", "Operasional Sistem", "Pemasaran", "prive", "sub con", "Lain-lain"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <Input required placeholder="Keterangan" value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
          <Input type="number" required placeholder="Nominal" value={form.amount || ""} onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })} />
          <Button type="submit" className="w-full">
            Simpan pengeluaran
          </Button>
        </form>
        <div className="lg:col-span-2 max-h-[520px] overflow-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="sticky top-0 bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                {["Tanggal", "Kategori", "Keterangan", "Nominal", ""].map((h) => (
                  <th key={h} className="px-3 py-2">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((e) => (
                <tr key={e.id} className="border-t border-border">
                  <td className="px-3 py-2 font-mono text-xs">{formatDateID(e.date)}</td>
                  <td className="px-3 py-2">
                    <Badge>{e.category}</Badge>
                  </td>
                  <td className="px-3 py-2">{e.desc}</td>
                  <td className="px-3 py-2 text-right font-mono text-destructive tabular-nums">{formatIDR(e.amount)}</td>
                  <td className="px-3 py-2">
                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => deleteExpense(e.id)}>
                      Hapus
                    </Button>
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

export function IncomeView() {
  const incomes = usePos((s) => s.incomes);
  const addIncome = usePos((s) => s.addIncome);
  const [form, setForm] = useState({ date: todayISO(), category: "Sewa Tempat", desc: "", amount: 0, status: "Lunas" });
  const total = incomes.reduce((s, i) => s + i.amount, 0);
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div className="flex justify-between">
        <h2 className="font-display text-xl font-medium">Pemasukan</h2>
        <p className="font-mono text-success">{formatIDR(total)}</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <form
          className="space-y-2 rounded-xl border border-border bg-card p-4"
          onSubmit={(e) => {
            e.preventDefault();
            addIncome(form);
            setForm({ ...form, desc: "", amount: 0 });
          }}
        >
          <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <select
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {["Penjualan Kasir", "Sewa Tempat", "Kerjasama Event", "Lain-lain"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <Input required placeholder="Klien / keterangan" value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
          <Input type="number" required value={form.amount || ""} onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })} />
          <Button type="submit" className="w-full">
            Catat pemasukan
          </Button>
        </form>
        <div className="lg:col-span-2 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-xs uppercase text-muted-foreground">
              <tr>
                {["Tanggal", "Kategori", "Keterangan", "Nominal", "Status"].map((h) => (
                  <th key={h} className="px-3 py-2">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {incomes.map((i) => (
                <tr key={i.id} className="border-t border-border">
                  <td className="px-3 py-2 font-mono text-xs">{formatDateID(i.date)}</td>
                  <td className="px-3 py-2">{i.category}</td>
                  <td className="px-3 py-2">{i.desc}</td>
                  <td className="px-3 py-2 font-mono text-success tabular-nums">{formatIDR(i.amount)}</td>
                  <td className="px-3 py-2">
                    <Badge tone="success">{i.status}</Badge>
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

export function TutupBukuView() {
  const rows = usePos((s) => s.tutupBuku);
  const daily = usePos((s) => s.dailyBooks);
  const lockPeriod = usePos((s) => s.lockPeriod);
  const exportCsv = () => {
    const csv = ["Periode,Mulai,Selesai,Pendapatan,Pengeluaran,COGS,Laba,Status"]
      .concat(rows.map((r) => [r.period, r.startDate, r.endDate, r.income, r.expense, r.cogs, r.profit, r.status].join(",")))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "HVEN_Tutup_Buku.csv";
    a.click();
  };
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="font-display text-xl font-medium">Tutup Buku Siklus 7–6</h2>
          <p className="text-sm text-muted-foreground">Kunci periode setiap tanggal 7. Data harian dari spreadsheet ikut termigrasi.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportCsv}>
            Ekspor CSV
          </Button>
          <Button onClick={lockPeriod}>Kunci periode</Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-xs uppercase text-muted-foreground">
            <tr>
              {["Periode", "Rentang", "Pendapatan", "COGS", "Pengeluaran", "Laba", "Status", "PIC"].map((h) => (
                <th key={h} className="px-3 py-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.period} className="border-t border-border">
                <td className="px-3 py-2 font-mono">{r.period}</td>
                <td className="px-3 py-2 text-xs">
                  {r.startDate} → {r.endDate}
                </td>
                <td className="px-3 py-2 font-mono tabular-nums">{formatIDR(r.income)}</td>
                <td className="px-3 py-2 font-mono tabular-nums">{formatIDR(r.cogs)}</td>
                <td className="px-3 py-2 font-mono tabular-nums text-destructive">{formatIDR(r.expense)}</td>
                <td className={`px-3 py-2 font-mono tabular-nums ${r.profit >= 0 ? "text-success" : "text-destructive"}`}>
                  {formatIDR(r.profit)}
                </td>
                <td className="px-3 py-2">
                  <Badge tone={r.status === "Selesai" ? "success" : "warning"}>{r.status}</Badge>
                </td>
                <td className="px-3 py-2">{r.pic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-h-72 overflow-auto rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 bg-muted text-xs uppercase text-muted-foreground">
            <tr>
              {["Tanggal", "Pendapatan", "COGS", "Pengeluaran", "Laba"].map((h) => (
                <th key={h} className="px-3 py-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {daily.map((d) => (
              <tr key={d.date} className="border-t border-border">
                <td className="px-3 py-2 font-mono text-xs">{formatDateID(d.date)}</td>
                <td className="px-3 py-2 font-mono tabular-nums">{formatIDR(d.income)}</td>
                <td className="px-3 py-2 font-mono tabular-nums">{formatIDR(d.cogs)}</td>
                <td className="px-3 py-2 font-mono tabular-nums">{formatIDR(d.expense)}</td>
                <td className={`px-3 py-2 font-mono tabular-nums ${d.profit >= 0 ? "text-success" : "text-destructive"}`}>
                  {formatIDR(d.profit)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function MenuEngView() {
  const products = usePos((s) => s.products);
  const [filter, setFilter] = useState<"ALL" | Quadrant>("ALL");
  const rows = products.filter((p) => filter === "ALL" || p.quadrant === filter);
  const counts = {
    Star: products.filter((p) => p.quadrant === "Star").length,
    Workhorse: products.filter((p) => p.quadrant === "Workhorse").length,
    Puzzle: products.filter((p) => p.quadrant === "Puzzle").length,
    Dog: products.filter((p) => p.quadrant === "Dog").length,
  };
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="font-display text-xl font-medium">Menu Engineering</h2>
          <p className="text-sm text-muted-foreground">Matriks Kasavana & Smith dari penjualan aktual.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["ALL", "Star", "Workhorse", "Puzzle", "Dog"] as const).map((f) => (
            <Button key={f} size="sm" variant={filter === f ? "default" : "secondary"} onClick={() => setFilter(f)}>
              {f === "ALL" ? "Semua" : `${f} (${counts[f as Quadrant]})`}
            </Button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-xs uppercase text-muted-foreground">
            <tr>
              {["Menu", "Harga", "COGS", "Margin", "Qty", "Kuadran", "Rekomendasi"].map((h) => (
                <th key={h} className="px-3 py-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id} className="border-t border-border">
                <td className="px-3 py-2 font-medium">{p.name}</td>
                <td className="px-3 py-2 font-mono tabular-nums">{formatIDR(p.price)}</td>
                <td className="px-3 py-2 font-mono tabular-nums text-muted-foreground">{formatIDR(p.cogs)}</td>
                <td className="px-3 py-2 font-mono text-success tabular-nums">{formatPct(p.margin)}</td>
                <td className="px-3 py-2 font-mono">{p.soldQty}</td>
                <td className="px-3 py-2">
                  <Badge
                    tone={
                      p.quadrant === "Star" ? "primary" : p.quadrant === "Workhorse" ? "warning" : p.quadrant === "Puzzle" ? "muted" : "danger"
                    }
                  >
                    {p.quadrant}
                  </Badge>
                </td>
                <td className="px-3 py-2 text-xs text-muted-foreground">{p.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
