import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Phone } from "lucide-react";
import Image from "next/image";
import banner from "@/assets/images/contact.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Enable static rendering
  const locale = (await params).locale;
  setRequestLocale(locale);

  const t = await getTranslations("ContactPage");
  const tCommon = await getTranslations("Common");

  return (
    <main className="container mx-auto my-20 max-lg:my-6 px-4">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="bg-red-400 flex-grow relative rounded-box overflow-hidden border min-h-[220px] md:min-h-[400px] mb-8 md:mb-0 md:w-1/2">
          <Image
            src={banner}
            alt=""
            fill
            objectFit="cover"
            className="scale-[1.01]"
          />
        </div>

        <section className="w-full md:max-w-104 md:me-8">
          <div className="border-l-2 border-accent px-2 py-12 max-lg:py-6 mb-20 max-lg:mb-8">
            <h1 className="text-[2.5rem] max-lg:text-2xl font-semibold">
              {t("title")}
            </h1>
            <p className="text-[#171717] text-base max-lg:text-sm">
              {t("description")}
            </p>
          </div>

          <form className="space-y-8">
            <label htmlFor="name" className="sr-only">
              {tCommon("name")}
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white
                         transition-all duration-200 ease-in-out
                         hover:border-gray-400 hover:shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
                         placeholder:text-gray-500 placeholder:transition-colors
                         focus:placeholder:text-gray-400"
              placeholder={t("form.namePlaceholder")}
              required
            />

            <label htmlFor="email" className="sr-only">
              {tCommon("email")}
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white
                         transition-all duration-200 ease-in-out
                         hover:border-gray-400 hover:shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
                         placeholder:text-gray-500 placeholder:transition-colors
                         focus:placeholder:text-gray-400"
              placeholder={t("form.emailPlaceholder")}
              required
            />

            <label htmlFor="phone" className="sr-only">
              {tCommon("phone")}
            </label>
            <input
              dir={locale === "ar" ? "rtl" : "ltr"}
              id="phone"
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white
                         transition-all duration-200 ease-in-out
                         hover:border-gray-400 hover:shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
                         placeholder:text-gray-500 placeholder:transition-colors
                         focus:placeholder:text-gray-400"
              placeholder={t("form.phonePlaceholder")}
              required
            />

            <button
              type="submit"
              className="btn btn-accent mt-12 max-lg:mt-6 w-full md:w-auto flex items-center justify-center gap-2"
            >
              <Phone size={16} fill="currentColor" />
              {t("form.submitButton")}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
