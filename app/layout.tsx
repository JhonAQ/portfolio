import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { i18n } from "@/i18n-config";
import "./globals.css";

// import { Montserrat } from "next/font/google";
// const montserrat = Montserrat({ ... });

export const metadata: Metadata = {
  title: "Jhonatan | Portfolio",
  description: "Portafolio profesional de Jhonatan",
  icons: {
    icon: "/logo.svg",
  },
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
