import { Package } from "../types";

export interface PackageRepo {
  list(locale: string): Promise<Package[]>;
  get(locale: string, slug: string): Promise<Package | null>;
}
