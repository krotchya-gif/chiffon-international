import { Hero } from "@/components/home/hero";
import { SubPerusahaanSection } from "@/components/home/sub-perusahaan-section";
import { VisiMisi } from "@/components/home/visi-misi";
import { StatsSection } from "@/components/home/stats-section";
import { NilaiSection } from "@/components/home/nilai-section";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SubPerusahaanSection />
      <VisiMisi />
      <StatsSection />
      <NilaiSection />
      <CtaBanner />
    </>
  );
}
