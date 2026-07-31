export type StatusSubPerusahaan = "aktif" | "coming-soon";

export interface SubPerusahaan {
  id: string;
  nama: string;
  lini: string;
  deskripsi: string;
  deskripsiPanjang: string;
  status: StatusSubPerusahaan;
  url: string;
  gambar: string;
  highlight: string[];
}

export const perusahaan = {
  nama: "Chiffon International",
  tagline: "Building Indonesia's Future Beyond Boundaries",
  visi:
    "Menjadi kelompok usaha internasional yang tumbuh berkelanjutan dan memberi dampak nyata bagi kehidupan masyarakat Indonesia.",
  misi: [
    "Menghadirkan produk dan layanan berkualitas yang menjawab kebutuhan hidup modern.",
    "Membangun ekosistem bisnis yang saling memperkuat antar lini usaha.",
    "Mengutamakan tata kelola yang transparan, akuntabel, dan berintegritas.",
    "Mendorong inovasi berkelanjutan di setiap lini bisnis grup.",
    "Menciptakan dampak sosial dan lingkungan yang positif di setiap operasi.",
    "Mengembangkan talenta Indonesia menjadi pemimpin kelas dunia.",
  ],
  nilai: [
    {
      icon: "scale",
      nama: "Integritas",
      deskripsi:
        "Bertindak jujur dan konsisten dalam setiap keputusan, dengan tata kelola yang transparan di seluruh lini usaha.",
    },
    {
      icon: "lightbulb",
      nama: "Inovasi",
      deskripsi:
        "Terus menemukan cara baru — produk, proses, dan model bisnis — untuk melayani kebutuhan yang terus berubah.",
    },
    {
      icon: "leaf",
      nama: "Keberlanjutan",
      deskripsi:
        "Menyeimbangkan pertumbuhan bisnis dengan tanggung jawab terhadap lingkungan dan generasi mendatang.",
    },
    {
      icon: "handshake",
      nama: "Kolaborasi",
      deskripsi:
        "Tumbuh bersama mitra, komunitas, dan talenta — percaya bahwa hasil terbaik lahir dari kerja sama.",
    },
  ],
  stats: [
    { label: "Tahun Berdiri", value: 2009, suffix: "" },
    { label: "Pelanggan Aktif", value: 14380, suffix: "+" },
    { label: "Karyawan", value: 327, suffix: "" },
    { label: "Proyek Aktif", value: 18, suffix: "" },
  ],
  timeline: [
    {
      tahun: 2009,
      judul: "Berdiri di Jakarta",
      deskripsi:
        "Chiffon International didirikan sebagai perusahaan perdagangan multisektoral dengan fokus pada distribusi barang konsumen.",
    },
    {
      tahun: 2013,
      judul: "Ekspansi Pasar Regional",
      deskripsi:
        "Memperluas jaringan ekspor-impor ke pasar Asia Tenggara dan membuka kantor perwakilan pertama di Singapura.",
    },
    {
      tahun: 2016,
      judul: "Meluncurkan Lini Perjalanan",
      deskripsi:
        "Chiffon International Travel berdiri sebagai platform tur dan perjalanan terintegrasi untuk segmen korporasi dan individu.",
    },
    {
      tahun: 2019,
      judul: "Masuk Sektor Kesehatan",
      deskripsi:
        "Zynergia Health & Wellness hadir menghadirkan produk kesehatan, kecantikan, dan perawatan diri ke pasar Indonesia.",
    },
    {
      tahun: 2022,
      judul: "Akuisisi Fasilitas Distribusi",
      deskripsi:
        "Mengakuisisi fasilitas logistik di kawasan industri Cikarang, memperkuat rantai pasok lintas lini usaha.",
    },
    {
      tahun: 2025,
      judul: "Inisiatif Transportasi Hijau",
      deskripsi:
        "Mengumumkan EV Bus — inisiatif transportasi publik berbasis bus listrik menuju kota yang lebih bersih dan tenang.",
    },
  ],
  team: [
    {
      nama: "Rangga Adiwijaya",
      jabatan: "Chief Executive Officer",
      foto: "https://picsum.photos/seed/chiffon-ceo/600/720",
      bio: "Memimpin arah strategis grup dengan pengalaman lebih dari dua dekade di sektor investasi dan perdagangan internasional.",
      featured: true,
    },
    {
      nama: "Nadia Kusumawardhani",
      jabatan: "Chief Operating Officer",
      foto: "https://picsum.photos/seed/chiffon-coo/400/500",
      bio: "Menyelaraskan operasional tiga lini usaha agar tumbuh efisien tanpa kehilangan kecepatan.",
    },
    {
      nama: "Bima Prasetyo",
      jabatan: "Chief Financial Officer",
      foto: "https://picsum.photos/seed/chiffon-cfo/400/500",
      bio: "Menjaga kesehatan finansial grup dengan disiplin anggaran dan tata kelola risiko yang ketat.",
    },
    {
      nama: "Ayu Prameswari",
      jabatan: "Chief Marketing Officer",
      foto: "https://picsum.photos/seed/chiffon-cmo/400/500",
      bio: "Membangun citra grup yang konsisten, kredibel, dan dekat dengan konsumen di seluruh lini.",
    },
    {
      nama: "dr. Sarah Wijaya",
      jabatan: "Head of Health & Wellness",
      foto: "https://picsum.photos/seed/chiffon-health/400/500",
      bio: "Mengawal kualitas produk Zynergia agar selaras dengan standar kesehatan dan kebutuhan konsumen.",
    },
    {
      nama: "Kevin Tanudjaja",
      jabatan: "Chief Technology Officer",
      foto: "https://picsum.photos/seed/chiffon-cto/400/500",
      bio: "Mengarahkan transformasi digital grup, dari platform booking hingga sistem manajemen armada EV Bus.",
    },
  ],
  kontak: {
    alamat:
      "Menara Chiffon, Jl. Jend. Sudirman Kav. 52–53, Jakarta Selatan 12190",
    email: "hello@chiffon.co.id",
    telepon: "+62 21 5000 1234",
    jam: "Senin–Jumat: 08.30 – 17.30 WIB",
  },
};

export const subPerusahaan: SubPerusahaan[] = [
  {
    id: "zynergia",
    nama: "Zynergia Health & Wellness",
    lini: "Healthcare · Beauty & Skincare",
    deskripsi:
      "Lini kesehatan dan kecantikan grup yang menghadirkan produk wellness, skincare, dan suplemen berkualitas untuk masyarakat Indonesia.",
    deskripsiPanjang:
      "Zynergia hadir dengan keyakinan bahwa kesehatan adalah fondasi kualitas hidup. Berfokus pada produk wellness, perawatan kulit, dan suplemen yang terkurasi, Zynergia melayani konsumen melalui jaringan distributor resmi, kanal modern trade, dan platform digital — dengan standar mutu yang dijaga ketat dari hulu hingga hilir.",
    status: "aktif",
    url: "https://zynergia.health/",
    gambar: "https://picsum.photos/seed/zynergia1/800/600",
    highlight: ["Wellness", "Skincare", "Distributor Resmi"],
  },
  {
    id: "travel",
    nama: "Chiffon International Travel",
    lini: "Tour & Travel Platform",
    deskripsi:
      "Platform tur dan perjalanan digital yang menghubungkan perencanaan, pembayaran, hingga pengelolaan perjalanan dalam satu ekosistem.",
    deskripsiPanjang:
      "Chiffon International Travel membangun ekosistem perjalanan end-to-end: perencanaan itinerary, pemesanan tiket dan penginapan, hingga sistem pembayaran yang aman. Dirancang untuk segmen korporasi dan individu, platform ini dikelola lewat dashboard admin terpusat agar setiap perjalanan tercatat, transparan, dan mudah diaudit.",
    status: "aktif",
    url: "https://chiffon-travel.vercel.app/",
    gambar: "https://picsum.photos/seed/travel1/800/600",
    highlight: ["Booking", "Payment Gateway", "Admin Panel"],
  },
  {
    id: "evbus",
    nama: "EV Bus",
    lini: "Transportasi Bus Listrik",
    deskripsi:
      "Inisiatif transportasi publik berbasis bus listrik yang dirancang untuk masa depan kota yang lebih bersih dan tenang.",
    deskripsiPanjang:
      "EV Bus adalah langkah Chiffon International menuju transportasi publik netral karbon. Armada bus listrik dengan manajemen armada pintar (smart fleet) dirancang untuk menjawab kebutuhan mobilitas perkotaan: emisi lebih rendah, biaya operasional lebih efisien, dan pengalaman perjalanan yang lebih nyaman. Saat ini masih dalam tahap persiapan peluncuran.",
    status: "coming-soon",
    url: "#",
    gambar: "https://picsum.photos/seed/evbus1/800/600",
    highlight: ["Netral Karbon", "Smart Fleet"],
  },
];

export const sertifikasi = [
  { nama: "ISO 9001:2015 — Manajemen Mutu", tahun: "2018" },
  { nama: "ISO 45001 — K3 & Lingkungan Kerja", tahun: "2020" },
  { nama: "CSR Awards — Kategori Keberlanjutan", tahun: "2023" },
  { nama: "Top Holding Company Indonesia", tahun: "2024" },
];

export const kontakSubjek = [
  { value: "umum", label: "Pertanyaan Umum" },
  { value: "kerja-sama", label: "Kerja Sama" },
  { value: "media", label: "Media & Press" },
  { value: "investasi", label: "Investasi" },
];
