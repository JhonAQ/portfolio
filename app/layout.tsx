import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { i18n } from "@/i18n-config";
import "./globals.css";

// import { Montserrat } from "next/font/google";
// const montserrat = Montserrat({ ... });

const defaultDescription =
  "Portafolio de Jhonatan Arias, desarrollador de software en Arequipa. Crea experiencias web y mobile con Next.js, React, Supabase y Flutter.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jhonaq.me"),
  title: {
    default: "Jhonatan Arias | Portafolio",
    template: "%s | Jhonatan Arias",
  },
  description: defaultDescription,
  applicationName: "Jhonatan Arias Portfolio",
  creator: "Jhonatan Arias",
  publisher: "Jhonatan Arias",
  keywords: [
    "Jhonatan Arias",
    "portafolio",
    "software",
    "desarrollador",
    "React",
    "Next.js",
    "Supabase",
    "Flutter",
    "Arequipa",
  ],
  alternates: {
    canonical: "/",
    languages: {
      es: "/es",
      en: "/en",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Jhonatan Arias | Portafolio",
    description: defaultDescription,
    url: "/",
    siteName: "Jhonatan Arias",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jhonatan Arias | Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhonatan Arias | Portafolio",
    description: defaultDescription,
    images: ["/og-image.svg"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a192f" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? i18n.defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-slate-50 dark:bg-[#0a192f] text-slate-900 dark:text-slate-300 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-MFWSYSGY4D" />
      </body>
    </html>
  );
}
