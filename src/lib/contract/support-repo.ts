import { SupportMessage } from "../types";

export interface SupportRepo {
  send(message: SupportMessage): Promise<void>;
}
