import { TitleSection } from "@/src/components";
import { getTranslations, setRequestLocale } from "next-intl/server";
import classes from "./page.module.scss";

interface AboutProps {
  params: Promise<{ locale: string }>;
}

export default async function Contacts({ params }: AboutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHeader = await getTranslations("Header");

  return (
    <div className={classes.container}>
      <TitleSection
        title={tHeader("contacts")}
        preTitle="/"
        subTitle={tHeader("subTitle")}
        showLine={false}
      />
      <div className={classes.box}></div>
    </div>
  );
}
