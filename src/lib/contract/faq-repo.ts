import { Faq } from "../types";

export interface FaqRepo {
  list(): Promise<Faq[]>;
}
