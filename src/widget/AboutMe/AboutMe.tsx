import Dots from "@/public/dots.svg";
import { Link } from "@/src/i18n/navigation";
import { Button, Section } from "@/src/shared";
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
  const info: string[] = tAbout.raw("info");

  return (
    <Section
      title={tTitle("about-me")}
      preTitle={preTitle}
      subTitle={subTitle}
      showLine={showLine}
    >
      <div className={classes.info}>
        {info.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        {showReadMore && (
          <Link href="/about">
            <Button>{tAbout("readMoreBtn") + " ->"}</Button>
          </Link>
        )}
      </div>
      <div className={classes.container}>
        <Image
          className={classes.photo}
          src="/about-me.png"
          alt="About me photo"
          width={343}
          height={500}
          priority
        />
        <Dots className={cn(classes.dotsImg, classes.leftDots)} />
        <Dots className={cn(classes.dotsImg, classes.rightDots)} />
      </div>
    </Section>
  );
};
