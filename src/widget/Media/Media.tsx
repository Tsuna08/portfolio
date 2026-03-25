import Git from "@/public/git.svg";
import LinkedIn from "@/public/linkedIn.svg";
import Telegram from "@/public/telegram.svg";
import { media } from "@/src/constants/media";
import { Link } from "@/src/i18n/navigation";
import classes from "./Media.module.scss";

export const Media = () => (
  <div className={classes.media}>
    <div className={classes.line}></div>
    <Link href={media.github} target="_blank" rel="noopener noreferrer">
      <Git className={classes.icon} alt="Git icon" />
    </Link>
    <Link href={media.telegram} target="_blank" rel="noopener noreferrer">
      <Telegram className={classes.icon} alt="Telegram icon" />
    </Link>
    <Link href={media.linkedIn} target="_blank" rel="noopener noreferrer">
      <LinkedIn className={classes.icon} alt="LinkedIn icon" />
    </Link>
  </div>
);
