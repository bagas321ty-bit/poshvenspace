import { Minus, Plus, Tag, Trash2 } from "lucide-react";
import { useState } from "react";
import { ProductIcon } from "@/components/icon-map";
import { DiscountModal } from "@/components/modals";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatIDR } from "@/lib/format";
import { usePos } from "@/lib/store";
import type { OrderType, Product } from "@/lib/types";
import { cn } from "@/lib/utils";

const TYPES: OrderType[] = ["Dine In", "Takeaway", "Delivery"];

export function PosView() {
  const products = usePos((s) => s.products);
  const category = usePos((s) => s.category);
  const setCategory = usePos((s) => s.setCategory);
  const search = usePos((s) => s.search);
  const availableOnly = usePos((s) => s.availableOnly);
  const setAvailableOnly = usePos((s) => s.setAvailableOnly);
  const addToCart = usePos((s) => s.addToCart);
  const setProductModal = usePos((s) => s.setProductModal);
  const cart = usePos((s) => s.cart);
  const changeQty = usePos((s) => s.changeQty);
  const removeCart = usePos((s) => s.removeCart);
  const clearCart = usePos((s) => s.clearCart);
  const orderType = usePos((s) => s.orderType);
  const setOrderType = usePos((s) => s.setOrderType);
  const table = usePos((s) => s.table);
  const setTable = usePos((s) => s.setTable);
  const customer = usePos((s) => s.customer);
  const setCustomer = usePos((s) => s.setCustomer);
  const totals = usePos((s) => s.totals)();
  const setPaymentOpen = usePos((s) => s.setPaymentOpen);
  const discountLabel = usePos((s) => s.discountLabel);
  const taxEnabled = usePos((s) => s.taxEnabled);
  const serviceEnabled = usePos((s) => s.serviceEnabled);
  const setTaxEnabled = usePos((s) => s.setTaxEnabled);
  const setServiceEnabled = usePos((s) => s.setServiceEnabled);
  const [disc, setDisc] = useState(false);

  const cats = ["Semua", ...Array.from(new Set(products.map((p) => p.category)))];
  const filtered = products.filter((p) => {
    if (category !== "Semua" && p.category !== category) return false;
    if (availableOnly && (!p.available || p.stock <= 0)) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.sku.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <section className="order-1 flex min-h-0 min-w-0 flex-1 flex-col border-b border-border lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-2 overflow-x-auto border-b border-border px-3 py-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium",
                category === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
              )}
            >
              {c}
            </button>
          ))}
          <label className="ml-auto flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
            <input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} />
            Ready
          </label>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          {filtered.length === 0 && (
            <p className="py-16 text-center text-sm text-muted-foreground">Menu tidak ditemukan</p>
          )}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} onMod={() => setProductModal(p)} />
            ))}
          </div>
        </div>
      </section>

      <aside className="order-2 flex max-h-[48%] min-h-56 w-full flex-col bg-card lg:h-full lg:max-h-none lg:w-[22rem] xl:w-96">
        <div className="space-y-2 border-b border-border p-3">
          <div className="grid grid-cols-3 gap-1">
            {TYPES.map((t) => (
              <Button key={t} size="sm" variant={orderType === t ? "default" : "secondary"} onClick={() => setOrderType(t)}>
                {t}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Input value={table} onChange={(e) => setTable(e.target.value)} disabled={orderType !== "Dine In"} placeholder="Meja" />
            <Input className="col-span-2" placeholder="Nama tamu" value={customer} onChange={(e) => setCustomer(e.target.value)} />
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          {cart.length === 0 && (
            <p className="py-10 text-center text-sm text-muted-foreground">Keranjang kosong. Ketuk menu di kiri.</p>
          )}
          <ul className="space-y-2">
            {cart.map((item) => {
              const add = item.addons.reduce((s, a) => s + a.price, 0);
              return (
                <li key={item.key} className="rounded-md border border-border bg-muted/40 p-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{item.name}</p>
                      {item.addons.length > 0 && (
                        <p className="text-xs text-muted-foreground">{item.addons.map((a) => a.name).join(", ")}</p>
                      )}
                      {item.note && <p className="text-xs text-primary">{item.note}</p>}
                    </div>
                    <button onClick={() => removeCart(item.key)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Button size="icon-sm" variant="secondary" onClick={() => changeQty(item.key, -1)}>
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-6 text-center font-mono text-sm tabular-nums">{item.qty}</span>
                      <Button size="icon-sm" variant="secondary" onClick={() => changeQty(item.key, 1)}>
                        <Plus className="size-3" />
                      </Button>
                    </div>
                    <span className="font-mono text-sm tabular-nums">{formatIDR((item.price + add) * item.qty)}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="space-y-2 border-t border-border p-3">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Subtotal ({totals.qty})</span>
            <span className="font-mono tabular-nums text-foreground">{formatIDR(totals.subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <button className="flex items-center gap-1 text-primary" onClick={() => cart.length && setDisc(true)}>
              <Tag className="size-3.5" /> {discountLabel || "Diskon bill"}
            </button>
            <span className="font-mono text-success tabular-nums">-{formatIDR(totals.discount)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <button
              className="text-left text-muted-foreground hover:text-foreground"
              onClick={() => setServiceEnabled(!serviceEnabled)}
            >
              Service 5% {serviceEnabled ? "" : "· off"}
            </button>
            <span className="font-mono tabular-nums">{formatIDR(totals.service)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <button
              className="text-left text-muted-foreground hover:text-foreground"
              onClick={() => setTaxEnabled(!taxEnabled, taxEnabled ? "Dibebaskan kasir" : "")}
            >
              {taxEnabled ? "PB1 10%" : "PB1 dibebaskan"}
            </button>
            <span className="font-mono tabular-nums">{formatIDR(totals.tax)}</span>
          </div>
          <div className="flex items-baseline justify-between border-t border-border pt-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Total</span>
            <span className="font-display text-xl font-medium tabular-nums text-primary">{formatIDR(totals.total)}</span>
          </div>
          <div className="grid grid-cols-6 gap-2">
            <Button variant="secondary" className="col-span-1 text-destructive" onClick={clearCart} aria-label="Kosongkan">
              <Trash2 className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="col-span-2"
              disabled={cart.length === 0}
              onClick={() => setDisc(true)}
            >
              <Tag className="size-4" /> Diskon
            </Button>
            <Button className="col-span-3" size="lg" disabled={cart.length === 0} onClick={() => setPaymentOpen(true)}>
              Charge {formatIDR(totals.total)}
            </Button>
          </div>
        </div>
      </aside>
      <DiscountModal open={disc} onOpenChange={setDisc} />
    </div>
  );
}

function ProductCard({ product, onAdd, onMod }: { product: Product; onAdd: () => void; onMod: () => void }) {
  const disabled = !product.available || product.stock <= 0;
  return (
    <button
      disabled={disabled}
      onClick={onAdd}
      onContextMenu={(e) => {
        e.preventDefault();
        if (!disabled) onMod();
      }}
      className={cn(
        "flex flex-col rounded-lg border border-border bg-card p-3 text-left transition-colors hover:border-primary/50",
        disabled && "opacity-40",
      )}
    >
      <div className="mb-2 flex items-start justify-between">
        <span className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
          <ProductIcon name={product.icon} className="size-4" />
        </span>
        {product.quadrant === "Star" && <Badge tone="primary">Star</Badge>}
      </div>
      <p className="line-clamp-2 min-h-10 text-sm font-medium">{product.name}</p>
      <p className="mt-1 font-mono text-sm tabular-nums text-primary">{formatIDR(product.price)}</p>
      <p className="text-xs text-muted-foreground">Stok {product.stock}</p>
    </button>
  );
}
