import { routes } from "@/src/constants/routes";
import { locales } from "@/src/i18n/config";
import { MetadataRoute } from "next";

const getChangeFrequency = (
  route: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] => {
  if (route === "") return "weekly";
  return "monthly";
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tsuna-dev.com";

  return locales.flatMap((locale) =>
    Object.values(routes).map((route) => ({
      url: `${baseUrl}/${locale}${route === routes.root ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: getChangeFrequency(route),
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
