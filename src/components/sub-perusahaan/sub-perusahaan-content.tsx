"use client";

import { WarningCircle } from "@phosphor-icons/react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/motion-utils";
import { PhantomSkeleton } from "@/components/phantom-skeleton";
import { SubPerusahaanZigzag } from "@/components/sub-perusahaan-cards";
import { useSubPerusahaan } from "@/hooks/use-mock-data";
import { useMessages } from "@/i18n/client";

function LoadingZigzag() {
  return (
    <PhantomSkeleton loading>
      <div className="space-y-20">
        {["Chiffon International Travel", "Zynergia Health & Wellness", "EV Bus"].map(
          (nama) => (
            <div
              key={nama}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className="aspect-[16/10] rounded-2xl border border-border bg-card">
                <p className="p-6 font-display text-2xl">{nama}</p>
              </div>
              <div className="space-y-4">
                <p className="h-4 w-2/3 rounded bg-card" />
                <p className="h-4 w-full rounded bg-card" />
                <p className="h-4 w-5/6 rounded bg-card" />
              </div>
            </div>
          ),
        )}
      </div>
    </PhantomSkeleton>
  );
}

export function SubPerusahaanContent() {
  const t = useMessages();
  const { data, isLoading, isError, refetch } = useSubPerusahaan();

  return (
    <>
      <section className="container-edge pt-24">
        <Reveal>
          <SectionHeading
            eyebrow={t.subPerusahaanPage.eyebrow}
            title={t.subPerusahaanPage.title}
            description={t.subPerusahaanPage.description}
          />
        </Reveal>
      </section>

      <section className="container-edge py-20 md:py-24">
        {isLoading && <LoadingZigzag />}

        {isError && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-20 text-center">
            <WarningCircle weight="light" className="h-10 w-10 text-warning" />
            <p className="mt-4 font-display text-xl font-semibold">
              {t.subPerusahaanPage.errorTitle}
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {t.subPerusahaanPage.errorDesc}
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="mt-6 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted cursor-pointer"
            >
              {t.subPerusahaanPage.cobaLagi}
            </button>
          </div>
        )}

        {data && (
          <div className="space-y-20 md:space-y-28">
            {data.map((sp, i) => (
              <Reveal key={sp.id}>
                <SubPerusahaanZigzag sp={sp} reversed={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
