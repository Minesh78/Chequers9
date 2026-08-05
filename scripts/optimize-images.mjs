import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/images/projects");
const widths = [640, 1200, 1800];

const projectFolders = await readdir(root, { withFileTypes: true });
let count = 0;

for (const folder of projectFolders.filter((entry) => entry.isDirectory())) {
  const directory = path.join(root, folder.name);
  const files = await readdir(directory);
  const sources = files.filter((file) => /^source-.*\.(avif|jpe?g|png|webp)$/i.test(file));

  for (const source of sources) {
    const name = source.replace(/^source-/, "").replace(/\.(avif|jpe?g|png|webp)$/i, "");
    const input = path.join(directory, source);
    for (const width of widths) {
      await sharp(input)
        .resize({ width, fit: "inside", withoutEnlargement: false })
        .avif({ quality: 64, effort: 3 })
        .toFile(path.join(directory, `${name}-${width}.avif`));
      await sharp(input)
        .resize({ width, fit: "inside", withoutEnlargement: false })
        .webp({ quality: 78, effort: 3 })
        .toFile(path.join(directory, `${name}-${width}.webp`));
      count += 2;
    }
  }
}

console.log(`Created ${count} responsive image files.`);
