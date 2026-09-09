import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ClipboardList, C as Fingerprint, D as CookingPot, E as CupSoda, F as BookOpen, I as Bell, M as Camera, N as CalendarCheck, O as Coffee, P as Building2, S as GlassWater, T as Delete, _ as Lock, a as UserCog, b as LayoutDashboard, c as Target, d as Receipt, f as Printer, g as Menu, h as Minus, i as UtensilsCrossed, j as ChartScatter, k as Clock, l as Tag, m as Package, n as Wine, o as TriangleAlert, p as Plus, r as Wallet, s as Trash2, t as X, u as Search, v as LockOpen, w as Droplets, x as IceCreamCone, y as Leaf } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DdcAVB-y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
			ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
			outline: "border border-border bg-transparent hover:bg-accent",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			success: "bg-success text-success-foreground hover:bg-success/90"
		},
		size: {
			default: "h-10 px-4 rounded-md text-sm",
			sm: "h-8 px-3 rounded-sm text-xs",
			lg: "h-12 px-5 rounded-lg text-sm",
			icon: "size-10 rounded-md",
			"icon-sm": "size-8 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	className: cn(buttonVariants({
		variant,
		size
	}), className),
	...props
}));
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50", className),
	...props
}));
Input.displayName = "Input";
function Badge({ className, tone = "muted", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium", {
			muted: "bg-muted text-muted-foreground border-border",
			primary: "bg-primary/15 text-primary border-primary/30",
			success: "bg-success/15 text-success border-success/30",
			danger: "bg-destructive/15 text-destructive border-destructive/30",
			warning: "bg-warning/15 text-warning border-warning/30"
		}[tone], className),
		children
	});
}
var Dialog = Dialog$1;
function DialogContent({ className, children, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed left-1/2 top-1/2 z-50 w-[min(520px,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-5 text-card-foreground shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "font-display text-lg font-medium tracking-tight",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon-sm",
					"aria-label": "Tutup",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
			className: "sr-only",
			children: "Dialog"
		}), children]
	})] });
}
var MAP = {
	Coffee,
	Wine,
	UtensilsCrossed,
	Leaf,
	Droplets,
	CupSoda,
	GlassWater,
	IceCream: IceCreamCone
};
function ProductIcon({ name, className }) {
	const Icon = MAP[name] ?? Coffee;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className });
}
var raw = {
	products: [
		{
			"id": "m01",
			"name": "Sexy Lady",
			"category": "Mocktail",
			"sku": "HVN-M01",
			"price": 25e3,
			"cogs": 7100,
			"margin": .716,
			"stock": 19,
			"available": true,
			"icon": "Wine",
			"soldQty": 183,
			"quadrant": "Workhorse",
			"recommendation": "Naikkan harga bertahap / efisiensi porsi COGS",
			"kitchen": true
		},
		{
			"id": "m02",
			"name": "Party Plate",
			"category": "Food",
			"sku": "HVN-F02",
			"price": 3e4,
			"cogs": 15543,
			"margin": .4819,
			"stock": 40,
			"available": true,
			"icon": "UtensilsCrossed",
			"soldQty": 122,
			"quadrant": "Workhorse",
			"recommendation": "Naikkan harga bertahap / efisiensi porsi COGS",
			"kitchen": true
		},
		{
			"id": "m03",
			"name": "Latte Ice",
			"category": "Coffee",
			"sku": "HVN-C03",
			"price": 25e3,
			"cogs": 7650,
			"margin": .694,
			"stock": 35,
			"available": true,
			"icon": "Coffee",
			"soldQty": 137,
			"quadrant": "Workhorse",
			"recommendation": "Naikkan harga bertahap / efisiensi porsi COGS",
			"kitchen": true
		},
		{
			"id": "m04",
			"name": "Nasi Goreng Kara",
			"category": "Food",
			"sku": "HVN-F04",
			"price": 25e3,
			"cogs": 7920,
			"margin": .6832,
			"stock": 32,
			"available": true,
			"icon": "UtensilsCrossed",
			"soldQty": 146,
			"quadrant": "Workhorse",
			"recommendation": "Naikkan harga bertahap / efisiensi porsi COGS",
			"kitchen": true
		},
		{
			"id": "m05",
			"name": "Mie Yabi",
			"category": "Food",
			"sku": "HVN-F05",
			"price": 25e3,
			"cogs": 7380,
			"margin": .7048,
			"stock": 56,
			"available": true,
			"icon": "UtensilsCrossed",
			"soldQty": 73,
			"quadrant": "Workhorse",
			"recommendation": "Naikkan harga bertahap / efisiensi porsi COGS",
			"kitchen": true
		},
		{
			"id": "m06",
			"name": "Sour tea",
			"category": "Tea",
			"sku": "HVN-T06",
			"price": 19e3,
			"cogs": 3659,
			"margin": .8074,
			"stock": 59,
			"available": true,
			"icon": "CupSoda",
			"soldQty": 63,
			"quadrant": "Star",
			"recommendation": "Pertahankan kualitas & jadikan signature menu",
			"kitchen": true
		},
		{
			"id": "m07",
			"name": "americano",
			"category": "Coffee",
			"sku": "HVN-C07",
			"price": 18e3,
			"cogs": 5200,
			"margin": .7111,
			"stock": 50,
			"available": true,
			"icon": "Coffee",
			"soldQty": 91,
			"quadrant": "Workhorse",
			"recommendation": "Naikkan harga bertahap / efisiensi porsi COGS",
			"kitchen": true
		},
		{
			"id": "m08",
			"name": "Latte",
			"category": "Coffee",
			"sku": "HVN-C08",
			"price": 25e3,
			"cogs": 7650,
			"margin": .694,
			"stock": 59,
			"available": true,
			"icon": "Coffee",
			"soldQty": 64,
			"quadrant": "Workhorse",
			"recommendation": "Naikkan harga bertahap / efisiensi porsi COGS",
			"kitchen": true
		},
		{
			"id": "m09",
			"name": "Nastar Frappe",
			"category": "Mocktail",
			"sku": "HVN-M09",
			"price": 25e3,
			"cogs": 7100,
			"margin": .716,
			"stock": 69,
			"available": true,
			"icon": "GlassWater",
			"soldQty": 34,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m10",
			"name": "Teh puncak Jamus",
			"category": "Tea",
			"sku": "HVN-T10",
			"price": 15e3,
			"cogs": 270,
			"margin": .982,
			"stock": 62,
			"available": true,
			"icon": "Leaf",
			"soldQty": 55,
			"quadrant": "Star",
			"recommendation": "Pertahankan kualitas & jadikan signature menu",
			"kitchen": true
		},
		{
			"id": "m11",
			"name": "Air mineral besar",
			"category": "Water",
			"sku": "HVN-W11",
			"price": 17500,
			"cogs": 3300,
			"margin": .8114,
			"stock": 37,
			"available": true,
			"icon": "Droplets",
			"soldQty": 129,
			"quadrant": "Star",
			"recommendation": "Pertahankan kualitas & jadikan signature menu",
			"kitchen": false
		},
		{
			"id": "m12",
			"name": "Teh Belanda",
			"category": "Tea",
			"sku": "HVN-T12",
			"price": 13500,
			"cogs": 350,
			"margin": .9741,
			"stock": 58,
			"available": true,
			"icon": "Leaf",
			"soldQty": 68,
			"quadrant": "Star",
			"recommendation": "Pertahankan kualitas & jadikan signature menu",
			"kitchen": true
		},
		{
			"id": "m13",
			"name": "Sunny Beach",
			"category": "Mocktail",
			"sku": "HVN-M13",
			"price": 25e3,
			"cogs": 7100,
			"margin": .716,
			"stock": 67,
			"available": true,
			"icon": "Wine",
			"soldQty": 41,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m14",
			"name": "Air mineral",
			"category": "Water",
			"sku": "HVN-W14",
			"price": 8e3,
			"cogs": 2500,
			"margin": .6875,
			"stock": 76,
			"available": true,
			"icon": "Droplets",
			"soldQty": 13,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": false
		},
		{
			"id": "m15",
			"name": "Kopi Nenek",
			"category": "Coffee",
			"sku": "HVN-C15",
			"price": 9e3,
			"cogs": 2339,
			"margin": .7401,
			"stock": 62,
			"available": true,
			"icon": "Coffee",
			"soldQty": 56,
			"quadrant": "Star",
			"recommendation": "Pertahankan kualitas & jadikan signature menu",
			"kitchen": true
		},
		{
			"id": "m16",
			"name": "Wedang uwuh Ngawi",
			"category": "Tea",
			"sku": "HVN-T16",
			"price": 13e3,
			"cogs": 1900,
			"margin": .8538,
			"stock": 74,
			"available": true,
			"icon": "Leaf",
			"soldQty": 20,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m17",
			"name": "Curly Fries",
			"category": "Food",
			"sku": "HVN-F17",
			"price": 22e3,
			"cogs": 4480,
			"margin": .7964,
			"stock": 54,
			"available": true,
			"icon": "UtensilsCrossed",
			"soldQty": 78,
			"quadrant": "Star",
			"recommendation": "Pertahankan kualitas & jadikan signature menu",
			"kitchen": true
		},
		{
			"id": "m18",
			"name": "Hongkong Soft Tale",
			"category": "Mocktail",
			"sku": "HVN-M18",
			"price": 21e3,
			"cogs": 9e3,
			"margin": .5714,
			"stock": 72,
			"available": true,
			"icon": "Wine",
			"soldQty": 25,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m19",
			"name": "Jong Java",
			"category": "Mocktail",
			"sku": "HVN-M19",
			"price": 21e3,
			"cogs": 10250,
			"margin": .5119,
			"stock": 70,
			"available": true,
			"icon": "Wine",
			"soldQty": 31,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m20",
			"name": "Wi Hel Mina Dream",
			"category": "Mocktail",
			"sku": "HVN-M20",
			"price": 28e3,
			"cogs": 9755,
			"margin": .6516,
			"stock": 76,
			"available": true,
			"icon": "Wine",
			"soldQty": 12,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m21",
			"name": "Pretty Queen",
			"category": "Mocktail",
			"sku": "HVN-M21",
			"price": 24e3,
			"cogs": 11e3,
			"margin": .5417,
			"stock": 75,
			"available": true,
			"icon": "Wine",
			"soldQty": 16,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m22",
			"name": "Tela goreng",
			"category": "Food",
			"sku": "HVN-F22",
			"price": 13e3,
			"cogs": 2873,
			"margin": .779,
			"stock": 77,
			"available": true,
			"icon": "UtensilsCrossed",
			"soldQty": 10,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m23",
			"name": "Singkong goreng",
			"category": "Food",
			"sku": "HVN-F23",
			"price": 13e3,
			"cogs": 2873,
			"margin": .779,
			"stock": 76,
			"available": true,
			"icon": "UtensilsCrossed",
			"soldQty": 12,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m24",
			"name": "Tier 1 V60",
			"category": "Coffee",
			"sku": "HVN-C24",
			"price": 48e3,
			"cogs": 9760,
			"margin": .7967,
			"stock": 73,
			"available": true,
			"icon": "Coffee",
			"soldQty": 21,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m25",
			"name": "Tier 2 V60",
			"category": "Coffee",
			"sku": "HVN-C25",
			"price": 68e3,
			"cogs": 36960,
			"margin": .4565,
			"stock": 76,
			"available": true,
			"icon": "Coffee",
			"soldQty": 14,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m26",
			"name": "Tier 3 V60",
			"category": "Coffee",
			"sku": "HVN-C26",
			"price": 88e3,
			"cogs": 54160,
			"margin": .3845,
			"stock": 68,
			"available": true,
			"icon": "Coffee",
			"soldQty": 38,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m27",
			"name": "Red Light District",
			"category": "Mocktail",
			"sku": "HVN-M27",
			"price": 21e3,
			"cogs": 5350,
			"margin": .7452,
			"stock": 72,
			"available": true,
			"icon": "Wine",
			"soldQty": 26,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m28",
			"name": "Espresso",
			"category": "Coffee",
			"sku": "HVN-C28",
			"price": 15e3,
			"cogs": 3200,
			"margin": .7867,
			"stock": 74,
			"available": true,
			"icon": "Coffee",
			"soldQty": 18,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m29",
			"name": "Chun Matcha",
			"category": "Tea",
			"sku": "HVN-T29",
			"price": 35e3,
			"cogs": 12500,
			"margin": .6429,
			"stock": 70,
			"available": true,
			"icon": "Leaf",
			"soldQty": 30,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m30",
			"name": "Natie Matcha",
			"category": "Tea",
			"sku": "HVN-T30",
			"price": 38e3,
			"cogs": 15e3,
			"margin": .6053,
			"stock": 61,
			"available": true,
			"icon": "Leaf",
			"soldQty": 59,
			"quadrant": "Workhorse",
			"recommendation": "Naikkan harga bertahap / efisiensi porsi COGS",
			"kitchen": true
		},
		{
			"id": "m31",
			"name": "Pure Chocolade",
			"category": "Tea",
			"sku": "HVN-T31",
			"price": 29e3,
			"cogs": 5200,
			"margin": .8207,
			"stock": 53,
			"available": true,
			"icon": "CupSoda",
			"soldQty": 82,
			"quadrant": "Star",
			"recommendation": "Pertahankan kualitas & jadikan signature menu",
			"kitchen": true
		},
		{
			"id": "m32",
			"name": "Claudio (Vanilla)",
			"category": "Tea",
			"sku": "HVN-T32",
			"price": 26e3,
			"cogs": 2800,
			"margin": .8923,
			"stock": 78,
			"available": true,
			"icon": "IceCreamCone",
			"soldQty": 7,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m33",
			"name": "Ivada (Stroberi)",
			"category": "Tea",
			"sku": "HVN-T33",
			"price": 26e3,
			"cogs": 2800,
			"margin": .8923,
			"stock": 80,
			"available": true,
			"icon": "IceCreamCone",
			"soldQty": 0,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m34",
			"name": "Vicenzo (Coklat)",
			"category": "Tea",
			"sku": "HVN-T34",
			"price": 26e3,
			"cogs": 2800,
			"margin": .8923,
			"stock": 77,
			"available": true,
			"icon": "IceCreamCone",
			"soldQty": 9,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m35",
			"name": "Capri ijz (Campur)",
			"category": "Tea",
			"sku": "HVN-T35",
			"price": 26e3,
			"cogs": 2800,
			"margin": .8923,
			"stock": 78,
			"available": true,
			"icon": "IceCreamCone",
			"soldQty": 6,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m36",
			"name": "Sweety hazy",
			"category": "Tea",
			"sku": "HVN-T36",
			"price": 29e3,
			"cogs": 4790,
			"margin": .8348,
			"stock": 63,
			"available": true,
			"icon": "CupSoda",
			"soldQty": 51,
			"quadrant": "Star",
			"recommendation": "Pertahankan kualitas & jadikan signature menu",
			"kitchen": true
		},
		{
			"id": "m37",
			"name": "Cikalopi",
			"category": "Tea",
			"sku": "HVN-T37",
			"price": 33e3,
			"cogs": 7335,
			"margin": .7777,
			"stock": 71,
			"available": true,
			"icon": "CupSoda",
			"soldQty": 27,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m38",
			"name": "Cappucino",
			"category": "Coffee",
			"sku": "HVN-C38",
			"price": 25e3,
			"cogs": 7650,
			"margin": .694,
			"stock": 74,
			"available": true,
			"icon": "Coffee",
			"soldQty": 20,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m39",
			"name": "Aubergine Crunch",
			"category": "Food",
			"sku": "HVN-F39",
			"price": 22e3,
			"cogs": 5e3,
			"margin": .7727,
			"stock": 79,
			"available": true,
			"icon": "UtensilsCrossed",
			"soldQty": 5,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m40",
			"name": "Special Barista",
			"category": "Coffee",
			"sku": "HVN-C40",
			"price": 99e3,
			"cogs": 54160,
			"margin": .4529,
			"stock": 79,
			"available": true,
			"icon": "Coffee",
			"soldQty": 3,
			"quadrant": "Dog",
			"recommendation": "Evaluasi resep, kurangi stok, atau ganti menu",
			"kitchen": true
		},
		{
			"id": "m41",
			"name": "Tela Landa",
			"category": "Food",
			"sku": "HVN-F41",
			"price": 13e3,
			"cogs": 2873,
			"margin": .779,
			"stock": 79,
			"available": true,
			"icon": "UtensilsCrossed",
			"soldQty": 4,
			"quadrant": "Puzzle",
			"recommendation": "Tingkatkan promosi, repositioning / bundling paket",
			"kitchen": true
		},
		{
			"id": "m42",
			"name": "Kopi Kakek",
			"category": "Coffee",
			"sku": "HVN-C42",
			"price": 1e4,
			"cogs": 2700,
			"margin": .73,
			"stock": 64,
			"available": true,
			"icon": "Coffee",
			"soldQty": 48,
			"quadrant": "Star",
			"recommendation": "Pertahankan kualitas & jadikan signature menu",
			"kitchen": true
		}
	],
	expenses: [
		{
			"id": "exp-005",
			"date": "2026-09-07",
			"category": "Gaji",
			"desc": "Gala, Randy, Adi, Anto",
			"amount": 34e5
		},
		{
			"id": "exp-006",
			"date": "2026-09-07",
			"category": "Gaji",
			"desc": "Habib",
			"amount": 4e5
		},
		{
			"id": "exp-007",
			"date": "2026-09-01",
			"category": "Bahan Baku",
			"desc": "selada",
			"amount": 5e3
		},
		{
			"id": "exp-008",
			"date": "2026-09-01",
			"category": "Operasional",
			"desc": "cup",
			"amount": 39e3
		},
		{
			"id": "exp-009",
			"date": "2026-09-01",
			"category": "Bahan Baku",
			"desc": "susu diamond",
			"amount": 41e3
		},
		{
			"id": "exp-010",
			"date": "2026-09-01",
			"category": "Bahan Baku",
			"desc": "ketang crinkle",
			"amount": 6e4
		},
		{
			"id": "exp-011",
			"date": "2026-09-01",
			"category": "Bahan Baku",
			"desc": "Ayam karage",
			"amount": 89e3
		},
		{
			"id": "exp-012",
			"date": "2026-09-01",
			"category": "Bahan Baku",
			"desc": "kopi tier 1,2,3",
			"amount": 553e3
		},
		{
			"id": "exp-013",
			"date": "2026-09-01",
			"category": "Operasional",
			"desc": "token listrik",
			"amount": 1e5
		},
		{
			"id": "exp-014",
			"date": "2026-09-02",
			"category": "Operasional",
			"desc": "token listrik",
			"amount": 102e3
		},
		{
			"id": "exp-015",
			"date": "2026-09-02",
			"category": "Lain-lain",
			"desc": "skop ice cream",
			"amount": 96e3
		},
		{
			"id": "exp-016",
			"date": "2026-09-02",
			"category": "Bahan Baku",
			"desc": "Marjan strobery",
			"amount": 20500
		},
		{
			"id": "exp-017",
			"date": "2026-09-02",
			"category": "Bahan Baku",
			"desc": "selai strobery",
			"amount": 10500
		},
		{
			"id": "exp-018",
			"date": "2026-09-02",
			"category": "Lain-lain",
			"desc": "bayar tukang",
			"amount": 2e5
		},
		{
			"id": "exp-019",
			"date": "2026-09-02",
			"category": "Bahan Baku",
			"desc": "susu diamond",
			"amount": 41e3
		},
		{
			"id": "exp-020",
			"date": "2026-09-03",
			"category": "prive",
			"desc": "kasbon",
			"amount": 6e5
		},
		{
			"id": "exp-021",
			"date": "2026-09-03",
			"category": "Pemasaran",
			"desc": "marketing",
			"amount": 11e4
		},
		{
			"id": "exp-022",
			"date": "2026-09-03",
			"category": "Bahan Baku",
			"desc": "nugget",
			"amount": 63e3
		},
		{
			"id": "exp-023",
			"date": "2026-09-03",
			"category": "Bahan Baku",
			"desc": "sawi",
			"amount": 5e3
		},
		{
			"id": "exp-024",
			"date": "2026-09-03",
			"category": "Operasional",
			"desc": "gas elpiji",
			"amount": 22e3
		},
		{
			"id": "exp-025",
			"date": "2026-09-03",
			"category": "Bahan Baku",
			"desc": "jiwater",
			"amount": 82e3
		},
		{
			"id": "exp-026",
			"date": "2026-09-04",
			"category": "Bahan Baku",
			"desc": "susu diamond",
			"amount": 63e3
		},
		{
			"id": "exp-027",
			"date": "2026-09-04",
			"category": "Bahan Baku",
			"desc": "sosis",
			"amount": 185e3
		},
		{
			"id": "exp-028",
			"date": "2026-09-04",
			"category": "Operasional",
			"desc": "token listrik",
			"amount": 52e3
		},
		{
			"id": "exp-029",
			"date": "2026-09-04",
			"category": "Bahan Baku",
			"desc": "bawang merah",
			"amount": 29e3
		},
		{
			"id": "exp-030",
			"date": "2026-09-04",
			"category": "Bahan Baku",
			"desc": "selada",
			"amount": 4e3
		},
		{
			"id": "exp-031",
			"date": "2026-09-04",
			"category": "Bahan Baku",
			"desc": "lemon",
			"amount": 22e3
		},
		{
			"id": "exp-032",
			"date": "2026-09-04",
			"category": "Bahan Baku",
			"desc": "telur",
			"amount": 13e3
		},
		{
			"id": "exp-033",
			"date": "2026-09-04",
			"category": "Bahan Baku",
			"desc": "timun",
			"amount": 7e3
		},
		{
			"id": "exp-034",
			"date": "2026-09-04",
			"category": "Bahan Baku",
			"desc": "ladaku",
			"amount": 11e3
		},
		{
			"id": "exp-035",
			"date": "2026-09-04",
			"category": "Operasional",
			"desc": "token listrik",
			"amount": 196e3
		},
		{
			"id": "exp-036",
			"date": "2026-09-05",
			"category": "Operasional",
			"desc": "lpg",
			"amount": 23e3
		},
		{
			"id": "exp-037",
			"date": "2026-09-05",
			"category": "Bahan Baku",
			"desc": "beras",
			"amount": 64e3
		},
		{
			"id": "exp-038",
			"date": "2026-09-05",
			"category": "Bahan Baku",
			"desc": "tepung jempol",
			"amount": 16e3
		},
		{
			"id": "exp-039",
			"date": "2026-09-05",
			"category": "Bahan Baku",
			"desc": "es batu",
			"amount": 18e3
		},
		{
			"id": "exp-040",
			"date": "2026-09-05",
			"category": "Operasional",
			"desc": "token listrik",
			"amount": 202e3
		},
		{
			"id": "exp-041",
			"date": "2026-09-05",
			"category": "Bahan Baku",
			"desc": "telur",
			"amount": 36e3
		},
		{
			"id": "exp-042",
			"date": "2026-09-05",
			"category": "Bahan Baku",
			"desc": "singkong",
			"amount": 16e3
		},
		{
			"id": "exp-043",
			"date": "2026-09-05",
			"category": "Bahan Baku",
			"desc": "susu diamond",
			"amount": 61500
		},
		{
			"id": "exp-044",
			"date": "2026-09-05",
			"category": "Lain-lain",
			"desc": "kresek sampah",
			"amount": 34e3
		},
		{
			"id": "exp-045",
			"date": "2026-09-06",
			"category": "Bahan Baku",
			"desc": "saus pedas jerigen",
			"amount": 118e3
		},
		{
			"id": "exp-046",
			"date": "2026-09-06",
			"category": "Bahan Baku",
			"desc": "selai blueberry",
			"amount": 32e3
		},
		{
			"id": "exp-047",
			"date": "2026-09-06",
			"category": "Bahan Baku",
			"desc": "chiken karage",
			"amount": 89e3
		},
		{
			"id": "exp-048",
			"date": "2026-09-06",
			"category": "Bahan Baku",
			"desc": "ji water",
			"amount": 139e3
		},
		{
			"id": "exp-049",
			"date": "2026-09-06",
			"category": "Bahan Baku",
			"desc": "seledri",
			"amount": 26e3
		},
		{
			"id": "exp-050",
			"date": "2026-09-06",
			"category": "Bahan Baku",
			"desc": "susu diamond",
			"amount": 42e3
		},
		{
			"id": "exp-051",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "galon cleo",
			"amount": 26e3
		},
		{
			"id": "exp-052",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "selada",
			"amount": 9e3
		},
		{
			"id": "exp-053",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "telur",
			"amount": 48e3
		},
		{
			"id": "exp-054",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "ladaku",
			"amount": 1e4
		},
		{
			"id": "exp-055",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "timun",
			"amount": 8e3
		},
		{
			"id": "exp-056",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "bawang merah",
			"amount": 1e4
		},
		{
			"id": "exp-057",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "kapulaga",
			"amount": 14e3
		},
		{
			"id": "exp-058",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "bunga lawang",
			"amount": 15e3
		},
		{
			"id": "exp-059",
			"date": "2026-09-07",
			"category": "Operasional",
			"desc": "kresek 250gr",
			"amount": 3e4
		},
		{
			"id": "exp-060",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "selai nanas",
			"amount": 10500
		},
		{
			"id": "exp-061",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "selai stroberi",
			"amount": 21e3
		},
		{
			"id": "exp-062",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "blueband",
			"amount": 17500
		},
		{
			"id": "exp-063",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "sunco 5 l",
			"amount": 102e3
		},
		{
			"id": "exp-064",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "susu diamon",
			"amount": 22e3
		},
		{
			"id": "exp-065",
			"date": "2026-09-07",
			"category": "Operasional",
			"desc": "thermal paper",
			"amount": 28e3
		},
		{
			"id": "exp-066",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "lemon",
			"amount": 19e3
		},
		{
			"id": "exp-067",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "sawi",
			"amount": 1e4
		},
		{
			"id": "exp-068",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "timun",
			"amount": 7e3
		},
		{
			"id": "exp-069",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "masako rt",
			"amount": 5e3
		},
		{
			"id": "exp-070",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "susu diamond",
			"amount": 21e3
		},
		{
			"id": "exp-071",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "nugget",
			"amount": 31500
		},
		{
			"id": "exp-072",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "chiken karage",
			"amount": 89e3
		},
		{
			"id": "exp-073",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "kaki naga",
			"amount": 17500
		},
		{
			"id": "exp-074",
			"date": "2026-09-07",
			"category": "Operasional",
			"desc": "katering",
			"amount": 455e3
		},
		{
			"id": "exp-075",
			"date": "2026-09-07",
			"category": "Lain-lain",
			"desc": "Materai",
			"amount": 75e3
		},
		{
			"id": "exp-076",
			"date": "2026-09-07",
			"category": "Bahan Baku",
			"desc": "kentang cringkle",
			"amount": 6e4
		},
		{
			"id": "exp-077",
			"date": "2026-09-08",
			"category": "Gaji",
			"desc": "Mas riyan",
			"amount": 106e4
		},
		{
			"id": "exp-078",
			"date": "2026-09-08",
			"category": "prive",
			"desc": "prive",
			"amount": 1016100
		},
		{
			"id": "exp-079",
			"date": "2026-09-08",
			"category": "Bahan Baku",
			"desc": "telur",
			"amount": 24e3
		},
		{
			"id": "exp-080",
			"date": "2026-09-08",
			"category": "Bahan Baku",
			"desc": "selada",
			"amount": 5e3
		},
		{
			"id": "exp-081",
			"date": "2026-09-08",
			"category": "Bahan Baku",
			"desc": "susu diamond",
			"amount": 63e3
		},
		{
			"id": "exp-082",
			"date": "2026-09-08",
			"category": "Bahan Baku",
			"desc": "singkong Frozen",
			"amount": 25e3
		},
		{
			"id": "exp-083",
			"date": "2026-09-08",
			"category": "Bahan Baku",
			"desc": "ayam karage",
			"amount": 45e3
		},
		{
			"id": "exp-084",
			"date": "2026-09-08",
			"category": "Bahan Baku",
			"desc": "co kopi kakek dan tier 3",
			"amount": 332e3
		},
		{
			"id": "exp-085",
			"date": "2026-09-09",
			"category": "Bahan Baku",
			"desc": "air isi ulang dan cleo",
			"amount": 27e3
		},
		{
			"id": "exp-086",
			"date": "2026-09-09",
			"category": "Bahan Baku",
			"desc": "susu diamond",
			"amount": 82e3
		},
		{
			"id": "exp-087",
			"date": "2026-09-09",
			"category": "Bahan Baku",
			"desc": "timun",
			"amount": 7e3
		},
		{
			"id": "exp-088",
			"date": "2026-09-09",
			"category": "Bahan Baku",
			"desc": "bawang merah",
			"amount": 3e4
		},
		{
			"id": "exp-089",
			"date": "2026-09-09",
			"category": "Operasional",
			"desc": "token listrik",
			"amount": 202e3
		},
		{
			"id": "exp-090",
			"date": "2026-09-09",
			"category": "Bahan Baku",
			"desc": "bubuk coklat",
			"amount": 25e4
		}
	],
	incomes: [
		{
			"id": "inc-01",
			"date": "2026-08-15",
			"category": "Sewa Tempat",
			"desc": "DP Event XL",
			"amount": 189e4,
			"status": "Lunas"
		},
		{
			"id": "inc-02",
			"date": "2026-08-17",
			"category": "Sewa Tempat",
			"desc": "Rumah Inggris - Sewa dan Makan",
			"amount": 895e3,
			"status": "Lunas"
		},
		{
			"id": "inc-03",
			"date": "2026-08-20",
			"category": "Sewa Tempat",
			"desc": "Pelunasan XL",
			"amount": 441e4,
			"status": "Lunas"
		}
	],
	incidents: [
		{
			"id": "ins-01",
			"date": "2026-08-09",
			"staff": "gala",
			"category": "Keterlambatan",
			"desc": "Sering terlambat",
			"action": "SP1",
			"loss": 0,
			"status": "Selesai"
		},
		{
			"id": "ins-02",
			"date": "2026-08-23",
			"staff": "randy",
			"category": "Pelanggaran SOP",
			"desc": "Lalai",
			"action": "SP1",
			"loss": 0,
			"status": "Selesai"
		},
		{
			"id": "ins-03",
			"date": "2026-08-23",
			"staff": "adi",
			"category": "Pelanggaran SOP",
			"desc": "Tidak mengikuti arahan",
			"action": "SP1",
			"loss": 0,
			"status": "Selesai"
		},
		{
			"id": "ins-04",
			"date": "2026-08-31",
			"staff": "adi",
			"category": "Pelanggaran SOP",
			"desc": "Listrik tidak dicek",
			"action": "SP2",
			"loss": 0,
			"status": "Selesai"
		}
	],
	dailySales: [
		{
			"date": "2026-08-27",
			"omzet": 1104e3
		},
		{
			"date": "2026-08-28",
			"omzet": 1557e3
		},
		{
			"date": "2026-08-29",
			"omzet": 2202500
		},
		{
			"date": "2026-08-30",
			"omzet": 1232500
		},
		{
			"date": "2026-08-31",
			"omzet": 1457500
		},
		{
			"date": "2026-09-01",
			"omzet": 984500
		},
		{
			"date": "2026-09-02",
			"omzet": 1052e3
		},
		{
			"date": "2026-09-03",
			"omzet": 775e3
		},
		{
			"date": "2026-09-04",
			"omzet": 1001500
		},
		{
			"date": "2026-09-05",
			"omzet": 1140500
		},
		{
			"date": "2026-09-06",
			"omzet": 1864e3
		},
		{
			"date": "2026-09-07",
			"omzet": 2828e3
		},
		{
			"date": "2026-09-08",
			"omzet": 1735500
		},
		{
			"date": "2026-09-09",
			"omzet": 1039e3
		}
	],
	dailyBooks: [
		{
			"date": "2026-08-12",
			"income": 9455e3,
			"cogs": 3165595,
			"expense": 0,
			"profit": 6289405
		},
		{
			"date": "2026-08-14",
			"income": 1023500,
			"cogs": 256481,
			"expense": 3898e3,
			"profit": -3130981
		},
		{
			"date": "2026-08-15",
			"income": 4316e3,
			"cogs": 848281,
			"expense": 81800,
			"profit": 3385919
		},
		{
			"date": "2026-08-16",
			"income": 2867500,
			"cogs": 938829,
			"expense": 125e3,
			"profit": 1803671
		},
		{
			"date": "2026-08-17",
			"income": 2132500,
			"cogs": 382947,
			"expense": 4e5,
			"profit": 1349553
		},
		{
			"date": "2026-08-18",
			"income": 909e3,
			"cogs": 298501,
			"expense": 195e3,
			"profit": 415499
		},
		{
			"date": "2026-08-19",
			"income": 1389e3,
			"cogs": 424826,
			"expense": 2215e3,
			"profit": -1250826
		},
		{
			"date": "2026-08-20",
			"income": 4777e3,
			"cogs": 112297,
			"expense": 1695e3,
			"profit": 2969703
		},
		{
			"date": "2026-08-21",
			"income": 1289e3,
			"cogs": 471553,
			"expense": 448e3,
			"profit": 369447
		},
		{
			"date": "2026-08-22",
			"income": 2079500,
			"cogs": 617263,
			"expense": 465500,
			"profit": 996737
		},
		{
			"date": "2026-08-23",
			"income": 993e3,
			"cogs": 404221,
			"expense": 28e4,
			"profit": 308779
		},
		{
			"date": "2026-08-24",
			"income": 826e3,
			"cogs": 200176,
			"expense": 28e3,
			"profit": 597824
		},
		{
			"date": "2026-08-25",
			"income": 1076e3,
			"cogs": 344849,
			"expense": 455e3,
			"profit": 276151
		},
		{
			"date": "2026-08-26",
			"income": 691e3,
			"cogs": 173735,
			"expense": 1e5,
			"profit": 417265
		},
		{
			"date": "2026-08-27",
			"income": 1104e3,
			"cogs": 367764,
			"expense": 35e4,
			"profit": 386236
		},
		{
			"date": "2026-08-28",
			"income": 1557e3,
			"cogs": 410112,
			"expense": 0,
			"profit": 1146888
		},
		{
			"date": "2026-08-29",
			"income": 2202500,
			"cogs": 665516,
			"expense": 574e3,
			"profit": 962984
		},
		{
			"date": "2026-08-30",
			"income": 1232500,
			"cogs": 430645,
			"expense": 9177e3,
			"profit": -8375145
		},
		{
			"date": "2026-08-31",
			"income": 1457500,
			"cogs": 507915,
			"expense": 0,
			"profit": 949585
		},
		{
			"date": "2026-09-01",
			"income": 984500,
			"cogs": 366254,
			"expense": 887e3,
			"profit": -268754
		},
		{
			"date": "2026-09-02",
			"income": 1052e3,
			"cogs": 313440,
			"expense": 47e4,
			"profit": 268560
		},
		{
			"date": "2026-09-03",
			"income": 775e3,
			"cogs": 216969,
			"expense": 882e3,
			"profit": -323969
		},
		{
			"date": "2026-09-04",
			"income": 1001500,
			"cogs": 325299,
			"expense": 522e3,
			"profit": 154201
		},
		{
			"date": "2026-09-05",
			"income": 1140500,
			"cogs": 360417,
			"expense": 470500,
			"profit": 309583
		},
		{
			"date": "2026-09-06",
			"income": 1864e3,
			"cogs": 625343,
			"expense": 446e3,
			"profit": 792657
		},
		{
			"date": "2026-09-07",
			"income": 2828e3,
			"cogs": 927211,
			"expense": 5465500,
			"profit": -3564711
		},
		{
			"date": "2026-09-08",
			"income": 1735500,
			"cogs": 665052,
			"expense": 1654100,
			"profit": -583652
		},
		{
			"date": "2026-09-09",
			"income": 1039e3,
			"cogs": 301764,
			"expense": 598e3,
			"profit": 139236
		}
	],
	weekly: [
		{
			"week": "2026-W33",
			"income": 17662e3,
			"expense": 4104800,
			"cogs": 5209186,
			"profit": 8348014
		},
		{
			"week": "2026-W34",
			"income": 13569e3,
			"expense": 5698500,
			"cogs": 2711608,
			"profit": 5158892
		},
		{
			"week": "2026-W35",
			"income": 8689e3,
			"expense": 10684e3,
			"cogs": 2592797,
			"profit": -4587797
		},
		{
			"week": "2026-W36",
			"income": 8275e3,
			"expense": 1176e3,
			"cogs": 2715637,
			"profit": 4383363
		},
		{
			"week": "2026-W37",
			"income": 5602500,
			"expense": 565e4,
			"cogs": 1894027,
			"profit": -1941527
		}
	]
};
var PRODUCTS = raw.products;
var EXPENSES = raw.expenses;
var INCOMES = raw.incomes;
var INCIDENTS = raw.incidents;
var DAILY_SALES = raw.dailySales;
var DAILY_BOOKS = raw.dailyBooks;
var WEEKLY = raw.weekly;
var STAFF = [
	{
		id: "randy",
		name: "Randy",
		role: "Barista / Floor",
		pin: "1234",
		access: "Kasir Only",
		active: true
	},
	{
		id: "anto",
		name: "Anto",
		role: "Cashier",
		pin: "1234",
		access: "Kasir Only",
		active: true
	},
	{
		id: "gala",
		name: "Gala",
		role: "Kitchen Head",
		pin: "1234",
		access: "Kasir Only",
		active: true
	},
	{
		id: "kukuh",
		name: "Kukuh",
		role: "Floor & Support",
		pin: "1234",
		access: "Kasir Only",
		active: true
	},
	{
		id: "adi",
		name: "Adi",
		role: "Operations",
		pin: "1234",
		access: "Kasir Only",
		active: true
	},
	{
		id: "bagas",
		name: "Bagas",
		role: "Owner",
		pin: "7788",
		access: "Full Admin",
		active: true
	}
];
var ADMIN_PIN = "7788";
var ADDONS = [
	{
		id: "ad1",
		name: "Extra Shot",
		price: 8e3
	},
	{
		id: "ad2",
		name: "Oat Milk",
		price: 5e3
	},
	{
		id: "ad3",
		name: "Less Ice",
		price: 0
	},
	{
		id: "ad4",
		name: "Extra Syrup",
		price: 3e3
	},
	{
		id: "ad5",
		name: "Extra Keju",
		price: 4e3
	}
];
var INVENTORY = [
	{
		id: "inv1",
		name: "Biji Kopi House Blend",
		sku: "ING-01",
		stock: 12.5,
		minStock: 3,
		unit: "kg",
		cost: 24e4
	},
	{
		id: "inv2",
		name: "Susu Segar Diamond UHT",
		sku: "ING-02",
		stock: 24,
		minStock: 6,
		unit: "L",
		cost: 18500
	},
	{
		id: "inv3",
		name: "Sirup House",
		sku: "ING-03",
		stock: 4.2,
		minStock: 1,
		unit: "L",
		cost: 45e3
	},
	{
		id: "inv4",
		name: "Beras SPHP",
		sku: "ING-04",
		stock: 18,
		minStock: 5,
		unit: "kg",
		cost: 14e3
	},
	{
		id: "inv5",
		name: "Telur",
		sku: "ING-05",
		stock: 4.5,
		minStock: 2,
		unit: "kg",
		cost: 28e3
	},
	{
		id: "inv6",
		name: "Kentang Crinkle",
		sku: "ING-06",
		stock: 6,
		minStock: 2,
		unit: "kg",
		cost: 22e3
	},
	{
		id: "inv7",
		name: "Matcha Ceremonial",
		sku: "ING-07",
		stock: .8,
		minStock: .3,
		unit: "kg",
		cost: 42e4
	},
	{
		id: "inv8",
		name: "Bubuk Coklat",
		sku: "ING-08",
		stock: 1.6,
		minStock: .4,
		unit: "kg",
		cost: 95e3
	},
	{
		id: "inv9",
		name: "Ayam Karaage",
		sku: "ING-09",
		stock: 3.2,
		minStock: 1.5,
		unit: "kg",
		cost: 65e3
	},
	{
		id: "inv10",
		name: "Cup & Tutup",
		sku: "ING-10",
		stock: 420,
		minStock: 80,
		unit: "pcs",
		cost: 350
	}
];
var RECIPES = [
	{
		productId: "m03",
		ingredientId: "inv1",
		qty: .018
	},
	{
		productId: "m03",
		ingredientId: "inv2",
		qty: .18
	},
	{
		productId: "m07",
		ingredientId: "inv1",
		qty: .018
	},
	{
		productId: "m08",
		ingredientId: "inv1",
		qty: .018
	},
	{
		productId: "m08",
		ingredientId: "inv2",
		qty: .18
	},
	{
		productId: "m04",
		ingredientId: "inv4",
		qty: .15
	},
	{
		productId: "m04",
		ingredientId: "inv5",
		qty: .06
	},
	{
		productId: "m01",
		ingredientId: "inv3",
		qty: .03
	},
	{
		productId: "m17",
		ingredientId: "inv6",
		qty: .12
	},
	{
		productId: "m30",
		ingredientId: "inv7",
		qty: .008
	},
	{
		productId: "m31",
		ingredientId: "inv8",
		qty: .02
	}
];
var TUTUP_BUKU = [{
	period: "2026-08",
	startDate: "2026-08-07",
	endDate: "2026-09-06",
	income: 47933e3,
	expense: 26051300,
	cogs: 13174636,
	profit: 8707064,
	status: "Selesai",
	pic: "Admin HVEN",
	note: "Tutup buku 7 Agustus – 6 September 2026 terarsip 7 September 2026"
}, {
	period: "2026-09",
	startDate: "2026-09-07",
	endDate: "2026-10-06",
	income: 0,
	expense: 0,
	cogs: 0,
	profit: 0,
	status: "Dalam Proses",
	pic: "Admin HVEN",
	note: "Periode berjalan. Jadwal kunci: 7 Oktober 2026"
}];
var VENUE_PACKAGES = [{
	id: "v1",
	name: "Paket 2 Jam Standar",
	price: 2e5,
	points: ["Tanpa meja dan kursi", "Listrik AC & lampu terpasang"]
}, {
	id: "v2",
	name: "Paket 2 Jam Lengkap",
	price: 3e5,
	points: ["Termasuk 8 meja dan 25 kursi (maks.)", "Listrik AC & lampu terpasang"]
}];
var VENUE_EXTRAS = [
	{
		name: "Kelebihan waktu per jam",
		price: "Rp 150.000"
	},
	{
		name: "Tambahan perlengkapan",
		price: "Per item"
	},
	{
		name: "Charge makan-minum dari luar",
		price: "25% dari harga sewa"
	},
	{
		name: "Alat musik / band",
		price: "Rp 100.000"
	},
	{
		name: "Listrik melebihi kapasitas",
		price: "Tambah daya PLN"
	}
];
var SAMPLE_ORDERS = [
	{
		id: "ord-demo-1",
		number: "HV-0909-014",
		createdAt: "2026-09-09T14:12:00+07:00",
		type: "Dine In",
		table: "04",
		customer: "Raka",
		items: [{
			key: "a",
			productId: "m04",
			name: "Nasi Goreng Kara",
			price: 25e3,
			cogs: 7920,
			qty: 2,
			addons: [],
			note: "",
			kitchen: true
		}, {
			key: "b",
			productId: "m03",
			name: "Latte Ice",
			price: 25e3,
			cogs: 7650,
			qty: 2,
			addons: [],
			note: "Less ice",
			kitchen: true
		}],
		subtotal: 1e5,
		discount: 0,
		discountLabel: "",
		tax: 1e4,
		total: 11e4,
		payment: "QRIS",
		tendered: 11e4,
		change: 0,
		status: "paid",
		cashier: "Randy",
		kdsStatus: "done"
	},
	{
		id: "ord-demo-2",
		number: "HV-0909-015",
		createdAt: "2026-09-09T15:40:00+07:00",
		type: "Dine In",
		table: "07",
		customer: "Workshop Diantara",
		items: [{
			key: "c",
			productId: "m01",
			name: "Sexy Lady",
			price: 25e3,
			cogs: 7100,
			qty: 3,
			addons: [],
			note: "",
			kitchen: true
		}, {
			key: "d",
			productId: "m17",
			name: "Curly Fries",
			price: 22e3,
			cogs: 4480,
			qty: 2,
			addons: [],
			note: "Extra saus",
			kitchen: true
		}],
		subtotal: 119e3,
		discount: 0,
		discountLabel: "",
		tax: 11900,
		total: 130900,
		payment: "Cash",
		tendered: 15e4,
		change: 19100,
		status: "paid",
		cashier: "Randy",
		kdsStatus: "cooking"
	},
	{
		id: "ord-demo-3",
		number: "HV-0909-016",
		createdAt: "2026-09-09T16:05:00+07:00",
		type: "Takeaway",
		table: "-",
		customer: "Grab",
		items: [{
			key: "e",
			productId: "m31",
			name: "Pure Chocolade",
			price: 29e3,
			cogs: 5200,
			qty: 2,
			addons: [],
			note: "",
			kitchen: true
		}, {
			key: "f",
			productId: "m11",
			name: "Air mineral besar",
			price: 17500,
			cogs: 3300,
			qty: 1,
			addons: [],
			note: "",
			kitchen: false
		}],
		subtotal: 75500,
		discount: 0,
		discountLabel: "",
		tax: 7550,
		total: 83050,
		payment: "QRIS",
		tendered: 83050,
		change: 0,
		status: "paid",
		cashier: "Anto",
		kdsStatus: "new"
	}
];
var SAMPLE_ATTENDANCE = [{
	id: "att-1",
	staffId: "randy",
	staffName: "Randy",
	date: "2026-09-09",
	clockIn: "2026-09-09T07:58:00+07:00",
	status: "Tepat Waktu",
	note: "Buka bar & grind kopi"
}, {
	id: "att-2",
	staffId: "gala",
	staffName: "Gala",
	date: "2026-09-09",
	clockIn: "2026-09-09T08:22:00+07:00",
	status: "Terlambat",
	note: "Kitchen prep"
}];
var EXECUTIVE = {
	totalOmzet: 53797500,
	netProfit: 11360945,
	priveTaken: 11788100,
	freeCash: -427155,
	cogsRatio: .2811,
	laborRatio: .1376,
	netMargin: .2112,
	stockReserve: 15752572,
	payrollReserve: 7405e3,
	mtdOmzet: 5602500,
	mtdCups: 480
};
function formatIDR(value) {
	const n = Number(value || 0);
	return "Rp " + Math.round(n).toLocaleString("id-ID");
}
function formatIDRCompact(value) {
	const n = Math.abs(value);
	const sign = value < 0 ? "-" : "";
	if (n >= 1e9) return `${sign}Rp ${(value / 1e9).toFixed(1)} Miliar`;
	if (n >= 1e6) return `${sign}Rp ${(value / 1e6).toFixed(1)} Jt`;
	if (n >= 1e3) return `${sign}Rp ${(value / 1e3).toFixed(0)} Rb`;
	return formatIDR(value);
}
function formatPct(value, digits = 1) {
	return `${(value * 100).toFixed(digits)}%`;
}
function todayISO() {
	const d = /* @__PURE__ */ new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function formatDateID(iso) {
	if (!iso) return "—";
	const d = /* @__PURE__ */ new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString("id-ID", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});
}
function formatTimeID(iso) {
	return (iso ? new Date(iso) : /* @__PURE__ */ new Date()).toLocaleTimeString("id-ID", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	});
}
function uid(prefix) {
	return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}
var RESTRICTED_VIEWS = [
	"target",
	"dashboard",
	"expenses",
	"income",
	"tutupbuku",
	"engineering",
	"staff"
];
var TAX_RATE = .1;
var MONTHLY_TARGET = 6e7;
var DAILY_TARGET = 2e6;
function lineTotal(item) {
	const add = item.addons.reduce((s, a) => s + a.price, 0);
	return (item.price + add) * item.qty;
}
function deductRecipes(inventory, items) {
	const next = inventory.map((i) => ({ ...i }));
	for (const item of items) {
		const lines = RECIPES.filter((r) => r.productId === item.productId);
		for (const line of lines) {
			const ing = next.find((n) => n.id === line.ingredientId);
			if (ing) ing.stock = Math.max(0, Number((ing.stock - line.qty * item.qty).toFixed(3)));
		}
		const cup = next.find((n) => n.id === "inv10");
		if (cup && item.kitchen) cup.stock = Math.max(0, cup.stock - item.qty);
	}
	return next;
}
var usePos = create()(persist((set, get) => ({
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
	addons: ADDONS,
	cart: [],
	orderType: "Dine In",
	table: "01",
	customer: "",
	discount: 0,
	discountLabel: "",
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
		openingCash: 5e5,
		cashSales: 15e4,
		nonCashSales: 193950,
		cashier: "Randy"
	},
	notifications: [{
		id: "n1",
		type: "SHIFT",
		title: "Shift pagi dibuka",
		message: "Randy membuka shift dengan modal kas Rp 500.000",
		time: "08:00"
	}],
	audit: [{
		id: "au1",
		time: "2026-09-09 08:00",
		actor: "Randy",
		action: "Buka shift kasir"
	}],
	tutupBuku: TUTUP_BUKU,
	dailySales: DAILY_SALES,
	dailyBooks: DAILY_BOOKS,
	weekly: WEEKLY,
	lastReceipt: null,
	paymentOpen: false,
	receiptOpen: false,
	productModal: null,
	productFormOpen: false,
	setView: (view) => {
		const { role } = get();
		if (RESTRICTED_VIEWS.includes(view) && role !== "owner") {
			set({
				pendingView: view,
				pinOpen: true
			});
			return;
		}
		set({
			view,
			search: view === "pos" ? get().search : get().search
		});
	},
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
				audit: [{
					id: uid("au"),
					time: (/* @__PURE__ */ new Date()).toLocaleString("id-ID"),
					actor: owner?.name ?? "Bagas",
					action: "Otorisasi admin"
				}, ...get().audit]
			});
			return true;
		}
		return false;
	},
	closePin: () => set({
		pinOpen: false,
		pendingView: null
	}),
	logoutOwner: () => set({
		role: "cashier",
		currentStaffId: "randy",
		view: "pos"
	}),
	switchStaff: (id) => {
		const s = get().staff.find((x) => x.id === id);
		if (!s) return;
		set({
			currentStaffId: id,
			role: s.access === "Full Admin" ? "owner" : "cashier"
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
		else cart.unshift({
			key,
			productId: product.id,
			name: product.name,
			price: product.price,
			cogs: product.cogs,
			qty: 1,
			addons,
			note,
			kitchen: product.kitchen
		});
		set({ cart });
	},
	changeQty: (key, delta) => {
		set({ cart: get().cart.map((c) => c.key === key ? {
			...c,
			qty: c.qty + delta
		} : c).filter((c) => c.qty > 0) });
	},
	removeCart: (key) => set({ cart: get().cart.filter((c) => c.key !== key) }),
	clearCart: () => set({
		cart: [],
		discount: 0,
		discountLabel: ""
	}),
	setDiscount: (amount, label) => set({
		discount: Math.max(0, amount),
		discountLabel: label
	}),
	totals: () => {
		const { cart, discount } = get();
		const qty = cart.reduce((s, c) => s + c.qty, 0);
		const subtotal = cart.reduce((s, c) => s + lineTotal(c), 0);
		const d = Math.min(discount, subtotal);
		const taxable = Math.max(0, subtotal - d);
		const tax = Math.round(taxable * TAX_RATE);
		return {
			qty,
			subtotal,
			discount: d,
			tax,
			total: taxable + tax
		};
	},
	checkout: (method, tendered) => {
		const { cart, orderType, table, customer, discount, discountLabel, currentStaffId, staff, products } = get();
		if (cart.length === 0) return null;
		const t = get().totals();
		if (method === "Cash" && tendered < t.total) return null;
		const cashier = staff.find((s) => s.id === currentStaffId)?.name ?? "Kasir";
		const seq = get().orders.length + 17;
		const order = {
			id: uid("ord"),
			number: `HV-0909-${String(seq).padStart(3, "0")}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			type: orderType,
			table: orderType === "Dine In" ? table : "-",
			customer: customer || (orderType === "Takeaway" ? "Takeaway" : "Tamu"),
			items: cart,
			subtotal: t.subtotal,
			discount: t.discount,
			discountLabel,
			tax: t.tax,
			total: t.total,
			payment: method,
			tendered: method === "Cash" ? tendered : t.total,
			change: method === "Cash" ? tendered - t.total : 0,
			status: "paid",
			cashier,
			kdsStatus: cart.some((c) => c.kitchen) ? "new" : "done"
		};
		const nextProducts = products.map((p) => {
			const sold = cart.filter((c) => c.productId === p.id).reduce((s, c) => s + c.qty, 0);
			if (!sold) return p;
			return {
				...p,
				stock: Math.max(0, p.stock - sold),
				soldQty: p.soldQty + sold
			};
		});
		const shift = { ...get().shift };
		if (method === "Cash") shift.cashSales += t.total;
		else shift.nonCashSales += t.total;
		const cups = cart.reduce((s, c) => s + c.qty, 0);
		const dailySales = [...get().dailySales];
		const today = todayISO();
		const row = dailySales.find((d) => d.date === today);
		if (row) row.omzet += t.total;
		else dailySales.push({
			date: today,
			omzet: t.total
		});
		set({
			orders: [order, ...get().orders],
			products: nextProducts,
			inventory: deductRecipes(get().inventory, cart),
			cart: [],
			discount: 0,
			discountLabel: "",
			customer: "",
			shift,
			lastReceipt: order,
			paymentOpen: false,
			receiptOpen: true,
			dailySales,
			notifications: [{
				id: uid("n"),
				type: "SALE",
				title: `Order ${order.number} lunas`,
				message: `${order.customer} • ${method} • ${cups} item`,
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString("id-ID", {
					hour: "2-digit",
					minute: "2-digit"
				})
			}, ...get().notifications]
		});
		return order;
	},
	voidOrder: (id) => {
		if (get().role !== "owner") {
			set({
				pinOpen: true,
				pendingView: get().view
			});
			return;
		}
		set({ orders: get().orders.map((o) => o.id === id ? {
			...o,
			status: "void",
			kdsStatus: "done"
		} : o) });
	},
	setKds: (id, status) => set({ orders: get().orders.map((o) => o.id === id ? {
		...o,
		kdsStatus: status
	} : o) }),
	addExpense: (e) => set({ expenses: [{
		id: uid("exp"),
		...e
	}, ...get().expenses] }),
	deleteExpense: (id) => set({ expenses: get().expenses.filter((e) => e.id !== id) }),
	addIncome: (e) => set({ incomes: [{
		id: uid("inc"),
		...e
	}, ...get().incomes] }),
	addIncident: (e) => {
		set({ incidents: [{
			id: uid("ins"),
			...e
		}, ...get().incidents] });
		if (e.loss > 0) get().notify("INCIDENT", `Insiden ${e.category}`, `${e.staff}: ${e.desc}`);
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
	deleteProduct: (id) => set({ products: get().products.filter((p) => p.id !== id) }),
	clock: (staffId, note) => {
		const s = get().staff.find((x) => x.id === staffId);
		if (!s) return;
		const date = todayISO();
		const open = get().attendance.find((a) => a.staffId === staffId && a.date === date && !a.clockOut);
		if (open) {
			set({ attendance: get().attendance.map((a) => a.id === open.id ? {
				...a,
				clockOut: (/* @__PURE__ */ new Date()).toISOString(),
				status: "Pulang"
			} : a) });
			return;
		}
		const hour = (/* @__PURE__ */ new Date()).getHours();
		const minute = (/* @__PURE__ */ new Date()).getMinutes();
		const late = hour > 8 || hour === 8 && minute > 15;
		set({ attendance: [{
			id: uid("att"),
			staffId,
			staffName: s.name,
			date,
			clockIn: (/* @__PURE__ */ new Date()).toISOString(),
			status: late ? "Terlambat" : "Tepat Waktu",
			note
		}, ...get().attendance] });
	},
	openShift: (cash) => {
		const name = get().staff.find((s) => s.id === get().currentStaffId)?.name ?? "Kasir";
		set({ shift: {
			open: true,
			openedAt: (/* @__PURE__ */ new Date()).toISOString(),
			openingCash: cash,
			cashSales: 0,
			nonCashSales: 0,
			cashier: name
		} });
	},
	closeShift: () => set({ shift: {
		...get().shift,
		open: false
	} }),
	addStaff: (s) => set({ staff: [...get().staff, s] }),
	updateStaff: (s) => set({ staff: get().staff.map((x) => x.id === s.id ? s : x) }),
	setAdminPin: (pin) => set({ adminPin: pin }),
	adjustStock: (id, stock) => set({ inventory: get().inventory.map((i) => i.id === id ? {
		...i,
		stock
	} : i) }),
	notify: (type, title, message) => set({ notifications: [{
		id: uid("n"),
		type,
		title,
		message,
		time: (/* @__PURE__ */ new Date()).toLocaleTimeString("id-ID", {
			hour: "2-digit",
			minute: "2-digit"
		})
	}, ...get().notifications] }),
	lockPeriod: () => {
		set({ tutupBuku: get().tutupBuku.map((t) => t.status === "Dalam Proses" ? {
			...t,
			status: "Selesai",
			income: get().dailySales.reduce((s, d) => s + d.omzet, 0),
			expense: get().expenses.reduce((s, e) => s + e.amount, 0),
			note: "Dikunci dari POS HVEN"
		} : t) });
	},
	setPaymentOpen: (v) => set({ paymentOpen: v }),
	setReceiptOpen: (v) => set({ receiptOpen: v }),
	setProductModal: (p) => set({ productModal: p }),
	setProductFormOpen: (v) => set({ productFormOpen: v })
}), {
	name: "hven-pos-v1",
	skipHydration: true,
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
		currentStaffId: s.currentStaffId
	})
}));
function PinModal() {
	const open = usePos((s) => s.pinOpen);
	const confirmPin = usePos((s) => s.confirmPin);
	const closePin = usePos((s) => s.closePin);
	const [buf, setBuf] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (open) {
			setBuf("");
			setErr("");
		}
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (buf.length === 4) {
			if (!confirmPin(buf)) {
				setErr("PIN salah");
				setTimeout(() => setBuf(""), 400);
			}
		}
	}, [buf, confirmPin]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && closePin(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			title: "Otorisasi Owner",
			className: "max-w-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-center text-sm text-muted-foreground",
					children: "Masukkan PIN admin 4 digit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 flex justify-center gap-3",
					children: [
						0,
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-3 rounded-full border ${i < buf.length ? "border-primary bg-primary" : "border-muted-foreground/40"}` }, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 min-h-5 text-center text-xs text-destructive",
					children: err
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid w-52 grid-cols-3 gap-2",
					children: [
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
						"C",
						"0",
						"⌫"
					].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						className: "h-11 font-mono text-base",
						onClick: () => {
							if (d === "C") setBuf("");
							else if (d === "⌫") setBuf((b) => b.slice(0, -1));
							else if (buf.length < 4) setBuf((b) => b + d);
						},
						children: d === "⌫" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delete, { className: "size-4" }) : d
					}, d))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-xs text-muted-foreground",
					children: "Hint demo: PIN owner 7788"
				})
			]
		})
	});
}
function PaymentModal() {
	const open = usePos((s) => s.paymentOpen);
	const setOpen = usePos((s) => s.setPaymentOpen);
	const totals = usePos((s) => s.totals);
	const checkout = usePos((s) => s.checkout);
	const t = totals();
	const [method, setMethod] = (0, import_react.useState)("Cash");
	const [tendered, setTendered] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (open) {
			setMethod("Cash");
			setTendered(t.total);
		}
	}, [open, t.total]);
	const change = method === "Cash" ? Math.max(0, tendered - t.total) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			title: "Pembayaran",
			className: "max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 rounded-lg bg-muted px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-muted-foreground",
						children: "Total tagihan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-2xl font-medium tabular-nums text-primary",
						children: formatIDR(t.total)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 grid grid-cols-4 gap-2",
					children: [
						"Cash",
						"QRIS",
						"Debit",
						"Transfer"
					].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: method === m ? "default" : "secondary",
						size: "sm",
						onClick: () => setMethod(m),
						children: m
					}, m))
				}),
				method === "Cash" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs text-muted-foreground",
							children: "Uang diterima"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: tendered || "",
							onChange: (e) => setTendered(Number(e.target.value)),
							className: "font-mono"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								t.total,
								5e4,
								1e5,
								15e4,
								2e5
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setTendered(n),
								children: n === t.total ? "Uang pas" : formatIDR(n)
							}, n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: ["Kembalian ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-foreground",
								children: formatIDR(change)
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					size: "lg",
					disabled: method === "Cash" && tendered < t.total,
					onClick: () => checkout(method, tendered),
					children: "Konfirmasi bayar"
				})
			]
		})
	});
}
function ReceiptModal() {
	const open = usePos((s) => s.receiptOpen);
	const setOpen = usePos((s) => s.setReceiptOpen);
	const order = usePos((s) => s.lastReceipt);
	if (!order) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			title: "Struk",
			className: "max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "thermal-receipt",
				className: "rounded-md bg-foreground p-4 font-mono text-xs text-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-semibold",
								children: "HVEN SPACE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cafe & Experience Hub" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: order.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: formatTimeID(order.createdAt) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 border-t border-dashed border-background/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						order.type,
						" ",
						order.table !== "-" ? `• Meja ${order.table}` : "",
						" • ",
						order.customer
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "my-2 space-y-1",
						children: order.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								it.qty,
								"× ",
								it.name
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatIDR((it.price + it.addons.reduce((s, a) => s + a.price, 0)) * it.qty) })]
						}, it.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-dashed border-background/30 pt-2 space-y-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatIDR(order.subtotal) })]
							}),
							order.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Diskon ", order.discountLabel] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["-", formatIDR(order.discount)] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PB1 10%" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatIDR(order.tax) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TOTAL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatIDR(order.total) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: order.payment }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatIDR(order.tendered) })]
							}),
							order.change > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kembali" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatIDR(order.change) })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-center",
						children: ["Kasir ", order.cashier]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center",
						children: "Terima kasih"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					className: "flex-1",
					onClick: () => setOpen(false),
					children: "Tutup"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "flex-1",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), " Cetak"]
				})]
			})]
		})
	});
}
function ModifierModal() {
	const product = usePos((s) => s.productModal);
	const setProductModal = usePos((s) => s.setProductModal);
	const addToCart = usePos((s) => s.addToCart);
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [note, setNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setPicked([]);
		setNote("");
	}, [product?.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!product,
		onOpenChange: (v) => !v && setProductModal(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			title: product?.name ?? "Modifier",
			children: product && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-12 items-center justify-center rounded-lg bg-muted text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductIcon, {
								name: product.icon,
								className: "size-5"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: product.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-primary",
							children: formatIDR(product.price)
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: ADDONS.map((a) => {
							const on = picked.includes(a.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: on ? "default" : "outline",
								onClick: () => setPicked((p) => on ? p.filter((x) => x !== a.id) : [...p, a.id]),
								children: [
									a.name,
									" ",
									a.price ? `+${formatIDR(a.price)}` : ""
								]
							}, a.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Catatan dapur (opsional)",
						value: note,
						onChange: (e) => setNote(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						onClick: () => {
							addToCart(product, ADDONS.filter((a) => picked.includes(a.id)), note);
							setProductModal(null);
						},
						children: "Tambah ke keranjang"
					})
				]
			})
		})
	});
}
function ProductFormModal() {
	const open = usePos((s) => s.productFormOpen);
	const setOpen = usePos((s) => s.setProductFormOpen);
	const upsert = usePos((s) => s.upsertProduct);
	const [name, setName] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("Coffee");
	const [price, setPrice] = (0, import_react.useState)(25e3);
	const [cogs, setCogs] = (0, import_react.useState)(7e3);
	const [stock, setStock] = (0, import_react.useState)(20);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			title: "Menu baru",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-3",
				onSubmit: (e) => {
					e.preventDefault();
					const p = {
						id: uid("m"),
						name,
						category: cat,
						sku: `HVN-X${Date.now().toString().slice(-4)}`,
						price,
						cogs,
						margin: price ? (price - cogs) / price : 0,
						stock,
						available: true,
						icon: "Coffee",
						soldQty: 0,
						quadrant: "Puzzle",
						recommendation: "Menu baru — pantau penjualan 2 minggu",
						kitchen: cat !== "Water"
					};
					upsert(p);
					setOpen(false);
					setName("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						required: true,
						placeholder: "Nama menu",
						value: name,
						onChange: (e) => setName(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
						value: cat,
						onChange: (e) => setCat(e.target.value),
						children: [
							"Coffee",
							"Tea",
							"Mocktail",
							"Food",
							"Water"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: price,
								onChange: (e) => setPrice(Number(e.target.value))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: cogs,
								onChange: (e) => setCogs(Number(e.target.value))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: stock,
								onChange: (e) => setStock(Number(e.target.value))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Kolom: harga jual · COGS · stok porsi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Simpan menu"
					})
				]
			})
		})
	});
}
function NotifCenter({ open, onOpenChange }) {
	const items = usePos((s) => s.notifications);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			title: "Notifikasi owner",
			className: "max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-80 space-y-2 overflow-y-auto",
				children: [items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-8 text-center text-sm text-muted-foreground",
					children: "Belum ada notifikasi"
				}), items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-border bg-muted/50 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-primary",
							children: n.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: n.time
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: n.message
					})]
				}, n.id))]
			})
		})
	});
}
function DiscountModal({ open, onOpenChange }) {
	const setDiscount = usePos((s) => s.setDiscount);
	const totals = usePos((s) => s.totals)();
	const [mode, setMode] = (0, import_react.useState)("rp");
	const [val, setVal] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			title: "Diskon",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: mode === "rp" ? "default" : "secondary",
						onClick: () => setMode("rp"),
						children: "Rupiah"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: mode === "pct" ? "default" : "secondary",
						onClick: () => setMode("pct"),
						children: "Persen"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "number",
					value: val || "",
					onChange: (e) => setVal(Number(e.target.value))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-3 w-full",
					onClick: () => {
						const amount = mode === "pct" ? Math.round(totals.subtotal * val / 100) : val;
						setDiscount(amount, mode === "pct" ? `${val}%` : formatIDR(amount));
						onOpenChange(false);
					},
					children: "Terapkan"
				})
			]
		})
	});
}
var TYPES = [
	"Dine In",
	"Takeaway",
	"Delivery"
];
function PosView() {
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
	const [disc, setDisc] = (0, import_react.useState)(false);
	const cats = ["Semua", ...Array.from(new Set(products.map((p) => p.category)))];
	const filtered = products.filter((p) => {
		if (category !== "Semua" && p.category !== category) return false;
		if (availableOnly && (!p.available || p.stock <= 0)) return false;
		if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.sku.toLowerCase().includes(search.toLowerCase())) return false;
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col lg:flex-row",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "order-1 flex min-h-0 min-w-0 flex-1 flex-col border-b border-border lg:border-b-0 lg:border-r",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 overflow-x-auto border-b border-border px-3 py-2",
					children: [cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCategory(c),
						className: cn("shrink-0 rounded-full px-3 py-1.5 text-xs font-medium", category === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
						children: c
					}, c)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "ml-auto flex shrink-0 items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: availableOnly,
							onChange: (e) => setAvailableOnly(e.target.checked)
						}), "Ready"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 overflow-y-auto p-3",
					children: [filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-16 text-center text-sm text-muted-foreground",
						children: "Menu tidak ditemukan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
						children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product: p,
							onAdd: () => addToCart(p),
							onMod: () => setProductModal(p)
						}, p.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "order-2 flex max-h-[48%] min-h-56 w-full flex-col bg-card lg:h-full lg:max-h-none lg:w-[22rem] xl:w-96",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 border-b border-border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-1",
							children: TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: orderType === t ? "default" : "secondary",
								onClick: () => setOrderType(t),
								children: t
							}, t))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: table,
								onChange: (e) => setTable(e.target.value),
								disabled: orderType !== "Dine In",
								placeholder: "Meja"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "col-span-2",
								placeholder: "Nama tamu",
								value: customer,
								onChange: (e) => setCustomer(e.target.value)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-h-0 flex-1 overflow-y-auto p-3",
						children: [cart.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-10 text-center text-sm text-muted-foreground",
							children: "Keranjang kosong. Ketuk menu di kiri."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: cart.map((item) => {
								const add = item.addons.reduce((s, a) => s + a.price, 0);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-md border border-border bg-muted/40 p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate text-sm font-medium",
													children: item.name
												}),
												item.addons.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: item.addons.map((a) => a.name).join(", ")
												}),
												item.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-primary",
													children: item.note
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => removeCart(item.key),
											className: "text-muted-foreground hover:text-destructive",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "icon-sm",
													variant: "secondary",
													onClick: () => changeQty(item.key, -1),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-6 text-center font-mono text-sm tabular-nums",
													children: item.qty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "icon-sm",
													variant: "secondary",
													onClick: () => changeQty(item.key, 1),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" })
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-sm tabular-nums",
											children: formatIDR((item.price + add) * item.qty)
										})]
									})]
								}, item.key);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 border-t border-border p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Subtotal (",
									totals.qty,
									")"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums text-foreground",
									children: formatIDR(totals.subtotal)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex items-center gap-1 text-primary",
									onClick: () => setDisc(true),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-3.5" }),
										" ",
										discountLabel || "Diskon"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-success tabular-nums",
									children: ["-", formatIDR(totals.discount)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PB1 10%" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums",
									children: formatIDR(totals.tax)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between border-t border-border pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Total"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl font-medium tabular-nums text-primary",
									children: formatIDR(totals.total)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-5 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									className: "col-span-1 text-destructive",
									onClick: clearCart,
									"aria-label": "Kosongkan",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "col-span-4",
									size: "lg",
									disabled: cart.length === 0,
									onClick: () => setPaymentOpen(true),
									children: ["Charge ", formatIDR(totals.total)]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiscountModal, {
				open: disc,
				onOpenChange: setDisc
			})
		]
	});
}
function ProductCard({ product, onAdd, onMod }) {
	const disabled = !product.available || product.stock <= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		disabled,
		onClick: onAdd,
		onContextMenu: (e) => {
			e.preventDefault();
			if (!disabled) onMod();
		},
		className: cn("flex flex-col rounded-lg border border-border bg-card p-3 text-left transition-colors hover:border-primary/50", disabled && "opacity-40"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-9 items-center justify-center rounded-md bg-muted text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductIcon, {
						name: product.icon,
						className: "size-4"
					})
				}), product.quadrant === "Star" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "primary",
					children: "Star"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "line-clamp-2 min-h-10 text-sm font-medium",
				children: product.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-sm tabular-nums text-primary",
				children: formatIDR(product.price)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: ["Stok ", product.stock]
			})
		]
	});
}
function OrdersView() {
	const orders = usePos((s) => s.orders);
	const voidOrder = usePos((s) => s.voidOrder);
	const setReceipt = (id) => {
		const o = usePos.getState().orders.find((x) => x.id === id);
		if (o) usePos.setState({
			lastReceipt: o,
			receiptOpen: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-4 font-display text-xl font-medium",
			children: "Order List"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted text-xs uppercase tracking-wide text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
						"Nomor",
						"Waktu",
						"Tipe",
						"Tamu",
						"Total",
						"Bayar",
						"KDS",
						"Status",
						""
					].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2 font-medium",
						children: h
					}, h)) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono text-xs",
							children: o.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono text-xs text-muted-foreground",
							children: formatTimeID(o.createdAt)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: o.type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2",
							children: [
								o.customer,
								" ",
								o.table !== "-" ? `· ${o.table}` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono tabular-nums",
							children: formatIDR(o.total)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: o.payment
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: o.kdsStatus === "done" ? "success" : "warning",
								children: o.kdsStatus
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: o.status === "void" ? "danger" : "success",
								children: o.status
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => setReceipt(o.id),
								children: "Struk"
							}), o.status === "paid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "text-destructive",
								onClick: () => voidOrder(o.id),
								children: "Void"
							})]
						})
					]
				}, o.id)) })]
			})
		})]
	});
}
var KDS_COLS = [
	{
		id: "new",
		label: "Baru"
	},
	{
		id: "cooking",
		label: "Dimasak"
	},
	{
		id: "ready",
		label: "Siap"
	},
	{
		id: "done",
		label: "Selesai"
	}
];
function KitchenView() {
	const orders = usePos((s) => s.orders).filter((o) => o.status === "paid" && o.items.some((i) => i.kitchen));
	const setKds = usePos((s) => s.setKds);
	const next = {
		new: "cooking",
		cooking: "ready",
		ready: "done",
		done: null
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-3 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-medium",
			children: "Kitchen Display"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-4",
			children: KDS_COLS.map((col) => {
				const list = orders.filter((o) => o.kdsStatus === col.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-col rounded-xl border border-border bg-card p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: col.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: list.length })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1 space-y-2 overflow-y-auto",
						children: list.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-muted/40 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-foreground",
										children: o.number
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										o.type,
										" ",
										o.table !== "-" ? o.table : ""
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1 text-sm",
									children: o.items.filter((i) => i.kitchen).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										i.qty,
										"× ",
										i.name,
										i.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-primary",
											children: [" — ", i.note]
										}) : null
									] }, i.key))
								}),
								next[o.kdsStatus] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "mt-2 w-full",
									onClick: () => setKds(o.id, next[o.kdsStatus]),
									children: next[o.kdsStatus] === "cooking" ? "Mulai masak" : next[o.kdsStatus] === "ready" ? "Siap disaji" : "Selesai"
								})
							]
						}, o.id))
					})]
				}, col.id);
			})
		})]
	});
}
function AttendanceView() {
	const staff = usePos((s) => s.staff).filter((s) => s.id !== "bagas");
	const attendance = usePos((s) => s.attendance);
	const clock = usePos((s) => s.clock);
	const [id, setId] = (0, import_react.useState)(staff[0]?.id ?? "randy");
	const [pin, setPin] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const present = new Set(attendance.filter((a) => !a.clockOut).map((a) => a.staffId)).size;
	const submit = () => {
		const s = staff.find((x) => x.id === id);
		if (!s || s.pin !== pin) {
			setErr("PIN staf salah");
			return;
		}
		clock(id, note);
		setPin("");
		setErr("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Absensi Anti-Curang"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "PIN unik + catatan shift. Toleransi masuk 08:15."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Terdaftar",
						value: `${staff.length} staf`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Hadir",
						value: `${present}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Toleransi",
						value: "08:15"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Validasi",
						value: "PIN aktif"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-3 rounded-xl border border-border bg-card p-4",
				onSubmit: (e) => {
					e.preventDefault();
					submit();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4 text-primary" }), " Clock in / out"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
						value: id,
						onChange: (e) => setId(e.target.value),
						children: staff.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: s.id,
							children: [
								s.name,
								" · ",
								s.role
							]
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "password",
						maxLength: 4,
						placeholder: "PIN 4 digit",
						value: pin,
						onChange: (e) => setPin(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Catatan / tugas",
						value: note,
						onChange: (e) => setNote(e.target.value)
					}),
					err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: err
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						type: "submit",
						children: "Catat kehadiran"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Demo PIN staf: 1234"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2 overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted text-xs uppercase text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Nama",
							"Tanggal",
							"Masuk",
							"Keluar",
							"Status",
							"Catatan"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: attendance.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-medium",
								children: a.staffName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs",
								children: formatDateID(a.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs",
								children: formatTimeID(a.clockIn)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs",
								children: a.clockOut ? formatTimeID(a.clockOut) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: a.status === "Terlambat" ? "warning" : "success",
									children: a.status
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-muted-foreground",
								children: a.note
							})
						]
					}, a.id)) })]
				})
			})]
		})]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-sm tabular-nums",
			children: value
		})]
	});
}
function ShiftView() {
	const shift = usePos((s) => s.shift);
	const openShift = usePos((s) => s.openShift);
	const closeShift = usePos((s) => s.closeShift);
	const [cash, setCash] = (0, import_react.useState)(5e5);
	const expected = shift.openingCash + shift.cashSales;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Shift Kasir"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Status",
						value: shift.open ? "Aktif" : "Tutup"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Kasir",
						value: shift.cashier
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Modal awal",
						value: formatIDR(shift.openingCash)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Kas diharapkan",
						value: formatIDR(expected)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Penjualan tunai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-2xl tabular-nums text-primary",
							children: formatIDR(shift.cashSales)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Non-tunai (QRIS / Debit / Transfer)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-2xl tabular-nums",
							children: formatIDR(shift.nonCashSales)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm text-muted-foreground",
							children: "Modal kas buka shift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: cash,
							onChange: (e) => setCash(Number(e.target.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "flex-1",
								disabled: shift.open,
								onClick: () => openShift(cash),
								children: "Buka shift"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "flex-1",
								variant: "secondary",
								disabled: !shift.open,
								onClick: closeShift,
								children: "Tutup shift"
							})]
						})
					]
				})]
			})
		]
	});
}
function IncidentsView() {
	const incidents = usePos((s) => s.incidents);
	const addIncident = usePos((s) => s.addIncident);
	const staff = usePos((s) => s.staff);
	const [form, setForm] = (0, import_react.useState)({
		date: "2026-09-09",
		staff: "randy",
		category: "Pelanggaran SOP",
		desc: "",
		action: "",
		loss: 0,
		status: "Selesai"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-medium",
			children: "Log Insiden Kafe"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-2 rounded-xl border border-border bg-card p-4",
				onSubmit: (e) => {
					e.preventDefault();
					addIncident(form);
					setForm({
						...form,
						desc: "",
						action: "",
						loss: 0
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: form.date,
						onChange: (e) => setForm({
							...form,
							date: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
						value: form.staff,
						onChange: (e) => setForm({
							...form,
							staff: e.target.value
						}),
						children: staff.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s.id,
							children: s.name
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
						value: form.category,
						onChange: (e) => setForm({
							...form,
							category: e.target.value
						}),
						children: [
							"Pelanggaran SOP",
							"Keterlambatan",
							"Kerusakan",
							"Komplain Tamu"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Deskripsi",
						required: true,
						value: form.desc,
						onChange: (e) => setForm({
							...form,
							desc: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Tindakan / sanksi",
						value: form.action,
						onChange: (e) => setForm({
							...form,
							action: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						placeholder: "Estimasi kerugian",
						value: form.loss || "",
						onChange: (e) => setForm({
							...form,
							loss: Number(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Catat insiden"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2 overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted text-xs uppercase text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Tanggal",
							"Staf",
							"Kategori",
							"Kejadian",
							"Sanksi",
							"Status"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: incidents.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs",
								children: formatDateID(i.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 capitalize",
								children: i.staff
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "danger",
									children: i.category
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: i.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: i.action
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "success",
									children: i.status
								})
							})
						]
					}, i.id)) })]
				})
			})]
		})]
	});
}
function VenueView() {
	const addToCartWait = usePos((s) => s.addIncome);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Pricelist Sewa Gedung Diantara"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Acara, seminar, workshop. Hari besar harga khusus."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: VENUE_PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xl text-primary",
								children: formatIDR(p.price)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1 text-sm text-muted-foreground",
							children: p.points.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							variant: "outline",
							onClick: () => addToCartWait({
								date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
								category: "Sewa Tempat",
								desc: p.name,
								amount: p.price,
								status: "DP"
							}),
							children: "Catat sebagai DP sewa"
						})
					]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 font-medium",
					children: "Lain-lain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border text-sm",
					children: VENUE_EXTRAS.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-muted-foreground",
							children: x.price
						})]
					}, x.name))
				})]
			})
		]
	});
}
function ProductsView() {
	const products = usePos((s) => s.products);
	const upsert = usePos((s) => s.upsertProduct);
	const del = usePos((s) => s.deleteProduct);
	const setForm = usePos((s) => s.setProductFormOpen);
	const [q, setQ] = (0, import_react.useState)("");
	const rows = products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.sku.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Manajemen Produk"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Cari menu / SKU",
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "w-48"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setForm(true),
					children: "Tambah menu"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted text-xs uppercase text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
						"Produk",
						"Kategori",
						"Harga",
						"COGS",
						"Margin",
						"Stok",
						"Status",
						""
					].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2",
						children: h
					}, h)) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductIcon, {
									name: p.icon,
									className: "size-4 text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-muted-foreground",
									children: p.sku
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: p.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono tabular-nums",
							children: formatIDR(p.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono tabular-nums text-muted-foreground",
							children: formatIDR(p.cogs)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono text-success tabular-nums",
							children: formatPct(p.margin)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono",
							children: p.stock
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => upsert({
									...p,
									available: !p.available
								}),
								className: "text-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: p.available ? "success" : "muted",
									children: p.available ? "Ready" : "Habis"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "text-destructive",
								onClick: () => del(p.id),
								children: "Hapus"
							})
						})
					]
				}, p.id)) })]
			})
		})]
	});
}
function InventoryView() {
	const inventory = usePos((s) => s.inventory);
	const adjust = usePos((s) => s.adjustStock);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Inventory & Resep"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Stok terpotong otomatis saat order lunas sesuai resep (kopi, susu, beras, cup)."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted text-xs uppercase text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Bahan",
							"SKU",
							"Stok",
							"Min",
							"Satuan",
							"HPP",
							"Status"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: inventory.map((i) => {
						const low = i.stock <= i.minStock;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-medium",
									children: i.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-mono text-xs",
									children: i.sku
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										step: "0.1",
										className: "h-8 w-24 font-mono",
										defaultValue: i.stock,
										onBlur: (e) => adjust(i.id, Number(e.target.value))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-mono",
									children: i.minStock
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: i.unit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-mono",
									children: formatIDR(i.cost)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: low ? "danger" : "success",
										children: low ? "Alert" : "Aman"
									})
								})
							]
						}, i.id);
					}) })]
				})
			})
		]
	});
}
function StaffView() {
	const staff = usePos((s) => s.staff);
	const addStaff = usePos((s) => s.addStaff);
	const updateStaff = usePos((s) => s.updateStaff);
	const audit = usePos((s) => s.audit);
	const setAdminPin = usePos((s) => s.setAdminPin);
	const [form, setForm] = (0, import_react.useState)({
		id: "",
		name: "",
		role: "Barista",
		pin: "1234",
		access: "Kasir Only"
	});
	const [pin, setPin] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-medium",
			children: "Akun Staf & Audit"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-2 rounded-xl border border-border bg-card p-4",
				onSubmit: (e) => {
					e.preventDefault();
					addStaff({
						...form,
						id: form.id || form.name.toLowerCase(),
						active: true
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Akun baru"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "ID",
						value: form.id,
						onChange: (e) => setForm({
							...form,
							id: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Nama",
						required: true,
						value: form.name,
						onChange: (e) => setForm({
							...form,
							name: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Role",
						value: form.role,
						onChange: (e) => setForm({
							...form,
							role: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "PIN",
						maxLength: 4,
						value: form.pin,
						onChange: (e) => setForm({
							...form,
							pin: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
						value: form.access,
						onChange: (e) => setForm({
							...form,
							access: e.target.value
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Kasir Only" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Full Admin" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Simpan staf"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs text-muted-foreground",
							children: "Ganti PIN owner"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								maxLength: 4,
								placeholder: "PIN baru",
								value: pin,
								onChange: (e) => setPin(e.target.value)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "secondary",
								onClick: () => pin.length === 4 && setAdminPin(pin),
								children: "Set"
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted text-xs uppercase text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
								"ID",
								"Nama",
								"Role",
								"Akses",
								"Aktif"
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: h
							}, h)) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: staff.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-mono text-xs",
									children: s.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: s.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: s.access
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => updateStaff({
											...s,
											active: !s.active
										}),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: s.active ? "success" : "muted",
											children: s.active ? "Aktif" : "Nonaktif"
										})
									})
								})
							]
						}, s.id)) })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm font-medium",
						children: "Audit log"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1 text-sm text-muted-foreground",
						children: audit.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								a.actor,
								" — ",
								a.action
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs",
								children: a.time
							})]
						}, a.id))
					})]
				})]
			})]
		})]
	});
}
function Kpi({ label, value, hint, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wide text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-1 font-mono text-xl tabular-nums ${tone ?? "text-foreground"}`,
				children: value
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			})
		]
	});
}
function TargetView() {
	const products = usePos((s) => s.products);
	const dailySales = usePos((s) => s.dailySales);
	const mtd = EXECUTIVE.mtdOmzet;
	const pct = mtd / MONTHLY_TARGET;
	const remain = MONTHLY_TARGET - mtd;
	const today = dailySales.find((d) => d.date === "2026-09-09")?.omzet ?? 0;
	const stars = products.filter((p) => p.quadrant === "Star").slice(0, 8);
	const horses = products.filter((p) => p.quadrant === "Workhorse").slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Dashboard Target Rp 60 Juta"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Target bulanan",
						value: formatIDR(MONTHLY_TARGET),
						hint: "Siklus cut-off 7–6",
						tone: "text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Realisasi MTD",
						value: formatIDR(mtd),
						hint: "Periode berjalan",
						tone: "text-success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Capaian",
						value: formatPct(pct, 2),
						hint: `${formatIDR(remain)} sisa`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Omzet hari ini",
						value: formatIDR(today),
						hint: `Target harian ${formatIDR(DAILY_TARGET)}`,
						tone: today >= 2e6 ? "text-success" : "text-destructive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Porsi MTD",
						value: `${EXECUTIVE.mtdCups} cup`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2 overflow-hidden rounded-full bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-primary",
					style: { width: `${Math.min(100, pct * 100)}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-sm font-medium",
						children: "Misi upselling (Star)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: stars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between rounded-md bg-muted/50 px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-success",
								children: formatPct(p.margin)
							})]
						}, p.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-sm font-medium",
						children: "Pantauan takaran (Workhorse)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: horses.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between rounded-md bg-muted/50 px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [p.soldQty, " porsi"]
							})]
						}, p.id))
					})]
				})]
			})
		]
	});
}
function DashboardView() {
	const weekly = usePos((s) => s.weekly);
	const e = EXECUTIVE;
	const liquidity = e.freeCash < 0 ? "Tunda penarikan" : "Aman ditarik";
	const data = weekly.map((w) => ({
		name: w.week.replace("2026-", ""),
		Omzet: w.income,
		Pengeluaran: w.expense,
		COGS: w.cogs
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Executive Dashboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Total omzet",
						value: formatIDRCompact(e.totalOmzet),
						hint: "Akumulasi penjualan kafe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Laba operasional",
						value: formatIDRCompact(e.netProfit),
						tone: "text-success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Prive diambil",
						value: formatIDRCompact(e.priveTaken)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Kas bebas",
						value: formatIDRCompact(e.freeCash),
						tone: "text-destructive",
						hint: liquidity
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatioCard, {
						title: "COGS ratio",
						value: e.cogsRatio,
						bench: "28–35%",
						status: "Aman",
						note: "HPP terkendali di bawah 35%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatioCard, {
						title: "Labor ratio",
						value: e.laborRatio,
						bench: "15–20%",
						status: "Ideal",
						note: "Beban gaji proporsional"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatioCard, {
						title: "Net profit margin",
						value: e.netMargin,
						bench: "20–35%",
						status: "Sehat",
						note: "Ruang prive masih ketat karena kas bebas negatif"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-sm font-medium",
					children: "Owner drawing calculator"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Kas masuk omzet",
							v: formatIDR(e.totalOmzet)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Cadangan belanja bahan",
							v: formatIDR(e.stockReserve)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Cadangan gaji berikutnya",
							v: formatIDR(e.payrollReserve)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Prive sudah ditarik",
							v: formatIDR(e.priveTaken)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Sisa kas bebas",
							v: formatIDR(e.freeCash)
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-64 rounded-xl border border-border bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-2 text-sm font-medium",
					children: "Omzet vs beban mingguan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "90%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-border)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "name",
								tick: {
									fill: "var(--color-muted-foreground)",
									fontSize: 11
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tickFormatter: (v) => `${(v / 1e6).toFixed(0)}jt`,
								tick: {
									fill: "var(--color-muted-foreground)",
									fontSize: 11
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								formatter: (v) => formatIDR(v),
								contentStyle: {
									background: "var(--color-card)",
									border: "1px solid var(--color-border)"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "Omzet",
								fill: "var(--color-primary)",
								radius: 4
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "Pengeluaran",
								fill: "var(--color-destructive)",
								radius: 4
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "COGS",
								fill: "var(--color-muted-foreground)",
								radius: 4
							})
						]
					})
				})]
			})
		]
	});
}
function RatioCard({ title, value, bench, status, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-2xl tabular-nums",
				children: formatPct(value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: ["Benchmark ", bench]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "success",
				className: "mt-2",
				children: status
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted-foreground",
				children: note
			})
		]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex justify-between border-b border-border/60 py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono tabular-nums",
			children: v
		})]
	});
}
function ExpensesView() {
	const expenses = usePos((s) => s.expenses);
	const addExpense = usePos((s) => s.addExpense);
	const deleteExpense = usePos((s) => s.deleteExpense);
	const [form, setForm] = (0, import_react.useState)({
		date: todayISO(),
		category: "Bahan Baku",
		desc: "",
		amount: 0
	});
	const total = expenses.reduce((s, e) => s + e.amount, 0);
	const byCat = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		expenses.forEach((e) => m.set(e.category, (m.get(e.category) ?? 0) + e.amount));
		return [...m.entries()].sort((a, b) => b[1] - a[1]);
	}, [expenses]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-medium",
					children: "Buku Kas Keluar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm text-destructive",
					children: ["Total ", formatIDR(total)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: byCat.map(([c, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					tone: "muted",
					children: [
						c,
						" ",
						formatIDRCompact(n)
					]
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-2 rounded-xl border border-border bg-card p-4",
					onSubmit: (e) => {
						e.preventDefault();
						if (!form.desc || form.amount <= 0) return;
						addExpense(form);
						setForm({
							...form,
							desc: "",
							amount: 0
						});
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "date",
							value: form.date,
							onChange: (e) => setForm({
								...form,
								date: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
							value: form.category,
							onChange: (e) => setForm({
								...form,
								category: e.target.value
							}),
							children: [
								"Bahan Baku",
								"Gaji",
								"Operasional",
								"Operasional Sistem",
								"Pemasaran",
								"prive",
								"sub con",
								"Lain-lain"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							placeholder: "Keterangan",
							value: form.desc,
							onChange: (e) => setForm({
								...form,
								desc: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							required: true,
							placeholder: "Nominal",
							value: form.amount || "",
							onChange: (e) => setForm({
								...form,
								amount: Number(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Simpan pengeluaran"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2 max-h-[520px] overflow-auto rounded-xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "sticky top-0 bg-muted text-xs uppercase text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
								"Tanggal",
								"Kategori",
								"Keterangan",
								"Nominal",
								""
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: h
							}, h)) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: expenses.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-mono text-xs",
									children: formatDateID(e.date)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: e.category })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: e.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right font-mono text-destructive tabular-nums",
									children: formatIDR(e.amount)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										className: "text-destructive",
										onClick: () => deleteExpense(e.id),
										children: "Hapus"
									})
								})
							]
						}, e.id)) })]
					})
				})]
			})
		]
	});
}
function IncomeView() {
	const incomes = usePos((s) => s.incomes);
	const addIncome = usePos((s) => s.addIncome);
	const [form, setForm] = (0, import_react.useState)({
		date: todayISO(),
		category: "Sewa Tempat",
		desc: "",
		amount: 0,
		status: "Lunas"
	});
	const total = incomes.reduce((s, i) => s + i.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Pemasukan Non-Kasir"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-success",
				children: formatIDR(total)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-2 rounded-xl border border-border bg-card p-4",
				onSubmit: (e) => {
					e.preventDefault();
					addIncome(form);
					setForm({
						...form,
						desc: "",
						amount: 0
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: form.date,
						onChange: (e) => setForm({
							...form,
							date: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
						value: form.category,
						onChange: (e) => setForm({
							...form,
							category: e.target.value
						}),
						children: [
							"Sewa Tempat",
							"Kerjasama Event",
							"Lain-lain"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						required: true,
						placeholder: "Klien / keterangan",
						value: form.desc,
						onChange: (e) => setForm({
							...form,
							desc: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						required: true,
						value: form.amount || "",
						onChange: (e) => setForm({
							...form,
							amount: Number(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Catat pemasukan"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2 overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted text-xs uppercase text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Tanggal",
							"Kategori",
							"Keterangan",
							"Nominal",
							"Status"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: incomes.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs",
								children: formatDateID(i.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: i.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: i.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-success tabular-nums",
								children: formatIDR(i.amount)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "success",
									children: i.status
								})
							})
						]
					}, i.id)) })]
				})
			})]
		})]
	});
}
function TutupBukuView() {
	const rows = usePos((s) => s.tutupBuku);
	const daily = usePos((s) => s.dailyBooks);
	const lockPeriod = usePos((s) => s.lockPeriod);
	const exportCsv = () => {
		const csv = ["Periode,Mulai,Selesai,Pendapatan,Pengeluaran,COGS,Laba,Status"].concat(rows.map((r) => [
			r.period,
			r.startDate,
			r.endDate,
			r.income,
			r.expense,
			r.cogs,
			r.profit,
			r.status
		].join(","))).join("\n");
		const blob = new Blob([csv], { type: "text/csv" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = "HVEN_Tutup_Buku.csv";
		a.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-medium",
					children: "Tutup Buku Siklus 7–6"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Kunci periode setiap tanggal 7. Data harian dari spreadsheet ikut termigrasi."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: exportCsv,
						children: "Ekspor CSV"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: lockPeriod,
						children: "Kunci periode"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted text-xs uppercase text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Periode",
							"Rentang",
							"Pendapatan",
							"COGS",
							"Pengeluaran",
							"Laba",
							"Status",
							"PIC"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono",
								children: r.period
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 text-xs",
								children: [
									r.startDate,
									" → ",
									r.endDate
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono tabular-nums",
								children: formatIDR(r.income)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono tabular-nums",
								children: formatIDR(r.cogs)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono tabular-nums text-destructive",
								children: formatIDR(r.expense)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `px-3 py-2 font-mono tabular-nums ${r.profit >= 0 ? "text-success" : "text-destructive"}`,
								children: formatIDR(r.profit)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: r.status === "Selesai" ? "success" : "warning",
									children: r.status
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: r.pic
							})
						]
					}, r.period)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-72 overflow-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "sticky top-0 bg-muted text-xs uppercase text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Tanggal",
							"Pendapatan",
							"COGS",
							"Pengeluaran",
							"Laba"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: daily.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs",
								children: formatDateID(d.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono tabular-nums",
								children: formatIDR(d.income)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono tabular-nums",
								children: formatIDR(d.cogs)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono tabular-nums",
								children: formatIDR(d.expense)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `px-3 py-2 font-mono tabular-nums ${d.profit >= 0 ? "text-success" : "text-destructive"}`,
								children: formatIDR(d.profit)
							})
						]
					}, d.date)) })]
				})
			})
		]
	});
}
function MenuEngView() {
	const products = usePos((s) => s.products);
	const [filter, setFilter] = (0, import_react.useState)("ALL");
	const rows = products.filter((p) => filter === "ALL" || p.quadrant === filter);
	const counts = {
		Star: products.filter((p) => p.quadrant === "Star").length,
		Workhorse: products.filter((p) => p.quadrant === "Workhorse").length,
		Puzzle: products.filter((p) => p.quadrant === "Puzzle").length,
		Dog: products.filter((p) => p.quadrant === "Dog").length
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto p-4 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Menu Engineering"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Matriks Kasavana & Smith dari penjualan aktual."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					"ALL",
					"Star",
					"Workhorse",
					"Puzzle",
					"Dog"
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: filter === f ? "default" : "secondary",
					onClick: () => setFilter(f),
					children: f === "ALL" ? "Semua" : `${f} (${counts[f]})`
				}, f))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted text-xs uppercase text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
						"Menu",
						"Harga",
						"COGS",
						"Margin",
						"Qty",
						"Kuadran",
						"Rekomendasi"
					].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2",
						children: h
					}, h)) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-medium",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono tabular-nums",
							children: formatIDR(p.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono tabular-nums text-muted-foreground",
							children: formatIDR(p.cogs)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono text-success tabular-nums",
							children: formatPct(p.margin)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono",
							children: p.soldQty
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: p.quadrant === "Star" ? "primary" : p.quadrant === "Workhorse" ? "warning" : p.quadrant === "Puzzle" ? "muted" : "danger",
								children: p.quadrant
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 text-xs text-muted-foreground",
							children: p.recommendation
						})
					]
				}, p.id)) })]
			})
		})]
	});
}
var NAV = [
	{
		group: "Kasir",
		items: [
			{
				id: "pos",
				label: "POS Kasir",
				icon: LayoutDashboard,
				hint: "F1"
			},
			{
				id: "orders",
				label: "Order List",
				icon: Receipt
			},
			{
				id: "attendance",
				label: "Absensi Staf",
				icon: Fingerprint
			},
			{
				id: "kitchen",
				label: "Kitchen KDS",
				icon: CookingPot
			},
			{
				id: "sewa",
				label: "Sewa Diantara",
				icon: Building2
			}
		]
	},
	{
		group: "Operasional",
		items: [
			{
				id: "products",
				label: "Produk & Menu",
				icon: Coffee
			},
			{
				id: "inventory",
				label: "Inventory & Resep",
				icon: Package
			},
			{
				id: "shift",
				label: "Shift Kasir",
				icon: Clock
			},
			{
				id: "incidents",
				label: "Log Insiden",
				icon: TriangleAlert
			},
			{
				id: "staff",
				label: "Akun Staf & Audit",
				icon: UserCog
			}
		]
	},
	{
		group: "Finance",
		items: [
			{
				id: "target",
				label: "Target 60 Jt",
				icon: Target
			},
			{
				id: "dashboard",
				label: "Executive",
				icon: ChartScatter
			},
			{
				id: "expenses",
				label: "Buku Kas Keluar",
				icon: Wallet
			},
			{
				id: "income",
				label: "Pemasukan Sewa",
				icon: BookOpen
			},
			{
				id: "tutupbuku",
				label: "Tutup Buku 7–6",
				icon: CalendarCheck
			},
			{
				id: "engineering",
				label: "Menu Engineering",
				icon: ClipboardList
			}
		]
	}
];
var TITLES = {
	pos: "POS Kasir HVEN",
	orders: "Daftar Order",
	attendance: "Absensi Staf",
	kitchen: "Kitchen Display",
	sewa: "Tarif Sewa Diantara",
	products: "Produk & Menu",
	inventory: "Inventory & Resep",
	shift: "Shift Kasir",
	incidents: "Log Insiden",
	staff: "Akun Staf & Audit",
	target: "Dashboard Target",
	dashboard: "Executive Dashboard",
	expenses: "Buku Kas Keluar",
	income: "Pemasukan Non-Kasir",
	tutupbuku: "Tutup Buku Siklus 7–6",
	engineering: "Menu Engineering"
};
function ViewSwitch({ view }) {
	switch (view) {
		case "pos": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PosView, {});
		case "orders": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersView, {});
		case "kitchen": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitchenView, {});
		case "attendance": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttendanceView, {});
		case "shift": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShiftView, {});
		case "incidents": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncidentsView, {});
		case "sewa": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VenueView, {});
		case "products": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsView, {});
		case "inventory": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryView, {});
		case "staff": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffView, {});
		case "target": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TargetView, {});
		case "dashboard": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardView, {});
		case "expenses": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpensesView, {});
		case "income": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomeView, {});
		case "tutupbuku": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TutupBukuView, {});
		case "engineering": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuEngView, {});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PosView, {});
	}
}
function AppShell() {
	const view = usePos((s) => s.view);
	const setView = usePos((s) => s.setView);
	const collapsed = usePos((s) => s.sidebarCollapsed);
	const toggle = usePos((s) => s.toggleSidebar);
	const role = usePos((s) => s.role);
	const staff = usePos((s) => s.staff);
	const currentStaffId = usePos((s) => s.currentStaffId);
	const openPin = () => usePos.setState({ pinOpen: true });
	const logoutOwner = usePos((s) => s.logoutOwner);
	const setSearch = usePos((s) => s.setSearch);
	const search = usePos((s) => s.search);
	const orders = usePos((s) => s.orders);
	const inventory = usePos((s) => s.inventory);
	const notifs = usePos((s) => s.notifications);
	const shift = usePos((s) => s.shift);
	const setProductFormOpen = usePos((s) => s.setProductFormOpen);
	const setPaymentOpen = usePos((s) => s.setPaymentOpen);
	const clearCart = usePos((s) => s.clearCart);
	const [clock, setClock] = (0, import_react.useState)("");
	const [mobileNav, setMobileNav] = (0, import_react.useState)(false);
	const [notifOpen, setNotifOpen] = (0, import_react.useState)(false);
	const [discOpen, setDiscOpen] = (0, import_react.useState)(false);
	const me = staff.find((s) => s.id === currentStaffId);
	const activeOrders = orders.filter((o) => o.status === "paid" && o.kdsStatus !== "done").length;
	const kdsNew = orders.filter((o) => o.kdsStatus === "new" && o.status === "paid").length;
	const lowStock = inventory.filter((i) => i.stock <= i.minStock).length;
	(0, import_react.useEffect)(() => {
		setClock(formatTimeID());
		const t = setInterval(() => setClock(formatTimeID()), 1e3);
		return () => clearInterval(t);
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "F1") {
				e.preventDefault();
				setView("pos");
			} else if (e.key === "F2") {
				e.preventDefault();
				document.getElementById("global-search")?.focus();
			} else if (e.key === "F3") {
				e.preventDefault();
				clearCart();
				toast("Keranjang dikosongkan");
			} else if (e.key === "F4") {
				e.preventDefault();
				setPaymentOpen(true);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		setView,
		clearCart,
		setPaymentOpen
	]);
	const badges = (0, import_react.useMemo)(() => ({
		orders: String(activeOrders),
		kitchen: String(kdsNew),
		inventory: lowStock > 0 ? `${lowStock}` : ""
	}), [
		activeOrders,
		kdsNew,
		lowStock
	]);
	const navBtn = (id, label, Icon, hint) => {
		const active = view === id;
		const locked = RESTRICTED_VIEWS.includes(id) && role !== "owner";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => {
				setView(id);
				setMobileNav(false);
			},
			className: cn("flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors", active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }),
				!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 truncate",
					children: label
				}),
				!collapsed && hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-muted-foreground",
					children: hint
				}),
				!collapsed && locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3 text-primary/80" }),
				!collapsed && id === "orders" && Number(badges.orders) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "primary",
					children: badges.orders
				}),
				!collapsed && id === "kitchen" && Number(badges.kitchen) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "danger",
					children: badges.kitchen
				}),
				!collapsed && id === "inventory" && badges.inventory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "danger",
					children: badges.inventory
				})
			]
		}, id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: cn("hidden h-full shrink-0 flex-col border-r border-border bg-sidebar md:flex", collapsed ? "w-16" : "w-60"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 border-b border-border px-3 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 font-display text-lg font-semibold text-primary",
								children: "H"
							}),
							!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-display text-sm font-semibold tracking-wide",
									children: "HVEN SPACE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: "Cafe & Experience Hub"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "ml-auto text-muted-foreground hover:text-foreground",
								onClick: toggle,
								"aria-label": "Collapse",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 space-y-5 overflow-y-auto px-2 py-3",
						children: NAV.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-1 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground",
							children: g.group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-0.5",
							children: g.items.map((it) => navBtn(it.id, it.label, it.icon, it.hint))
						})] }, g.group))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-lg border border-border bg-card p-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-8 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground",
									children: (me?.name ?? "R").slice(0, 1)
								}),
								!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs font-medium",
										children: me?.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("text-xs", role === "owner" ? "text-success" : "text-primary"),
										children: role === "owner" ? "Mode Owner" : "Mode Kasir"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => role === "owner" ? logoutOwner() : openPin(),
									className: "text-muted-foreground hover:text-primary",
									title: "PIN",
									children: role === "owner" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "size-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" })
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-14 shrink-0 items-center gap-2 border-b border-border bg-card px-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "md:hidden",
							onClick: () => setMobileNav(true),
							"aria-label": "Menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium",
								children: TITLES[view]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "hidden text-xs text-muted-foreground sm:block",
								children: [
									shift.open ? "Shift aktif" : "Shift tutup",
									" • ",
									me?.name
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative hidden sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "global-search",
										value: search,
										onChange: (e) => {
											setSearch(e.target.value);
											if (view !== "pos") setView("pos");
										},
										placeholder: "Cari menu F2",
										className: "h-9 w-44 pl-8"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => setProductFormOpen(true),
									className: "hidden md:inline-flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), " Menu"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "relative rounded-md p-2 hover:bg-accent",
									onClick: () => setNotifOpen(true),
									"aria-label": "Notifikasi",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4 text-primary" }), notifs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-destructive text-xs text-destructive-foreground",
										children: Math.min(notifs.length, 9)
									})]
								}),
								clock && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden font-mono text-xs tabular-nums text-primary sm:inline",
									children: clock
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "min-h-0 flex-1 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewSwitch, { view })
				})]
			}),
			mobileNav && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute inset-0 bg-background/70",
					onClick: () => setMobileNav(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-border bg-sidebar p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display font-semibold",
							children: "HVEN SPACE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileNav(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), NAV.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-1 px-2 text-xs uppercase tracking-wider text-muted-foreground",
							children: g.group
						}), g.items.map((it) => navBtn(it.id, it.label, it.icon, it.hint))]
					}, g.group))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModifierModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductFormModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotifCenter, {
				open: notifOpen,
				onOpenChange: setNotifOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiscountModal, {
				open: discOpen,
				onOpenChange: setDiscOpen
			})
		]
	});
}
function Home() {
	(0, import_react.useEffect)(() => {
		usePos.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme: "dark",
		position: "bottom-right",
		richColors: false
	})] });
}
//#endregion
export { Home as component };
