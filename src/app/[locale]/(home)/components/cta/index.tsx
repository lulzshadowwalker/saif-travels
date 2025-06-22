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
      />

      <div className="absolute inset-0 bg-black/42" />

      <div className="absolute inset-0 max-w-222 mx-auto flex items-center justify-between px-4">
        <h2 className="text-4xl font-bold text-white">
          {tCommon("joinUsToday")}
        </h2>

        <TypeformPopupTrigger />
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
        className="btn btn-accent text-base font-semibold"
      >
        <SparklesIcon fill="currentColor" size={16} className="me-1" />
        {tCommon("requestCustomOffer")}
      </PopupButton>

      <Widget id={typeformId} className="hidden" />
    </>
  );
}
