import { IMAGE_EXT_ORDER, imageExtension, stripImageExtension } from "@/lib/imageFormats";

/**
 * Service cover: src/assets/svc/{slug}.jpg | .jpeg | .png
 *
 * Extra gallery photos (either approach):
 * A) Flat: galleries/flex-board-01.jpg, flex-board-02.png
 * B) Folder: galleries/flex-board/01.jpeg
 */
const coverModules = import.meta.glob<string>("/src/assets/svc/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
});

const galleryModules = import.meta.glob<string>(
  "/src/assets/svc/galleries/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  {
    eager: true,
    import: "default",
  },
);

function fileNameFromPath(path: string): string {
  return path.split("/").pop() ?? "";
}

function coverExtensionRank(filename: string): number {
  const ext = imageExtension(filename);
  if (!ext) return IMAGE_EXT_ORDER.length;
  const index = IMAGE_EXT_ORDER.indexOf(ext as (typeof IMAGE_EXT_ORDER)[number]);
  return index === -1 ? IMAGE_EXT_ORDER.length : index;
}

function getServiceCoverBySlug(slug: string): string | undefined {
  const matches = Object.entries(coverModules).filter(([path]) => {
    return stripImageExtension(fileNameFromPath(path)) === slug;
  });

  if (matches.length === 0) return undefined;

  matches.sort(([pathA], [pathB]) => {
    return coverExtensionRank(fileNameFromPath(pathA)) - coverExtensionRank(fileNameFromPath(pathB));
  });

  return matches[0][1];
}

export function getServiceCover(slug: string, imageSlug?: string): string | undefined {
  return getServiceCoverBySlug(slug) ?? (imageSlug ? getServiceCoverBySlug(imageSlug) : undefined);
}

function isFlatGalleryFile(path: string, slug: string): boolean {
  const relative = path.split("/galleries/")[1];
  if (!relative || relative.includes("/")) return false;
  const name = fileNameFromPath(path);
  return name.startsWith(`${slug}-`) || name.startsWith(`${slug}_`);
}

function isFolderGalleryFile(path: string, slug: string): boolean {
  return path.includes(`/galleries/${slug}/`);
}

function galleryPathsForSlug(slug: string): string[] {
  return Object.keys(galleryModules)
    .filter((path) => isFolderGalleryFile(path, slug) || isFlatGalleryFile(path, slug))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

export function getServiceImages(slug: string, imageSlug?: string): string[] {
  const cover = getServiceCover(slug, imageSlug);
  let galleryUrls = galleryPathsForSlug(slug).map((path) => galleryModules[path]);
  if (galleryUrls.length === 0 && imageSlug) {
    galleryUrls = galleryPathsForSlug(imageSlug).map((path) => galleryModules[path]);
  }

  if (!cover) return galleryUrls;

  const combined = [cover, ...galleryUrls];
  const seen = new Set<string>();
  return combined.filter((url) => {
    if (seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}
