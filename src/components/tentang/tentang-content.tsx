"use client";

import { Scales, Lightbulb, Leaf, Handshake, Trophy, Building } from "@phosphor-icons/react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/motion-utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ImgWithFallback } from "@/components/img-with-fallback";
import { useMessages } from "@/i18n/client";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  scale: Scales,
  lightbulb: Lightbulb,
  leaf: Leaf,
  handshake: Handshake,
};

function PageIntro() {
  const t = useMessages();
  return (
    <div className="container-edge pb-16 pt-24">
      <Reveal>
        <SectionHeading
          eyebrow={t.tentang.intro.eyebrow}
          title={t.tentang.intro.title}
          description={t.tentang.intro.description}
        />
      </Reveal>
    </div>
  );
}

function Cerita() {
  const t = useMessages();
  const { perusahaan } = t.data;

  return (
    <section className="container-edge grid gap-12 pb-24 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          {t.tentang.cerita.map((paragraf) => (
            <p key={paragraf}>{paragraf}</p>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="grid h-full grid-cols-2 gap-5">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <div className="aspect-[3/4]">
              <ImgWithFallback
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop"
                alt={t.tentang.story1Alt}
                className="absolute inset-0"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-border">
              <div className="h-full min-h-40">
                <ImgWithFallback
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&q=80&auto=format&fit=crop"
                  alt={t.tentang.story2Alt}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
              <Building weight="light" className="h-8 w-8 text-accent" />
              <p className="mt-4 font-display text-3xl font-semibold tracking-tight">
                {perusahaan.stats[0].value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                {t.tentang.buildingLabel} {perusahaan.stats[0].value}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Timeline() {
  const t = useMessages();
  const { perusahaan } = t.data;

  return (
    <section className="border-y border-border bg-muted/30 py-24 md:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow={t.tentang.timeline.eyebrow}
          title={t.tentang.timeline.title}
          align="center"
        />
        <div className="relative mx-auto mt-16 max-w-3xl">
          <span className="absolute start-5 top-0 h-full w-px bg-border md:start-1/2" />
          <div className="space-y-10">
            {perusahaan.timeline.map((item, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={item.tahun} delay={i * 0.05}>
                  <div
                    className={cn(
                      "relative flex items-start gap-8 md:w-1/2",
                      right
                        ? "md:ms-auto md:ps-12"
                        : "md:flex-row-reverse md:pe-12 md:text-end",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute start-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-card font-display text-xs font-bold text-accent md:start-auto",
                        right
                          ? "md:-start-5"
                          : "md:-end-5 md:start-auto md:translate-x-0",
                      )}
                    >
                      {item.tahun}
                    </span>
                    <div className="ps-16 md:ps-0">
                      <p className="font-display text-sm font-semibold text-accent md:hidden">
                        {item.tahun}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
                        {item.judul}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function NilaiSertifikasi() {
  const t = useMessages();
  const { perusahaan, sertifikasi } = t.data;

  return (
    <section className="container-edge py-24 md:py-28">
      <SectionHeading
        eyebrow={t.tentang.fondasi.eyebrow}
        title={t.tentang.fondasi.title}
        align="center"
        description={t.tentang.fondasi.description}
      />
      <Reveal delay={0.1}>
        <Tabs defaultValue="nilai" className="mx-auto mt-12 max-w-3xl">
          <TabsList className="w-full sm:w-max">
            <TabsTrigger value="nilai" className="flex-1 sm:flex-none">
              {t.tentang.tabNilai}
            </TabsTrigger>
            <TabsTrigger value="sertifikasi" className="flex-1 sm:flex-none">
              {t.tentang.tabSertifikasi}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="nilai">
            <ul className="grid gap-5 sm:grid-cols-2">
              {perusahaan.nilai.map((nilai) => {
                const Icon = iconMap[nilai.icon] ?? Scales;
                return (
                  <li
                    key={nilai.nama}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent">
                      <Icon weight="light" className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                      {nilai.nama}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {nilai.deskripsi}
                    </p>
                  </li>
                );
              })}
            </ul>
          </TabsContent>
          <TabsContent value="sertifikasi">
            <ul className="grid gap-4 sm:grid-cols-2">
              {sertifikasi.map((s) => (
                <li
                  key={s.nama}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Trophy weight="light" className="h-5.5 w-5.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-snug">{s.nama}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{s.tahun}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center">
              <Badge variant="outline" className="px-4 py-1.5">
                {t.tentang.badgeLainnya}
              </Badge>
            </div>
          </TabsContent>
        </Tabs>
      </Reveal>
    </section>
  );
}

export function TentangContent() {
  return (
    <>
      <PageIntro />
      <Cerita />
      <Timeline />
      <NilaiSertifikasi />
    </>
  );
}
