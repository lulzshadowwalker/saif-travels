export interface ApiResponse<T> {
  data: T;
  meta?: Record<string, any>;
  links?: Record<string, string>;
}

export interface ApiCollectionResponse<T> {
  data: T[];
  meta?: {
    current_page?: number;
    from?: number;
    last_page?: number;
    per_page?: number;
    to?: number;
    total?: number;
    [key: string]: any;
  };
  links?: {
    first?: string;
    last?: string;
    next?: string;
    prev?: string;
    [key: string]: string;
  };
}

export interface ApiAttributes {
  createdAt: string;
  updatedAt: string;
  createdAtForHumans: string;
  updatedAtForHumans: string;
  [key: string]: any;
}

export interface ApiResource {
  type: string;
  id: string | number;
  attributes: ApiAttributes;
  relationships?: Record<string, any>;
  meta?: Record<string, any>;
  links?: Record<string, string>;
}

export interface DestinationApiResource extends ApiResource {
  type: "destinations";
  attributes: ApiAttributes & {
    name: string;
    slug: string;
  };
  relationships: {
    packages?: PackageApiResource[];
    media: {
      images?: MediaApiResource[];
    };
  };
  meta: {
    packagesCount?: number;
  };
}

export interface PackageApiResource extends ApiResource {
  type: "packages";
  attributes: ApiAttributes & {
    name: string;
    slug: string;
    description: string;
    tags: string[];
    chips: string[] | null;
    goal: string;
    durations: number;
    durationsDays: string;
    program: string;
    activities: string;
    stay: string;
    ivDrips: string;
    status: {
      value: string;
      label: string;
      color: string;
    };
    isActive: boolean;
  };
  relationships: {
    destinations?: {
      data: DestinationApiResource[];
    };
    media?: {
      images?: MediaApiResource[];
      cover?: MediaApiResource;
    };
  };
}

export interface MediaApiResource {
  id: number;
  url: string;
  thumbnailUrl?: string;
  name: string;
  fileName: string;
  mimeType: string;
  size: number;
  humanReadableSize: string;
  order: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface FaqApiResource extends ApiResource {
  type: "faqs";
  attributes: ApiAttributes & {
    question: string;
    answer: string;
  };
}

export interface RetreatApiResource extends ApiResource {
  type: "retreats";
  attributes: ApiAttributes & {
    name: string;
    status: {
      value: string;
      label: string;
      color: string;
    };
  };
  relationships: {
    packages?: PackageApiResource[];
  };
  meta: {
    packagesCount?: number;
  };
}

export interface SupportApiResource extends ApiResource {
  type: "support-requests";
  attributes: ApiAttributes & {
    name: string;
    email: string;
    phone: string;
    status: {
      value: string;
      label: string;
      color: string;
    };
  };
}
