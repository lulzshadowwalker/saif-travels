import { DestinationRepo } from "../contract/destination-repo";
import { Destination } from "../types";

export class LaravelDestinationRepo implements DestinationRepo {
  async list(): Promise<Destination[]> {
    const response = await fetch(
      process.env.NEXT_PUBLIC_LARAVEL_BASE_URL + "/destinations",
      { headers: { Accept: "application/json" } },
    );

    const destinations = (await response.json()).data;

    return destinations.map((destination: any) => ({
      name: destination.attributes.name,
      slug: destination.attributes.slug,
      packagesCount: destination.meta.packagesCount,
      images: destination.relationships.media.images,
    }));
  }
}
