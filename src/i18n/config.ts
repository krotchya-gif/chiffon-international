export const locales = ["id", "en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

export const localeNames: Record<Locale, string> = {
  id: "Bahasa",
  en: "English",
  ar: "العربية",
};

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  id: "ltr",
  en: "ltr",
  ar: "rtl",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("/")) {
    return `/${locale}${href}`;
  }
  return href;
}
