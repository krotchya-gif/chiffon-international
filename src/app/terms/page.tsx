import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan situs Chiffon International.",
};

export default function TermsPage() {
  return (
    <div className="container-edge max-w-3xl pb-24 pt-24">
      <SectionHeading
        eyebrow="Legal"
        title="Syarat & Ketentuan"
        description="Terakhir diperbarui: Januari 2026"
      />
      <div className="mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            1. Penggunaan Situs
          </h2>
          <p className="mt-4">
            Dengan mengakses situs Chiffon International, Anda menyetujui
            ketentuan berikut. Seluruh konten — teks, desain, logo, dan
            identitas visual — merupakan milik Chiffon International dan
            dilindungi hukum kekayaan intelektual. Anda tidak diperkenankan
            menyalin atau menggunakan konten untuk kepentingan komersial
            tanpa izin tertulis.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            2. Informasi Produk & Layanan
          </h2>
          <p className="mt-4">
            Informasi yang ditampilkan di situs ini bersifat informatif dan
            dapat berubah sewaktu-waktu tanpa pemberitahuan. Tautan menuju
            website sub-perusahaan dikelola oleh masing-masing entitas;
            ketentuan transaksi berlaku sesuai kebijakan entitas terkait.
            Produk EV Bus yang ditampilkan berstatus Coming Soon dan belum
            tersedia untuk dipesan.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            3. Batasan Tanggung Jawab
          </h2>
          <p className="mt-4">
            Kami berusaha menjaga akurasi informasi di situs ini, namun tidak
            menjamin kelengkapan atau kesesuaiannya untuk tujuan tertentu.
            Chiffon International tidak bertanggung jawab atas kerugian yang
            timbul dari penggunaan informasi atau tautan di situs ini.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            4. Perubahan Ketentuan
          </h2>
          <p className="mt-4">
            Ketentuan ini dapat diperbarui dari waktu ke waktu. Perubahan
            akan diumumkan di halaman ini dengan tanggal pembaruan terbaru.
            Penggunaan situs setelah perubahan berarti Anda menyetujui
            ketentuan yang berlaku.
          </p>
        </section>
      </div>
    </div>
  );
}
