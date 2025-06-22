import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import FaqList from "./components/faq-list";
import { FaqRepoFactory } from "@/lib/factory/faq-repo-factory";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("faq.title"),
    description: t("faq.description"),
  };
}

export default async function Faq({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Enable static rendering
  const locale = (await params).locale;
  setRequestLocale(locale);

  const faqs = await FaqRepoFactory.create().list(locale);
  return <FaqList faqs={faqs} />;
}
