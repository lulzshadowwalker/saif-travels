import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/shared/header";
import { Footer } from "@/shared/footer";
import "../globals.css";
import { RetreatRepoFactory } from "@/lib/factory/retreat-repo-factory";

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Saif | Travel and Tourism",
  description:
    "Discover the best of Jordan's tourism with a focus on healing and wellness.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const retreats = await RetreatRepoFactory.create().list(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${locale === "ar" ? tajawal.className : ""} antialiased`}
      >
        <NextIntlClientProvider>
          <Header retreats={retreats} />
          {children}
          <Footer retreats={retreats} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
