import type { Metadata } from "next";

import { KontakContent } from "@/components/kontak/kontak-content";
import { getMessages, hasLocale } from "@/i18n/get-messages";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getMessages(lang);
  return {
    title: t.kontak.metaTitle,
    description: t.kontak.metaDescription,
  };
}

export default async function KontakPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  return <KontakContent />;
}
