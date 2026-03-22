import { Button, TitleSection } from "@/src/components";
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
  const tAbout = await getTranslations("AboutSection");
  const intro: string[] = tAbout.raw("intro");

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

      {/* Секция – обо мне */}
      <section className={classes.sectionTitle}>
        <TitleSection title={tTitle("about-me")} />
        <div className={classes.section}>
          <div className={classes.sectionColumn}>
            {intro.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <Button>{tAbout("readMoreBtn")}</Button>
          </div>
          <Image
            className={cn(classes.aboutMePhoto, classes.container)}
            src="/photo.png"
            alt="About me photo"
            width={357}
            height={500}
            priority
          />
          <div className={cn(classes.aboutMeDotsImg, classes.leftDotsTmg)} />
          <div className={cn(classes.aboutMeDotsImg, classes.leftDotsTmg)} />
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
