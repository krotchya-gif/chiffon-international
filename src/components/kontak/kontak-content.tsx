"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Envelope,
  Clock,
  PaperPlaneTilt,
  CheckCircle,
  ArrowRight,
  CircleNotch,
} from "@phosphor-icons/react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/motion-utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/toaster";
import { perusahaan, kontakSubjek } from "@/data/mock-data";
import { submitKontak } from "@/lib/mock-api";
import { cn } from "@/lib/utils";

const kontakSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.email("Email tidak valid"),
  subjek: z.string().min(1, "Pilih subjek pesan"),
  pesan: z.string().min(10, "Pesan minimal 10 karakter"),
});

type KontakForm = z.infer<typeof kontakSchema>;

const infoKontak = [
  { icon: MapPin, label: "Alamat", value: perusahaan.kontak.alamat },
  { icon: Envelope, label: "Email", value: perusahaan.kontak.email },
  { icon: Phone, label: "Telepon", value: perusahaan.kontak.telepon },
  { icon: Clock, label: "Jam Operasional", value: perusahaan.kontak.jam },
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs font-medium text-destructive" role="alert">
      {message}
    </p>
  );
}

export function KontakContent() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">(
    "idle",
  );
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<KontakForm>({
    resolver: zodResolver(kontakSchema),
    defaultValues: { nama: "", email: "", subjek: "", pesan: "" },
  });

  const onSubmit = async (values: KontakForm) => {
    setStatus("loading");
    await submitKontak(values);
    setStatus("success");
    toast.success("Pesan terkirim", {
      description: "Tim kami akan merespons dalam 1×24 jam kerja.",
    });
    reset();
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <>
      <section className="container-edge pt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Kontak"
            title="Mulai Percakapan"
            description="Ceritakan kebutuhan Anda — kerja sama, media, atau investasi. Tim Chiffon International siap merespons."
          />
        </Reveal>
      </section>

      <section className="container-edge grid gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-4">
            {infoKontak.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                  <Icon weight="light" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed break-words">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[16/10]">
              <iframe
                title="Lokasi Menara Chiffon, Jakarta Selatan"
                src="https://maps.google.com/maps?q=Jl.%20Jend.%20Sudirman%20Kav.%2052-53%2C%20Jakarta%20Selatan&z=15&output=embed"
                className="h-full w-full border-0 grayscale-[35%] contrast-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <p className="text-sm font-medium">Menara Chiffon, Sudirman</p>
              <a
                href="https://maps.google.com/?q=Jl.+Jend.+Sudirman+Kav.+52-53+Jakarta+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
              >
                Buka di Maps
                <ArrowRight weight="light" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-3xl border border-border bg-card p-7 md:p-10">
            {status === "success" ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
                  <CheckCircle weight="light" className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                  Pesan Berhasil Terkirim
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                  Terima kasih telah menghubungi Chiffon International. Tim
                  kami akan membalas ke email Anda dalam 1×24 jam kerja.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => setStatus("idle")}
                >
                  Kirim Pesan Lain
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  Kirim Pesan
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Semua kolom wajib diisi.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="nama">Nama Lengkap</Label>
                      <Input
                        id="nama"
                        placeholder="Nama Anda"
                        className="mt-2"
                        aria-invalid={!!errors.nama}
                        {...register("nama")}
                      />
                      <FieldError message={errors.nama?.message} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="nama@perusahaan.com"
                        className="mt-2"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      <FieldError message={errors.email?.message} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subjek">Subjek</Label>
                    <Controller
                      control={control}
                      name="subjek"
                      render={({ field }) => (
                        <>
                          <Select
                            value={field.value || undefined}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger
                              id="subjek"
                              className="mt-2"
                              aria-invalid={!!errors.subjek}
                            >
                              <SelectValue placeholder="Pilih subjek pesan" />
                            </SelectTrigger>
                            <SelectContent>
                              {kontakSubjek.map((s) => (
                                <SelectItem key={s.value} value={s.value}>
                                  {s.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FieldError message={errors.subjek?.message} />
                        </>
                      )}
                    />
                  </div>

                  <div>
                    <Label htmlFor="pesan">Pesan</Label>
                    <Textarea
                      id="pesan"
                      placeholder="Tulis pesan Anda di sini…"
                      className="mt-2"
                      aria-invalid={!!errors.pesan}
                      {...register("pesan")}
                    />
                    <FieldError message={errors.pesan?.message} />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="mt-8 w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <CircleNotch
                        weight="bold"
                        className="h-4 w-4 animate-spin"
                      />
                      Mengirim…
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <PaperPlaneTilt weight="light" className="h-4 w-4" />
                    </>
                  )}
                </Button>
                <p
                  className={cn(
                    "mt-4 text-center text-xs text-muted-foreground",
                  )}
                >
                  Dengan mengirim, Anda menyetujui{" "}
                  <a
                    href="/privacy"
                    className="text-accent hover:underline underline-offset-4"
                  >
                    kebijakan privasi
                  </a>{" "}
                  kami.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
