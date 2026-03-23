import en from "@/src/language/en.json";
import ru from "@/src/language/ru.json";

import { Locale } from "./config";

export const messagesByLocale: Record<Locale, typeof ru> = {
  ru,
  en,
};

export function getMessages(locale: Locale): typeof ru {
  return messagesByLocale[locale];
}
