"use client";

import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import classes from "./Footer.module.scss";

export const Footer = () => {
  const t = useTranslations("Footer");
  const mailto = "anna.tsyganova.dev@gmail.com";

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.section}>
          <div className={classes.info}>
            <div className={classes.contacts}>
              <h6 className={classes.label}>
                <Image
                  className="dark"
                  src="/logo.svg"
                  alt="TsunaDev logo"
                  width={16}
                  height={16}
                  priority
                />
                TsunaDev
              </h6>
              <a className={classes.link} href={"mailto:" + { mailto }}>
                {mailto}
              </a>
            </div>
            <p>{t("description")}</p>
          </div>
        </div>
        <div className={classes.info}>
          <h5 className={classes.media}>{t("media")}</h5>
          <div className={classes.contacts}>
            <Link href="https://github.com/Tsuna08">
              <Image
                className="dark"
                src="/git.svg"
                alt="Git icon"
                width={32}
                height={32}
                priority
              />
            </Link>
            <Link href="https://t.me/tsuna_dev">
              <Image
                className="dark"
                src="/telegram.svg"
                alt="Telegram icon"
                width={32}
                height={32}
                priority
              />
            </Link>
            <Link href="https://www.linkedin.com/in/anna-tsyganova/">
              <Image
                className="dark"
                src="/linkedIn.svg"
                alt="LinkedIn icon"
                width={32}
                height={32}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
      <p className={classes.copyright}>
        © Copyright {new Date().getFullYear()}. {t("madeBy")}
      </p>
    </footer>
  );
};
