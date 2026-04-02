import cn from "clsx";
import { getTranslations } from "next-intl/server";
import { Fira_Code } from "next/font/google";
import Link from "next/link";
import { Button } from "../shared";
import "./globals.css";
import classes from "./not-found.module.scss";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className={cn(firaCode.variable, classes.page, "antialiased")}>
      <div className={classes.title}>
        <h1>404</h1>
        <p>{t("description")}</p>
      </div>
      <Link href="/">
        <Button>{t("backHome") + " ->"}</Button>
      </Link>
    </div>
  );
}
