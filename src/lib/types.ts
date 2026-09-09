export type ViewId =
  | "pos"
  | "orders"
  | "omzet"
  | "adjust"
  | "attendance"
  | "kitchen"
  | "sewa"
  | "products"
  | "inventory"
  | "shift"
  | "incidents"
  | "staff"
  | "target"
  | "dashboard"
  | "expenses"
  | "income"
  | "tutupbuku"
  | "engineering";

export type Role = "cashier" | "owner";
export type OrderType = "Dine In" | "Takeaway" | "Delivery";
export type PaymentMethod = "Cash" | "QRIS" | "Debit" | "Transfer";
export type OrderStatus = "open" | "paid" | "void";
export type KdsStatus = "new" | "cooking" | "ready" | "done";
export type Quadrant = "Star" | "Workhorse" | "Puzzle" | "Dog";

export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  cogs: number;
  margin: number;
  stock: number;
  available: boolean;
  icon: string;
  soldQty: number;
  quadrant: Quadrant;
  recommendation: string;
  kitchen: boolean;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  price: number;
  cogs: number;
  qty: number;
  addons: Addon[];
  note: string;
  kitchen: boolean;
}

export interface Order {
  id: string;
  number: string;
  createdAt: string;
  type: OrderType;
  table: string;
  customer: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  discountLabel: string;
  tax: number;
  service?: number;
  taxExempt?: boolean;
  discountReason?: string;
  total: number;
  payment: PaymentMethod;
  tendered: number;
  change: number;
  status: OrderStatus;
  cashier: string;
  kdsStatus: KdsStatus;
}

export interface Expense {
  id: string;
  date: string;
  category: string;
  desc: string;
  amount: number;
}

export interface Income {
  id: string;
  date: string;
  category: string;
  desc: string;
  amount: number;
  status: string;
}

export interface Incident {
  id: string;
  date: string;
  staff: string;
  category: string;
  desc: string;
  action: string;
  loss: number;
  status: string;
  attendanceId?: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  pin: string;
  access: "Kasir Only" | "Full Admin";
  active: boolean;
}

export interface Attendance {
  id: string;
  staffId: string;
  staffName: string;
  date: string;
  clockIn: string;
  clockOut?: string;
  status: "Tepat Waktu" | "Terlambat" | "Pulang" | "Korupsi Waktu";
  note: string;
  photoIn?: string;
  photoOut?: string;
  valid?: boolean;
  voidReason?: string;
  voidedBy?: string;
  voidedAt?: string;
  shiftId?: string;
}

export interface WorkShift {
  id: string;
  name: string;
  workStart: string;
  workEnd: string;
  absenFrom: string;
  absenTo: string;
}

export interface ShiftChangeLog {
  id: string;
  createdAt: string;
  actor: string;
  summary: string;
}

export interface Ingredient {
  id: string;
  name: string;
  sku: string;
  stock: number;
  minStock: number;
  unit: string;
  cost: number;
}

export interface RecipeLine {
  productId: string;
  ingredientId: string;
  qty: number;
}

export interface ShiftState {
  open: boolean;
  openedAt: string;
  openingCash: number;
  cashSales: number;
  nonCashSales: number;
  cashier: string;
}

export interface NotificationItem {
  id: string;
  type: string;
  title: string;
  message: string;
  time: string;
}

export interface AuditLog {
  id: string;
  time: string;
  actor: string;
  action: string;
}

export interface TutupBuku {
  period: string;
  startDate: string;
  endDate: string;
  income: number;
  expense: number;
  cogs: number;
  profit: number;
  status: "Selesai" | "Dalam Proses";
  pic: string;
  note: string;
}

export interface DailySale {
  date: string;
  omzet: number;
}

export interface DailyBook {
  date: string;
  income: number;
  cogs: number;
  expense: number;
  profit: number;
}

export interface WeeklyRow {
  week: string;
  income: number;
  expense: number;
  cogs: number;
  profit: number;
}

export const RESTRICTED_VIEWS: ViewId[] = [
  "target",
  "dashboard",
  "expenses",
  "income",
  "tutupbuku",
  "engineering",
  "staff",
  "incidents",
];

export interface AdjustLog {
  id: string;
  createdAt: string;
  kind: "discount" | "tax" | "service";
  action: "apply" | "clear" | "exempt";
  orderId: string;
  orderNumber: string;
  amount: number;
  rate?: number;
  label: string;
  reason: string;
  actor: string;
  historic: boolean;
}

export const TAX_RATE = 0.1;
export const SERVICE_RATE = 0.05;
export const MONTHLY_TARGET = 60_000_000;
export const DAILY_TARGET = 2_000_000;

export const DISCOUNT_PRESETS = [
  { id: "p5", label: "Promo 5%", pct: 5, reason: "Promo harian" },
  { id: "p10", label: "Member 10%", pct: 10, reason: "Member" },
  { id: "p15", label: "Event 15%", pct: 15, reason: "Event / sewa gedung" },
  { id: "staff", label: "Staff 20%", pct: 20, reason: "Konsumsi staf" },
] as const;
