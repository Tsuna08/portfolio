import { media, mediaLinks } from "@/src/constants/media";
import { Link } from "@/src/i18n/navigation";
import classes from "./Media.module.scss";

export const Media = () => (
  <div className={classes.media}>
    <div className={classes.line}></div>
    {mediaLinks.map((item) => {
      const Icon = media[item].icon;
      if (!Icon) return null;

      return (
        <Link
          key={media[item].title}
          href={media[item].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className={classes.icon} />
        </Link>
      );
    })}
  </div>
);
