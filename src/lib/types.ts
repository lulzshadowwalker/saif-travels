export type Destination = {
  name: string;
  slug: string;
  packagesCount: number;
  images: Image[];
};

export type Image = {
  url: string;
  name?: string;
};
