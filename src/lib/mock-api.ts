import { getMessages } from "@/i18n/get-messages";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchPerusahaan(locale: string) {
  await delay(700);
  return structuredClone(getMessages(locale).data.perusahaan);
}

export async function fetchSubPerusahaan(locale: string) {
  await delay(800);
  return structuredClone(getMessages(locale).data.subPerusahaan);
}

export async function fetchSubPerusahaanById(id: string, locale: string) {
  await delay(500);
  const item = getMessages(locale).data.subPerusahaan.find((sp) => sp.id === id);
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
