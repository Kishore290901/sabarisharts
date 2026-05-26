/** Supported image formats: jpg, jpeg, png (any casing). */
export const SUPPORTED_IMAGE_FORMATS = ["jpg", "jpeg", "png"] as const;

export const IMAGE_EXT_ORDER = [".jpg", ".jpeg", ".png"] as const;

export function stripImageExtension(filename: string): string {
  return filename.replace(/\.(jpe?g|png)$/i, "");
}

export function imageExtension(filename: string): string | null {
  const match = filename.match(/\.(jpe?g|png)$/i);
  return match ? `.${match[1].toLowerCase()}` : null;
}
