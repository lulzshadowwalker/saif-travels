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
  async list(): Promise<Package[]> {
    const response = await laravelApiClient.get<
      ApiCollectionResponse<PackageApiResource>
    >(`/packages${getAllRecordsQuery()}`);

    return PackageMapper.fromApiResponseArray(response.data);
  }

  async get(slug: string): Promise<Package | null> {
    try {
      const response = await laravelApiClient.get<
        ApiResponse<PackageApiResource>
      >(`/packages/${slug}`);

      return PackageMapper.fromApiResponse(response.data);
    } catch (error) {
      if (error instanceof NotFoundError) {
        return null;
      }
      throw error;
    }
  }
}
