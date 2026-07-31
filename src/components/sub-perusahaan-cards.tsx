"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Hourglass } from "@phosphor-icons/react";

import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ImgWithFallback } from "@/components/img-with-fallback";
import type { SubPerusahaan } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export function BadgeStatus({ status }: { status: SubPerusahaan["status"] }) {
  return status === "aktif" ? (
    <Badge variant="success">Aktif</Badge>
  ) : (
    <Badge variant="warning">Coming Soon</Badge>
  );
}

export function SubPerusahaanCard({
  sp,
  aspect = "aspect-[4/3]",
  className,
}: {
  sp: SubPerusahaan;
  aspect?: string;
  className?: string;
}) {
  const isComingSoon = sp.status === "coming-soon";

  const inner = (
    <div
      className={cn(
        "group relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-navy-deep",
        aspect,
        className,
      )}
    >
      <ImgWithFallback
        src={sp.gambar}
        alt={sp.nama}
        className="absolute inset-0"
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/45 to-navy-deep/10 transition-opacity duration-500 group-hover:from-navy-deep/100 group-hover:via-navy-deep/55" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="flex flex-wrap items-center gap-2">
          <BadgeStatus status={sp.status} />
          <Badge variant="outline" className="border-white/25 text-white/80">
            {sp.lini}
          </Badge>
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
          {sp.nama}
        </h3>
        <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-white/70">
          {sp.deskripsi}
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-accent">
          {isComingSoon ? (
            <>
              <Hourglass weight="light" className="h-4 w-4" />
              Segera Hadir
            </>
          ) : (
            <>
              Kunjungi Website
              <ArrowUpRight
                weight="light"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );

  if (isComingSoon) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className="block h-full w-full text-left cursor-pointer">
            {inner}
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <Badge variant="warning" className="w-max">
              Coming Soon
            </Badge>
            <DialogTitle className="pt-2 font-display text-2xl">
              EV Bus
            </DialogTitle>
            <DialogDescription className="leading-relaxed">
              EV Bus masih dalam tahap persiapan peluncuran. Inisiatif
              transportasi publik berbasis bus listrik ini dirancang untuk
              menghadirkan mobilitas kota yang netral karbon, dengan
              manajemen armada pintar dan pengalaman perjalanan yang lebih
              tenang. Nantikan pengumuman resmi dari Chiffon International.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-between border-t pt-4 text-sm">
            <span className="text-muted-foreground">Lini Bisnis</span>
            <span className="font-medium">{sp.lini}</span>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Link href={sp.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      {inner}
    </Link>
  );
}

export function SubPerusahaanZigzag({
  sp,
  reversed,
}: {
  sp: SubPerusahaan;
  reversed?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(reversed && "lg:order-2")}>
        <div className="relative overflow-hidden rounded-2xl border border-border">
          <div className="aspect-[16/10]">
            <ImgWithFallback
              src={sp.gambar}
              alt={sp.nama}
              className="absolute inset-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      <div className={cn(reversed && "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-2">
          <BadgeStatus status={sp.status} />
          <Badge variant="secondary">{sp.lini}</Badge>
        </div>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {sp.nama}
        </h3>
        <p className="mt-4 max-w-[65ch] leading-relaxed text-muted-foreground">
          {sp.deskripsiPanjang}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {sp.highlight.map((h) => (
            <li
              key={h}
              className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground"
            >
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          {sp.status === "coming-soon" ? (
            <Button variant="secondary" disabled>
              <Hourglass weight="light" className="h-4 w-4" />
              Segera Hadir
            </Button>
          ) : (
            <Button variant="accent" asChild>
              <Link href={sp.url} target="_blank" rel="noopener noreferrer">
                Kunjungi Website
                <ArrowRight weight="light" className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
