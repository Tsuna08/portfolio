import { ButtonKey } from "@/src/constants/projects";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { Button } from "../Button";
import classes from "./Project.module.scss";

interface ProjectProps {
  title?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  buttons?: { link: string; label: ButtonKey }[];
  translator: Record<ButtonKey, string>;
}

export const Project = ({
  title,
  description,
  image,
  technologies,
  buttons,
  translator,
}: ProjectProps) => {
  const symbol = "<~>";

  return (
    <div className={classes.box}>
      {image && (
        <Image
          className={classes.photo}
          src={image}
          alt={title ?? "Project image"}
          width={330}
          height={200}
          loading="lazy"
        />
      )}
      <div className={classes.skills}>{technologies?.join(", ")}</div>
      <div className={classes.content}>
        <h5 className={classes.title}>{title}</h5>
        <p className={classes.description}>{description}</p>
        {buttons?.map((button, index) => (
          <Link href={button.link} key={index}>
            <Button>
              {translator[button.label]} {symbol}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
