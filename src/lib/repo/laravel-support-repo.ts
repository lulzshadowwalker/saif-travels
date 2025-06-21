import { SupportRepo } from "../contract/support-repo";
import { SupportMessage } from "../types";
import { laravelApiClient } from "./laravel-api-client";

export class LaravelSupportRepo implements SupportRepo {
  async send(message: SupportMessage): Promise<void> {
    await laravelApiClient.post("/support", message);
  }
}
