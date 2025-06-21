"use client";

import { Calendar, User, MapPin } from "lucide-react";
import { Scheherazade_New } from "next/font/google";
import Image from "next/image";
import sample from "@/assets/images/hero.png";
import Marquee from "react-fast-marquee";
import { notFound } from "next/navigation";

const font = Scheherazade_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Package data matching the structure from the home page
const packages = [
  {
    slug: "soft-beginning",
    title: "Soft Beginning",
    description:
      "Support newlyweds at the start of their relationship by giving them space for tranquility, understanding, and building a strong foundation together.",
    locations: ["Ajloun", "Dead Sea", "Wadi Rum"],
    tags: ["#Nature", "#Yoga", "#Couples", "#Meditation", "#Honeymoon"],
    duration: "7 Days",
    groupSize: "2 People",
  },
  {
    slug: "horse-whispering",
    title: "Horse Whispering",
    description:
      "Experience the unique art of connecting with horses while exploring Jordan's stunning landscapes and rich history. This tour offers a special opportunity to bond with these majestic animals through tailored experiences.",
    locations: ["Amman", "Wadi Rum", "Petra"],
    tags: ["#Adventure", "#Culture", "#Explore"],
    duration: "5 Days",
    groupSize: "4-6 People",
  },
  {
    slug: "peace-and-quiet",
    title: "Peace and Quiet",
    description:
      "Enter a state of deep meditation, aiming to free oneself from noise and disconnect from the world.",
    locations: ["Remote Southern Areas", "Azraq Desert", "Wadi Rum"],
    tags: ["#Peace", "#Meditation", "#Desert"],
    duration: "4 Days",
    groupSize: "Individual",
  },
  {
    slug: "renewal",
    title: "Renewal",
    description:
      "Rejuvenate the body and mind, detoxify, and restore energy and vitality.",
    locations: ["Wadi Zarqa Ma'in", "Dead Sea", "Wadi Rum"],
    tags: ["#Renewal", "#Detox", "#Wellness"],
    duration: "6 Days",
    groupSize: "2-4 People",
  },
  {
    slug: "turning-point",
    title: "Turning Point",
    description:
      "Support transitioning from a difficult life stage or major decision (e.g., divorce, loss, career change).",
    locations: ["Ajloun", "Umm Qais", "Wadi Al-Rayan"],
    tags: ["#Healing", "#Support", "#Transformation"],
    duration: "5 Days",
    groupSize: "Individual",
  },
  {
    slug: "the-body-knows",
    title: "The Body Knows",
    description:
      "Reconnect with the body, understand its signals, and heal the relationship with it.",
    locations: ["Madaba", "Dead Sea", "Dibeen"],
    tags: ["#Healing", "#Wellness", "#BodyAwareness"],
    duration: "4 Days",
    groupSize: "2-6 People",
  },
  {
    slug: "iv-drip-therapy",
    title: "IV Drip Therapy",
    description:
      "Specialized IV Drip sessions offered within accommodations or as part of daily activities, including all types of drips (Hydration, Energy, Detox, Immunity, Beauty) under the supervision of licensed specialists.",
    locations: ["Petra", "Dead Sea", "Wadi Rum"],
    tags: ["#Wellness", "#Therapy", "#IVDrip"],
    duration: "3-5 Days",
    groupSize: "Individual Sessions",
  },
  {
    slug: "safe-space",
    title: "Safe Space",
    description:
      "Provide a safe and supportive space for women/men to express, heal, and rebuild.",
    locations: ["Al-Fuheis", "As-Salt", "Wadi Rum"],
    tags: ["#SafeSpace", "#Healing", "#Support"],
    duration: "5 Days",
    groupSize: "6-8 People",
  },
  {
    slug: "together",
    title: "Together",
    description:
      "A healing journey for couples (romantic, friends, life partners) to strengthen bonds and reconnect authentically.",
    locations: ["Jerash", "Dead Sea", "Wadi Rum"],
    tags: ["#Couples", "#Healing", "#Connection"],
    duration: "6 Days",
    groupSize: "2 People",
  },
  {
    slug: "i-discover-myself",
    title: "I Discover Myself",
    description:
      "Support youth and teenagers in exploring their identity, building self-confidence, and fostering a sense of belonging.",
    locations: ["Ajloun", "Dead Sea", "Mujo"],
    tags: ["#Youth", "#Confidence", "#SelfDiscovery"],
    duration: "5 Days",
    groupSize: "8-12 People",
  },
];

export default async function PackageDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const packageData = packages.find((pkg) => pkg.slug === slug);

  if (!packageData) {
    notFound();
  }

  return (
    <main>
      <div className="container mx-auto my-12 max-md:my-8 flex flex-col lg:flex-row justify-center gap-8 md:gap-12 items-center px-4">
        <div className="w-full max-w-145">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 md:mb-8 ${font.className}`}
          >
            {packageData.title}
          </h1>

          <p className="text-base md:text-lg">{packageData.description}</p>

          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-2 mt-8 md:mt-10">
            <ul className="space-y-4 flex-shrink-0">
              <li className="flex items-center gap-4">
                <Calendar size={16} className="-translate-y-[3px]" />{" "}
                {packageData.duration}
              </li>
              <li className="flex items-center gap-4">
                <User size={16} className="-translate-y-[3px]" />{" "}
                {packageData.groupSize}
              </li>
              <li className="flex items-center gap-4">
                <MapPin size={16} className="-translate-y-[3px]" />{" "}
                {packageData.locations.join(", ")}
              </li>
            </ul>

            <div className="hidden md:block w-[1px] rounded-full h-[88px] bg-accent mx-4" />
            <div className="block md:hidden h-[1px] w-full rounded-full bg-accent my-4" />

            <ul className="flex flex-wrap max-w-32 gap-2">
              {packageData.tags.slice(0, 4).map((tag) => (
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
            alt={packageData.title}
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
