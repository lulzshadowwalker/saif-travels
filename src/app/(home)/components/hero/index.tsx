import Image from "next/image";
import hero from "@/assets/images/hero.png";
import logo from "@/assets/images/logo-white.svg";

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

      <div className="absolute top-1/3 left-16 max-md:left-6 -translate-y-1/4 transform z-10">
        <Image src={logo} alt="Logo" />

        <button className="btn btn-accent mt-10 max-md:mt-5 w-full">
          Start your Journey
        </button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-42"></div>
      <div className="absolute inset-0 bg-black/39"></div>
    </div>
  );
}
