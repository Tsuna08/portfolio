import Logo from "@/public/icons/logo.svg";
import { footerLinks, media } from "@/src/constants/media";
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
          <a className={classes.email} href={"mailto:" + email.url}>
            {email.title}
          </a>
          <p className={classes.description}>{t("description")}</p>
        </div>
        <div className={classes.media}>
          <h5 className={classes.title}>{t("media")}</h5>
          <div className={classes.contacts}>
            {footerLinks.map((item) => {
              const Icon = media[item].icon;
              if (!Icon) return null;

              return (
                <Link
                  key={media[item].title}
                  href={media[item].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  <Icon className={classes.icon} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <p className={classes.copyright}>
        © Copyright {new Date().getFullYear()}. {t("madeBy")}
      </p>
    </footer>
  );
};
