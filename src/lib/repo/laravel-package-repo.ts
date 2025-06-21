import { PackageRepo } from "../contract/package-repo";
import { Package } from "../types";

export class LaravelPackageRepo implements PackageRepo {
  async list(): Promise<Package[]> {
    const response = await fetch(
      process.env.NEXT_PUBLIC_LARAVEL_BASE_URL + "/packages?per_page=9999",
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

  async get(slug: string): Promise<Package | null> {
    const response = await fetch(
      process.env.NEXT_PUBLIC_LARAVEL_BASE_URL + `/packages/${slug}`,
      { headers: { Accept: "application/json" } },
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }

      throw new Error(`Failed to fetch package with slug ${slug}`);
    }

    const packageData = (await response.json()).data;

    return {
      name: packageData.attributes.name,
      slug: packageData.attributes.slug,
      description: packageData.attributes.description,
      chips: packageData.attributes.chips,
      goal: packageData.attributes.goal,
      duration: packageData.attributes.durations,
      program: packageData.attributes.program,
      activities: packageData.attributes.activities,
      stay: packageData.attributes.stay,
      ivDrips: packageData.attributes.ivDrips,
      destinations: packageData.relationships.destinations.data,
      images: packageData.relationships.media.images,
    };
  }
}
