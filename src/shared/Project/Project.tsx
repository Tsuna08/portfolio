import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { Button } from "../Button";
import classes from "./Project.module.scss";

interface ProjectProps {
  title?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  labelBtn?: string;
  link?: string;
}

export const Project = ({
  title,
  description,
  image,
  technologies,
  labelBtn,
  link,
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
      <div className={classes.skills}>
        {technologies?.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className={classes.content}>
        <h5 className={classes.title}>{title}</h5>
        <p className={classes.description}>{description}</p>
        {link && labelBtn && (
          <Link href={link}>
            <Button>
              {labelBtn} {symbol}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
