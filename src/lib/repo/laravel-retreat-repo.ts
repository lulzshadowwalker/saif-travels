import { RetreatRepo } from "../contract/retreat-repo";
import { Retreat, Package } from "../types";
import { RetreatMapper } from "../mappers";
import { laravelApiClient } from "./laravel-api-client";
import {
  ApiCollectionResponse,
  RetreatApiResource,
} from "../types/api-responses";
import { getAllRecordsQuery } from "../utils/api-utils";

export class LaravelRetreatRepo implements RetreatRepo {
  async list(locale: string): Promise<Retreat[]> {
    const response = await laravelApiClient.get<
      ApiCollectionResponse<RetreatApiResource>
    >(`/retreats${getAllRecordsQuery()}`, {
      headers: {
        "Accept-Language": locale,
      },
    });

    return RetreatMapper.fromApiResponseArray(response.data);
  }
}
