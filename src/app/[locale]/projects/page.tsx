import { apps, completeApps } from "@/src/constants/projects";
import { Project, Section, Title } from "@/src/shared";
import { getTranslations, setRequestLocale } from "next-intl/server";
import classes from "./page.module.scss";

interface ProjectsProps {
  params: Promise<{ locale: string }>;
}

export default async function Projects({ params }: ProjectsProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHeader = await getTranslations("Header");
  const tProjects = await getTranslations("Projects");

  return (
    <Section
      title={tHeader("projects")}
      preTitle="/"
      subTitle={tProjects("subTitle")}
      showLine={false}
    >
      <div className={classes.container}>
        <Title title={tProjects("complete-apps")} />
        <div className={classes.list}>
          {completeApps.map((item) => {
            const project = tProjects.raw(item);
            return (
              <Project
                key={item}
                title={project.title}
                technologies={apps[item].technologies}
                image={apps[item].image}
                description={project.description}
                labelBtn={project.labelBtn}
                link={apps[item].link}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
