import { Retreat } from "../types";

export interface RetreatRepo {
  list(): Promise<Retreat[]>;
}
