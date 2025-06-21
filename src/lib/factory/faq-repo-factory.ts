import { FaqRepo } from "../contract/faq-repo";
import { LaravelFaqRepo } from "../repo/laravel-faq-repo";

export class FaqRepoFactory {
  static create(): FaqRepo {
    return new LaravelFaqRepo();
  }
}
