import type { Metadata } from "next";

import { TimContent } from "@/components/tim/tim-content";
import { getMessages, hasLocale } from "@/i18n/get-messages";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getMessages(lang);
  return {
    title: t.timPage.metaTitle,
    description: t.timPage.metaDescription,
  };
}

export default async function TimPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  return <TimContent />;
}
