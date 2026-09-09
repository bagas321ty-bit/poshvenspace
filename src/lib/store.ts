import { create } from "zustand";
import { persist, createJSONStorage, type StateStorage } from "zustand/middleware";
import type {
  Addon,
  AdjustLog,
  Attendance,
  AuditLog,
  CartItem,
  DailyBook,
  DailySale,
  Expense,
  Income,
  Incident,
  Ingredient,
  KdsStatus,
  NotificationItem,
  Order,
  OrderType,
  PaymentMethod,
  Product,
  RecipeLine,
  Role,
  ShiftState,
  Staff,
  TutupBuku,
  ViewId,
  WeeklyRow,
  WorkShift,
  ShiftChangeLog,
} from "@/lib/types";
import { RESTRICTED_VIEWS, SERVICE_RATE, TAX_RATE } from "@/lib/types";
import {
  ADDONS,
  ADMIN_PIN,
  DAILY_BOOKS,
  DAILY_SALES,
  EXPENSES,
  INCOMES,
  INCIDENTS,
  INVENTORY,
  PRODUCTS,
  RECIPES,
  SAMPLE_ATTENDANCE,
  SAMPLE_ORDERS,
  STAFF,
  TUTUP_BUKU,
  WEEKLY,
  WORK_SHIFTS,
} from "@/data/seed";
import { formatIDR, formatTimeID, todayISO, uid } from "@/lib/format";
import { verifyVenueLogin, normalizeVenueEmail } from "@/lib/venue-auth";
import { detectWorkShift, inferShiftId, isLateClockIn, isNightCorruptAttempt, LATE_FINE } from "@/lib/work-shift";

const memoryStore: Record<string, string> = {};

/** localStorage throws in some embedded previews (cookie / 3rd-party iframe). */
const safeStorage: StateStorage = {
  getItem: (name) => {
    try {
      const value = globalThis.localStorage?.getItem(name);
      if (value != null) return value;
    } catch {
      /* blocked */
    }
    return memoryStore[name] ?? null;
  },
  setItem: (name, value) => {
    memoryStore[name] = value;
    try {
      globalThis.localStorage?.setItem(name, value);
    } catch {
      /* blocked — keep memory copy */
    }
  },
  removeItem: (name) => {
    delete memoryStore[name];
    try {
      globalThis.localStorage?.removeItem(name);
    } catch {
      /* blocked */
    }
  },
};

export interface AppState {
  hydrated: boolean;
  view: ViewId;
  pendingView: ViewId | null;
  pinOpen: boolean;
  role: Role;
  currentStaffId: string;
  adminPin: string;
  sidebarCollapsed: boolean;
  search: string;
  category: string;
  availableOnly: boolean;
  products: Product[];
  recipes: RecipeLine[];
  addons: Addon[];
  cart: CartItem[];
  orderType: OrderType;
  table: string;
  customer: string;
  discount: number;
  discountLabel: string;
  discountReason: string;
  taxEnabled: boolean;
  serviceEnabled: boolean;
  adjustLogs: AdjustLog[];
  orders: Order[];
  expenses: Expense[];
  incomes: Income[];
  incidents: Incident[];
  inventory: Ingredient[];
  staff: Staff[];
  attendance: Attendance[];
  shift: ShiftState;
  notifications: NotificationItem[];
  audit: AuditLog[];
  tutupBuku: TutupBuku[];
  dailySales: DailySale[];
  dailyBooks: DailyBook[];
  weekly: WeeklyRow[];
  lastReceipt: Order | null;
  paymentOpen: boolean;
  receiptOpen: boolean;
  productModal: Product | null;
  productFormOpen: boolean;
  editingProduct: Product | null;
  testPurge: string;
  sessionLoggedIn: boolean;
  sessionEmail: string;
  waOwner: string;
  waKitchen: string;
  workShifts: WorkShift[];
  shiftLogs: ShiftChangeLog[];

  setView: (view: ViewId) => void;
  purgeTestData: () => void;
  loginVenue: (email: string, password: string) => Promise<boolean>;
  logoutVenue: () => void;
  setWaOwner: (v: string) => void;
  setWaKitchen: (v: string) => void;
  confirmPin: (pin: string) => boolean;
  closePin: () => void;
  logoutOwner: () => void;
  switchStaff: (id: string) => void;
  toggleSidebar: () => void;
  setSearch: (q: string) => void;
  setCategory: (c: string) => void;
  setAvailableOnly: (v: boolean) => void;
  setOrderType: (t: OrderType) => void;
  setTable: (t: string) => void;
  setCustomer: (n: string) => void;
  addToCart: (product: Product, addons?: Addon[], note?: string) => void;
  changeQty: (key: string, delta: number) => void;
  removeCart: (key: string) => void;
  clearCart: () => void;
  setDiscount: (amount: number, label: string, reason?: string) => void;
  setTaxEnabled: (v: boolean, reason?: string) => void;
  setServiceEnabled: (v: boolean) => void;
  totals: () => { qty: number; subtotal: number; discount: number; service: number; tax: number; total: number };
  checkout: (method: PaymentMethod, tendered: number) => Order | null;
  voidOrder: (id: string) => void;
  setKds: (id: string, status: KdsStatus) => void;
  addExpense: (e: Omit<Expense, "id">) => void;
  deleteExpense: (id: string) => void;
  addIncome: (e: Omit<Income, "id">) => void;
  addIncident: (e: Omit<Incident, "id">) => void;
  upsertProduct: (p: Product) => void;
  deleteProduct: (id: string) => void;
  setProductRecipes: (productId: string, lines: RecipeLine[]) => void;
  addIngredient: (i: Ingredient) => void;
  setEditingProduct: (p: Product | null) => void;
  clock: (staffId: string, note: string, photo?: string) => string | null;
  setAttendanceValid: (id: string, valid: boolean, reason?: string) => boolean;
  updateWorkShifts: (next: WorkShift[]) => boolean;
  openShift: (cash: number) => void;
  closeShift: () => void;
  addStaff: (s: Staff) => void;
  updateStaff: (s: Staff) => void;
  setAdminPin: (pin: string) => void;
  adjustStock: (id: string, stock: number) => void;
  notify: (type: string, title: string, message: string) => void;
  lockPeriod: () => void;
  setPaymentOpen: (v: boolean) => void;
  setReceiptOpen: (v: boolean) => void;
  setProductModal: (p: Product | null) => void;
  setProductFormOpen: (v: boolean) => void;
}

function lineTotal(item: CartItem): number {
  const add = item.addons.reduce((s, a) => s + a.price, 0);
  return (item.price + add) * item.qty;
}

function deductRecipes(inventory: Ingredient[], items: CartItem[], recipes: RecipeLine[]): Ingredient[] {
  const next = inventory.map((i) => ({ ...i }));
  for (const item of items) {
    const lines = recipes.filter((r) => r.productId === item.productId);
    if (lines.length === 0) {
      const cup = next.find((n) => n.id === "inv10");
      if (cup && item.kitchen) cup.stock = Math.max(0, cup.stock - item.qty);
      continue;
    }
    for (const line of lines) {
      const ing = next.find((n) => n.id === line.ingredientId);
      if (ing) ing.stock = Math.max(0, Number((ing.stock - line.qty * item.qty).toFixed(3)));
    }
  }
  return next;
}

const TEST_PURGE = "v1";

function withoutTestTickets(state: {
  orders: Order[];
  products: Product[];
  inventory: Ingredient[];
  shift: ShiftState;
}) {
  return {
    orders: SAMPLE_ORDERS.map((seed) => state.orders.find((o) => o.id === seed.id) ?? seed),
    products: state.products.map((prod) => {
      const seed = PRODUCTS.find((s) => s.id === prod.id);
      return seed ? { ...prod, stock: seed.stock, soldQty: seed.soldQty } : prod;
    }),
    inventory: INVENTORY.map((seed) => {
      const live = state.inventory.find((i) => i.id === seed.id);
      return live ? { ...live, stock: seed.stock } : seed;
    }),
    shift: {
      ...state.shift,
      cashSales: 150000,
      nonCashSales: 193950,
    },
    notifications: [
      {
        id: "n1",
        type: "SHIFT" as const,
        title: "Shift pagi dibuka",
        message: "Randy membuka shift dengan modal kas Rp 500.000",
        time: "08:00",
      },
    ],
    adjustLogs: [] as AdjustLog[],
    cart: [] as CartItem[],
    dailySales: DAILY_SALES.map((d) => ({ ...d })),
    audit: [{ id: "au1", time: "2026-09-09 08:00", actor: "Randy", action: "Buka shift kasir" }],
    lastReceipt: null as Order | null,
    discount: 0,
    discountLabel: "",
    discountReason: "",
    testPurge: TEST_PURGE,
  };
}

export const usePos = create<AppState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      view: "pos",
      pendingView: null,
      pinOpen: false,
      role: "cashier",
      currentStaffId: "randy",
      adminPin: ADMIN_PIN,
      sidebarCollapsed: false,
      search: "",
      category: "Semua",
      availableOnly: false,
      products: PRODUCTS,
      recipes: RECIPES,
      addons: ADDONS,
      cart: [],
      orderType: "Dine In",
      table: "01",
      customer: "",
      discount: 0,
      discountLabel: "",
      discountReason: "",
      taxEnabled: true,
      serviceEnabled: false,
      adjustLogs: [],
      orders: SAMPLE_ORDERS,
      expenses: EXPENSES,
      incomes: INCOMES,
      incidents: INCIDENTS,
      inventory: INVENTORY,
      staff: STAFF,
      attendance: SAMPLE_ATTENDANCE,
      shift: {
        open: true,
        openedAt: "2026-09-09T08:00:00+07:00",
        openingCash: 500000,
        cashSales: 150000,
        nonCashSales: 193950,
        cashier: "Randy",
      },
      notifications: [
        {
          id: "n1",
          type: "SHIFT",
          title: "Shift pagi dibuka",
          message: "Randy membuka shift dengan modal kas Rp 500.000",
          time: "08:00",
        },
      ],
      audit: [
        { id: "au1", time: "2026-09-09 08:00", actor: "Randy", action: "Buka shift kasir" },
      ],
      tutupBuku: TUTUP_BUKU,
      dailySales: DAILY_SALES,
      dailyBooks: DAILY_BOOKS,
      weekly: WEEKLY,
      lastReceipt: null,
      paymentOpen: false,
      receiptOpen: false,
      productModal: null,
      productFormOpen: false,
      editingProduct: null,
      testPurge: "",
      sessionLoggedIn: false,
      sessionEmail: "",
      waOwner: "",
      waKitchen: "",
      workShifts: WORK_SHIFTS,
      shiftLogs: [],

      setView: (view) => {
        const { role } = get();
        if (RESTRICTED_VIEWS.includes(view) && role !== "owner") {
          set({ pendingView: view, pinOpen: true });
          return;
        }
        set({ view, search: view === "pos" ? get().search : get().search });
      },
      purgeTestData: () => {
        const s = get();
        if (s.testPurge === TEST_PURGE) return;
        set(withoutTestTickets(s));
      },
      loginVenue: async (email, password) => {
        const ok = await verifyVenueLogin(email, password);
        if (!ok) return false;
        set({
          sessionLoggedIn: true,
          sessionEmail: normalizeVenueEmail(email),
        });
        return true;
      },
      logoutVenue: () =>
        set({
          sessionLoggedIn: false,
          sessionEmail: "",
          role: "cashier",
          currentStaffId: "randy",
          pinOpen: false,
          pendingView: null,
          view: "pos",
        }),
      setWaOwner: (v) => set({ waOwner: v }),
      setWaKitchen: (v) => set({ waKitchen: v }),
      confirmPin: (pin) => {
        const { adminPin, pendingView, staff } = get();
        const owner = staff.find((s) => s.access === "Full Admin" && s.pin === pin);
        if (pin === adminPin || owner) {
          const next = pendingView;
          set({
            role: "owner",
            currentStaffId: owner?.id ?? "bagas",
            pinOpen: false,
            pendingView: null,
            view: next ?? get().view,
            audit: [
              {
                id: uid("au"),
                time: new Date().toLocaleString("id-ID"),
                actor: owner?.name ?? "Bagas",
                action: "Otorisasi admin",
              },
              ...get().audit,
            ],
          });
          return true;
        }
        return false;
      },
      closePin: () => set({ pinOpen: false, pendingView: null }),
      logoutOwner: () =>
        set({
          role: "cashier",
          currentStaffId: "randy",
          view: "pos",
        }),
      switchStaff: (id) => {
        const s = get().staff.find((x) => x.id === id);
        if (!s) return;
        set({
          currentStaffId: id,
          role: s.access === "Full Admin" ? "owner" : "cashier",
        });
      },
      toggleSidebar: () => set({ sidebarCollapsed: !get().sidebarCollapsed }),
      setSearch: (q) => set({ search: q }),
      setCategory: (c) => set({ category: c }),
      setAvailableOnly: (v) => set({ availableOnly: v }),
      setOrderType: (t) => set({ orderType: t }),
      setTable: (t) => set({ table: t }),
      setCustomer: (n) => set({ customer: n }),
      addToCart: (product, addons = [], note = "") => {
        if (!product.available || product.stock <= 0) return;
        const key = `${product.id}-${addons.map((a) => a.id).join(",")}-${note}`;
        const cart = [...get().cart];
        const existing = cart.find((c) => c.key === key);
        if (existing) existing.qty += 1;
        else
          cart.unshift({
            key,
            productId: product.id,
            name: product.name,
            price: product.price,
            cogs: product.cogs,
            qty: 1,
            addons,
            note,
            kitchen: product.kitchen,
          });
        set({ cart });
      },
      changeQty: (key, delta) => {
        const cart = get()
          .cart.map((c) => (c.key === key ? { ...c, qty: c.qty + delta } : c))
          .filter((c) => c.qty > 0);
        set({ cart });
      },
      removeCart: (key) => set({ cart: get().cart.filter((c) => c.key !== key) }),
      clearCart: () =>
        set({ cart: [], discount: 0, discountLabel: "", discountReason: "", taxEnabled: true, serviceEnabled: false }),
      setDiscount: (amount, label, reason = "") =>
        set({ discount: Math.max(0, amount), discountLabel: label, discountReason: reason }),
      setTaxEnabled: (v, reason) => set({ taxEnabled: v, discountReason: v ? get().discountReason : reason || get().discountReason }),
      setServiceEnabled: (v) => set({ serviceEnabled: v }),
      totals: () => {
        const { cart, discount, taxEnabled, serviceEnabled } = get();
        const qty = cart.reduce((s, c) => s + c.qty, 0);
        const subtotal = cart.reduce((s, c) => s + lineTotal(c), 0);
        const d = Math.min(discount, subtotal);
        const taxable = Math.max(0, subtotal - d);
        const service = serviceEnabled ? Math.round(taxable * SERVICE_RATE) : 0;
        const tax = taxEnabled ? Math.round((taxable + service) * TAX_RATE) : 0;
        return { qty, subtotal, discount: d, service, tax, total: taxable + service + tax };
      },
      checkout: (method, tendered) => {
        const {
          cart,
          orderType,
          table,
          customer,
          discount,
          discountLabel,
          discountReason,
          taxEnabled,
          serviceEnabled,
          currentStaffId,
          staff,
          products,
        } = get();
        if (cart.length === 0) return null;
        const t = get().totals();
        if (method === "Cash" && tendered < t.total) return null;
        const cashier = staff.find((s) => s.id === currentStaffId)?.name ?? "Kasir";
        const seq = get().orders.length + 17;
        const tag = todayISO().slice(5).replace("-", "");
        const order: Order = {
          id: uid("ord"),
          number: `HV-${tag}-${String(seq).padStart(3, "0")}`,
          createdAt: new Date().toISOString(),
          type: orderType,
          table: orderType === "Dine In" ? table : "-",
          customer: customer || (orderType === "Takeaway" ? "Takeaway" : "Tamu"),
          items: cart,
          subtotal: t.subtotal,
          discount: t.discount,
          discountLabel,
          discountReason,
          tax: t.tax,
          service: t.service,
          taxExempt: !taxEnabled,
          total: t.total,
          payment: method,
          tendered: method === "Cash" ? tendered : t.total,
          change: method === "Cash" ? tendered - t.total : 0,
          status: "paid",
          cashier,
          kdsStatus: cart.some((c) => c.kitchen) ? "new" : "done",
        };
        const nextProducts = products.map((p) => {
          const sold = cart.filter((c) => c.productId === p.id).reduce((s, c) => s + c.qty, 0);
          if (!sold) return p;
          return { ...p, stock: Math.max(0, p.stock - sold), soldQty: p.soldQty + sold };
        });
        const shift = { ...get().shift };
        if (method === "Cash") shift.cashSales += t.total;
        else shift.nonCashSales += t.total;
        const cups = cart.reduce((s, c) => s + c.qty, 0);
        const dailySales = [...get().dailySales];
        const today = todayISO();
        const row = dailySales.find((d) => d.date === today);
        if (row) row.omzet += t.total;
        else dailySales.push({ date: today, omzet: t.total });

        const logs: AdjustLog[] = [...get().adjustLogs];
        const stamp = new Date().toISOString();
        if (t.discount > 0) {
          logs.unshift({
            id: uid("adj"),
            createdAt: stamp,
            kind: "discount",
            action: "apply",
            orderId: order.id,
            orderNumber: order.number,
            amount: t.discount,
            label: discountLabel || "Diskon",
            reason: discountReason || discountLabel || "Diskon kasir",
            actor: cashier,
            historic: false,
          });
        }
        if (!taxEnabled) {
          logs.unshift({
            id: uid("adj"),
            createdAt: stamp,
            kind: "tax",
            action: "exempt",
            orderId: order.id,
            orderNumber: order.number,
            amount: 0,
            rate: 0,
            label: "PB1 dibebaskan",
            reason: discountReason || "Dibebaskan kasir",
            actor: cashier,
            historic: false,
          });
        } else if (t.tax > 0) {
          logs.unshift({
            id: uid("adj"),
            createdAt: stamp,
            kind: "tax",
            action: "apply",
            orderId: order.id,
            orderNumber: order.number,
            amount: t.tax,
            rate: TAX_RATE,
            label: "PB1 10%",
            reason: "Standar F&B",
            actor: cashier,
            historic: false,
          });
        }
        if (t.service > 0) {
          logs.unshift({
            id: uid("adj"),
            createdAt: stamp,
            kind: "service",
            action: "apply",
            orderId: order.id,
            orderNumber: order.number,
            amount: t.service,
            rate: SERVICE_RATE,
            label: "Service 5%",
            reason: "Dine-in",
            actor: cashier,
            historic: false,
          });
        }

        set({
          orders: [order, ...get().orders],
          products: nextProducts,
          inventory: deductRecipes(get().inventory, cart, get().recipes),
          cart: [],
          discount: 0,
          discountLabel: "",
          discountReason: "",
          taxEnabled: true,
          serviceEnabled: false,
          customer: "",
          shift,
          lastReceipt: order,
          paymentOpen: false,
          receiptOpen: true,
          dailySales,
          adjustLogs: logs,
          notifications: [
            {
              id: uid("n"),
              type: "SALE",
              title: `Order ${order.number} lunas`,
              message: `${order.customer} • ${method} • ${cups} item`,
              time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" }),
            },
            ...get().notifications,
          ],
        });
        return order;
      },
      voidOrder: (id) => {
        if (get().role !== "owner") {
          set({ pinOpen: true, pendingView: get().view });
          return;
        }
        set({
          orders: get().orders.map((o) => (o.id === id ? { ...o, status: "void", kdsStatus: "done" } : o)),
        });
      },
      setKds: (id, status) =>
        set({
          orders: get().orders.map((o) => (o.id === id ? { ...o, kdsStatus: status } : o)),
        }),
      addExpense: (e) =>
        set({
          expenses: [{ id: uid("exp"), ...e }, ...get().expenses],
        }),
      deleteExpense: (id) => set({ expenses: get().expenses.filter((e) => e.id !== id) }),
      addIncome: (e) => set({ incomes: [{ id: uid("inc"), ...e }, ...get().incomes] }),
      addIncident: (e) => {
        const row = { id: uid("ins"), ...e };
        set({ incidents: [row, ...get().incidents] });
        if (e.loss > 0) {
          get().notify("INCIDENT", `Insiden ${e.category}`, `${e.staff}: ${e.desc}`);
        }
      },
      upsertProduct: (p) => {
        const list = get().products;
        const i = list.findIndex((x) => x.id === p.id);
        if (i >= 0) {
          const next = [...list];
          next[i] = p;
          set({ products: next });
        } else set({ products: [p, ...list] });
      },
      deleteProduct: (id) =>
        set({
          products: get().products.filter((p) => p.id !== id),
          recipes: get().recipes.filter((r) => r.productId !== id),
        }),
      setProductRecipes: (productId, lines) =>
        set({
          recipes: [...get().recipes.filter((r) => r.productId !== productId), ...lines.filter((l) => l.qty > 0)],
        }),
      addIngredient: (i) => set({ inventory: [i, ...get().inventory] }),
      setEditingProduct: (p) => set({ editingProduct: p }),
      clock: (staffId, note, photo) => {
        const s = get().staff.find((x) => x.id === staffId);
        if (!s) return "Staf tidak ditemukan";
        const now = new Date().toISOString();
        const date = todayISO();
        const open = get().attendance.find(
          (a) => a.staffId === staffId && a.date === date && !a.clockOut && a.valid !== false,
        );
        if (open) {
          set({
            attendance: get().attendance.map((a) =>
              a.id === open.id
                ? { ...a, clockOut: now, status: "Pulang", photoOut: photo || a.photoOut }
                : a,
            ),
          });
          return null;
        }

        const shifts = get().workShifts;
        const detected = detectWorkShift(now, shifts);
        if (!detected) {
          if (isNightCorruptAttempt(now)) {
            set({
              attendance: [
                {
                  id: uid("att"),
                  staffId,
                  staffName: s.name,
                  date,
                  clockIn: now,
                  status: "Korupsi Waktu",
                  note: note || "Clock-in setelah tengah malam tanpa tiket shift malam",
                  photoIn: photo,
                  valid: false,
                  voidReason: "Korupsi waktu shift malam — absen masuk hanya 15.00–00.00",
                  voidedBy: "Sistem",
                  voidedAt: now,
                  shiftId: "malam",
                },
                ...get().attendance,
              ],
            });
            return "Korupsi waktu: masuk shift malam hanya jam 15.00–00.00. Pulang malam s/d jam 01.00.";
          }
          return "Di luar jam absen masuk. Pagi 08.00–15.00 · Malam 15.00–00.00.";
        }

        const late = isLateClockIn(now, detected);
        const attId = uid("att");
        const lateIncident = late
          ? {
              id: uid("ins"),
              date,
              staff: staffId,
              category: "Keterlambatan",
              desc: `${s.name} terlambat clock-in shift ${detected.name}. Masuk ${formatTimeID(now)}, wajib ${detected.workStart}.`,
              action: `Pengurangan gaji ${formatIDR(LATE_FINE)}`,
              loss: LATE_FINE,
              status: "Selesai",
              attendanceId: attId,
            }
          : null;
        set({
          attendance: [
            {
              id: attId,
              staffId,
              staffName: s.name,
              date,
              clockIn: now,
              status: late ? "Terlambat" : "Tepat Waktu",
              note,
              photoIn: photo,
              valid: true,
              shiftId: detected.id,
            },
            ...get().attendance,
          ],
          incidents: lateIncident ? [lateIncident, ...get().incidents] : get().incidents,
          notifications: lateIncident
            ? [
                {
                  id: uid("n"),
                  type: "INCIDENT",
                  title: `Telat · ${s.name}`,
                  message: `Shift ${detected.name} · sanksi potong gaji ${formatIDR(LATE_FINE)}`,
                  time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" }),
                },
                ...get().notifications,
              ]
            : get().notifications,
        });
        return null;
      },
      setAttendanceValid: (id, valid, reason) => {
        if (get().role !== "owner") {
          set({ pinOpen: true, pendingView: "attendance" });
          return false;
        }
        const row = get().attendance.find((a) => a.id === id);
        if (!row) return false;
        const actor = get().staff.find((s) => s.id === get().currentStaffId)?.name ?? "Owner";
        set({
          attendance: get().attendance.map((a) =>
            a.id === id
              ? {
                  ...a,
                  valid,
                  voidReason: valid ? undefined : (reason || "Dibatalkan owner"),
                  voidedBy: valid ? undefined : actor,
                  voidedAt: valid ? undefined : new Date().toISOString(),
                }
              : a,
          ),
          incidents: get().incidents.map((inc) =>
            inc.attendanceId === id
              ? { ...inc, status: valid ? "Selesai" : "Dibatalkan" }
              : inc,
          ),
          audit: [
            {
              id: uid("au"),
              time: new Date().toLocaleString("id-ID"),
              actor,
              action: valid
                ? `Pulihkan absen ${row.staffName} ${row.date}`
                : `Batalkan absen ${row.staffName} ${row.date}${reason ? ` · ${reason}` : ""}`,
            },
            ...get().audit,
          ],
        });
        return true;
      },
      updateWorkShifts: (next) => {
        if (get().role !== "owner") {
          set({ pinOpen: true, pendingView: "attendance" });
          return false;
        }
        const prev = get().workShifts;
        const actor = get().staff.find((s) => s.id === get().currentStaffId)?.name ?? "Owner";
        const summary = next
          .map((s) => {
            const old = prev.find((p) => p.id === s.id);
            if (!old) return `${s.name} baru`;
            const bits = [];
            if (old.absenFrom !== s.absenFrom || old.absenTo !== s.absenTo) bits.push(`absen ${s.absenFrom}–${s.absenTo}`);
            if (old.workStart !== s.workStart || old.workEnd !== s.workEnd) bits.push(`kerja ${s.workStart}–${s.workEnd}`);
            return bits.length ? `${s.name}: ${bits.join(", ")}` : null;
          })
          .filter(Boolean)
          .join(" · ");
        set({
          workShifts: next,
          shiftLogs: summary
            ? [
                {
                  id: uid("sh"),
                  createdAt: new Date().toISOString(),
                  actor,
                  summary,
                },
                ...get().shiftLogs,
              ]
            : get().shiftLogs,
          audit: summary
            ? [
                { id: uid("au"), time: new Date().toLocaleString("id-ID"), actor, action: `Ubah jam shift · ${summary}` },
                ...get().audit,
              ]
            : get().audit,
        });
        return true;
      },
      openShift: (cash) => {
        const name = get().staff.find((s) => s.id === get().currentStaffId)?.name ?? "Kasir";
        set({
          shift: {
            open: true,
            openedAt: new Date().toISOString(),
            openingCash: cash,
            cashSales: 0,
            nonCashSales: 0,
            cashier: name,
          },
        });
      },
      closeShift: () => set({ shift: { ...get().shift, open: false } }),
      addStaff: (s) => set({ staff: [...get().staff, s] }),
      updateStaff: (s) => set({ staff: get().staff.map((x) => (x.id === s.id ? s : x)) }),
      setAdminPin: (pin) => set({ adminPin: pin }),
      adjustStock: (id, stock) =>
        set({
          inventory: get().inventory.map((i) => (i.id === id ? { ...i, stock } : i)),
        }),
      notify: (type, title, message) =>
        set({
          notifications: [
            {
              id: uid("n"),
              type,
              title,
              message,
              time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
            },
            ...get().notifications,
          ],
        }),
      lockPeriod: () => {
        const books = get().tutupBuku.map((t) =>
          t.status === "Dalam Proses"
            ? {
                ...t,
                status: "Selesai" as const,
                income: get().dailySales.reduce((s, d) => s + d.omzet, 0),
                expense: get().expenses.reduce((s, e) => s + e.amount, 0),
                note: "Dikunci dari POS HVEN",
              }
            : t,
        );
        set({ tutupBuku: books });
      },
      setPaymentOpen: (v) => set({ paymentOpen: v }),
      setReceiptOpen: (v) => set({ receiptOpen: v }),
      setProductModal: (p) => set({ productModal: p }),
      setProductFormOpen: (v) => set({ productFormOpen: v, editingProduct: v ? get().editingProduct : null }),
    }),
    {
      name: "hven-pos-v3",
      skipHydration: true,
      storage: createJSONStorage(() => safeStorage),
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<AppState>;
        const merged = {
          ...current,
          ...p,
          taxEnabled: p.taxEnabled ?? true,
          serviceEnabled: p.serviceEnabled ?? false,
          discountReason: p.discountReason ?? "",
          recipes: p.recipes && p.recipes.length ? p.recipes : RECIPES,
          editingProduct: null,
          sessionLoggedIn: p.sessionLoggedIn === true,
          sessionEmail: p.sessionEmail ?? "",
          waOwner: p.waOwner ?? "",
          waKitchen: p.waKitchen ?? "",
          workShifts: p.workShifts && p.workShifts.length ? p.workShifts : WORK_SHIFTS,
          shiftLogs: p.shiftLogs ?? [],
          attendance: (p.attendance ?? current.attendance).map((a) => ({
            ...a,
            valid: a.valid !== false,
            shiftId: a.shiftId ?? inferShiftId(a.clockIn, p.workShifts && p.workShifts.length ? p.workShifts : WORK_SHIFTS),
          })),
        };
        if (p.testPurge === TEST_PURGE) {
          return { ...merged, adjustLogs: p.adjustLogs ?? [] };
        }
        return {
          ...merged,
          ...withoutTestTickets({
            orders: p.orders ?? current.orders,
            products: p.products ?? current.products,
            inventory: p.inventory ?? current.inventory,
            shift: p.shift ?? current.shift,
          }),
        };
      },
      partialize: (s) => ({
        products: s.products,
        orders: s.orders,
        expenses: s.expenses,
        incomes: s.incomes,
        incidents: s.incidents,
        inventory: s.inventory,
        staff: s.staff,
        attendance: s.attendance,
        shift: s.shift,
        notifications: s.notifications,
        audit: s.audit,
        tutupBuku: s.tutupBuku,
        dailySales: s.dailySales,
        adminPin: s.adminPin,
        cart: s.cart,
        role: s.role,
        currentStaffId: s.currentStaffId,
        adjustLogs: s.adjustLogs,
        taxEnabled: s.taxEnabled,
        serviceEnabled: s.serviceEnabled,
        discountReason: s.discountReason,
        discount: s.discount,
        discountLabel: s.discountLabel,
        recipes: s.recipes,
        testPurge: s.testPurge,
        sessionLoggedIn: s.sessionLoggedIn,
        sessionEmail: s.sessionEmail,
        waOwner: s.waOwner,
        waKitchen: s.waKitchen,
        workShifts: s.workShifts,
        shiftLogs: s.shiftLogs,
      }),
    },
  ),
);

export function currentStaff() {
  const { staff, currentStaffId } = usePos.getState();
  return staff.find((s) => s.id === currentStaffId);
}
