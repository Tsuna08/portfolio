import "./globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Fira_Code } from "next/font/google";
import { notFound } from "next/navigation";

import { Header } from "@/src/components/Header";
import { Locale, locales } from "@/src/i18n/config";

const validLocales = new Set<string>(locales);

function isValidLocale(locale: string): locale is Locale {
  return validLocales.has(locale);
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TsunaDev",
  description: "Portfolio of frontend developer",
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${firaCode.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale: (typeof locales)[number]) => ({ locale }));
}
