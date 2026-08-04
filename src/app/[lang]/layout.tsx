import type { Metadata } from "next";
import { Outfit, DM_Sans, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";

import "@aejkatappaja/phantom-ui/ssr.css";
import "@/app/globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { LocaleProvider } from "@/i18n/client";
import { locales } from "@/i18n/config";
import { getMessages, hasLocale } from "@/i18n/get-messages";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const t = getMessages(lang);

  return {
    title: {
      default: t.meta.title,
      template: `%s | ${t.data.perusahaan.nama}`,
    },
    description: t.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
} & Props) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dir = lang === "ar" ? "rtl" : "ltr";
  const fontClass =
    lang === "ar"
      ? `${outfit.variable} ${dmSans.variable} ${notoArabic.variable}`
      : `${outfit.variable} ${dmSans.variable}`;

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      className={`${fontClass} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider locale={lang}>
            <QueryProvider>
              <SiteNavbar />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <Toaster />
            </QueryProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
