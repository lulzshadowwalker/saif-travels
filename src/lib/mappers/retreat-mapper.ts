import { Retreat } from "../types";
import { PackageMapper } from "./package-mapper";
import { RetreatApiResource } from "../types/api-responses";

export class RetreatMapper {
  static fromApiResponse(data: RetreatApiResource): Retreat {
    return {
      name: data.attributes.name,
      slug: data.attributes.name.replace(/\s+/g, "-").toLowerCase(),
      packages: data.relationships.packages
        ? PackageMapper.fromApiResponseArray(data.relationships.packages)
        : [],
    };
  }

  static fromApiResponseArray(data: RetreatApiResource[]): Retreat[] {
    return data.map((item) => this.fromApiResponse(item));
  }
}
