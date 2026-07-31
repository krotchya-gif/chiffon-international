import { perusahaan, subPerusahaan } from "@/data/mock-data";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchPerusahaan() {
  await delay(700);
  return structuredClone(perusahaan);
}

export async function fetchSubPerusahaan() {
  await delay(800);
  return structuredClone(subPerusahaan);
}

export async function fetchSubPerusahaanById(id: string) {
  await delay(500);
  const item = subPerusahaan.find((sp) => sp.id === id);
  if (!item) {
    throw new Error("Sub-perusahaan tidak ditemukan");
  }
  return structuredClone(item);
}

export async function submitKontak(data: unknown) {
  await delay(800);
  void data;
  return { ok: true as const };
}
