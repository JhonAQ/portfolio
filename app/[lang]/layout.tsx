import { LocaleProvider } from "@/context/LocaleContext";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

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
  const dictionary = await getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      {children}
    </LocaleProvider>
  );
}
