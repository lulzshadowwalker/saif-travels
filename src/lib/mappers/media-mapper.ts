import { getPlaceholderUrl } from "../config/media-config";

export interface MediaItem {
  url: string;
  name: string;
  id?: number;
  fileName?: string;
  mimeType?: string;
  size?: number;
  humanReadableSize?: string;
  order?: number;
}

export class MediaMapper {
  private static createPlaceholder(name: string): MediaItem {
    return {
      url: getPlaceholderUrl(name),
      name: `${name} cover`,
    };
  }

  static mapImages(
    images: MediaItem[] | undefined,
    fallbackName: string,
  ): MediaItem[] {
    if (!images?.length) {
      return [this.createPlaceholder(fallbackName)];
    }
    return images;
  }

  static mapCover(
    cover: MediaItem | undefined,
    fallbackName: string,
  ): MediaItem {
    if (!cover) {
      return this.createPlaceholder(fallbackName);
    }
    return cover;
  }
}
