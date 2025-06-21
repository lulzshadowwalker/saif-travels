export const mediaConfig = {
  placeholder: {
    width: 400,
    height: 225,
    baseUrl: "https://placehold.co",
  },
} as const;

export function getPlaceholderUrl(text: string): string {
  const { width, height, baseUrl } = mediaConfig.placeholder;
  return `${baseUrl}/${width}x${height}.png?text=${encodeURIComponent(text)}`;
}
