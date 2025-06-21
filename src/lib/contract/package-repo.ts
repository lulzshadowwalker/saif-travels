import { Package } from "../types";

export interface PackageRepo {
  list(): Promise<Package[]>;
}
