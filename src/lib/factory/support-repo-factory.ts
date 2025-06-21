import { SupportRepo } from "../contract/support-repo";
import { LaravelSupportRepo } from "../repo/laravel-support-repo";

export class SupportRepoFactory {
  static create(): SupportRepo {
    return new LaravelSupportRepo();
  }
}
