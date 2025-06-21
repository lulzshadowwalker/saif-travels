import { Retreat } from "../types";

export interface RetreatRepo {
  list(locale: string): Promise<Retreat[]>;
}
