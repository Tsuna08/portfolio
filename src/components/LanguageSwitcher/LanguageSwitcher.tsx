"use client";

import { localeNames, locales } from "@/src/i18n/config";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import classes from "./LanguageSwitcher.module.scss";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleChange(e.target.value)}
      className={classes.select}
    >
      {locales.map((item) => (
        <option key={item} value={item} className={classes.option}>
          {localeNames[item]}
        </option>
      ))}
    </select>
  );
};
