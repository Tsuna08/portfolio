import classes from "./Skill.module.scss";

interface SkillProps {
  skill: string;
}

export const Skill = ({ skill }: SkillProps) => (
  <div className={classes.box}>
    <p className={classes.title}>{skill}</p>
  </div>
);
