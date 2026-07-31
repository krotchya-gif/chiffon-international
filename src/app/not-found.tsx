"use client";
import Link from "next/link";
import { HouseLine, Compass } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-edge flex min-h-dvh flex-col items-center justify-center pb-24 text-center">
      <p className="font-display text-[7rem] font-bold leading-none tracking-tighter text-primary md:text-[10rem]">
        4<span className="text-accent">0</span>4
      </p>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
        Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau
        tidak pernah ada. Mari kembali ke arah yang benar.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Button variant="accent" size="lg" asChild>
          <Link href="/">
            <HouseLine weight="light" className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/sub-perusahaan">
            <Compass weight="light" className="h-4 w-4" />
            Jelajahi Lini Usaha
          </Link>
        </Button>
      </div>
    </div>
  );
}
