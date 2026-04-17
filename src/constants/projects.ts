export type AppsKey = "portfolio" | "waterSeal" | "blog" | "pizza" | "cinema";
export type ButtonKey = "git" | "demo";

export interface AppsContent {
  technologies: string[];
  image: string;
  buttons: { link: string; label: ButtonKey }[];
}

export const mainApps: AppsKey[] = ["portfolio", "blog", "waterSeal"];
export const completeApps: AppsKey[] = [
  "portfolio",
  "blog",
  "pizza",
  "cinema",
  "waterSeal",
];

export const apps: Record<AppsKey, AppsContent> = {
  portfolio: {
    technologies: ["React", "Next", "TS", "SCSS", "i18n"],
    image: "/projects/portfolio.png",
    buttons: [
      {
        link: "https://github.com/Tsuna08/portfolio",
        label: "git",
      },
    ],
  },
  waterSeal: {
    technologies: ["HTML", "CSS", "JS", "Fabric.JS"],
    image: "/projects/waterSeal.png",
    buttons: [
      {
        link: "https://github.com/Tsuna08/watermarks-extension",
        label: "git",
      },
    ],
  },
  blog: {
    technologies: ["React", "CSS", "TS", "React Hook Form", "Yup", "Firebase"],
    image: "/projects/blog.png",
    buttons: [
      {
        link: "https://github.com/Tsuna08/blog",
        label: "git",
      },
    ],
  },
  pizza: {
    technologies: ["React", "TS", "SCSS", "Axios", "React Hook Form", "Yup"],
    image: "/projects/pizza.png",
    buttons: [
      {
        link: "https://github.com/Tsuna08/pizza-project",
        label: "git",
      },
    ],
  },
  cinema: {
    technologies: ["Vue 3", "TS", "Pinia", "Vue Router", "Vite", "Axios"],
    image: "/projects/cinema.png",
    buttons: [
      {
        link: "https://github.com/Tsuna08/vue-cinema",
        label: "git",
      },
    ],
  },
};
