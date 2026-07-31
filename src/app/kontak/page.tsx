import type { Metadata } from "next";
import { KontakContent } from "@/components/kontak/kontak-content";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Chiffon International — alamat kantor, email, telepon, jam operasional, dan formulir kontak untuk kerja sama, media, dan investasi.",
};

export default function KontakPage() {
  return <KontakContent />;
}
