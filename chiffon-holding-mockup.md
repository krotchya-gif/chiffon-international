# Task: Buat Mockup Frontend — Chiffon International (Holding Company Profile)

> **Design Read:** Landing page untuk *premium international holding company* Indonesia, dengan corporate-elegant language (clean editorial, restrained motion), deep navy + champagne gold accent palette, Outfit display + DM Sans body, refined density.
>
> **Taste Config:** `VARIANCE=7` · `MOTION=5` · `DENSITY=4`
> *(VARIANCE: variasi layout bento/split, gak monoton. MOTION: scroll reveal halus — corporate, bukan cinematic. DENSITY: lapang, editorial.)*

Buat mockup frontend yang berfungsi penuh untuk **Chiffon International**, website **Company Profile** sebuah holding company. Stack: **Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS 4**. Semua data mock — gak perlu koneksi ke database atau API beneran.

---

## Tujuan
- Testing flow user: browsing profil holding → melihat 3 sub-perusahaan → redirect ke website masing-masing → kontak
- Review UI/UX company profile premium — **harus keliatan international & trustworthy**, bukan template company profile biasa
- Demo ke stakeholder Chiffon International

---

## 🎯 Stack Wajib

| Stack | Versi/Catatan |
|-------|--------------|
| Next.js 16 | App Router, RSC by default |
| React 19 + TypeScript 6 | Strict mode |
| Tailwind CSS 4 | **CSS `@theme` directive** — jangan `tailwind.config.ts` |
| **shadcn/ui** | Komponen: Button, Card, Dialog, Input, Textarea, Select, Tabs, Accordion, Badge, Separator, Sheet |
| **Motion v12** | ⚠️ BUKAN framer-motion. Import: `import { motion } from "motion/react"` |
| **@phosphor-icons/react** | BUKAN lucide-react. Icons konsisten strokeWidth=1.5 |
| **next/font** | Self-host, jangan Google Fonts `<link>` |
| **next-themes** | Dark/light mode |
| **React Hook Form + Zod** | Form validation di halaman kontak |
| **phantom-ui** | Skeleton loader — `npm install @aejkatappaja/phantom-ui` |

### ⚠️ Tailwind v4 — Wajib Dibaca
Next.js 16 default Tailwind v4 — konfigurasi CSS-first:

```css
/* ✅ globals.css — @theme directive */
@import "tailwindcss";
@theme {
  --color-primary: #1E3A5F;        /* Deep navy — corporate */
  --color-accent: #C9A227;         /* Champagne gold — SATU accent */
  --color-surface: #F8F7F4;        /* Warm off-white (bukan putih murni) */
  --color-surface-dark: #0E1420;   /* Hampir hitam navy */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-destructive: #EF4444;
  --font-display: "Outfit", "sans-serif";
  --font-body: "DM Sans", "sans-serif";
}
```

**⚠️ Tree-shaking pitfall:** Utility cuma dikompilasi kalo terdeteksi di source `.tsx`/`.jsx`. Test class baru lewat DevTools console **gak bakal muncul** — tulis dulu di source, tunggu HMR.

### ⚠️ Motion v12 — Import Path
```tsx
// ✅ BENAR — Motion v12
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react"
import { scroll, animate } from "motion"            // JS standalone

// ❌ SALAH — ini framer-motion lama
// import { motion } from "framer-motion"
```

---

## 🏢 Konsep & Informasi Perusahaan

**Chiffon International** — holding company Indonesia dengan 3 lini bisnis. Website company profile yang memperkenalkan grup + menjadi **gerbang (hub) ke website masing-masing sub-perusahaan**.

### 3 Sub-Perusahaan (PALING PENTING — section inti)

| Sub-perusahaan | Lini Bisnis | Status | Link |
|----------------|-------------|--------|------|
| **Zynergia Health & Wellness** | Healthcare, wellness, beauty & skincare (lini Indonesia) | Aktif | https://zynergia.health/ (buka tab baru) |
| **Chiffon International Travel** | Tour & travel platform (booking + payment) | Aktif | https://travel.chiffoninternational.com (placeholder) |
| **EV Bus** | Transportasi bus listrik | **Coming Soon** | https://[evbus].com (placeholder, badge Coming Soon) |

### Mock Data Perusahaan
- Nama: Chiffon International
- Tagline: (buat sendiri — 1 kalimat premium, misal "Building Indonesia's Future Beyond Boundaries")
- Visi: 1 kalimat aspiratif
- Misi: 5–6 poin actionable
- Nilai Perusahaan: 4 nilai (Integritas, Inovasi, Keberlanjutan, Kolaborasi — atau variasi)
- Timeline sejarah: 5–6 milestone (tahun organik, bukan 2020/2021/2022 berurutan rapi)
- Team: 6 orang — nama realistik Indonesia/International (BUKAN John Doe / Jane Smith), jabatan C-Level
- Stats: angka **organik** (anti-fake-numbers — misal "14.7K+ pelanggan" bukan "15.000", "18 proyek aktif" bukan "20")
- Kontak: alamat Jakarta (jalan realistik), email, telepon, jam operasional

---

## 📄 Halaman yang Harus Ada

### 1. Landing Page (`/`) — Holding Home

```
┌─────────────────────────────────────┐
│  STICKY NAV — "Fluid Island" pill   │  ← mt-6 mx-auto w-max rounded-full
│  [Logo Chiffon] [Links] [CTA]       │     backdrop-blur-xl
├─────────────────────────────────────┤
│                                     │
│  HERO — full viewport               │  ← split layout (kiri teks, kanan
│  "Chiffon International"            │     visual/image dengan overlay)
│  Tagline + 2 CTA                    │     BUKAN center text doang
│                                     │
├─────────────────────────────────────┤
│                                     │
│  ⭐ 3 SUB-PERUSAHAAN (INTI)         │  ← BENTO GRID ASYMMETRIC
│  [Zynergia] [Travel]                │     Travel besar di kiri,
│  [EV Bus]                           │     Zynergia + EV Bus kecil di kanan
│                                     │     (bukan 3 card sama rata!)
│                                     │
├─────────────────────────────────────┤
│                                     │
│  VISI & MISI                        │  ← SPLIT: kiri visi (quote besar),
│                                     │     kanan misi (list dengan icon)
│                                     │
├─────────────────────────────────────┤
│                                     │
│  STATS GRUP                        │  ← split: teks kiri + animated counter
│  (angka organik)                    │     kanan (2x2 grid)
│                                     │
├─────────────────────────────────────┤
│                                     │
│  NILAI PERUSAHAAN                   │  ← SOLID SECTION
│  (4 nilai, border-t / divide-y)     │     BUKAN card semua
│                                     │
├─────────────────────────────────────┤
│                                     │
│  CTA BANNER                         │  ← image bg + overlay gelap
│  "Bekerja sama dengan kami"         │     tombol Kontak
│                                     │
├─────────────────────────────────────┤
│                                     │
│  FOOTER                             │  ← solid, 4 kolom + link sub-perusahaan
│                                     │
└─────────────────────────────────────┘
```

#### Section 3 Sub-Perusahaan — Detail Wajib
- **Layout bento asymmetric** (CSS Grid `grid-cols-1 md:grid-cols-3` dengan span berbeda — travel span-2, zynergia 1, evbus 1 — atau variasi lain)
- Setiap card: gambar latar (Picsum), nama lini, deskripsi 1 kalimat, badge status
- **Card Zynergia**: badge "Healthcare · Skincare", CTA "Kunjungi Website" → `https://zynergia.health/` (target `_blank`, rel noopener)
- **Card Travel**: badge "Booking Platform", CTA "Kunjungi Website" → placeholder URL (target `_blank`)
- **Card EV Bus**: badge "Coming Soon" (bukan CTA link — pake status, tombol disabled atau "Segera Hadir")
- Hover: gambar zoom + overlay + arrow icon (Phosphor `ArrowUpRight`)
- **Loading state card**: skeleton phantom-ui
- **Error state**: kalau gambar gagal load → fallback gradient + icon

### 2. Tentang Kami (`/tentang`)
- Cerita perusahaan: 2–3 paragraf (bukan lorem ipsum — copy yang masuk akal)
- **Timeline sejarah**: vertikal, kiri-kanan bergantian (zigzag) — milestone + tahun + deskripsi singkat
- Nilai perusahaan (section ulang dengan layout beda dari landing)
- Sertifikasi/penghargaan (badge list, maksimal 4 — jangan lebay)

### 3. Sub-Perusahaan (`/sub-perusahaan`)
- Intro: 1 paragraf — holding menaungi 3 lini
- **3 card besar** (layout zigzag — atas-bawah bergantian kiri/kanan):
  - Gambar besar + konten (nama, deskripsi 2–3 kalimat, highlight lini, CTA)
  - Zynergia: highlight lini healthcare + beauty/skincare
  - Travel: highlight platform booking, payment, admin
  - EV Bus: highlight visi transportasi hijau + badge Coming Soon
- CTA masing-masing → redirect ke website (target `_blank`)

### 4. Tim & Kepemimpinan (`/tim`)
- Grid leadership: foto (Picsum portrait seed), nama realistik, jabatan, bio singkat 1 kalimat
- Layout: 3 kolom desktop, 2 tablet, 1 mobile — tapi dengan **variasi**: 1 card utama (CEO) lebih besar + sisanya grid

### 5. Kontak (`/kontak`)
- **Form kontak** (React Hook Form + Zod):
  - Nama, Email, Subjek (Select: Umum, Kerja Sama, Media, Investasi), Pesan
  - Validasi: email format, required fields, min length pesan
  - **Loading state**: submit → skeleton/button spinner (bukan spinner circular doang — button loading state)
  - **Success state**: setelah submit → panel sukses (simulasi delay 800ms)
  - **Error state**: validasi gagal → error message per field + highlight border merah
- Info kontak: alamat, email, telepon, jam operasional
- Google Maps embed (iframe mock)

### 6. Privacy Policy (`/privacy`) & Terms (`/terms`)
- Halaman statis, konten generik yang masuk akal (2–3 section masing-masing)

### 7. 404 (`/not-found`)
- Halaman 404 yang desain-nya nyambung (bukan default Next.js) — logo, pesan, CTA kembali ke beranda

---

## 🎨 Design System

### Warna (Corporate International)
- **Primary: Deep Navy `#1E3A5F`** — kesan international, trusted, corporate
- **Accent: Champagne Gold `#C9A227`** — SATU accent, dipakai hemat (CTA, highlight, garis)
- **Surface: Warm off-white `#F8F7F4`** — bukan putih murni, editorial
- **Dark: `#0E1420`** — mode gelap: navy pekat, bukan hitam
- ⚠️ JANGAN pake palette AI default (`#f5f1ea` + `#b08947` + `#1a1714`) — ini versi lo yang lebih berkarakter

### Tipografi
- **Display:** Outfit (headings) — `text-4xl md:text-6xl tracking-tighter leading-none`
- **Body:** DM Sans — `text-base leading-relaxed max-w-[65ch]`
- Bukan Inter. Dual font wajib.

### Icons
- **@phosphor-icons/react** — strokeWidth=1.5 konsisten
- Anti-emoji di code & markup — semua icon pake Phosphor (Building, Airplane, Leaf/Bus, ArrowUpRight, MapPin, Phone, Envelope, Clock, dll)

### Aturan Layout (taste-skill)
- ❌ Glassmorphism di setiap section — mix solid + glass. Hero & card sub-perusahaan boleh glass; stats & nilai section solid.
- ❌ Jangan 3 card identik dalam satu baris — bento, split, zigzag.
- ❌ Jangan center-ini-itu aja — variasi alignment.
- ✅ CSS Grid (`grid-cols-1 md:grid-cols-3 gap-6`), jangan flex percentage math.
- ✅ `min-h-dvh` — jangan `h-screen` (iOS Safari bug).
- ✅ Loading/empty/error states untuk semua data fetch & form.

---

## 📦 Data Mock

Bikin file `src/data/mock-data.ts`:

### Perusahaan
```ts
export const perusahaan = {
  nama: "Chiffon International",
  tagline: "...",
  visi: "...",
  misi: ["...", "...", "...", "...", "..."],  // 5-6 poin
  nilai: [
    { icon: "scale", nama: "Integritas", deskripsi: "..." },
    // 4 nilai
  ],
  stats: [
    { label: "Tahun Berdiri", value: 2009 },           // organik, bukan 2020
    { label: "Pelanggan Aktif", value: 14380 },        // bukan 15.000
    { label: "Karyawan", value: 327 },
    { label: "Proyek Aktif", value: 18 },
  ],
  timeline: [
    { tahun: 2009, judul: "...", deskripsi: "..." },
    // 5-6 milestone
  ],
  team: [
    { nama: "Rangga Adiwijaya", jabatan: "CEO", foto: "https://picsum.photos/seed/ceo1/400/500", bio: "..." },
    // 6 orang — nama realistik, BUKAN John Doe
  ],
  kontak: {
    alamat: "Menara Chiffon, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190",
    email: "hello@chiffon.co.id",
    telepon: "+62 21 5000 1234",
    jam: "Senin–Jumat: 08.30 – 17.30 WIB",
  },
};
```

### Sub-Perusahaan
```ts
export const subPerusahaan = [
  {
    id: "zynergia",
    nama: "Zynergia Health & Wellness",
    lini: "Healthcare · Beauty & Skincare",
    deskripsi: "...",
    status: "aktif",            // 'aktif' | 'aktif' | 'coming-soon'
    url: "https://zynergia.health/",
    gambar: "https://picsum.photos/seed/zynergia1/800/600",
    highlight: ["Wellness", "Skincare", "Distributor"],
  },
  {
    id: "travel",
    nama: "Chiffon International Travel",
    lini: "Tour & Travel Platform",
    deskripsi: "...",
    status: "aktif",
    url: "https://travel.chiffoninternational.com/",
    gambar: "https://picsum.photos/seed/travel1/800/600",
    highlight: ["Booking", "Payment Gateway", "Admin Panel"],
  },
  {
    id: "evbus",
    nama: "EV Bus",
    lini: "Transportasi Bus Listrik",
    deskripsi: "...",
    status: "coming-soon",
    url: "#",                   // gak di-link — badge Coming Soon
    gambar: "https://picsum.photos/seed/evbus1/800/600",
    highlight: ["Netral Karbon", "Smart Fleet"],
  },
];
```

**Semua gambar pake Picsum seed unik** (`https://picsum.photos/seed/{unik}/800/600`) — refresh gak berubah, keliatan foto real.

---

## 🔬 Flow Testing Lengkap

1. **Buka landing** → hero split layout → scroll → section muncul dengan scroll reveal halus (Motion `whileInView`, fade-up, sekali trigger — jangan repeat)
2. **⭐ Klik section 3 Sub-Perusahaan**:
   - Klik card Zynergia → buka `https://zynergia.health/` di tab baru (target blank)
   - Klik card Travel → buka URL placeholder di tab baru
   - Klik card EV Bus → gak redirect (badge Coming Soon, tombol disabled / "Segera Hadir")
   - Hover card → gambar zoom + overlay + arrow icon
3. **Stats** → animated counter naik dari 0 ke angka organik pas discroll (sekali trigger)
4. **Visi & Misi** → layout split, misi list dengan icon
5. **Tentang** → timeline zigzag kiri-kanan
6. **Tim** → card utama CEO lebih besar dari yang lain, grid responsif
7. **Kontak** → isi form:
   - Submit kosong → error validasi per field (Zod)
   - Email salah format → error "Email tidak valid"
   - Submit valid → loading state → success panel (delay 800ms simulated)
   - Reset → form bersih
8. **Dark mode toggle** → semua halaman konsisten, contrast tetap terjaga
9. **404** → buka URL random → halaman 404 desain nyambung, CTA balik ke beranda
10. **Responsive** → mobile 375px: nav jadi sheet/drawer, bento grid jadi stack, form tetap enak dipakai
11. **Loading/empty/error states** — image error → fallback gradient + icon (test dengan gambar invalid)

---

## Teknis
- Semua "API call" pake mock data dengan simulated delay 300-800ms via `src/lib/mock-api.ts`
- TanStack React Query buat data fetching — hooks di `src/hooks/use-mock-data.ts`
- Root layout: `<ThemeProvider>` → `<QueryClientProvider>` → `<Toaster>` → children
- Navbar: sticky glass pill, logo "Chiffon International", links (Beranda, Tentang, Sub-Perusahaan, Tim, Kontak), CTA "Hubungi Kami"
- Footer: 4 kolom — Grup (sub-perusahaan links), Perusahaan, Layanan, Kontak + social icons
- SEO metadata template per halaman (title, description)

## Yang Gak Perlu
- Auth / login
- Payment / checkout
- Admin dashboard — company profile murni, konten statis
- Backend / database / API routes (`/api/*`)
- Fitur booking — itu website sub-perusahaan, bukan ini

---

## Verifikasi Build
- `npx next build` harus sukses — semua route ke-generate statis
- Pastikan SEMUA halaman di atas ada & jalan
- Gak ada error TypeScript (`tsc --noEmit` clean)
