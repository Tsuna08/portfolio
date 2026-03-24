import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../components";
import "./globals.css";
import classes from "./not-found.module.scss";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
      <Link href="/">
        <Button>{t("backHome")}</Button>
      </Link>
    </div>
  );
}
