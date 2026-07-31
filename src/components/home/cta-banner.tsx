"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/motion-utils";
import { ImgWithFallback } from "@/components/img-with-fallback";

export function CtaBanner() {
  return (
    <section className="container-edge pb-24 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy-deep">
          <ImgWithFallback
            src="https://picsum.photos/seed/chiffon-cta/1600/700"
            alt="Kantor Chiffon International"
            className="absolute inset-0 opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-navy-deep/40" />
          <div className="relative flex flex-col items-start gap-8 px-8 py-16 md:flex-row md:items-center md:justify-between md:px-14 md:py-20">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Kerja Sama & Investasi
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Bekerja Sama dengan Kami
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Baik sebagai mitra bisnis, distributor, investor, atau media —
                tim kami siap mendengar dan merespons.
              </p>
            </div>
            <Button variant="accent" size="lg" asChild>
              <Link href="/kontak">
                Hubungi Kami
                <ArrowRight weight="light" className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
