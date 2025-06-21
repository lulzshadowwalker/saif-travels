import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import FaqList from "./components/faq-list";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Saif Travel and Tourism",
  description:
    "Find answers to common questions about Saif's IV therapy, wellness retreats, and travel services in Jordan.",
};

export default async function Faq({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Enable static rendering
  const locale = (await params).locale;
  setRequestLocale(locale);
  return <FaqList />;
}
