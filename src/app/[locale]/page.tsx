import Dots from "@/public/dots.svg";
import Email from "@/public/email.svg";
import OutlineLogo from "@/public/outline_logo.svg";
import Telegram from "@/public/telegram.svg";
import { Link } from "@/src/i18n/navigation";
import { Button, SkillBox, TitleSection } from "@/src/shared";
import { AboutMe } from "@/src/widget";
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
  const tContacts = await getTranslations("Contacts");
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
          <Button>{tHome("contactBtn")}</Button>
        </div>
        <div className={classes.container}>
          <Image
            className={classes.bottomImg}
            src="/photo.png"
            alt="My photo"
            width={357}
            height={500}
            priority
          />
          <OutlineLogo
            className={classes.topTmg}
            alt="Outline logo"
            width={150}
            height={150}
          />
          <Dots className={classes.dotsImg} alt="Dots picture" />
        </div>
      </section>

      {/* Навыки */}
      <section className={classes.sectionTitle}>
        <TitleSection title={tTitle("skills")} />
        <div className={classes.section}>
          <div className={cn(classes.section, classes.containerGrid)}>
            <Dots className={classes.boxDots1} alt="Dots picture" />
            <Dots className={classes.boxDots2} alt="Dots picture" />
            <OutlineLogo className={classes.boxLogo} alt="Outline logo icon" />
            <div className={classes.box} />
            <div className={classes.smallBox} />
          </div>
          <div className={cn(classes.skillsSection)}>
            {skills.map((item, index) => (
              <SkillBox key={index} title={item.title} list={item.list} />
            ))}
          </div>
        </div>
      </section>

      {/* Секция – обо мне */}
      <AboutMe />

      {/* Контакты */}
      <section className={classes.sectionTitle}>
        <TitleSection title={tTitle("contacts")} />
        <div className={classes.section}>
          <p className={classes.textSection}>{tContacts("intro")}</p>
          <div className={classes.contacts}>
            <h6>{tContacts("title")}</h6>

            <Link
              href={"mailto:" + tContacts("email")}
              className={classes.link}
            >
              <Email alt="Email icon" />
              {tContacts("email")}
            </Link>
            <Link href={tContacts("telegram")} className={classes.link}>
              <Telegram alt="Telegram icon" />
              {tContacts("telegramNick")}
            </Link>
          </div>
        </div>
      </section>
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
