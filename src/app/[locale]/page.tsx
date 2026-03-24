import { Button, TitleSection } from "@/src/components";
import { Link } from "@/src/i18n/navigation";
import { SkillBox } from "@/src/shared";
import { AboutMe } from "@/src/widget/AboutMe";
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
          <Image
            className={classes.topTmg}
            src="/outline_logo.svg"
            alt="Outline logo"
            width={150}
            height={150}
            priority
          />
          <div className={classes.dotsImg} />
        </div>
      </section>

      {/* Навыки */}
      <section className={classes.sectionTitle}>
        <TitleSection title={tTitle("skills")} />
        <div className={classes.section}>
          <div className={cn(classes.section, classes.containerGrid)}>
            <Image
              className={classes.boxDots1}
              src="/dots.svg"
              alt="Dots picture"
              width={63}
              height={63}
              priority
            />
            <Image
              className={classes.boxDots2}
              src="/dots.svg"
              alt="Dots picture"
              width={63}
              height={63}
              priority
            />
            <Image
              className={classes.boxLogo}
              src="/outline_logo.svg"
              alt="Outline logo icon"
              width={113}
              height={113}
              priority
            />
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
              <Image
                src="/email.svg"
                alt="Email icon"
                width={32}
                height={32}
                priority
              />
              {tContacts("email")}
            </Link>
            <Link href={tContacts("telegram")} className={classes.link}>
              <Image
                src="/telegram.svg"
                alt="Telegram icon"
                width={32}
                height={32}
                priority
              />
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
