"use client";

import cn from "clsx";
import { useTranslations } from "next-intl";

import Logo from "@/public/logo.svg";
import { routes } from "@/src/constants/routes";
import { Link, usePathname } from "@/src/i18n/navigation";
import { LanguageSwitcher } from "@/src/shared";
import classes from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");

  const links = [
    { name: t("home"), url: routes.root },
    // { name: t("projects"), url: routes.projects },
    { name: t("about-me"), url: routes.about },
    { name: t("contacts"), url: routes.contacts },
  ];

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Logo alt="TsunaDev logo" width={16} height={16} />
        <h3 className={classes.label}> TsunaDev</h3>
      </Link>
      <div className={classes.controlUnit}>
        <nav className={classes.navigation}>
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              className={cn(classes.link, {
                [classes.active]: pathname === item.url,
              })}
            >
              <span className={classes.sharp}>#</span>
              {item.name}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
