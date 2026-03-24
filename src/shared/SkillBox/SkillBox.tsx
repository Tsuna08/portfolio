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
        {list.map((item, index) => (
          <p className={classes.skill} key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
