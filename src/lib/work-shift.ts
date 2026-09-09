import { minutesJakarta } from "@/lib/format";
import type { WorkShift } from "@/lib/types";

/** Sanksi otomatis tiap clock-in terlambat. */
export const LATE_FINE = 10_000;

export function parseHm(hm: string): number {
  const [h, m] = hm.split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
}

export function formatHm(hm: string): string {
  const [h, m] = hm.split(":");
  return `${h}.${m}`;
}

export function shiftRangeLabel(shift: WorkShift): string {
  return `${formatHm(shift.absenFrom)}–${shift.absenTo === "00:00" ? "00.00" : formatHm(shift.absenTo)}`;
}

export function workRangeLabel(shift: WorkShift): string {
  return `${formatHm(shift.workStart)}–${formatHm(shift.workEnd)}`;
}

/** Inclusive start, exclusive end. `00:00` as end means until midnight (23:59). */
export function inAbsenWindow(iso: string, shift: WorkShift): boolean {
  const t = minutesJakarta(iso);
  const from = parseHm(shift.absenFrom);
  const to = parseHm(shift.absenTo);
  if (to === 0) return t >= from;
  if (to <= from) return t >= from || t < to;
  return t >= from && t < to;
}

export function detectWorkShift(iso: string, shifts: WorkShift[]): WorkShift | null {
  const pagi = shifts.find((s) => s.id === "pagi");
  const malam = shifts.find((s) => s.id === "malam");
  if (pagi && inAbsenWindow(iso, pagi)) return pagi;
  if (malam && inAbsenWindow(iso, malam)) return malam;
  return shifts.find((s) => inAbsenWindow(iso, s)) ?? null;
}

/** Telat 1 menit setelah jam kerja mulai. */
export function isLateClockIn(iso: string, shift: WorkShift): boolean {
  return minutesJakarta(iso) > parseHm(shift.workStart);
}

/** Clock-in 00.00–01.59 tanpa tiket malam terbuka = korupsi waktu. */
export function isNightCorruptAttempt(iso: string): boolean {
  return minutesJakarta(iso) < 2 * 60;
}

export function inferShiftId(iso: string, shifts: WorkShift[]): string {
  return detectWorkShift(iso, shifts)?.id ?? "pagi";
}
