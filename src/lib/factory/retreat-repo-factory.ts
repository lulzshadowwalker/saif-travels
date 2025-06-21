import { RetreatRepo } from "../contract/retreat-repo";
import { LaravelRetreatRepo } from "../repo/laravel-retreat-repo";

export class RetreatRepoFactory {
  static create(): RetreatRepo {
    return new LaravelRetreatRepo();
  }
}
