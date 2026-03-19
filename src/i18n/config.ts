import { defineRouting } from "next-intl/routing";

export const locales = ["ru", "en"];
export const defaultLocale = "ru";
export const localeNames: Record<(typeof locales)[number], string> = {
  ru: "RU",
  en: "EN",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
});

export type Locale = (typeof locales)[number];
