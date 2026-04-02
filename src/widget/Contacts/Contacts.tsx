import Email from "@/public/email.svg";
import Telegram from "@/public/telegram.svg";
import { media } from "@/src/constants/media";
import { Link } from "@/src/i18n/navigation";
import { Section } from "@/src/shared";
import { getTranslations } from "next-intl/server";
import classes from "./Contacts.module.scss";

interface ContactsProps {
  preTitle?: string;
  showLine?: boolean;
  subTitle?: string;
}

export const Contacts = async ({
  preTitle,
  subTitle,
  showLine = true,
}: ContactsProps) => {
  const tTitle = await getTranslations("Header");
  const tContacts = await getTranslations("Contacts");
  const info: string[] = tContacts.raw("info");

  return (
    <Section
      title={tTitle("contacts")}
      preTitle={preTitle}
      subTitle={subTitle}
      showLine={showLine}
    >
      <p className={classes.contactInfo}>{info}</p>
      <div className={classes.contacts}>
        <h6>{tContacts("title")}</h6>
        <Link
          href={"mailto:" + media.email}
          className={classes.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email alt="Email icon" />
          {media.email}
        </Link>
        <Link
          href={media.telegram}
          className={classes.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telegram alt="Telegram icon" />
          {media.telegramNick}
        </Link>
      </div>
    </Section>
  );
};
