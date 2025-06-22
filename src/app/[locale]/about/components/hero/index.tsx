import Image from "next/image";
import hero from "@/assets/images/about-hero.png";
import { useTranslations } from "next-intl";

export function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src={hero}
        alt="Wadi Rum desert"
        fill
        priority
        className="object-cover w-full h-full starting:scale-110 transition-all duration-1200 ease-out"
        sizes="100vw"
      />

      <div className="absolute top-1/3 -translate-y-1/4 transform z-10 inset-x-0 flex flex-col items-start container mx-auto px-4">
        <h1 className="text-white text-[2.5rem] font-semibold mb-2">
          {useTranslations("AboutPage.hero")("title")}
        </h1>
        <p className="text-white text-lg max-w-140">
          {useTranslations("AboutPage.hero")("subtitle")}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-42"></div>
      <div className="absolute inset-0 bg-black/39"></div>
    </div>
  );
}
