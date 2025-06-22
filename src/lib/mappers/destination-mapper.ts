import { Destination } from "../types";
import { MediaMapper } from "./media-mapper";
import { DestinationApiResource } from "../types/api-responses";

export class DestinationMapper {
  static fromApiResponse(data: DestinationApiResource): Destination {
    return {
      name: data.attributes.name,
      slug: data.attributes.slug,
      packagesCount: data.meta.packagesCount ?? 0,
      images: MediaMapper.mapImages(
        data.relationships.media.images,
        data.attributes.name,
      ),
    };
  }

  static fromApiResponseArray(data: DestinationApiResource[]): Destination[] {
    return data.map((item) => this.fromApiResponse(item));
  }
}
