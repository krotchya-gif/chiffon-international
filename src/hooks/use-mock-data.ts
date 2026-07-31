"use client";

import { useQuery } from "@tanstack/react-query";
import {
  fetchPerusahaan,
  fetchSubPerusahaan,
  fetchSubPerusahaanById,
} from "@/lib/mock-api";

export function usePerusahaan() {
  return useQuery({
    queryKey: ["perusahaan"],
    queryFn: fetchPerusahaan,
  });
}

export function useSubPerusahaan() {
  return useQuery({
    queryKey: ["sub-perusahaan"],
    queryFn: fetchSubPerusahaan,
  });
}

export function useSubPerusahaanById(id: string) {
  return useQuery({
    queryKey: ["sub-perusahaan", id],
    queryFn: () => fetchSubPerusahaanById(id),
  });
}
