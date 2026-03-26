import { Contacts } from "@/src/widget";
import { getTranslations, setRequestLocale } from "next-intl/server";
import classes from "./page.module.scss";

interface ContactsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHeader = await getTranslations("Header");

  return (
    <div className={classes.container}>
      <Contacts preTitle="/" subTitle={tHeader("subTitle")} showLine={false} />
    </div>
  );
}
