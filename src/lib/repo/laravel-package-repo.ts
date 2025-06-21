import { PackageRepo } from "../contract/package-repo";
import { Package } from "../types";
import { PackageMapper } from "../mappers";
import { laravelApiClient, NotFoundError } from "./laravel-api-client";
import {
  ApiCollectionResponse,
  ApiResponse,
  PackageApiResource,
} from "../types/api-responses";
import { getAllRecordsQuery } from "../utils/api-utils";

export class LaravelPackageRepo implements PackageRepo {
  async list(locale: string): Promise<Package[]> {
    const response = await laravelApiClient.get<
      ApiCollectionResponse<PackageApiResource>
    >(`/packages${getAllRecordsQuery()}`, {
      headers: { "Accept-Language": locale },
    });

    return PackageMapper.fromApiResponseArray(response.data);
  }

  async get(locale: string, slug: string): Promise<Package | null> {
    try {
      const response = await laravelApiClient.get<
        ApiResponse<PackageApiResource>
      >(`/packages/${slug}`, { headers: { "Accept-Language": locale } });

      return PackageMapper.fromApiResponse(response.data);
    } catch (error) {
      if (error instanceof NotFoundError) {
        return null;
      }
      throw error;
    }
  }
}
