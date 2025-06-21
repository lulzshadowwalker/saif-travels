import { Package } from "../types";

export interface PackageRepo {
  list(): Promise<Package[]>;
  get(slug: string): Promise<Package | null>;
}
