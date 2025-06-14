"use client";

import { Calendar, User } from "lucide-react";
import { Scheherazade_New } from "next/font/google";
import Image from "next/image";
import sample from "@/assets/images/hero.png";
import Marquee from "react-fast-marquee";

const font = Scheherazade_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const tags = ["#Nature", "#Yoga", "#Couples"] as const;

export default function PackageDetails() {
  return (
    <main>
      <div className="container mx-auto my-12 max-md:my-8 flex flex-col lg:flex-row justify-center gap-8 md:gap-12 items-center px-4">
        <div className="w-full max-w-145">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 md:mb-8 ${font.className}`}
          >
            Soft Beginning
          </h1>

          <p className="text-base md:text-lg">
            Support newlyweds at the start of their relationship by giving them
            space for tranquility, understanding, and building a strong
            foundation together.
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-2 mt-8 md:mt-10">
            <ul className="space-y-4 flex-shrink-0">
              <li className="flex items-center gap-4">
                <Calendar size={16} className="-translate-y-[3px]" /> 7 Days
              </li>
              <li className="flex items-center gap-4">
                <User size={16} className="-translate-y-[3px]" /> 2 People
              </li>
            </ul>

            <div className="hidden md:block w-[1px] rounded-full h-[88px] bg-accent mx-4" />
            <div className="block md:hidden h-[1px] w-full rounded-full bg-accent my-4" />

            <ul className="flex flex-wrap max-w-32 gap-2">
              {tags.slice(0, 4).map((tag) => (
                <li className="text-lg font-light m-0" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-full max-w-136 h-60 md:h-75 rounded-box overflow-hidden group mt-8 lg:mt-0">
          <Image
            src={sample}
            alt=""
            fill
            className="object-cover transition-all duration-900 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

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
    </main>
  );
}
