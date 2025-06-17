import { Hero } from "./components/hero";
import sample from "@/assets/images/hero.png";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Cta } from "./components/cta";
import { Scheherazade_New } from "next/font/google";
import Link from "next/link";

const font = Scheherazade_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const groups = [
  {
    title: "Tranquil Connections",
    packages: [
      {
        slug: "iv-drip-therapy",
        title: "IV Drip Therapy",
        description:
          "Specialized IV Drip sessions offered within accommodations or as part of daily activities, including all types of drips (Hydration, Energy, Detox, Immunity, Beauty) under the supervision of licensed specialists.",
        locations: ["Petra", "Dead Sea", "Wadi Rum"],
        tags: ["#Wellness", "#Therapy", "#IVDrip"],
      },
      {
        slug: "horse-whispering",
        title: "Horse Whispering",
        description:
          "Experience the unique art of connecting with horses while exploring Jordan's stunning landscapes and rich history. This tour offers a special opportunity to bond with these majestic animals through tailored experiences.",
        locations: ["Amman", "Wadi Rum", "Petra"],
        tags: ["#Adventure", "#Culture", "#Explore"],
      },
      {
        slug: "peace-and-quiet",
        title: "Peace and Quiet",
        description:
          "Enter a state of deep meditation, aiming to free oneself from noise and disconnect from the world.",
        locations: ["Remote Southern Areas", "Azraq Desert", "Wadi Rum"],
        tags: ["#Peace", "#Meditation", "#Desert"],
      },
    ],
  },
  {
    title: "Inner Transformation",
    packages: [
      {
        slug: "renewal",
        title: "Renewal",
        description:
          "Rejuvenate the body and mind, detoxify, and restore energy and vitality.",
        locations: ["Wadi Zarqa Ma'in", "Dead Sea", "Wadi Rum"],
        tags: ["#Renewal", "#Detox", "#Wellness"],
      },
      {
        slug: "turning-point",
        title: "Turning Point",
        description:
          "Support transitioning from a difficult life stage or major decision (e.g., divorce, loss, career change).",
        locations: ["Ajloun", "Umm Qais", "Wadi Al-Rayan"],
        tags: ["#Healing", "#Support", "#Transformation"],
      },
      {
        slug: "the-body-knows",
        title: "The Body Knows",
        description:
          "Reconnect with the body, understand its signals, and heal the relationship with it.",
        locations: ["Madaba", "Dead Sea", "Dibeen"],
        tags: ["#Healing", "#Wellness", "#BodyAwareness"],
      },
    ],
  },
  {
    title: "Personal Empowerment",
    packages: [
      {
        slug: "safe-space",
        title: "Safe Space",
        description:
          "Provide a safe and supportive space for women/men to express, heal, and rebuild.",
        locations: ["Al-Fuheis", "As-Salt", "Wadi Rum"],
        tags: ["#SafeSpace", "#Healing", "#Support"],
      },
      {
        slug: "together",
        title: "Together",
        description:
          "A healing journey for couples (romantic, friends, life partners) to strengthen bonds and reconnect authentically.",
        locations: ["Jerash", "Dead Sea", "Wadi Rum"],
        tags: ["#Couples", "#Healing", "#Connection"],
      },
      {
        slug: "i-discover-myself",
        title: "I Discover Myself",
        description:
          "Support youth and teenagers in exploring their identity, building self-confidence, and fostering a sense of belonging.",
        locations: ["Ajloun", "Dead Sea", "Mujo"],
        tags: ["#Youth", "#Confidence", "#SelfDiscovery"],
      },
    ],
  },
] as const;

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="container mx-auto px-4">
        <h2 className={`text-4xl font-semibold mb-14 mt-20 ${font.className}`}>
          Our Packages
        </h2>
        {groups.map((group) => (
          <div key={group.title} className="mb-16">
            <h3 className={`text-xl font-medium mt-14 mb-8 ${font.className}`}>
              {group.title}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.packages.map((pkg) => (
                <li className="card max-w-full flex flex-col" key={pkg.title}>
                  <div className="relative h-45 rounded-box overflow-hidden">
                    <Image src={sample} alt="Hero Image" fill />
                  </div>

                  <h4 className="text-2xl font-bold mt-6 mb-7">{pkg.title}</h4>
                  <p className="text-lg font-light mb-6">{pkg.description}</p>

                  <div className="flex justify-between gap-2 mb-20">
                    <ul>
                      {pkg.locations.slice(0, 1).map((loc) => (
                        <li className="flex items-center gap-2" key={loc}>
                          <MapPin size={16} />
                          <span className="text-lg font-light">{loc}</span>
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
                      Explore
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
