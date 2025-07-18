export type Retreat = {
  name: string;
  slug: string;
  packages: Package[];
};

export type Package = {
  name: string;
  slug: string;
  description: string;
  chips: Chip[];
  goal: string;
  duration: Day;
  program: string[];
  activities: string[];
  stay: string[];
  ivDrips: string[];
  destinations: Destination[];
  images: Image[];
  cover: Image;
  tags: string[];
};

export type Chip =
  | "nature"
  | "meditation"
  | "adventure"
  | "explore"
  | "honeymoon"
  | "yoga";

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

export type SupportMessage = {
  name: string;
  email: string;
  phone: string;
};

export type Image = {
  url: string;
  name?: string;
};
