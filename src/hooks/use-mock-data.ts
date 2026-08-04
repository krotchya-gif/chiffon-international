"use client";

import { useQuery } from "@tanstack/react-query";

import { useLocale } from "@/i18n/client";
import {
  fetchPerusahaan,
  fetchSubPerusahaan,
  fetchSubPerusahaanById,
} from "@/lib/mock-api";

export function usePerusahaan() {
  const locale = useLocale();
  return useQuery({
    queryKey: ["perusahaan", locale],
    queryFn: () => fetchPerusahaan(locale),
  });
}

export function useSubPerusahaan() {
  const locale = useLocale();
  return useQuery({
    queryKey: ["sub-perusahaan", locale],
    queryFn: () => fetchSubPerusahaan(locale),
  });
}

export function useSubPerusahaanById(id: string) {
  const locale = useLocale();
  return useQuery({
    queryKey: ["sub-perusahaan", id, locale],
    queryFn: () => fetchSubPerusahaanById(id, locale),
  });
}
