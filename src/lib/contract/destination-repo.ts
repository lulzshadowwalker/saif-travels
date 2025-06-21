import { Destination } from "../types";

export interface DestinationRepo {
  list(locale: string): Promise<Destination[]>;
}
