"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Play } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImgWithFallback } from "@/components/img-with-fallback";
import { useLocale, useMessages } from "@/i18n/client";
import { localizeHref } from "@/i18n/config";

export function Hero() {
  const locale = useLocale();
  const t = useMessages();
  const { perusahaan } = t.data;

  return (
    <section className="container-edge grid min-h-dvh items-center gap-12 py-16 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-0">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Badge variant="outline" className="gap-2 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.hero.badge}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 font-display text-5xl font-semibold tracking-tighter leading-[0.98] md:text-6xl lg:text-7xl"
        >
          {perusahaan.nama.split(" ")[0]}
          <br />
          <span className="text-muted-foreground/60">{t.hero.internationalWord}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {perusahaan.tagline}. {t.hero.paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button variant="accent" size="lg" asChild>
            <Link href={localizeHref("/sub-perusahaan", locale)}>
              {t.hero.ctaJelajahi}
              <ArrowRight weight="light" className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href={localizeHref("/tentang", locale)}>
              <Play weight="light" className="h-4 w-4" />
              {t.hero.ctaKisah}
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-6 text-sm sm:gap-8"
        >
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">2009</p>
            <p className="text-xs text-muted-foreground">{t.hero.statTahunBerdiri}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">3</p>
            <p className="text-xs text-muted-foreground">{t.hero.statLiniUsaha}</p>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">6</p>
            <p className="text-xs text-muted-foreground">{t.hero.statPilar}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-navy-deep lg:aspect-[3/4]">
          <ImgWithFallback
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop"
            alt={t.hero.imageAlt}
            className="absolute inset-0"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
            <div className="flex items-center gap-3 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/90 text-accent-foreground">
                <MapPin weight="light" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-base font-semibold leading-tight">
                  {t.hero.buildingName}
                </p>
                <p className="text-xs text-white/70">{t.hero.buildingLocation}</p>
              </div>
            </div>
            <span className="hidden h-px w-16 bg-accent sm:block" />
          </div>
        </div>

        <div className="absolute -top-5 end-6 hidden rounded-2xl border border-border bg-card/80 px-5 py-4 shadow-lg backdrop-blur-xl sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t.hero.floatingLabel}
          </p>
          <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-accent">
            {t.hero.floatingValue}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
