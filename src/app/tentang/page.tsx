import type { Metadata } from "next";
import { TentangContent } from "@/components/tentang/tentang-content";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kisah Chiffon International sejak 2009 — perjalanan, milestone, nilai, dan pengakuan yang membentuk grup hingga hari ini.",
};

export default function TentangPage() {
  return <TentangContent />;
}
