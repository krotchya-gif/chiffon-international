"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/motion-utils";
import { ImgWithFallback } from "@/components/img-with-fallback";
import { perusahaan } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export function TimContent() {
  const [ceo, ...tim] = perusahaan.team;

  return (
    <>
      <section className="container-edge pt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Tim & Kepemimpinan"
            title="Dipimpin oleh Mereka yang Membangun"
            description="Di belakang setiap lini usaha ada individu dengan rekam jejak, keahlian, dan komitmen terhadap standar Chiffon International."
          />
        </Reveal>
      </section>

      <section className="container-edge py-20 md:py-24">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[4/5] min-h-[420px] lg:aspect-auto lg:min-h-[540px]">
              <ImgWithFallback
                src={ceo.foto}
                alt={`Foto ${ceo.nama}`}
                className="absolute inset-0"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Pimpinan Grup
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                {ceo.nama}
              </h2>
              <p className="mt-2 font-display text-lg font-medium text-muted-foreground">
                {ceo.jabatan}
              </p>
              <p className="mt-6 max-w-[55ch] leading-relaxed text-muted-foreground">
                {ceo.bio}
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
                <div>
                  <p className="font-display text-2xl font-semibold tracking-tight">
                    {perusahaan.stats[1].value.toLocaleString("id-ID")}+
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Pelanggan Terlayani
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold tracking-tight">
                    {perusahaan.stats[2].value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Karyawan Grup
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold tracking-tight">
                    3
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Lini Usaha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tim.map((anggota, i) => (
            <Reveal key={anggota.nama} delay={(i % 3) * 0.08}>
              <article
                className={cn(
                  "group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg",
                )}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <ImgWithFallback
                    src={anggota.foto}
                    alt={`Foto ${anggota.nama}`}
                    className="absolute inset-0"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-deep/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {anggota.nama}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {anggota.jabatan}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {anggota.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
