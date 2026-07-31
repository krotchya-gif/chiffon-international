import type { Metadata } from "next";
import { SubPerusahaanContent } from "@/components/sub-perusahaan/sub-perusahaan-content";

export const metadata: Metadata = {
  title: "Sub-Perusahaan",
  description:
    "Tiga lini bisnis di bawah naungan Chiffon International: Zynergia Health & Wellness, Chiffon International Travel, dan EV Bus.",
};

export default function SubPerusahaanPage() {
  return <SubPerusahaanContent />;
}
