import { Title } from "@/src/components";
import { SkillBox } from "@/src/shared";
import { AboutMe } from "@/src/widget/AboutMe";
import { getTranslations, setRequestLocale } from "next-intl/server";
import classes from "./page.module.scss";

interface AboutProps {
  params: Promise<{ locale: string }>;
}

export default async function About({ params }: AboutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHeader = await getTranslations("Header");
  const tSkills = await getTranslations("Skills");
  const skills: { title: string; list: string[] }[] = tSkills.raw("skills");

  return (
    <div className={classes.container}>
      <AboutMe
        preTitle="/"
        subTitle={tHeader("subTitle")}
        showLine={false}
        showReadMore={false}
      />
      <div className={classes.box}>
        <div>
          <Title title={tHeader("skills")} />
          <div className={classes.skills}>
            {skills.map((item, index) => (
              <SkillBox key={index} title={item.title} list={item.list} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
