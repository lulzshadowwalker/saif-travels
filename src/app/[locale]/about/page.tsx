import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { BriefcaseMedical, Phone, RefreshCcw, Stethoscope } from "lucide-react";
import { Hero } from "./components/hero";
import pool from "@/assets/images/pool.png";
import Image from "next/image";

import cta from "@/assets/images/cta.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Enable static rendering

  const locale = (await params).locale;
  setRequestLocale(locale);

  const t = await getTranslations("AboutPage");
  const tCommon = await getTranslations("Common");

  return (
    <main>
      <Hero />

      <section className="container mx-auto my-20 px-4">
        <h2 className="text-[2.5rem] font-semibold mb-5">
          {t("whatIsIVDrip.title")}
        </h2>

        <ul className="space-y-6 max-w-166">
          <li className="flex items-start gap-12 max-md:gap-2">
            <Stethoscope size={70} />
            <p>{t("whatIsIVDrip.feature1")}</p>
          </li>

          <li className="flex items-start gap-12 max-md:gap-2">
            <BriefcaseMedical size={55} />
            <p>{t("whatIsIVDrip.feature2")}</p>
          </li>

          <li className="flex items-start gap-12 max-md:gap-2">
            <RefreshCcw size={40} />
            <p>{t("whatIsIVDrip.feature3")}</p>
          </li>
        </ul>
      </section>

      <section className="container mx-auto my-20 px-4">
        <h2 className="text-[2.5rem] font-semibold mb-5">
          {t("whatYoullFeel.title")}
        </h2>
        <ul className="grid grid-cols-4 max-md:grid-cols-2 gap-4">
          <li className="card text-center py-8">{t("whatYoullFeel.feel1")}</li>
          <li className="card text-center py-8">{t("whatYoullFeel.feel2")}</li>
          <li className="card text-center py-8">{t("whatYoullFeel.feel3")}</li>
          <li className="card text-center py-8">{t("whatYoullFeel.feel4")}</li>
        </ul>
      </section>

      <hr className="border-t-2 border-accent my-20 container mx-auto" />

      <section className="container mx-auto flex items-center justify-between max-lg:flex-col px-4">
        <div className="lg:max-w-85">
          <h2 className="text-[2.5rem] font-semibold mb-4">
            {t("includedInStay.title")}
          </h2>
          <p>{t("includedInStay.description")}</p>
        </div>

        <div className="flex items-center gap-4 max-md:flex-col">
          <Image src={pool} alt="Pool" className="rounded-box mt-8" />

          <div className="lg:max-w-85 mt-8 justify-self-start">
            <h2 className="text-[2.5rem] font-semibold mb-4">
              {t("includedInStay.title")}
            </h2>
            <p>{t("includedInStay.description")}</p>
          </div>
        </div>

        <div></div>
      </section>

      <hr className="border-t-2 border-accent my-20 container mx-auto" />

      <Cta />
    </main>
  );
}

async function Cta() {
  const t = await getTranslations("AboutPage");
  const tCommon = await getTranslations("Common");

  return (
    <div className="h-[max(62dvh,500px)] relative">
      <Image
        src={cta}
        alt="Man swimming in the dead sea"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/42" />

      <div className="absolute inset-0 max-w-222 mx-auto flex flex-col items-center justify-center px-4">
        <h2 className="text-[2.5rem] font-bold text-white text-center text-balance mb-1">
          {t("cta.title")}
        </h2>
        <p className="text-center max-w-prose text-white">
          {t("cta.description")}
        </p>

        <a
          href="https://calendly.com/saif-jo-2025/30min"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="btn btn-accent text-base font-semibold mt-12">
            <Phone fill="currentColor" size={16} className="me-1" />
            {tCommon("requestCall")}
          </button>
        </a>
      </div>
    </div>
  );
}
