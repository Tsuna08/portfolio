import Dots from "@/public/dots.svg";
import { Link } from "@/src/i18n/navigation";
import { Button, TitleSection } from "@/src/shared";
import cn from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import classes from "./AboutMe.module.scss";

interface AboutMeProps {
  preTitle?: string;
  showLine?: boolean;
  subTitle?: string;
  showReadMore?: boolean;
}

export const AboutMe = ({
  preTitle,
  subTitle,
  showLine = true,
  showReadMore = true,
}: AboutMeProps) => {
  const tTitle = useTranslations("Header");
  const tAbout = useTranslations("AboutSection");
  const intro: string[] = tAbout.raw("intro");

  return (
    <section className={classes.section}>
      <TitleSection
        title={tTitle("about-me")}
        preTitle={preTitle}
        subTitle={subTitle}
        showLine={showLine}
      />
      <div className={classes.container}>
        <div className={classes.info}>
          {intro.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          {showReadMore && (
            <Link href="/about">
              <Button>{tAbout("readMoreBtn")}</Button>
            </Link>
          )}
        </div>

        <Image
          className={classes.photo}
          src="/photo.png"
          alt="About me photo"
          width={343}
          height={500}
          priority
        />

        <Dots className={cn(classes.dotsImg, classes.leftDots)} />
        <Dots className={cn(classes.dotsImg, classes.rightDots)} />
      </div>
    </section>
  );
};
