import Git from "@/public/git.svg";
import LinkedIn from "@/public/linkedIn.svg";
import Logo from "@/public/logo.svg";
import Telegram from "@/public/telegram.svg";
import { media } from "@/src/constants/media";
import { Link } from "@/src/i18n/navigation";
import { getTranslations } from "next-intl/server";
import classes from "./Footer.module.scss";

export const Footer = async () => {
  const t = await getTranslations("Footer");
  const email = media.email;

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.info}>
          <div className={classes.label}>
            <Logo height={16} width={16} alt="TsunaDev logo" />
            <h6>TsunaDev</h6>
          </div>
          <a className={classes.email} href={"mailto:" + email}>
            {email}
          </a>
          <p className={classes.description}>{t("description")}</p>
        </div>
        <div className={classes.media}>
          <h5 className={classes.title}>{t("media")}</h5>
          <div className={classes.contacts}>
            <Link href={media.github} target="_blank" rel="noopener noreferrer">
              <Git className={classes.icon} alt="Git icon" />
            </Link>
            <Link
              href={media.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram className={classes.icon} alt="Telegram icon" />
            </Link>
            <Link href={media.vk} target="_blank" rel="noopener noreferrer">
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
