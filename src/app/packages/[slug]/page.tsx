import type { Metadata } from "next";
import { PackageDetails } from "./components/package-details";
import { PackageRepoFactory } from "@/lib/factory/package-repo-factory";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const packages = await PackageRepoFactory.create().list();
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export const metadata: Metadata = {
  title: "Retreat Packages | Saif Travel and Tourism",
  description:
    "Explore Saif's curated wellness and healing retreat packages, each designed for unique journeys across Jordan.",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PackageDetailsPage({ params }: Props) {
  const { slug } = await params;
  const packageData = await PackageRepoFactory.create().get(slug);
  if (!packageData) notFound();

  return <PackageDetails packageData={packageData} />;
}
