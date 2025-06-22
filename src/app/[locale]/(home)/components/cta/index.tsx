"use client";

import Image from "next/image";
import cta from "@/assets/images/cta.png";
import { Widget, PopupButton } from "@typeform/embed-react";

import "@typeform/embed/build/css/popup.css";
import "@typeform/embed/build/css/widget.css";
import { SparklesIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function Cta() {
  const tCommon = useTranslations("Common");

  return (
    <div className="h-[max(75dvh,500px)] relative">
      <Image
        src={cta}
        alt="Man swimming in the dead sea"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/42" />

      <div className="absolute inset-0 max-w-222 mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-4 md:mb-0">
          {tCommon("joinUsToday")}
        </h2>

        <div className="w-full md:w-auto flex justify-center">
          <TypeformPopupTrigger />
        </div>
      </div>
    </div>
  );
}

function TypeformPopupTrigger() {
  const typeformId = "J5kONAJm";
  const tCommon = useTranslations("Common");

  return (
    <>
      <PopupButton
        id={typeformId}
        className="btn btn-accent text-base font-semibold w-full md:w-auto"
      >
        <SparklesIcon fill="currentColor" size={16} className="me-1" />
        {tCommon("requestCustomOffer")}
      </PopupButton>

      <Widget id={typeformId} className="hidden" />
    </>
  );
}
