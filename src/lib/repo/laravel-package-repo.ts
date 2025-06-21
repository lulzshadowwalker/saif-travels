import { PackageRepo } from "../contract/package-repo";
import { Package } from "../types";

export class LaravelPackageRepo implements PackageRepo {
  async list(): Promise<Package[]> {
    const response = await fetch(
      process.env.NEXT_PUBLIC_LARAVEL_BASE_URL + "/packages",
      { headers: { Accept: "application/json" } },
    );

    const packages = (await response.json()).data;

    return packages.map((p: any) => ({
      name: p.attributes.name,
      slug: p.attributes.slug,
      description: p.attributes.description,
      chips: p.attributes.chips,
      goal: p.attributes.goal,
      duration: p.attributes.durations,
      program: p.attributes.program,
      activities: p.attributes.activities,
      stay: p.attributes.stay,
      ivDrips: p.attributes.ivDrips,
      destination: p.relationships.destinations.data,
      images: p.relationships.media.images,
    }));
  }
}
