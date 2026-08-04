"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HouseLine, Compass } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { isLocale, localizeHref } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";

export default function NotFound() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const raw = segments[1] ?? "";
  const locale: Locale = isLocale(raw) ? raw : "id";
  const t = getMessages(locale);

  return (
    <div className="container-edge flex min-h-dvh flex-col items-center justify-center px-4 pb-24 text-center">
      <p className="font-display text-[7rem] font-bold leading-none tracking-tighter text-primary md:text-[10rem]">
        4<span className="text-accent">0</span>4
      </p>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {t.notFound.title}
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
        {t.notFound.description}
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Button variant="accent" size="lg" asChild>
          <Link href={localizeHref("/", locale)}>
            <HouseLine weight="light" className="h-4 w-4" />
            {t.notFound.ctaBeranda}
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href={localizeHref("/sub-perusahaan", locale)}>
            <Compass weight="light" className="h-4 w-4" />
            {t.notFound.ctaJelajahi}
          </Link>
        </Button>
      </div>
    </div>
  );
}
