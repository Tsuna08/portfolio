import { Title } from "../Title/Title";
import classes from "./TitleSection.module.scss";

interface TitleSectionProps {
  title: string;
  preTitle?: string;
}

export const TitleSection = ({ title, preTitle = "#" }: TitleSectionProps) => {
  return (
    <div className={classes.section}>
      <Title title={title} preTitle={preTitle} />
      <div className={classes.line} />
    </div>
  );
};
