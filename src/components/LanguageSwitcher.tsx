"use client";

import { useLocale } from "next-intl";
import { localeNames, locales } from "../i18n/config";
import { usePathname, useRouter } from "../i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select value={locale} onChange={(e) => handleChange(e.target.value)}>
      {locales.map((item) => (
        <option key={item} value={item}>
          {localeNames[item]}
        </option>
      ))}
    </select>
  );
}
