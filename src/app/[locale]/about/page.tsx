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
  const facts: { id: string; fact: { text: string; color?: true }[] }[] =
    tAbout.raw("facts");

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
      <Section title={tAbout("my-fun-facts")} showLine={false}>
        <div className={classes.facts}>
          {facts.map((item) => (
            <div key={item.id} className={classes.fact}>
              {item?.fact?.map((fact, index) => (
                <>
                  {fact.color ? (
                    <span key={index} className={classes.color}>
                      {fact.text}
                    </span>
                  ) : (
                    <span key={index}>{fact.text}</span>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
