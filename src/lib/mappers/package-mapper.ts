import { Chip, Package } from "../types";
import { MediaMapper } from "./media-mapper";
import { PackageApiResource } from "../types/api-responses";

export class PackageMapper {
  static fromApiResponse(data: PackageApiResource): Package {
    const packageName = data.attributes.name;

    return {
      name: packageName,
      slug: data.attributes.slug,
      description: data.attributes.description,
      chips: (data.attributes.chips || []) as Chip[],
      goal: data.attributes.goal,
      duration: data.attributes.durations,
      program: data.attributes.program,
      activities: data.attributes.activities,
      stay: data.attributes.stay,
      ivDrips: data.attributes.ivDrips,
      destinations: (data.relationships.destinations || []).map((dest) => ({
        name: dest.attributes.name,
        slug: dest.attributes.slug,
        packagesCount: dest.meta?.packagesCount || 0,
        images: MediaMapper.mapImages(
          dest.relationships?.media?.images,
          dest.attributes.name,
        ),
      })),
      images: MediaMapper.mapImages(
        data.relationships.media?.images,
        packageName,
      ),
      cover: MediaMapper.mapCover(
        data.relationships.media?.images?.[0],
        packageName,
      ),
      tags: data.attributes.tags || [],
    };
  }

  static fromApiResponseArray(data: PackageApiResource[]): Package[] {
    return data.map((item) => this.fromApiResponse(item));
  }
}
