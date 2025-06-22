import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Hero } from "./components/hero";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Cta } from "./components/cta";
import { Scheherazade_New } from "next/font/google";

// Import service sample images
import serviceSample1 from "@/assets/images/service-sample-1.png";
import serviceSample2 from "@/assets/images/service-sample-2.png";
import serviceSample3 from "@/assets/images/service-sample-3.png";
import serviceSample4 from "@/assets/images/service-sample-4.png";
import { RetreatRepoFactory } from "@/lib/factory/retreat-repo-factory";
import { getChip } from "@/lib/util/get-chips";
import { Link } from "@/i18n/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const font = Scheherazade_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("home.title"),
    description: t("home.description"),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  setRequestLocale(locale);

  const t = await getTranslations("HomePage");
  const tCommon = await getTranslations("Common");

  const retreats = await RetreatRepoFactory.create().list(locale);

  return (
    <main className="scroll-smooth">
      <Hero />

      <section className="container mx-auto px-4">
        <h2 className={`text-4xl font-semibold mb-14 mt-20 ${font.className}`}>
          {t("servicesTitle")}
        </h2>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {(await services()).map(({ title, elements, image }, idx) => (
            <li key={title}>
              <div className="relative py-6 px-3 rounded-box overflow-hidden group h-85">
                {/* Background Image */}
                <Image
                  src={image}
                  alt="Service Image"
                  className="object-cover -z-20 group-hover:scale-[1.02] transition-transform duration-500 ease-in-out"
                  fill
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 -z-10" />

                <h3 className="text-2xl font-bold mb-6 text-primary max-md:text-lg">
                  {title}
                </h3>

                <ul className="list-disc list-inside space-y-2 ps-4 max-md:space-y-0 max-md:ps-0">
                  {elements.map((element, index) => (
                    <li
                      key={index}
                      className="text-sm font-light text-primary max-md:text-xs"
                    >
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container mx-auto px-4">
        <h2 className={`text-4xl font-semibold mb-14 mt-20 ${font.className}`}>
          {t("packagesTitle")}
        </h2>
        {retreats.map((retreat) => (
          <div key={retreat.name} className="mb-16">
            <h3
              id={retreat.slug}
              className={`text-xl font-medium mt-14 mb-8 scroll-mt-32 ${font.className}`}
            >
              {retreat.name}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {retreat.packages.map((pkg) => (
                <li className="card max-w-full flex flex-col" key={pkg.name}>
                  <div className="relative h-45 rounded-box overflow-hidden">
                    <Image
                      src={pkg.cover.url}
                      alt={pkg.cover.name ?? pkg.name + " cover"}
                      fill
                      className="object-cover transition-all duration-900 ease-in-out hover:scale-[1.03]"
                    />

                    <ul className="absolute bottom-2 start-2 flex gap-2">
                      {pkg.chips.map(async (c) => {
                        const chip = await getChip(c);
                        if (!chip) return null;

                        return (
                          <li
                            key={chip.name}
                            className="flex items-center justify-center gap-1 px-2 py-1 rounded-box"
                            style={{ backgroundColor: chip.background }}
                          >
                            <chip.icon
                              size={16}
                              style={{ color: chip.color }}
                            />
                            <span
                              className="text-sm"
                              style={{ color: chip.color }}
                            >
                              {chip.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <h4 className="text-2xl font-bold mt-6 mb-7">{pkg.name}</h4>
                  <p className="text-lg font-light mb-6">{pkg.description}</p>

                  <div className="flex justify-between gap-2 mb-20">
                    <ul>
                      {pkg.destinations.slice(0, 1).map((dest) => (
                        <li className="flex items-center gap-2" key={dest.name}>
                          <MapPin size={16} />
                          <span className="text-lg font-light">
                            {dest.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-wrap max-w-32 gap-2">
                      {pkg.tags.slice(0, 4).map((tag) => (
                        <li className="text-lg font-light" key={tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="mt-auto max-md:mt-14"
                  >
                    <button className="btn btn-accent max-w-37 w-full">
                      {tCommon("explore")}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <Cta />
    </main>
  );
}

async function services() {
  const t = await getTranslations("HomePage.services");

  return [
    {
      title: t("travelCoordination.title"),
      elements: [
        t("travelCoordination.items.flightBooking"),
        t("travelCoordination.items.vipPickup"),
        t("travelCoordination.items.internalTransfers"),
      ],
      image: serviceSample1,
    },
    {
      title: t("accommodation.title"),
      elements: [
        t("accommodation.items.luxury"),
        t("accommodation.items.privateLodgings"),
        t("accommodation.items.privateShared"),
      ],
      image: serviceSample2,
    },
    {
      title: t("healingMeditation.title"),
      elements: [
        t("healingMeditation.items.individualGroup"),
        t("healingMeditation.items.horseGuided"),
        t("healingMeditation.items.soundTherapy"),
        t("healingMeditation.items.psychological"),
      ],
      image: serviceSample3,
    },
    {
      title: t("authenticNature.title"),
      elements: [
        t("authenticNature.items.excursions"),
        t("authenticNature.items.silentNights"),
        t("authenticNature.items.selfDiscovery"),
        t("authenticNature.items.localCommunities"),
      ],
      image: serviceSample4,
    },
  ];
}
