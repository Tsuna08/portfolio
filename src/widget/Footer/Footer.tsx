import Git from "@/public/git.svg";
import LinkedIn from "@/public/linkedIn.svg";
import Logo from "@/public/logo.svg";
import Telegram from "@/public/telegram.svg";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import classes from "./Footer.module.scss";

export const Footer = () => {
  const t = useTranslations("Footer");
  const tContacts = useTranslations("Contacts");
  const email = tContacts("email");

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.info}>
          <Logo
            className={classes.footerIcon}
            height={16}
            width={16}
            alt="TsunaDev logo"
          />
          <h6 className={classes.label}>TsunaDev</h6>
          <a className={classes.email} href={"mailto:" + { email }}>
            {tContacts("email")}
          </a>
          <p className={classes.description}>{t("description")}</p>
        </div>
        <div className={classes.media}>
          <h5 className={classes.title}>{t("media")}</h5>
          <div className={classes.contacts}>
            <Link href={tContacts("git")}>
              <Git className={classes.icon} alt="Git icon" />
            </Link>
            <Link href={tContacts("telegram")}>
              <Telegram className={classes.icon} alt="Telegram icon" />
            </Link>
            <Link href={tContacts("linkedIn")}>
              <LinkedIn className={classes.icon} alt="LinkedIn icon" />
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
