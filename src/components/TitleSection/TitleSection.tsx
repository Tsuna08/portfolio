import { Title } from "../Title/Title";
import classes from "./TitleSection.module.scss";

interface TitleSectionProps {
  title: string;
  preTitle?: string;
  showLine?: boolean;
  subTitle?: string;
}

export const TitleSection = ({
  title,
  preTitle = "#",
  showLine = true,
  subTitle,
}: TitleSectionProps) => {
  return (
    <div className={classes.section}>
      <div className={classes.title}>
        <Title title={title} preTitle={preTitle} />
        {showLine && <div className={classes.line} />}
      </div>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};
