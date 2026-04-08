export type AppsKey = "portfolio" | "txtOnImg" | "blog" | "pizza" | "cinema";
export interface AppsContent {
  technologies: string[];
  image: string;
  link: string;
}

export const mainApps: AppsKey[] = ["portfolio", "blog", "txtOnImg"];
export const completeApps: AppsKey[] = [
  "portfolio",
  "blog",
  "txtOnImg",
  "pizza",
  "cinema",
];

export const apps: Record<AppsKey, AppsContent> = {
  portfolio: {
    technologies: ["React", "Next", "TS", "SCSS", "i18n"],
    image: "/projects/portfolio.png",
    link: "https://github.com/Tsuna08/portfolio",
  },
  txtOnImg: {
    technologies: ["HTML", "CSS", "JS", "Fabric.JS"],
    image: "/projects/txtOnImg.png",
    link: "https://chromewebstore.google.com/detail/add-text-to-image/pfbhjehlekjeidhdpebofhglpfohofhc?pli=1",
  },
  blog: {
    technologies: ["React", "CSS", "TS", "React Hook Form", "Yup", "Firebase"],
    image: "/projects/blog.png",
    link: "https://github.com/Tsuna08/blog",
  },
  pizza: {
    technologies: ["React", "TS", "SCSS", "Axios", "React Hook Form", "Yup"],
    image: "/projects/pizza.png",
    link: "https://github.com/Tsuna08/pizza-project",
  },
  cinema: {
    technologies: ["Vue 3", "TS", "Pinia", "Vue Router", "Vite", "Axios"],
    image: "/projects/cinema.png",
    link: "https://github.com/Tsuna08/vue-cinema",
  },
};
