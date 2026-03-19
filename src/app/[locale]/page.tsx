import { getTranslations, setRequestLocale } from "next-intl/server";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}

export async function generateMetadata({ params }: HomeProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
