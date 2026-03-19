"use client";

import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";

export const Header = () => {
  const t = useTranslations("Header");
  const links = [
    { name: t("home"), url: "/" },
    { name: t("projects"), url: "/projects" },
    { name: t("about-me"), url: "/about" },
    { name: t("contacts"), url: "/contacts" },
  ];

  return (
    <header>
      <Link href="/">
        <Image
          className="dark"
          src="/logo.svg"
          alt="TsunaDev logo"
          width={16}
          height={16}
          priority
        />
        <span> TsunaDev</span>
      </Link>
      <div>
        <nav>
          {links.map((item) => (
            <Link key={item.name} href={item.url}>
              <span>#</span>
              {item.name}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
