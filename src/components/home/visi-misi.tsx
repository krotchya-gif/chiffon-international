"use client";

import { Quotes, CheckCircle } from "@phosphor-icons/react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/motion-utils";
import { useMessages } from "@/i18n/client";

export function VisiMisi() {
  const t = useMessages();
  const { perusahaan } = t.data;

  return (
    <section className="border-y border-border bg-muted/30 py-24 md:py-32">
      <div className="container-edge grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading eyebrow={t.visiMisi.eyebrow} title={t.visiMisi.title} />
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="mt-10 border-s-2 border-accent ps-6 md:ps-8">
              <Quotes
                weight="fill"
                className="h-8 w-8 -ms-1 text-accent/70 rtl:-scale-x-100"
              />
              <blockquote className="mt-3 font-display text-2xl font-medium leading-snug tracking-tight md:text-[2rem]">
                {perusahaan.visi}
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">
                {t.visiMisi.visiCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t.visiMisi.misiKami}
          </p>
          <ol className="divide-y divide-border">
            {perusahaan.misi.map((misi, i) => (
              <Reveal key={misi} delay={i * 0.06}>
                <li className="flex items-start gap-4 py-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/25">
                    <CheckCircle weight="light" className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-0.5 leading-relaxed">{misi}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
