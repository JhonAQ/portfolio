import type { MetadataRoute } from "next";
import { i18n } from "@/i18n-config";

const baseUrl = "https://www.jhonaq.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = i18n.locales.map((locale) => {
    const path = `/${locale}`;
    const url = `${baseUrl}${path}`;

    return {
      url,
      lastModified,
      changeFrequency: "monthly",
      priority: locale === i18n.defaultLocale ? 1 : 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    };
  });

  const assets: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/pdf/Jhonatan-Arias-CV.pdf`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/pdf/Resume-Jhonatan-Arias.pdf`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...pages, ...assets];
}
