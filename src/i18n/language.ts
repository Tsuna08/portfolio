import en from "./language/en.json";
import ru from "./language/ru.json";

import { Locale } from "./config";

export const messagesByLocale: Record<Locale, typeof ru> = {
  ru,
  en,
};

export function getMessages(locale: Locale): typeof ru {
  return messagesByLocale[locale];
}
