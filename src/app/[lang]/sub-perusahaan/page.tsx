import type { Metadata } from "next";

import { SubPerusahaanContent } from "@/components/sub-perusahaan/sub-perusahaan-content";
import { getMessages, hasLocale } from "@/i18n/get-messages";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getMessages(lang);
  return {
    title: t.subPerusahaanPage.metaTitle,
    description: t.subPerusahaanPage.metaDescription,
  };
}

export default async function SubPerusahaanPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  return <SubPerusahaanContent />;
}
