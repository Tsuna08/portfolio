import classes from "./SkillBox.module.scss";

interface SkillBoxProps {
  title: string;
  list: string[];
}

export const SkillBox = ({ title, list }: SkillBoxProps) => {
  return (
    <div className={classes.box}>
      <p className={classes.title}>{title}</p>
      <div className={classes.content}>
        {list.map((item) => (
          <p className={classes.skill} key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
