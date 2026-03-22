import type { Metadata } from "next";
import { LocaleProvider } from "@/context/LocaleContext";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

const siteUrl = "https://www.jhonaq.me";

const titles: Record<Locale, string> = {
  es: "Portafolio de Jhonatan Arias | Desarrollador de software",
  en: "Jhonatan Arias Portfolio | Software developer",
};

const descriptions: Record<Locale, string> = {
  es: "Portafolio de Jhonatan Arias, desarrollador de software en Arequipa. Crea experiencias web y mobile con Next.js, React, Supabase y Flutter.",
  en: "Portfolio of Jhonatan Arias, software developer in Arequipa. Builds web and mobile experiences with Next.js, React, Supabase and Flutter.",
};

const ogLocales: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) ?? i18n.defaultLocale;
  const currentLocale = i18n.locales.includes(locale) ? locale : i18n.defaultLocale;
  const canonicalPath = `/${currentLocale}`;

  return {
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    alternates: {
      canonical: canonicalPath,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: canonicalPath,
      siteName: "Jhonatan Arias",
      locale: ogLocales[currentLocale],
      type: "website",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: titles[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      images: ["/og-image.svg"],
    },
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
      { media: "(prefers-color-scheme: dark)", color: "#0a192f" },
    ],
  };
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang as Locale) ?? i18n.defaultLocale;
  const currentLocale = i18n.locales.includes(locale) ? locale : i18n.defaultLocale;
  const dictionary = await getDictionary(currentLocale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Jhonatan Arias Quispe",
        url: `${siteUrl}/${currentLocale}`,
        jobTitle:
          currentLocale === "es" ? "Desarrollador de software" : "Software developer",
        description: descriptions[currentLocale],
        image: `${siteUrl}/og-image.svg`,
        email: "mailto:jariasq@unsa.edu.pe",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Arequipa",
          addressCountry: "PE",
        },
        sameAs: [
          "https://github.com/JhonAQ",
          "https://www.linkedin.com/in/jhon-aq",
        ],
      },
      {
        "@type": "WebSite",
        name: "Jhonatan Arias Portfolio",
        url: siteUrl,
        inLanguage: currentLocale,
        description: descriptions[currentLocale],
      },
    ],
  };

  return (
    <LocaleProvider locale={currentLocale} dictionary={dictionary}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </LocaleProvider>
  );
}
