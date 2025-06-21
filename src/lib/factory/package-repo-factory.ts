import { PackageRepo } from "../contract/package-repo";
import { LaravelPackageRepo } from "../repo/laravel-package-repo";

export class PackageRepoFactory {
  static create(): PackageRepo {
    return new LaravelPackageRepo();
  }
