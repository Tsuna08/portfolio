import { Section, SkillBox } from "@/src/shared";
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
  // const facts: { id: string; text: string }[] = tAbout.raw("facts");

  return (
    <>
      <AboutMe
        preTitle="/"
        subTitle={tAbout("subTitle")}
        showLine={false}
        showReadMore={false}
      />
      <Section title={tHeader("skills")} showLine={false}>
        <div className={classes.skills}>
          {skills.map((item) => (
            <SkillBox key={item.title} title={item.title} list={item.list} />
          ))}
        </div>
      </Section>
      {/* <Section title={tAbout("my-fun-facts")} showLine={false}>
        <div className={classes.skills}>
          {facts.map((item) => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
      </Section> */}
    </>
  );
}
