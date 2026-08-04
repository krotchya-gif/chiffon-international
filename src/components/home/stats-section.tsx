"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, CountUp } from "@/components/motion/motion-utils";
import { useMessages } from "@/i18n/client";

export function StatsSection() {
  const t = useMessages();
  const { perusahaan } = t.data;

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-edge grid gap-12 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={t.statsSection.eyebrow}
            title={t.statsSection.title}
            description={t.statsSection.description}
            className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/70"
          />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-md border-s-2 border-accent ps-5 text-sm leading-relaxed text-primary-foreground/60">
              {t.statsSection.dataNote}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/15">
          {perusahaan.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="bg-primary">
              <div className="flex h-full flex-col justify-between gap-10 bg-primary p-6 md:p-9">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/55">
                  {stat.label}
                </p>
                <p className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
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
