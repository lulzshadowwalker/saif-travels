"use client";

import { Calendar, MapPin, Phone } from "lucide-react";
import { Scheherazade_New } from "next/font/google";
import Image from "next/image";
import sample from "@/assets/images/hero.png";
import Marquee from "react-fast-marquee";
import { Package } from "@/lib/types";

const font = Scheherazade_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type Props = {
  packageData: Package;
};

export function PackageDetails({ packageData }: Props) {
  return (
    <main>
      <div className="container mx-auto my-12 max-md:my-8 flex flex-col lg:flex-row justify-center gap-8 md:gap-12 items-center px-4">
        <div className="w-full max-w-145">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 md:mb-8 ${font.className}`}
          >
            {packageData.name}
          </h1>

          <p className="text-base md:text-lg">{packageData.description}</p>

          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-2 mt-8 md:mt-10">
            <ul className="space-y-4 flex-shrink-0">
              <li className="flex items-center gap-4">
                <Calendar size={16} className="-translate-y-[3px]" />{" "}
                {packageData.duration} Days
              </li>
              {/* <li className="flex items-center gap-4">
                <User size={16} className="-translate-y-[3px]" />{" "}
                {packageData.groupSize}
              </li> */}
              <li className="flex items-center gap-4 max-w-64">
                <MapPin size={16} className="-translate-y-[3px] min-w-fit" />{" "}
                {packageData.destinations.flatMap((d) => d.name).join(", ")}
              </li>
            </ul>

            <div className="hidden md:block w-[1px] rounded-full h-[88px] bg-accent mx-4" />
            <div className="block md:hidden h-[1px] w-full rounded-full bg-accent my-4" />

            <ul className="flex flex-wrap max-w-32 gap-2">
              {packageData.tags.slice(0, 4).map((tag) => (
                <li className="text-lg font-light m-0" key={tag}>
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-full max-w-136 h-60 md:h-75 rounded-box overflow-hidden group mt-8 lg:mt-0">
          <Image
            src={sample}
            alt={packageData.name}
            fill
            className="object-cover transition-all duration-900 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div dir="ltr">
        <Marquee autoFill speed={15} direction="left" className="my-10">
          <div className="rounded-box overflow-hidden relative h-38 w-64 mx-2">
            <Image
              src={sample}
              alt=""
              fill
              className="object-cover transition-all duration-900 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </Marquee>
      </div>

      <section className="container mx-auto px-4 my-16 max-md:my-8 flex items-start max-w-278">
        <div>
          <h2 className="text-[2.5rem] font-semibold mb-3">Tour Program</h2>
          <ul className="list-disc list-inside">
            {packageData.program.map((program, index) => (
              <li key={index}>{program}</li>
            ))}
          </ul>
        </div>

        <div className="w-[2px] h-48 bg-accent mx-auto"></div>

        <div>
          <h2 className="text-[2.5rem] font-semibold mb-3">
            Healing Activities
          </h2>
          <ul className="list-disc list-inside">
            {packageData.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="my-20 max-md:my-8 container mx-auto px-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packageData.destinations?.length ? (
            <li className="card max-w-full bg-[#F6F6F6]">
              <h2 className="text-lg font-medium">Choose a Place</h2>
              <ul className="text-sm tracking-wide list-disc list-inside mt-2">
                {packageData.destinations.map((destination) => (
                  <li key={destination.slug}>{destination.name}</li>
                ))}
              </ul>
            </li>
          ) : null}

          {packageData.stay?.length ? (
            <li className="card max-w-full bg-[#F6F6F6]">
              <h2 className="text-lg font-medium">Choose where to stay</h2>
              <ul className="text-sm tracking-wide list-disc list-inside mt-2">
                {packageData.stay.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </li>
          ) : null}

          {packageData.ivDrips?.length ? (
            <li className="card max-w-full bg-[#F6F6F6]">
              <h2 className="text-lg font-medium">IV-Drip Treatments</h2>
              <ul className="text-sm tracking-wide list-disc list-inside mt-2">
                {packageData.ivDrips.map((drip) => (
                  <li key={drip}>{drip}</li>
                ))}
              </ul>
            </li>
          ) : null}
        </ul>
      </section>

      <section className="container mx-auto py-20 max-md:py-8 px-4 flex flex-col items-center justify-center gap-10">
        <p className="tracking-wide text-center text-pretty max-w-180">
          Designed for newlyweds or couples marking a special milestone, this
          journey is fully personalized to reflect each partner’s unique
          essence. For those seeking deeper emotional connection, optional
          counseling sessions can be added upon request.
        </p>

        <a
          href="https://calendly.com/saif-jo-2025/30min"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="btn btn-accent text-base font-semibold">
            <Phone fill="currentColor" size={16} className="me-1" />
            Request a Call
          </button>
        </a>
      </section>
    </main>
  );
}
