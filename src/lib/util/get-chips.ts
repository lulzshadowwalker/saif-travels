import { useTranslations } from "next-intl";

import {
  Brain,
  Compass,
  Globe,
  ScanHeart,
  TreeDeciduous,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

type Chip = {
  name: string;
  background: string;
  color: string;
  icon: LucideIcon;
};

export async function getChip(value: string): Promise<Chip | null> {
  const t = await getTranslations("chips");

  const chips = {
    nature: {
      name: t ? t("nature") : "Nature",
      background: "#E0FFC8",
      color: "#5BC73A",
      icon: TreeDeciduous,
    },
    meditation: {
      name: t ? t("meditation") : "Meditation",
      background: "#FFF2D5",
      color: "#E58A21",
      icon: Brain,
    },
    adventure: {
      name: t ? t("adventure") : "Adventure",
      background: "#D5EFFF",
      color: "#1E90FF",
      icon: Compass,
    },
    explore: {
      name: t ? t("explore") : "Explore",
      background: "#B1E4FF",
      color: "#197CC3",
      icon: Globe,
    },
    honeymoon: {
      name: t ? t("honeymoon") : "Honeymoon",
      background: "#FFB5D3",
      color: "#D3388D",
      icon: ScanHeart,
    },
    // Example for yoga, if you want to keep it:
    yoga: {
      name: t ? t("yoga") : "Yoga",
      background: "#FFC107",
      color: "#FFFFFF",
      icon: Brain, // Replace with the correct icon if needed
    },
  } as const;

  function matchFrom(value: string) {
    const chip = Object.values(chips).find(
      (chip) => chip.name.toLowerCase() === value.toLowerCase(),
    );

    return chip || null;
  }

  return matchFrom(value);
}
