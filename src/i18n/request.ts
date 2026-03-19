import { getRequestConfig } from "next-intl/server";

import { defaultLocale, type Locale, locales } from "./config";
import { getMessages } from "./language";

const validLocales = new Set<string>(locales);

function isValidLocale(locale: string): locale is Locale {
  return validLocales.has(locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale =
    requested && isValidLocale(requested) ? requested : defaultLocale;

  return {
    locale,
    messages: getMessages(locale),
  };
});
