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
import { useLocale, useMessages } from "@/i18n/client";
import { submitKontak } from "@/lib/mock-api";
import { cn } from "@/lib/utils";

type KontakForm = {
  nama: string;
  email: string;
  subjek: string;
  pesan: string;
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs font-medium text-destructive" role="alert">
      {message}
    </p>
  );
}

export function KontakContent() {
  const locale = useLocale();
  const t = useMessages();
  const { perusahaan, kontakSubjek } = t.data;
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">(
    "idle",
  );

  const kontakSchema = React.useMemo(
    () =>
      z.object({
        nama: z.string().min(2, t.kontak.errors.namaMin),
        email: z.email(t.kontak.errors.emailInvalid),
        subjek: z.string().min(1, t.kontak.errors.subjekRequired),
        pesan: z.string().min(10, t.kontak.errors.pesanMin),
      }),
    [t],
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

  const infoKontak = React.useMemo(
    () => [
      { icon: MapPin, label: t.kontak.infoLabels.alamat, value: perusahaan.kontak.alamat },
      { icon: Envelope, label: t.kontak.infoLabels.email, value: perusahaan.kontak.email },
      { icon: Phone, label: t.kontak.infoLabels.telepon, value: perusahaan.kontak.telepon },
      { icon: Clock, label: t.kontak.infoLabels.jam, value: perusahaan.kontak.jam },
    ],
    [t, perusahaan],
  );

  const onSubmit = async (values: KontakForm) => {
    setStatus("loading");
    await submitKontak(values);
    setStatus("success");
    toast.success(t.kontak.toastTitle, {
      description: t.kontak.toastDesc,
    });
    reset();
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <>
      <section className="container-edge pt-24">
        <Reveal>
          <SectionHeading
            eyebrow={t.kontak.eyebrow}
            title={t.kontak.title}
            description={t.kontak.description}
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
              <p className="text-sm font-medium">{t.kontak.mapsAddress}</p>
              <a
                href="https://maps.google.com/?q=Jl.+Jend.+Sudirman+Kav.+52-53+Jakarta+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
              >
                {t.kontak.mapsLink}
                <ArrowRight weight="light" className="h-3.5 w-3.5 rtl:rotate-180" />
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
                  {t.kontak.successTitle}
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                  {t.kontak.successDesc}
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => setStatus("idle")}
                >
                  {t.kontak.successButton}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {t.kontak.formTitle}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.kontak.formSubtitle}
                </p>

                <div className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="nama">{t.kontak.namaLabel}</Label>
                      <Input
                        id="nama"
                        placeholder={t.kontak.namaPlaceholder}
                        className="mt-2"
                        aria-invalid={!!errors.nama}
                        {...register("nama")}
                      />
                      <FieldError message={errors.nama?.message} />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.kontak.emailLabel}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.kontak.emailPlaceholder}
                        className="mt-2"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      <FieldError message={errors.email?.message} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subjek">{t.kontak.subjekLabel}</Label>
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
                              <SelectValue placeholder={t.kontak.subjekPlaceholder} />
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
                    <Label htmlFor="pesan">{t.kontak.pesanLabel}</Label>
                    <Textarea
                      id="pesan"
                      placeholder={t.kontak.pesanPlaceholder}
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
                      {t.kontak.submittingLabel}
                    </>
                  ) : (
                    <>
                      {t.kontak.submitLabel}
                      <PaperPlaneTilt weight="light" className="h-4 w-4 rtl:rotate-180" />
                    </>
                  )}
                </Button>
                <p className={cn("mt-4 text-center text-xs text-muted-foreground")}>
                  {t.kontak.privacyNote}{" "}
                  <a
                    href={`/${locale}/privacy`}
                    className="text-accent hover:underline underline-offset-4"
                  >
                    {t.kontak.privacyLink}
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
