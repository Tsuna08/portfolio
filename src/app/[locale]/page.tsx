import { Button } from "@/src/components";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import classes from "./page.module.scss";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <>
      <section className={classes.section}>
        <div className={classes.info}>
          <h1>
            {t("title")} <span>{t("colorTitle")}</span>
          </h1>
          <p>{t("description")}</p>
          <Button>{t("contactBtn")}</Button>
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
          <div className={classes.dotsTmg} />
        </div>
      </section>
      <section className={classes.section}></section>
    </>
  );
}

export async function generateMetadata({ params }: HomeProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("title"),
    colorTitle: t("colorTitle"),
    description: t("description"),
  };
}
