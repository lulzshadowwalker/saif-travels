import { FaqRepo } from "../contract/faq-repo";
import { Faq } from "../types";
import { FaqMapper } from "../mappers";
import { laravelApiClient } from "./laravel-api-client";
import { ApiCollectionResponse, FaqApiResource } from "../types/api-responses";
import { getAllRecordsQuery } from "../utils/api-utils";

export class LaravelFaqRepo implements FaqRepo {
  async list(): Promise<Faq[]> {
    const response = await laravelApiClient.get<
      ApiCollectionResponse<FaqApiResource>
    >(`/faqs${getAllRecordsQuery()}`);

    return FaqMapper.fromApiResponseArray(response.data);
  }
}
