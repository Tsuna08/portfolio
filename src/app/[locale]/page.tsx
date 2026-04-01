import Dots from "@/public/dots.svg";
import OutlineLogo from "@/public/outline_logo.svg";
import { media } from "@/src/constants/media";
import { mainProjects } from "@/src/constants/projects";
import { Link } from "@/src/i18n/navigation";
import { Button, Project, Section, SkillBox } from "@/src/shared";
import { AboutMe, Contacts } from "@/src/widget";
import cn from "clsx";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import classes from "./page.module.scss";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHome = await getTranslations("Home");
  const tTitle = await getTranslations("Header");
  const tProjects = await getTranslations("Projects");
  const tSkills = await getTranslations("Skills");
  const skills: { title: string; list: string[] }[] = tSkills.raw("skills");

  return (
    <>
      {/* Приветствие */}
      <section className={classes.mainSection}>
        <div className={classes.info}>
          <h1>
            {tHome("title")} <span>{tHome("colorTitle")}</span>
          </h1>
          <p>{tHome("description")}</p>
          <Link href={media.vk} target="_blank" rel="noopener noreferrer">
            <Button>{tHome("contactBtn")}!!</Button>
          </Link>
        </div>
        <div className={classes.container}>
          <Image
            className={classes.bottomImg}
            src="/photo.png"
            alt="My photo"
            width={500}
            height={500}
            priority
          />
          <OutlineLogo className={classes.logoTmg} alt="Outline logo" />
          <Dots className={classes.dotsImg} alt="Dots picture" />
        </div>
      </section>

      {/* Проекты */}
      <Section
        title={tTitle("projects")}
        buttonsInTitle={
          <Link href="/projects" className={classes.arrowLink}>
            {tProjects("viewAll") + " ->"}
          </Link>
        }
      >
        <div className={classes.projectList}>
          {mainProjects.map((item, index) => {
            const project = tProjects.raw(item.id);
            return (
              <Project
                key={index}
                title={project.title}
                technologies={item.technologies}
                image={item.image}
                description={project.description}
                labelBtn={project.labelBtn}
                link={item.link}
              />
            );
          })}
        </div>
      </Section>

      {/* Навыки */}
      <Section title={tTitle("skills")}>
        <div className={classes.containerGrid}>
          <Dots className={classes.boxDots1} alt="Dots picture" />
          <Dots className={classes.boxDots2} alt="Dots picture" />
          <OutlineLogo className={classes.boxLogo} alt="Outline logo icon" />
          <div className={classes.box} />
          <div className={classes.smallBox} />
        </div>
        <div className={cn(classes.skills)}>
          {skills.map((item, index) => (
            <SkillBox key={index} title={item.title} list={item.list} />
          ))}
        </div>
      </Section>

      {/* Секция – обо мне */}
      <AboutMe />

      {/* Контакты */}
      <Contacts />
    </>
  );
}

export async function generateMetadata({ params }: HomeProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: `${t("title")} ${t("colorTitle")}`,
    description: t("description"),
  };
}
