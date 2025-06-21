import type { Metadata } from "next";
import { BriefcaseMedical, Phone, RefreshCcw, Stethoscope } from "lucide-react";
import { Hero } from "./components/hero";
import pool from "@/assets/images/pool.png";
import Image from "next/image";

import cta from "@/assets/images/cta.png";

export const metadata: Metadata = {
  title: "About Saif | IV Drip & Wellness Retreats",
  description:
    "Learn about Saif's medical-grade IV therapy, wellness philosophy, and what makes our healing retreats in Jordan unique.",
};

export default function About() {
  return (
    <main>
      <Hero />

      <section className="container mx-auto my-20 px-4">
        <h2 className="text-[2.5rem] font-semibold mb-5">
          What is an IV Drip?
        </h2>

        <ul className="space-y-6 max-w-166">
          <li className="flex items-start gap-12 max-md:gap-2">
            <Stethoscope size={70} />
            <p>
              Our medical-grade intravenous therapy delivers essential vitamins,
              minerals, and hydration directly into your bloodstream — for
              instant results.
            </p>
          </li>

          <li className="flex items-start gap-12 max-md:gap-2">
            <BriefcaseMedical size={55} />
            <p>
              Each session is led by licensed medical professionals using
              sterile equipment in a calm, comfortable setting.
            </p>
          </li>

          <li className="flex items-start gap-12 max-md:gap-2">
            <RefreshCcw size={40} />
            <p>Boost your energy, hydrate deeply, and feel renewed.</p>
          </li>
        </ul>
      </section>

      <section className="container mx-auto my-20 px-4">
        <h2 className="text-[2.5rem] font-semibold mb-5">What You'll Feel </h2>
        <ul className="grid grid-cols-4 max-md:grid-cols-2 gap-4">
          <li className="card text-center py-8">
            Restored energy & mental clarity
          </li>
          <li className="card text-center py-8">
            Hydration after travel or sun exposure
          </li>
          <li className="card text-center py-8">
            Boost your energy, hydrate deeply, and feel renewed.
          </li>
          <li className="card text-center py-8">
            Tailored cocktails based on your needs
          </li>
        </ul>
      </section>

      <hr className="border-t-2 border-accent my-20 container mx-auto" />

      <section className="container mx-auto flex items-center justify-between max-lg:flex-col px-4">
        <div className="lg:max-w-85">
          <h2 className="text-[2.5rem] font-semibold mb-4">
            Included in Your Stay
          </h2>
          <p>
            All IV sessions are part of your retreat experience. Stay in our
            handpicked wellness residences near the Red Sea or Dead Sea,
            combining comfort with healing.
          </p>
        </div>

        <div className="flex items-center gap-4 max-md:flex-col">
          <Image src={pool} alt="Pool" className="rounded-box mt-8" />

          <div className="lg:max-w-85 mt-8 justify-self-start">
            <h2 className="text-[2.5rem] font-semibold mb-4">
              Included in Your Stay
            </h2>
            <p>
              All IV sessions are part of your retreat experience. Stay in our
              handpicked wellness residences near the Red Sea or Dead Sea,
              combining comfort with healing.
            </p>
          </div>
        </div>

        <div></div>
      </section>

      <hr className="border-t-2 border-accent my-20 container mx-auto" />

      <Cta />
    </main>
  );
}

function Cta() {
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
          Ready to refresh your body and mind?
        </h2>
        <p className="text-center max-w-prose text-white">
          [Reserve Your Spot] — Limited availability per retreat date.
        </p>

        <button className="btn btn-accent text-base font-semibold mt-12">
          <Phone fill="currentColor" size={16} className="me-1" />
          Request a Call
        </button>
      </div>
    </div>
  );
}
