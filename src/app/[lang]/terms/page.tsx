import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { getMessages, hasLocale } from "@/i18n/get-messages";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getMessages(lang);
  return {
    title: t.terms.metaTitle,
    description: t.terms.metaDescription,
  };
}

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const t = getMessages(lang);

  return (
    <div className="container-edge max-w-3xl pb-24 pt-24">
      <SectionHeading
        eyebrow={t.legal.eyebrow}
        title={t.terms.title}
        description={t.legal.updated}
      />
      <div className="mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground">
        {t.terms.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
              {section.heading}
            </h2>
            <p className="mt-4">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
