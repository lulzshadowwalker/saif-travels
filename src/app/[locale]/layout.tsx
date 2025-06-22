import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/shared/header";
import { Footer } from "@/shared/footer";
import "../globals.css";
import { RetreatRepoFactory } from "@/lib/factory/retreat-repo-factory";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("root.title"),
    description: t("root.description"),
  };
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
