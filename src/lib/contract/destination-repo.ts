import { Destination } from "../types";

export interface DestinationRepo {
  list(): Promise<Destination[]>;
}
