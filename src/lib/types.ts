export type Package = {
  name: string;
  slug: string;
  description: string;
  chips: Chip[];
  goal: string;
  duration: Day;
  program: string;
  activities: string;
  stay: string;
  ivDrips: string;
  destinations: Destination[];
  images: Image[];
};

type Chip = "yoga";

type Day = number;

export type Destination = {
  name: string;
  slug: string;
  packagesCount: number;
  images: Image[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type Image = {
  url: string;
  name?: string;
};
