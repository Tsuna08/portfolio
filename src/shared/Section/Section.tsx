import { TitleSection } from "@/src/shared";
import { ReactNode } from "react";
import classes from "./Section.module.scss";

interface SectionProps {
  title: string;
  children: ReactNode;
  preTitle?: string;
  showLine?: boolean;
  subTitle?: string;
}

export const Section = ({
  title,
  preTitle,
  showLine,
  subTitle,
  children,
}: SectionProps) => {
  return (
    <section className={classes.section}>
      <TitleSection
        title={title}
        preTitle={preTitle}
        subTitle={subTitle}
        showLine={showLine}
      />
      <div className={classes.context}>{children}</div>
    </section>
  );
};
