import { SupportRepo } from "../contract/support-repo";
import { SupportMessage } from "../types";

export class LaravelSupportRepo implements SupportRepo {
  async send(message: SupportMessage): Promise<void> {
    await fetch(
      process.env.NEXT_PUBLIC_LARAVEL_BASE_URL + "/support",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }
    );
  }
}
