import Book from "@/public/projects/bookmark.svg";
import Calendar from "@/public/projects/calendar.svg";
import Heart from "@/public/projects/heart.svg";
import Pet from "@/public/projects/pet.svg";
import Git from "@/public/icons/git.svg";
import ArrowUpRight from "@/public/icons/arrow-up-right.svg";

export type AppsKey =
  | "portfolio"
  | "waterSeal"
  | "blog"
  | "pizza"
  | "cinema"
  | "diary"
  | "calendar"
  | "myCharity"
  | "petsShop";
export type ButtonKey = "git" | "project";

export interface AppsContent {
  stack: string[];
  buttons: { link: string; label: ButtonKey }[];
  image?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const buttonIcon: Record<
  ButtonKey,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  git: Git,
  project: ArrowUpRight,
};

export const mainApps: AppsKey[] = ["portfolio", "waterSeal", "blog"];
export const completeApps: AppsKey[] = [
  "portfolio",
  "waterSeal",
  "blog",
  "pizza",
  "cinema",
];
export const smallApps: AppsKey[] = [
  "diary",
  "calendar",
  "myCharity",
  "petsShop",
];

export const apps: Record<AppsKey, AppsContent> = {
  portfolio: {
    stack: ["React", "Next", "TS", "SCSS", "i18n"],
    image: "/projects/portfolio.png",
    buttons: [
      {
        link: "https://github.com/Tsuna08/portfolio",
        label: "git",
      },
    ],
  },
  waterSeal: {
    stack: ["HTML", "CSS", "JS", "Fabric.JS"],
    image: "/projects/waterSeal.png",
    buttons: [
      {
        link: "https://water-seal-five.vercel.app",
        label: "project",
      },
      {
        link: "https://github.com/Tsuna08/water-seal",
        label: "git",
      },
    ],
  },
  blog: {
    stack: ["React", "TS", "Firebase", "React Hook Form"],
    image: "/projects/blog.png",
    buttons: [
      {
        link: "https://blog-three-jade-87.vercel.app",
        label: "project",
      },
      {
        link: "https://github.com/TsunaDev-Code/blog",
        label: "git",
      },
    ],
  },
  pizza: {
    stack: ["React", "TS", "Axios", "React Hook Form"],
    image: "/projects/pizza.png",
    buttons: [
      {
        link: "https://pizza-project-five-navy.vercel.app",
        label: "project",
      },
      {
        link: "https://github.com/TsunaDev-Code/pizza-and-co",
        label: "git",
      },
    ],
  },
  cinema: {
    stack: ["Vue 3", "TS", "Pinia", "Vue Router", "Vite", "Axios"],
    image: "/projects/cinema.png",
    buttons: [
      {
        link: "https://prism-cinema.vercel.app",
        label: "project",
      },
      {
        link: "https://github.com/Tsuna08/prism-cinema",
        label: "git",
      },
    ],
  },
  diary: {
    stack: ["React", "TypeScript", "Vite", "SCSS"],
    icon: Book,
    buttons: [
      {
        link: " https://github.com/Tsuna08/personal-diary",
        label: "git",
      },
    ],
  },
  calendar: {
    stack: ["Vue 3", "TypeScript", "CSS", "i18n"],
    icon: Calendar,
    buttons: [
      {
        link: "https://github.com/Tsuna08/calendar",
        label: "git",
      },
    ],
  },
  myCharity: {
    stack: ["HTML", "CSS", "Sass", "Grid", "Layout", "Flexbox"],
    icon: Heart,
    buttons: [
      {
        link: "https://github.com/Tsuna08/my-charity",
        label: "git",
      },
    ],
  },
  petsShop: {
    stack: ["HTML", "CSS", "Grid", "Layout", "Flexbox"],
    icon: Pet,
    buttons: [
      {
        link: "https://github.com/Tsuna08/pets-shop",
        label: "git",
      },
    ],
  },
};
