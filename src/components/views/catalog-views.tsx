import { useState } from "react";
import { toast } from "sonner";
import { ProductIcon } from "@/components/icon-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatIDR } from "@/lib/format";
import { usePos } from "@/lib/store";
import type { Staff } from "@/lib/types";
import { alertWaText, openWhatsApp, toWaPhone } from "@/lib/whatsapp";

export function ProductsView() {
  const products = usePos((s) => s.products);
  const recipes = usePos((s) => s.recipes);
  const upsert = usePos((s) => s.upsertProduct);
  const del = usePos((s) => s.deleteProduct);
  const setForm = usePos((s) => s.setProductFormOpen);
  const setEditing = usePos((s) => s.setEditingProduct);
  const [q, setQ] = useState("");
  const rows = products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.sku.toLowerCase().includes(q.toLowerCase()));
  const openEdit = (p: typeof products[0] | null) => {
    setEditing(p);
    setForm(true);
  };
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-medium">Manajemen Produk</h2>
          <p className="text-sm text-muted-foreground">Edit harga, stok, dan resep. Tidak mengubah struk historis.</p>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Cari menu / SKU" value={q} onChange={(e) => setQ(e.target.value)} className="w-48" />
          <Button onClick={() => openEdit(null)}>Tambah menu</Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-xs uppercase text-muted-foreground">
            <tr>
              {["Produk", "Kategori", "Harga", "COGS", "Resep", "Stok", "Status", ""].map((h) => (
                <th key={h} className="px-3 py-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => {
              const n = recipes.filter((r) => r.productId === p.id).length;
              return (
                <tr key={p.id} className="border-t border-border">
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <ProductIcon name={p.icon} className="size-4 text-primary" />
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="font-mono text-xs text-muted-foreground">{p.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2">{p.category}</td>
                  <td className="px-3 py-2 font-mono tabular-nums">{formatIDR(p.price)}</td>
                  <td className="px-3 py-2 font-mono tabular-nums text-muted-foreground">{formatIDR(p.cogs)}</td>
                  <td className="px-3 py-2">
                    <Badge tone={n ? "success" : "warning"}>{n ? `${n} bahan` : "Belum"}</Badge>
                  </td>
                  <td className="px-3 py-2 font-mono">{p.stock}</td>
                  <td className="px-3 py-2">
                    <button onClick={() => upsert({ ...p, available: !p.available })} className="text-left">
                      <Badge tone={p.available ? "success" : "muted"}>{p.available ? "Ready" : "Habis"}</Badge>
                    </button>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <div className="flex justify-end gap-1">
                      <Button size="sm" variant="secondary" onClick={() => openEdit(p)}>
                        Edit
                      </Button>
                      <Button size="sm" variant="ghost" className="text-destructive" onClick={() => del(p.id)}>
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function InventoryView() {
  const inventory = usePos((s) => s.inventory);
  const recipes = usePos((s) => s.recipes);
  const products = usePos((s) => s.products);
  const adjust = usePos((s) => s.adjustStock);
  const addIngredient = usePos((s) => s.addIngredient);
  const [form, setForm] = useState({ name: "", sku: "", stock: 0, minStock: 1, unit: "kg", cost: 0 });
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <div>
        <h2 className="font-display text-xl font-medium">Inventory & Resep</h2>
        <p className="text-sm text-muted-foreground">
          Saat Charge, stok bahan terpotong sesuai resep menu. Edit resep di Produk → Edit.
        </p>
      </div>
      <form
        className="grid gap-2 rounded-xl border border-border bg-card p-4 sm:grid-cols-6"
        onSubmit={(e) => {
          e.preventDefault();
          if (!form.name) return;
          addIngredient({
            id: `inv-${Date.now().toString(36)}`,
            name: form.name,
            sku: form.sku || `ING-${inventory.length + 1}`,
            stock: form.stock,
            minStock: form.minStock,
            unit: form.unit,
            cost: form.cost,
          });
          setForm({ name: "", sku: "", stock: 0, minStock: 1, unit: "kg", cost: 0 });
        }}
      >
        <Input placeholder="Nama bahan" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input placeholder="SKU" value={form.sku} onChange={(e) => setForm({ ...form, sku: e.target.value })} />
        <Input type="number" placeholder="Stok" value={form.stock || ""} onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })} />
        <Input placeholder="Satuan" value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })} />
        <Input type="number" placeholder="HPP" value={form.cost || ""} onChange={(e) => setForm({ ...form, cost: Number(e.target.value) })} />
        <Button type="submit">Tambah bahan</Button>
      </form>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-xs uppercase text-muted-foreground">
            <tr>
              {["Bahan", "SKU", "Stok", "Min", "Satuan", "HPP", "Dipakai menu", "Status"].map((h) => (
                <th key={h} className="px-3 py-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inventory.map((i) => {
              const low = i.stock <= i.minStock;
              const used = recipes.filter((r) => r.ingredientId === i.id);
              const names = used
                .map((r) => products.find((p) => p.id === r.productId)?.name)
                .filter(Boolean)
                .slice(0, 3);
              return (
                <tr key={i.id} className="border-t border-border">
                  <td className="px-3 py-2 font-medium">{i.name}</td>
                  <td className="px-3 py-2 font-mono text-xs">{i.sku}</td>
                  <td className="px-3 py-2">
                    <Input
                      type="number"
                      step="0.1"
                      className="h-8 w-24 font-mono"
                      defaultValue={i.stock}
                      onBlur={(e) => adjust(i.id, Number(e.target.value))}
                    />
                  </td>
                  <td className="px-3 py-2 font-mono">{i.minStock}</td>
                  <td className="px-3 py-2">{i.unit}</td>
                  <td className="px-3 py-2 font-mono">{formatIDR(i.cost)}</td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">
                    {used.length ? `${used.length} · ${names.join(", ")}` : "—"}
                  </td>
                  <td className="px-3 py-2">
                    <Badge tone={low ? "danger" : "success"}>{low ? "Alert" : "Aman"}</Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function StaffView() {
  const staff = usePos((s) => s.staff);
  const addStaff = usePos((s) => s.addStaff);
  const updateStaff = usePos((s) => s.updateStaff);
  const audit = usePos((s) => s.audit);
  const setAdminPin = usePos((s) => s.setAdminPin);
  const waOwner = usePos((s) => s.waOwner);
  const waKitchen = usePos((s) => s.waKitchen);
  const setWaOwner = usePos((s) => s.setWaOwner);
  const setWaKitchen = usePos((s) => s.setWaKitchen);
  const [form, setForm] = useState({ id: "", name: "", role: "Barista", pin: "1234", access: "Kasir Only" as Staff["access"] });
  const [pin, setPin] = useState("");
  const [ownerPhone, setOwnerPhone] = useState(waOwner);
  const [kitchenPhone, setKitchenPhone] = useState(waKitchen);
  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      <h2 className="font-display text-xl font-medium">Akun Staf & Audit</h2>
      <div className="grid gap-4 lg:grid-cols-3">
        <form
          className="space-y-2 rounded-xl border border-border bg-card p-4"
          onSubmit={(e) => {
            e.preventDefault();
            addStaff({ ...form, id: form.id || form.name.toLowerCase(), active: true });
          }}
        >
          <p className="text-sm font-medium">Akun baru</p>
          <Input placeholder="ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
          <Input placeholder="Nama" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input placeholder="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
          <Input placeholder="PIN" maxLength={4} value={form.pin} onChange={(e) => setForm({ ...form, pin: e.target.value })} />
          <select
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            value={form.access}
            onChange={(e) => setForm({ ...form, access: e.target.value as Staff["access"] })}
          >
            <option>Kasir Only</option>
            <option>Full Admin</option>
          </select>
          <Button type="submit" className="w-full">
            Simpan staf
          </Button>
          <div className="border-t border-border pt-3">
            <p className="mb-2 text-xs text-muted-foreground">Ganti PIN owner</p>
            <div className="flex gap-2">
              <Input maxLength={4} placeholder="PIN baru" value={pin} onChange={(e) => setPin(e.target.value)} />
              <Button type="button" variant="secondary" onClick={() => pin.length === 4 && setAdminPin(pin)}>
                Set
              </Button>
            </div>
          </div>
          <div className="border-t border-border pt-3 space-y-2">
            <p className="text-xs text-muted-foreground">WhatsApp notifikasi</p>
            <Input
              placeholder="WA owner 08…"
              value={ownerPhone}
              onChange={(e) => setOwnerPhone(e.target.value)}
            />
            <Input
              placeholder="WA dapur (opsional)"
              value={kitchenPhone}
              onChange={(e) => setKitchenPhone(e.target.value)}
            />
            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={() => {
                if (ownerPhone && !toWaPhone(ownerPhone)) {
                  toast.error("Nomor owner tidak valid.");
                  return;
                }
                if (kitchenPhone && !toWaPhone(kitchenPhone)) {
                  toast.error("Nomor dapur tidak valid.");
                  return;
                }
                setWaOwner(ownerPhone);
                setWaKitchen(kitchenPhone);
                toast.success("Nomor WhatsApp disimpan.");
              }}
            >
              Simpan nomor WA
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                if (!openWhatsApp(ownerPhone || waOwner, alertWaText("Tes notifikasi", "HVEN Space POS terhubung."))) {
                  toast.error("Isi nomor owner yang valid dulu.");
                }
              }}
            >
              Tes kirim ke WA
            </Button>
          </div>
        </form>
        <div className="lg:col-span-2 space-y-4">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted text-xs uppercase text-muted-foreground">
                <tr>
                  {["ID", "Nama", "Role", "Akses", "Aktif"].map((h) => (
                    <th key={h} className="px-3 py-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {staff.map((s) => (
                  <tr key={s.id} className="border-t border-border">
                    <td className="px-3 py-2 font-mono text-xs">{s.id}</td>
                    <td className="px-3 py-2">{s.name}</td>
                    <td className="px-3 py-2">{s.role}</td>
                    <td className="px-3 py-2">{s.access}</td>
                    <td className="px-3 py-2">
                      <Button size="sm" variant="ghost" onClick={() => updateStaff({ ...s, active: !s.active })}>
                        <Badge tone={s.active ? "success" : "muted"}>{s.active ? "Aktif" : "Nonaktif"}</Badge>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="mb-2 text-sm font-medium">Audit log</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {audit.map((a) => (
                <li key={a.id} className="flex justify-between gap-2">
                  <span>
                    {a.actor} — {a.action}
                  </span>
                  <span className="font-mono text-xs">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
