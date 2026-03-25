import Git from "@/public/git.svg";
import LinkedIn from "@/public/linkedIn.svg";
import Telegram from "@/public/telegram.svg";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import classes from "./Media.module.scss";

export const Media = () => {
  const tContacts = useTranslations("Contacts");

  return (
    <div className={classes.media}>
      <div className={classes.line}></div>
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
  );
};
