import { media, MediaKey } from "@/src/constants/media";
import { Link } from "@/src/i18n/navigation";
import cn from "clsx";
import classes from "./Media.module.scss";

interface MediaProps {
  links: MediaKey[];
  direction?: "column" | "row";
  showLine?: boolean;
  showTitle?: boolean;
  showText?: boolean;
}

export const Media = ({
  direction = "row",
  showLine = false,
  showText = false,
  links,
}: MediaProps) => {
  const shouldShowLine = direction === "column" && showLine;

  return (
    <div
      className={cn(classes.media, classes[direction], {
        [classes.withLine]: shouldShowLine,
      })}
    >
      {shouldShowLine && <div className={classes.line} />}
      {links.map((key: MediaKey) => {
        const item = media[key];
        const Icon = item.icon;
        if (!Icon) return null;

        return (
          <Link
            key={key}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
            className={classes.link}
          >
            <Icon className={classes.icon} aria-hidden="true" />
            {showText && <span className={classes.text}>{item.title}</span>}
          </Link>
        );
      })}
    </div>
  );
};
