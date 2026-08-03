import { ReactNode } from "react";
import classes from "./SkillBox.module.scss";

interface SkillBoxProps {
  title: string;
  list: string[];
  icon?: ReactNode;
}

export const SkillBox = ({ title, list, icon }: SkillBoxProps) => (
  <div className={classes.box}>
    <div className={classes.titleBox}>
      {icon}
      <p className={classes.title}>{title}</p>
    </div>
    <div className={classes.content}>
      <p className={classes.skill}>{list.join(", ")}</p>
    </div>
  </div>
);
