import type { Metadata } from "next";
import FaqList from "./components/faq-list";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Saif Travel and Tourism",
  description:
    "Find answers to common questions about Saif's IV therapy, wellness retreats, and travel services in Jordan.",
};

export default function Faq() {
  return <FaqList />;
}
