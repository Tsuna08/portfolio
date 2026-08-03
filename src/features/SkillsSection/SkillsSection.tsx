import { SkillBox } from "@/src/shared";
import cn from "clsx";
import { Fragment } from "react";
import classes from "./SkillsSection.module.scss";

interface SkillsSectionProps {
  titles: any[];
  skills: any;
  icons?: any;
}

export const SkillsSection = ({
  titles,
  skills,
  icons,
}: SkillsSectionProps) => (
  <div className={cn(classes.skills)}>
    {titles.map((item, index) => (
      <Fragment key={item.id}>
        <SkillBox
          key={item.id}
          title={item.title}
          list={skills[item.id]}
          icon={icons[item.id] ?? undefined}
        />
        {index + 1 !== titles.length && <div className={classes.divider} />}
      </Fragment>
    ))}
  </div>
);
