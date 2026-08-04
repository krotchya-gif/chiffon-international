"use client";

import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";

import { Separator } from "@/components/ui/separator";
import { useLocale, useMessages } from "@/i18n/client";
import { localizeHref } from "@/i18n/config";

const sosial = [
  { label: "LinkedIn", icon: LinkedinLogo, href: "#" },
  { label: "Instagram", icon: InstagramLogo, href: "#" },
  { label: "Facebook", icon: FacebookLogo, href: "#" },
  { label: "YouTube", icon: YoutubeLogo, href: "#" },
];

export function SiteFooter() {
  const locale = useLocale();
  const t = useMessages();
  const { perusahaan, subPerusahaan } = t.data;

  const kolomPerusahaan = [
    { href: "/tentang", label: t.footer.kolomPerusahaan.tentangKami },
    { href: "/tim", label: t.footer.kolomPerusahaan.timKepemimpinan },
    { href: "/kontak", label: t.footer.kolomPerusahaan.hubungiKami },
    { href: "/privacy", label: t.footer.kolomPerusahaan.kebijakanPrivasi },
    { href: "/terms", label: t.footer.kolomPerusahaan.syaratKetentuan },
  ];

  return (
    <footer className="bg-navy-deep text-primary-foreground/80">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link
            href={localizeHref("/", locale)}
            className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-base font-bold text-accent-foreground">
              C
            </span>
            Chiffon International
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/60">
            {perusahaan.tagline}. {t.footer.deskripsi}
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
            {t.footer.grupp}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {subPerusahaan.map((sp) => (
              <li key={sp.id}>
                <Link
                  href={
                    sp.status === "coming-soon"
                      ? localizeHref("/sub-perusahaan", locale)
                      : sp.url
                  }
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
            {t.footer.perusahaan}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {kolomPerusahaan.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizeHref(item.href, locale)}
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
            {t.footer.layanan}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {t.footer.kolomLayanan.map((layanan) => (
              <li key={layanan} className="text-primary-foreground/60">
                {layanan}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="bg-primary-foreground/10" />

      <div className="container-edge flex flex-col items-center justify-between gap-4 py-6 text-center text-xs text-primary-foreground/50 sm:flex-row sm:text-start">
        <p>
          © {new Date().getFullYear()} Chiffon International. {t.footer.hakCipta}
        </p>
        <div className="flex items-center gap-6">
          <Link href={localizeHref("/privacy", locale)} className="hover:text-accent">
            {t.footer.kebijakanPrivasi}
          </Link>
          <Link href={localizeHref("/terms", locale)} className="hover:text-accent">
            {t.footer.syaratKetentuan}
          </Link>
        </div>
      </div>
    </footer>
  );
}
