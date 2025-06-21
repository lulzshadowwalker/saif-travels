import type { Metadata } from "next";
import { getLocale, setRequestLocale } from "next-intl/server";
import { PackageDetails } from "./components/package-details";
import { PackageRepoFactory } from "@/lib/factory/package-repo-factory";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const packages = await PackageRepoFactory.create().list(locale);
  return routing.locales.flatMap((locale) =>
    packages.map((pkg) => ({
      locale,
      slug: pkg.slug,
    })),
  );
}

export const metadata: Metadata = {
  title: "Retreat Packages | Saif Travel and Tourism",
  description:
    "Explore Saif's curated wellness and healing retreat packages, each designed for unique journeys across Jordan.",
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function PackageDetailsPage({ params }: Props) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  const locale = await getLocale();
  const packageData = await PackageRepoFactory.create().get(locale, slug);
  if (!packageData) notFound();

  return <PackageDetails packageData={packageData} />;
}
