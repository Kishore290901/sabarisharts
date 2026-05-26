import { portfolioItems } from "@/data/portfolio";
import { IMAGE_EXT_ORDER, imageExtension, stripImageExtension } from "@/lib/imageFormats";

const PORTFOLIO_SLUGS = new Set(portfolioItems.map((item) => item.slug));

/**
 * Portfolio image (any of these work):
 * - src/assets/portfolio/{slug}.jpg | .jpeg | .png
 * - src/assets/{slug}.jpg | .jpeg | .png
 * Legacy fallback: src/assets/port-*.jpg or src/assets/svc/{slug}.jpg
 */
const portfolioFolderModules = import.meta.glob<string>(
  "/src/assets/portfolio/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true, import: "default" },
);

const portfolioRootModules = {
  ...import.meta.glob<string>("/src/assets/*.{jpg,png,JPG,PNG}", {
    eager: true,
    import: "default",
  }),
  ...import.meta.glob<string>("/src/assets/*.{jpeg,JPEG}", {
    eager: true,
    import: "default",
  }),
};

const legacyModules = import.meta.glob<string>("/src/assets/port-*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
});

const svcCoverModules = import.meta.glob<string>("/src/assets/svc/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
});

function fileNameFromPath(path: string): string {
  return path.split("/").pop() ?? "";
}

function coverExtensionRank(filename: string): number {
  const ext = imageExtension(filename);
  if (!ext) return IMAGE_EXT_ORDER.length;
  const index = IMAGE_EXT_ORDER.indexOf(ext as (typeof IMAGE_EXT_ORDER)[number]);
  return index === -1 ? IMAGE_EXT_ORDER.length : index;
}

function pickBestMatch(matches: [string, string][]): string | undefined {
  if (matches.length === 0) return undefined;
  matches.sort(([pathA], [pathB]) => {
    return coverExtensionRank(fileNameFromPath(pathA)) - coverExtensionRank(fileNameFromPath(pathB));
  });
  return matches[0][1];
}

function matchesSlug(path: string, slug: string): boolean {
  return stripImageExtension(fileNameFromPath(path)) === slug;
}

function getPortfolioImageBySlug(slug: string): string | undefined {
  const folderMatches = Object.entries(portfolioFolderModules).filter(([path]) =>
    matchesSlug(path, slug),
  );
  const folderImage = pickBestMatch(folderMatches);
  if (folderImage) return folderImage;

  if (!PORTFOLIO_SLUGS.has(slug)) return undefined;

  const rootMatches = Object.entries(portfolioRootModules).filter(([path]) =>
    matchesSlug(path, slug),
  );
  return pickBestMatch(rootMatches);
}

function getLegacyImageBySlug(slug: string): string | undefined {
  const matches = Object.entries(legacyModules).filter(
    ([path]) => stripImageExtension(fileNameFromPath(path)) === slug,
  );
  return pickBestMatch(matches);
}

function getSvcCoverBySlug(slug: string): string | undefined {
  const matches = Object.entries(svcCoverModules).filter(
    ([path]) => stripImageExtension(fileNameFromPath(path)) === slug,
  );
  return pickBestMatch(matches);
}

export function getPortfolioImage(slug: string, imageSlug?: string): string | undefined {
  return (
    getPortfolioImageBySlug(slug) ??
    getSvcCoverBySlug(slug) ??
    (imageSlug ? getLegacyImageBySlug(imageSlug) : undefined) ??
    (imageSlug ? getSvcCoverBySlug(imageSlug) : undefined)
  );
}
