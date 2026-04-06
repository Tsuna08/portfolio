import { allMediaLinks, media } from "@/src/constants/media";
import { Link } from "@/src/i18n/navigation";
import { Section } from "@/src/shared";
import { Contacts } from "@/src/widget";
import { getTranslations, setRequestLocale } from "next-intl/server";
import classes from "./page.module.scss";

interface ContactsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tContacts = await getTranslations("Contacts");

  return (
    <>
      <Contacts
        preTitle="/"
        subTitle={tContacts("subTitle")}
        showLine={false}
      />
      <Section title={tContacts("allMedia")} showLine={false}>
        <div className={classes.allMedia}>
          {allMediaLinks.map((item) => {
            const Icon = media[item].icon;
            if (!Icon) return null;
            return (
              <Link
                key={media[item].title}
                href={media[item].url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <Icon className={classes.icon} />
                {media[item].title}
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
