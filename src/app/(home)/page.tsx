import { Hero } from "./components/hero";
import sample from "@/assets/images/hero.png";
import { Brain, Compass, Globe, MapPin, ScanHeart, TreeDeciduous } from "lucide-react";
import Image from "next/image";
import { Cta } from "./components/cta";
import { Scheherazade_New } from "next/font/google";
import Link from "next/link";

// Import dedicated package sample images
import packageSample1 from "@/assets/images/package-sample-1.png";
import packageSample2 from "@/assets/images/package-sample-2.png";
import packageSample3 from "@/assets/images/package-sample-3.png";
import packageSample4 from "@/assets/images/package-sample-4.png";
import packageSample5 from "@/assets/images/package-sample-5.png";
import packageSample6 from "@/assets/images/package-sample-6.png";
import packageSample7 from "@/assets/images/package-sample-7.png";
import packageSample8 from "@/assets/images/package-sample-8.png";
import packageSample9 from "@/assets/images/package-sample-9.png";
import packageSample10 from "@/assets/images/package-sample-10.png";

// Import service sample images
import serviceSample1 from "@/assets/images/service-sample-1.png";
import serviceSample2 from "@/assets/images/service-sample-2.png";
import serviceSample3 from "@/assets/images/service-sample-3.png";
import serviceSample4 from "@/assets/images/service-sample-4.png";

const font = Scheherazade_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Assign a sample image to each package (re-use if more than 10)
const packageImages = [
  packageSample1,
  packageSample2,
  packageSample3,
  packageSample4,
  packageSample5,
  packageSample6,
  packageSample7,
  packageSample8,
  packageSample9,
  packageSample10,
];

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
        chips: [
          { name: "Nature", icon: TreeDeciduous, iconColor: "#5BC73A", color: "#E0FFC8" },
          { name: "Meditation", icon: Brain, iconColor: "#E58A21", color: "#FFF2D5" },
          { name: "Adventure", icon: Compass, iconColor: "#1E90FF", color: "#D5EFFF" },
        ],
        image: packageImages[0],
      },
      {
        slug: "horse-whispering",
        title: "Horse Whispering",
        description:
          "Experience the unique art of connecting with horses while exploring Jordan's stunning landscapes and rich history. This tour offers a special opportunity to bond with these majestic animals through tailored experiences.",
        locations: ["Amman", "Wadi Rum", "Petra"],
        tags: ["#Adventure", "#Culture", "#Explore"],
        chips: [
          { name: "Adventure", icon: Compass, iconColor: "#1E90FF", color: "#D5EFFF" },
          { name: "Nature", icon: TreeDeciduous, iconColor: "#5BC73A", color: "#E0FFC8" },
          { name: "Explore", icon: Globe, iconColor: "#197CC3", color: "#B1E4FF" },
        ],
        image: packageImages[1],
      },
      {
        slug: "peace-and-quiet",
        title: "Peace and Quiet",
        description:
          "Enter a state of deep meditation, aiming to free oneself from noise and disconnect from the world.",
        locations: ["Remote Southern Areas", "Azraq Desert", "Wadi Rum"],
        tags: ["#Peace", "#Meditation", "#Desert"],
        chips: [
          { name: "Meditation", icon: Brain, iconColor: "#E58A21", color: "#FFF2D5" },
          { name: "Nature", icon: TreeDeciduous, iconColor: "#5BC73A", color: "#E0FFC8" },
        ],
        image: packageImages[2],
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
        chips: [
          { name: "Meditation", icon: Brain, iconColor: "#E58A21", color: "#FFF2D5" },
          { name: "Nature", icon: TreeDeciduous, iconColor: "#5BC73A", color: "#E0FFC8" },
        ],
        image: packageImages[3],
      },
      {
        slug: "turning-point",
        title: "Turning Point",
        description:
          "Support transitioning from a difficult life stage or major decision (e.g., divorce, loss, career change).",
        locations: ["Ajloun", "Umm Qais", "Wadi Al-Rayan"],
        tags: ["#Healing", "#Support", "#Transformation"],
        chips: [
          { name: "Meditation", icon: Brain, iconColor: "#E58A21", color: "#FFF2D5" },
          { name: "Nature", icon: TreeDeciduous, iconColor: "#5BC73A", color: "#E0FFC8" },
        ],
        image: packageImages[4],
      },
      {
        slug: "the-body-knows",
        title: "The Body Knows",
        description:
          "Reconnect with the body, understand its signals, and heal the relationship with it.",
        locations: ["Madaba", "Dead Sea", "Dibeen"],
        tags: ["#Healing", "#Wellness", "#BodyAwareness"],
        chips: [
          { name: "Meditation", icon: Brain, iconColor: "#E58A21", color: "#FFF2D5" },
          { name: "Nature", icon: TreeDeciduous, iconColor: "#5BC73A", color: "#E0FFC8" },
        ],
        image: packageImages[5],
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
        chips: [
          { name: "Meditation", icon: Brain, iconColor: "#E58A21", color: "#FFF2D5" },
          { name: "Nature", icon: TreeDeciduous, iconColor: "#5BC73A", color: "#E0FFC8" },
        ],
        image: packageImages[6],
      },
      {
        slug: "together",
        title: "Together",
        description:
          "A healing journey for couples (romantic, friends, life partners) to strengthen bonds and reconnect authentically.",
        locations: ["Jerash", "Dead Sea", "Wadi Rum"],
        tags: ["#Couples", "#Healing", "#Connection"],
        chips: [
          { name: "Honeymoon", icon: ScanHeart, iconColor: "#D3388D", color: "#FFB5D3" },
          { name: "Meditation", icon: Brain, iconColor: "#E58A21", color: "#FFF2D5" },
          { name: "Nature", icon: TreeDeciduous, iconColor: "#5BC73A", color: "#E0FFC8" },
        ],
        image: packageImages[7],
      },
      {
        slug: "i-discover-myself",
        title: "I Discover Myself",
        description:
          "Support youth and teenagers in exploring their identity, building self-confidence, and fostering a sense of belonging.",
        locations: ["Ajloun", "Dead Sea", "Mujo"],
        tags: ["#Youth", "#Confidence", "#SelfDiscovery"],
        chips: [
          { name: "Adventure", icon: Compass, iconColor: "#1E90FF", color: "#D5EFFF" },
          { name: "Explore", icon: Globe, iconColor: "#197CC3", color: "#B1E4FF" },
          { name: "Nature", icon: TreeDeciduous, iconColor: "#5BC73A", color: "#E0FFC8" },
        ],
        image: packageImages[8],
      },
    ],
  },
] as const;

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />

      <section className="container mx-auto px-4">
        <h2 className={`text-4xl font-semibold mb-14 mt-20 ${font.className}`}>
          Our Services
        </h2>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services().map(({ title, elements, image }, idx) => (
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
          Our Packages
        </h2>
        {groups.map((group) => (
          <div key={group.title} className="mb-16">
            <h3
              id={group.title.replace(/\s+/g, "-").toLowerCase()}
              className={`text-xl font-medium mt-14 mb-8 scroll-mt-32 ${font.className}`}
            >
              {group.title}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.packages.map((pkg) => (
                <li className="card max-w-full flex flex-col" key={pkg.title}>
                  <div className="relative h-45 rounded-box overflow-hidden">
                    <Image src={pkg.image} alt="Package Image" fill />

                    <ul className="absolute bottom-2 start-2 flex gap-2">
                      {pkg.chips.map((chip) => (
                        <li
                          key={chip.name}
                          className="flex items-center justify-center gap-1 px-2 py-1 rounded-box"
                          style={{ backgroundColor: chip.color }}
                        >
                          <chip.icon
                            size={16}
                            style={{ color: chip.iconColor }}
                          />
                          <span className="text-sm" style={{ color: chip.iconColor }}>
                            {chip.name}
                          </span>
                        </li>
                      ))}
                    </ul>
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

function services() {
  return [
    {
      title: "Travel Coordination & Welcome",
      elements: [
        "Full booking of flight tickets",
        "VIP airport pick-up service with a private car",
        "Internal transfers between all activities and sites included in the package",
      ],
      image: serviceSample1,
    },
    {
      title: "Accommodation of Your Choice",
      elements: [
        "Luxury serviced apartments or boutique hotels",
        "Private lodgings with a natural or rustic touch",
        "Private or shared rooms arranged upon request",
      ],
      image: serviceSample2,
    },
    {
      title: "Healing & Meditation Sessions",
      elements: [
        "Individual or group meditation sessions",
        "Horse-guided intuitive (telepathy) experiences",
        "Sound therapy, float therapy, Reiki, chakra work, and conscious breathing",
        "Psychological support sessions with specialists, available upon request",
      ],
      image: serviceSample3,
    },
    {
      title: "Authentic Nature Experience",
      elements: [
        "Mountain and desert excursions",
        "Silent nights beneath the stars",
        "Self-discovery activities, creative writing, and artistic workshops",
        "Interaction with local communities and traditional culinary experiences",
      ],
      image: serviceSample4,
    },
  ];
}