"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Globe, List } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useMessages } from "@/i18n/client";
import { localizeHref, localeNames, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useMessages();

  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { href: "/", label: t.nav.beranda },
    { href: "/tentang", label: t.nav.tentang },
    { href: "/sub-perusahaan", label: t.nav.subPerusahaan },
    { href: "/tim", label: t.nav.tim },
    { href: "/kontak", label: t.nav.kontak },
  ];

  function switchLocale(next: Locale) {
    const segments = pathname.split("/");
    segments[1] = next;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav className="container-edge flex items-center justify-between rounded-full border border-border/70 bg-card/70 px-4 py-2.5 shadow-sm backdrop-blur-xl sm:px-5 sm:py-3">
        <Link
          href={localizeHref("/", locale)}
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground sm:h-9 sm:w-9">
            C
          </span>
          <span className="hidden text-base sm:inline">Chiffon International</span>
          <span className="text-base sm:hidden">Chiffon</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === `/${locale}`
                : pathname.startsWith(`${locale}/${link.href.slice(1)}`);
            return (
              <Link
                key={link.href}
                href={localizeHref(link.href, locale)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Select value={locale} onValueChange={switchLocale}>
            <SelectTrigger
              className="h-9 w-auto gap-1.5 px-2 [&>svg]:hidden sm:px-2.5"
              aria-label={t.nav.pilihBahasa}
            >
              <Globe weight="light" className="h-4 w-4" />
              <SelectValue className="hidden text-sm font-medium sm:inline" />
            </SelectTrigger>
            <SelectContent align="end">
              {locales.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {localeNames[lang]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <ThemeToggle />

          <Link href={localizeHref("/kontak", locale)} className="hidden md:block">
            <Button variant="accent" size="sm" className="px-5">
              {t.nav.hubungiKami}
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={t.nav.bukaMenu}
              >
                <List weight="light" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={locale === "ar" ? "left" : "right"}
              closeLabel={t.nav.bukaMenu}
            >
              <SheetTitle>{t.nav.navigasi}</SheetTitle>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === `/${locale}`
                      : pathname.startsWith(`${locale}/${link.href.slice(1)}`);
                  return (
                    <Link
                      key={link.href}
                      href={localizeHref(link.href, locale)}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-4 py-3 text-base transition-colors",
                        active
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-auto">
                <Link
                  href={localizeHref("/kontak", locale)}
                  onClick={() => setOpen(false)}
                >
                  <Button variant="accent" className="w-full">
                    {t.nav.hubungiKami}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
