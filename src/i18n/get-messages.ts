import type { Locale } from "./config";
import { isLocale } from "./config";
import type { Messages } from "./types";

import id from "./messages/id";
import en from "./messages/en";
import ar from "./messages/ar";

const messages: Record<Locale, Messages> = {
  id,
  en,
  ar,
};

export function hasLocale(locale: string): boolean {
  return isLocale(locale);
}

export function getMessages(locale: string): Messages {
  if (isLocale(locale)) {
    return messages[locale];
  }
  return messages.id;
}
