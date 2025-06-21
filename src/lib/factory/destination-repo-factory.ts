import { DestinationRepo } from "../contract/destination-repo";
import { LaravelDestinationRepo } from "../repo/laravel-destination-repo";

export class DestinationRepoFactory {
  static create(): DestinationRepo {
    return new LaravelDestinationRepo();
  }
}
