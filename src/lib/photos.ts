import type { ImageMetadata } from 'astro';

/** Photos dropped in src/assets/photos/, keyed by file name without extension (see README there). */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

const photos: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace(/\.\w+$/, '');
  photos[name] = mod.default;
}

export function photo(name: string): ImageMetadata | undefined {
  return photos[name];
}
