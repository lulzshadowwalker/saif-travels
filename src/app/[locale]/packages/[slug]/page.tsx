import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PackageDetails } from "./components/package-details";
import { PackageRepoFactory } from "@/lib/factory/package-repo-factory";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("packages.title"),
    description: t("packages.description"),
  };
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function PackageDetailsPage({ params }: Props) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  const packageData = await PackageRepoFactory.create().get(locale, slug);
  if (!packageData) notFound();

  return <PackageDetails packageData={packageData} />;
}
