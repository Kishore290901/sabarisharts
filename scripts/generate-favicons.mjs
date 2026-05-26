/**
 * Regenerate public favicons from src/assets/logo.jpeg
 * Run: node scripts/generate-favicons.mjs
 */
import { execSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logo = join(root, "src/assets/logo.jpeg");
const publicDir = join(root, "public");

if (!existsSync(logo)) {
  console.error("Missing source:", logo);
  process.exit(1);
}

const sizes = [
  ["favicon-48x48.png", 48],
  ["favicon-96x96.png", 96],
  ["apple-touch-icon.png", 180],
];

for (const [name, size] of sizes) {
  execSync(
    `npx --yes sharp-cli resize ${size} ${size} -i "${logo}" -o "${join(publicDir, name)}"`,
    { stdio: "inherit", cwd: root },
  );
}

copyFileSync(logo, join(publicDir, "favicon.jpg"));
copyFileSync(logo, join(publicDir, "brand-logo.jpg"));
copyFileSync(join(publicDir, "favicon-48x48.png"), join(publicDir, "favicon.png"));
// Browsers accept PNG bytes at /favicon.ico (avoids broken .ico encoders).
copyFileSync(join(publicDir, "favicon-48x48.png"), join(publicDir, "favicon.ico"));

console.log("Favicons generated from src/assets/logo.jpeg");
