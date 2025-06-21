import { RetreatRepo } from "../contract/retreat-repo";
import { Retreat, Package } from "../types";

export class LaravelRetreatRepo implements RetreatRepo {
  async list(): Promise<Retreat[]> {
    const response = await fetch(
      process.env.NEXT_PUBLIC_LARAVEL_BASE_URL + "/retreats?per_page=9999",
      { headers: { Accept: "application/json" } }
    );

    const retreats = (await response.json()).data;

    return retreats.map((retreat: any) => ({
      name: retreat.attributes.name,
      packages: (retreat.relationships.packages || []).map((pkg: any) => ({
        name: pkg.attributes.name,
        slug: pkg.attributes.slug,
        durations: pkg.attributes.durations,
        durationsDays: pkg.attributes.durationsDays,
        tags: pkg.attributes.tags,
        status: pkg.attributes.status,
        isActive: pkg.attributes.isActive,
      })),
    }));
  }
}
