import { Faq } from "../types";

export interface FaqRepo {
  list(locale: string): Promise<Faq[]>;
}
