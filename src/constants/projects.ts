export type AppsKey = "portfolio" | "txtOnImg" | "blog";
export interface AppsContent {
  technologies: string[];
  image: string;
  link: string;
}

export const mainApps: AppsKey[] = ["portfolio", "txtOnImg", "blog"];
export const completeApps: AppsKey[] = ["portfolio", "txtOnImg", "blog"];

export const apps: Record<AppsKey, AppsContent> = {
  portfolio: {
    technologies: ["React", "Next.js", "TypeScript", "SCSS"],
    image: "/projects/portfolio.png",
    link: "https://github.com/Tsuna08/portfolio",
  },
  txtOnImg: {
    technologies: ["HTML", "CSS", "JavaScript", "Fabric.JS"],
    image: "/projects/txtOnImg.png",
    link: "https://chromewebstore.google.com/detail/add-text-to-image/pfbhjehlekjeidhdpebofhglpfohofhc?pli=1",
  },
  blog: {
    technologies: [
      "React",
      "CSS",
      "TypeScript",
      "React Router",
      "React Hook Form",
      "Yup",
      "Firebase",
    ],
    image: "/projects/blog.png",
    link: "https://github.com/Tsuna08/blog",
  },
};
