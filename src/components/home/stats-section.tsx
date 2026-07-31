"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, CountUp } from "@/components/motion/motion-utils";
import { perusahaan } from "@/data/mock-data";

export function StatsSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-edge grid gap-12 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Angka Grup"
            title="Hasil yang Tercatat, Bukan Sekadar Klaim"
            description="Kami menyajikan angka apa adanya — pertumbuhan yang bisa dilacak, tim yang bekerja, dan proyek yang berjalan."
            className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/70"
          />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-md border-l-2 border-accent pl-5 text-sm leading-relaxed text-primary-foreground/60">
              Data terakhir diperbarui per triwulan berjalan. Seluruh angka
              bersumber dari laporan operasional internal grup.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/15">
          {perusahaan.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="bg-primary">
              <div className="flex h-full flex-col justify-between gap-10 bg-primary p-7 md:p-9">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/55">
                  {stat.label}
                </p>
                <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  <CountUp value={stat.value} />
                  {stat.suffix}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
