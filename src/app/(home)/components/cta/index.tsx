import Image from "next/image";
import cta from "@/assets/images/cta.png";
import { Phone } from "lucide-react";

export function Cta() {
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
        <h2 className="text-4xl font-bold text-white">Join Us Today!</h2>

        <button className="btn btn-accent text-base font-semibold">
          <Phone fill="currentColor" size={16} className="me-1" />
          Request a Call
        </button>
      </div>
    </div>
  );
}
