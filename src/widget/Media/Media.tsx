import Git from "@/public/git.svg";
import Telegram from "@/public/telegram.svg";
import Vk from "@/public/vk.svg";
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
    <Link href={media.vk} target="_blank" rel="noopener noreferrer">
      <Vk className={classes.icon} alt="Vk icon" />
    </Link>
  </div>
);
