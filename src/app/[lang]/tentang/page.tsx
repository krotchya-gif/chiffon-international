import type { Metadata } from "next";

import { TentangContent } from "@/components/tentang/tentang-content";
import { getMessages, hasLocale } from "@/i18n/get-messages";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getMessages(lang);
  return {
    title: t.tentang.metaTitle,
    description: t.tentang.metaDescription,
  };
}

export default async function TentangPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  return <TentangContent />;
}
