import { SkillBox, Title } from "@/src/shared";
import { AboutMe } from "@/src/widget";
import { getTranslations, setRequestLocale } from "next-intl/server";
import classes from "./page.module.scss";

interface AboutProps {
  params: Promise<{ locale: string }>;
}

export default async function About({ params }: AboutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHeader = await getTranslations("Header");
  const tAbout = await getTranslations("AboutSection");
  const tSkills = await getTranslations("Skills");
  const skills: { title: string; list: string[] }[] = tSkills.raw("skills");

  return (
    <>
      <AboutMe
        preTitle="/"
        subTitle={tAbout("subTitle")}
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
    </>
  );
}
