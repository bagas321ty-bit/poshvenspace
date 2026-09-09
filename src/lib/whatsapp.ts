import { formatIDR, formatTimeID } from "@/lib/format";
import type { Order } from "@/lib/types";

export function toWaPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  let n = digits;
  if (n.startsWith("0")) n = `62${n.slice(1)}`;
  else if (n.startsWith("8")) n = `62${n}`;
  if (!n.startsWith("62") || n.length < 11 || n.length > 15) return null;
  return n;
}

export function openWhatsApp(phone: string, text: string): boolean {
  const n = toWaPhone(phone);
  if (!n || typeof window === "undefined") return false;
  window.open(`https://wa.me/${n}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  return true;
}

export function receiptWaText(order: Order): string {
  const items = order.items.map((i) => `• ${i.qty}× ${i.name}`).join("\n");
  return [
    "HVEN Space",
    order.number,
    formatTimeID(order.createdAt),
    `${order.type}${order.table !== "-" ? ` · meja ${order.table}` : ""}`,
    items,
    `Total ${formatIDR(order.total)}`,
    order.payment,
    "Terima kasih.",
  ].join("\n");
}

export function alertWaText(title: string, message: string): string {
  return `HVEN Space\n${title}\n${message}`;
}
