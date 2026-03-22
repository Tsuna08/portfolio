import classes from "./Title.module.scss";

interface TitleProps {
  title: string;
  preTitle?: string;
}

export const Title = ({ title, preTitle = "#" }: TitleProps) => {
  return (
    <h2 className={classes.label}>
      <span className={classes.sharp}>{preTitle}</span>
      {title}
    </h2>
  );
};
