import { Button, TitleSection } from "@/src/components";
import { Link } from "@/src/i18n/navigation";
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
  const tContacts = await getTranslations("Contacts");
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
          <div className={cn(classes.sectionColumn, classes.textSection)}>
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
