"use client";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";

import { subPerusahaan, perusahaan } from "@/data/mock-data";
import { Separator } from "@/components/ui/separator";

const kolomPerusahaan = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/tim", label: "Tim & Kepemimpinan" },
  { href: "/kontak", label: "Hubungi Kami" },
  { href: "/privacy", label: "Kebijakan Privasi" },
  { href: "/terms", label: "Syarat & Ketentuan" },
];

const kolomLayanan = [
  "Distribusi & Ritel",
  "Konsultasi Kesehatan",
  "Perjalanan Korporasi",
  "Solusi Logistik",
];

const sosial = [
  { label: "LinkedIn", icon: LinkedinLogo, href: "#" },
  { label: "Instagram", icon: InstagramLogo, href: "#" },
  { label: "Facebook", icon: FacebookLogo, href: "#" },
  { label: "YouTube", icon: YoutubeLogo, href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/80">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-base font-bold text-accent-foreground">
              C
            </span>
            Chiffon International
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/60">
            {perusahaan.tagline}. Holding company Indonesia yang menaungi tiga
            lini bisnis — kesehatan, perjalanan, dan transportasi masa depan.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {sosial.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon weight="light" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Grup
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {subPerusahaan.map((sp) => (
              <li key={sp.id}>
                <Link
                  href={sp.status === "coming-soon" ? "/sub-perusahaan" : sp.url}
                  target={sp.status === "coming-soon" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-foreground/60 transition-colors hover:text-accent"
                >
                  {sp.nama}
                  {sp.status === "aktif" && (
                    <ArrowUpRight weight="light" className="h-3.5 w-3.5" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Perusahaan
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {kolomPerusahaan.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/60 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Layanan
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {kolomLayanan.map((layanan) => (
              <li key={layanan} className="text-primary-foreground/60">
                {layanan}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="bg-primary-foreground/10" />

      <div className="container-edge flex flex-col items-center justify-between gap-4 py-6 text-xs text-primary-foreground/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Chiffon International. Seluruh hak cipta dilindungi.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-accent">
            Kebijakan Privasi
          </Link>
          <Link href="/terms" className="hover:text-accent">
            Syarat & Ketentuan
          </Link>
        </div>
      </div>
    </footer>
  );
}
