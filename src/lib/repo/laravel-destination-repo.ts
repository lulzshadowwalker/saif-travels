import { DestinationRepo } from "../contract/destination-repo";
import { Destination } from "../types";
import { DestinationMapper } from "../mappers";
import { laravelApiClient } from "./laravel-api-client";
import {
  ApiCollectionResponse,
  DestinationApiResource,
} from "../types/api-responses";
import { getAllRecordsQuery } from "../utils/api-utils";

export class LaravelDestinationRepo implements DestinationRepo {
  async list(locale: string): Promise<Destination[]> {
    const response = await laravelApiClient.get<
      ApiCollectionResponse<DestinationApiResource>
    >(`/destinations${getAllRecordsQuery()}`, {
      headers: { "Accept-Language": locale },
    });

    return DestinationMapper.fromApiResponseArray(response.data);
  }
}
