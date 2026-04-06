"use client";

import BurgerIcon from "@/public/icons/burgerMenu.svg";
import CloseIcon from "@/public/icons/close.svg";
import { Link } from "@/src/i18n/navigation";
import { LanguageSwitcher } from "@/src/shared";
import { useTranslations } from "next-intl";
import { useState } from "react";
import classes from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  links: { name: string; url: string }[];
}

export const BurgerMenu = ({ links }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const t = useTranslations("BurgerMenu");

  return (
    <>
      <button
        className={classes.toggle}
        onClick={toggleMenu}
        aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <CloseIcon alt={t("closeMenu")} width={24} height={24} />
        ) : (
          <BurgerIcon alt={t("openMenu")} width={24} height={24} />
        )}
      </button>

      {isOpen && (
        <div className={classes.overlay} onClick={closeMenu}>
          <div className={classes.menu} onClick={(e) => e.stopPropagation()}>
            <nav className={classes.navigation}>
              <ul className={classes.list}>
                {links.map((link) => (
                  <li key={link.name} className={classes.item}>
                    <Link
                      href={link.url}
                      className={classes.link}
                      onClick={closeMenu}
                    >
                      <span className={classes.sharp}>#</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </>
  );
};
