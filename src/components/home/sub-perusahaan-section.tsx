"use client";

import Link from "next/link";
import { ArrowRight, WarningCircle } from "@phosphor-icons/react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/motion-utils";
import { PhantomSkeleton } from "@/components/phantom-skeleton";
import { SubPerusahaanCard } from "@/components/sub-perusahaan-cards";
import { useSubPerusahaan } from "@/hooks/use-mock-data";

function LoadingBento() {
  return (
    <PhantomSkeleton loading>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2 md:auto-rows-fr">
        <div className="aspect-[4/3] rounded-2xl border border-border bg-card md:col-span-2 md:row-span-2 md:aspect-auto">
          <p className="p-6 font-display text-2xl">Chiffon International Travel</p>
        </div>
        <div className="aspect-[4/3] rounded-2xl border border-border bg-card md:aspect-auto md:h-[340px]">
          <p className="p-6 font-display text-2xl">Zynergia</p>
        </div>
        <div className="aspect-[4/3] rounded-2xl border border-border bg-card md:aspect-auto md:h-[340px]">
          <p className="p-6 font-display text-2xl">EV Bus</p>
        </div>
      </div>
    </PhantomSkeleton>
  );
}

export function SubPerusahaanSection() {
  const { data, isLoading, isError, refetch } = useSubPerusahaan();
  const travel = data?.find((sp) => sp.id === "travel");
  const zynergia = data?.find((sp) => sp.id === "zynergia");
  const evbus = data?.find((sp) => sp.id === "evbus");

  return (
    <section className="container-edge py-24 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Lini Usaha"
          title="Tiga Bisnis, Satu Ekosistem"
          description="Setiap lini dikembangkan sebagai pemimpin di bidangnya — dihubungkan oleh tata kelola grup yang sama."
        />
        <Reveal delay={0.1}>
          <Link
            href="/sub-perusahaan"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Lihat Semua Lini
            <ArrowRight
              weight="light"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12">
        {isLoading && <LoadingBento />}

        {isError && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-20 text-center">
            <WarningCircle weight="light" className="h-10 w-10 text-warning" />
            <p className="mt-4 font-display text-xl font-semibold">
              Gagal memuat data lini usaha
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Terjadi kesalahan saat mengambil data. Silakan coba lagi.
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="mt-6 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted cursor-pointer"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {data && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2 md:auto-rows-fr">
            <Reveal className="md:col-span-2 md:row-span-2">
              {travel && (
                <SubPerusahaanCard
                  sp={travel}
                  aspect="aspect-[4/3] md:aspect-auto"
                />
              )}
            </Reveal>
            <Reveal delay={0.12}>
              {zynergia && (
                <SubPerusahaanCard
                  sp={zynergia}
                  aspect="aspect-[4/3] md:aspect-auto md:h-[340px]"
                />
              )}
            </Reveal>
            <Reveal delay={0.24}>
              {evbus && (
                <SubPerusahaanCard
                  sp={evbus}
                  aspect="aspect-[4/3] md:aspect-auto md:h-[340px]"
                />
              )}
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
