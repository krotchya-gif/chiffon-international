"use client";

import { Scales, Lightbulb, Leaf, Handshake } from "@phosphor-icons/react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/motion-utils";
import { useMessages } from "@/i18n/client";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  scale: Scales,
  lightbulb: Lightbulb,
  leaf: Leaf,
  handshake: Handshake,
};

export function NilaiSection() {
  const t = useMessages();
  const { perusahaan } = t.data;

  return (
    <section className="py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow={t.nilaiSection.eyebrow}
          title={t.nilaiSection.title}
          description={t.nilaiSection.description}
          align="center"
        />
        <div className="mx-auto mt-14 max-w-4xl">
          {perusahaan.nilai.map((nilai, i) => {
            const Icon = iconMap[nilai.icon] ?? Scales;
            return (
              <Reveal key={nilai.nama} delay={i * 0.06}>
                <div
                  className={cn(
                    "group flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-start sm:gap-8",
                    i === perusahaan.nilai.length - 1 && "border-b",
                  )}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon weight="light" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                      <span className="me-3 text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {nilai.nama}
                    </p>
                    <p className="mt-2 max-w-[65ch] leading-relaxed text-muted-foreground">
                      {nilai.deskripsi}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
