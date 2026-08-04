"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/motion-utils";
import { ImgWithFallback } from "@/components/img-with-fallback";
import { useLocale, useMessages } from "@/i18n/client";
import { localizeHref } from "@/i18n/config";

export function CtaBanner() {
  const locale = useLocale();
  const t = useMessages();

  return (
    <section className="container-edge pb-24 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy-deep">
          <ImgWithFallback
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80&auto=format&fit=crop"
            alt={t.ctaBanner.imageAlt}
            className="absolute inset-0 opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-navy-deep/40 rtl:bg-gradient-to-l" />
          <div className="relative flex flex-col items-start gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-14 md:py-20">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {t.ctaBanner.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {t.ctaBanner.title}
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                {t.ctaBanner.description}
              </p>
            </div>
            <Button variant="accent" size="lg" asChild>
              <Link href={localizeHref("/kontak", locale)}>
                {t.ctaBanner.cta}
                <ArrowRight weight="light" className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
