import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Chiffon International — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.",
};

export default function PrivacyPage() {
  return (
    <div className="container-edge max-w-3xl pb-24 pt-24">
      <SectionHeading
        eyebrow="Legal"
        title="Kebijakan Privasi"
        description="Terakhir diperbarui: Januari 2026"
      />
      <div className="mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            1. Data yang Kami Kumpulkan
          </h2>
          <p className="mt-4">
            Chiffon International mengumpulkan informasi yang Anda berikan
            secara langsung melalui formulir kontak — seperti nama, alamat
            email, subjek, dan isi pesan. Kami juga mengumpulkan data
            penggunaan situs secara agregat (halaman yang dikunjungi, durasi
            kunjungan) melalui cookie analitik untuk meningkatkan pengalaman
            pengunjung.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            2. Cara Kami Menggunakan Data
          </h2>
          <p className="mt-4">
            Informasi yang Anda kirimkan digunakan semata-mata untuk
            merespons pertanyaan, memproses permintaan kerja sama, dan
            mengirim informasi yang relevan dengan kebutuhan Anda. Kami tidak
            pernah menjual data pribadi Anda kepada pihak ketiga. Data
            penggunaan agregat digunakan untuk menganalisis dan meningkatkan
            kualitas situs kami.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            3. Penyimpanan & Hak Anda
          </h2>
          <p className="mt-4">
            Data disimpan di server terlindungi dan hanya diakses oleh
            pihak yang berwenang. Anda berhak meminta akses, koreksi, atau
            penghapusan data pribadi Anda kapan saja dengan menghubungi
            hello@chiffon.co.id. Permintaan kami proses dalam waktu paling
            lambat 7 hari kerja.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            4. Tautan ke Situs Lain
          </h2>
          <p className="mt-4">
            Situs ini memuat tautan ke website sub-perusahaan kami. Kebijakan
            privasi ini tidak berlaku untuk situs eksternal; silakan membaca
            kebijakan privasi masing-masing situs sebelum membagikan data
            Anda.
          </p>
        </section>
      </div>
    </div>
  );
}
