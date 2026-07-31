"use client";

import { Scales, Lightbulb, Leaf, Handshake, Trophy, Building } from "@phosphor-icons/react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/motion-utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ImgWithFallback } from "@/components/img-with-fallback";
import { perusahaan, sertifikasi } from "@/data/mock-data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  scale: Scales,
  lightbulb: Lightbulb,
  leaf: Leaf,
  handshake: Handshake,
};

function PageIntro() {
  return (
    <div className="container-edge pb-16 pt-24">
      <Reveal>
        <SectionHeading
          eyebrow="Tentang Kami"
          title="Perjalanan yang Dimulai dari Kepercayaan"
          description={`${perusahaan.nama} berdiri pada 2009 dengan satu keyakinan sederhana: bisnis yang dikelola dengan integritas akan bertahan melampaui generasi.`}
        />
      </Reveal>
    </div>
  );
}

function Cerita() {
  return (
    <section className="container-edge grid gap-12 pb-24 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Chiffon International lahir di Jakarta sebagai perusahaan
            perdagangan multisektoral — awal dari sebuah keyakinan bahwa
            Indonesia membutuhkan lebih banyak kelompok usaha yang dikelola
            dengan standar internasional. Dari distribusi barang konsumen,
            kami tumbuh menjadi holding yang menaungi tiga lini bisnis:
            kesehatan, perjalanan, dan transportasi masa depan.
          </p>
          <p>
            Kami tidak mengejar jumlah demi jumlah. Setiap lini usaha
            dibangun di atas fondasi yang sama — tata kelola yang transparan,
            produk yang benar-benar berkualitas, dan dampak yang bisa
            diukur. Ketika kami masuk ke sektor baru, kami memastikan ada
            keahlian, kemitraan, dan kesabaran untuk membangun dengan benar.
          </p>
          <p>
            Hari ini, lebih dari tiga ratus karyawan bekerja di bawah
            payung Chiffon International. Namun yang lebih penting dari
            angka adalah kepercayaan — dari mitra, distributor, dan
            pelanggan — yang kami rawat sejak 2009 hingga kini.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="grid h-full grid-cols-2 gap-5">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <div className="aspect-[3/4]">
              <ImgWithFallback
                src="https://picsum.photos/seed/chiffon-story1/600/800"
                alt="Kegiatan operasional Chiffon International"
                className="absolute inset-0"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-border">
              <div className="h-full min-h-40">
                <ImgWithFallback
                  src="https://picsum.photos/seed/chiffon-story2/500/500"
                  alt="Gedung kantor Chiffon International"
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
                Melayani sejak {perusahaan.stats[0].value}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Timeline() {
  return (
    <section className="border-y border-border bg-muted/30 py-24 md:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Sejarah"
          title="Milestone Sepanjang Perjalanan"
          align="center"
        />
        <div className="relative mx-auto mt-16 max-w-3xl">
          <span className="absolute left-5 top-0 h-full w-px bg-border md:left-1/2" />
          <div className="space-y-10">
            {perusahaan.timeline.map((item, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={item.tahun} delay={i * 0.05}>
                  <div
                    className={cn(
                      "relative flex items-start gap-8 md:w-1/2",
                      right
                        ? "md:ml-auto md:pl-12"
                        : "md:flex-row-reverse md:pr-12 md:text-right",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-card font-display text-xs font-bold text-accent md:left-auto",
                        right
                          ? "md:-left-5"
                          : "md:-right-5 md:left-auto md:translate-x-0",
                      )}
                    >
                      {item.tahun}
                    </span>
                    <div className="pl-16 md:pl-0">
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
  return (
    <section className="container-edge py-24 md:py-28">
      <SectionHeading
        eyebrow="Fondasi"
        title="Nilai & Pengakuan"
        align="center"
        description="Standar yang kami pegang diuji oleh badan independen — dan dirawat setiap hari di setiap lini usaha."
      />
      <Reveal delay={0.1}>
        <Tabs defaultValue="nilai" className="mx-auto mt-12 max-w-3xl">
          <TabsList className="w-full sm:w-max">
            <TabsTrigger value="nilai" className="flex-1 sm:flex-none">
              Nilai Perusahaan
            </TabsTrigger>
            <TabsTrigger value="sertifikasi" className="flex-1 sm:flex-none">
              Sertifikasi & Penghargaan
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
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {s.tahun}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center">
              <Badge variant="outline" className="px-4 py-1.5">
                Dan penghargaan sektoral lainnya
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
