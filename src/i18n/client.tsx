"use client";

import * as React from "react";

import { defaultLocale, isLocale } from "./config";
import type { Locale } from "./config";
import { getMessages } from "./get-messages";
import type { Messages } from "./types";

const LocaleContext = React.createContext<{ locale: Locale; t: Messages } | null>(
  null,
);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const value = React.useMemo(() => {
    const safe = isLocale(locale) ? locale : defaultLocale;
    return { locale: safe, t: getMessages(safe) };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  return ctx?.locale ?? defaultLocale;
}

export function useMessages() {
  const ctx = React.useContext(LocaleContext);
  if (ctx) return ctx.t;
  return getMessages(defaultLocale);
}
