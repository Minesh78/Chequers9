import path from "node:path";
import sharp from "sharp";

const publicDirectory = path.resolve("public");

async function createBrandIcon(size, filename) {
  const outerSize = Math.round(size * 0.7);
  const border = Math.max(2, Math.round(size * 0.025));
  const outerOffset = Math.round((size - outerSize) / 2);
  const coreSize = Math.round(size * 0.22);
  const coreOffset = Math.round((size - coreSize) / 2);

  await sharp({ create: { width: size, height: size, channels: 4, background: "#18272c" } })
    .composite([
      { input: { create: { width: outerSize, height: outerSize, channels: 4, background: "#fbfaf6" } }, left: outerOffset, top: outerOffset },
      { input: { create: { width: outerSize - border * 2, height: outerSize - border * 2, channels: 4, background: "#18272c" } }, left: outerOffset + border, top: outerOffset + border },
      { input: { create: { width: coreSize, height: coreSize, channels: 4, background: "#c79a2b" } }, left: coreOffset, top: coreOffset },
    ])
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDirectory, filename));
}

await Promise.all([
  createBrandIcon(64, "favicon.png"),
  createBrandIcon(180, "apple-touch-icon.png"),
  createBrandIcon(192, "icon-192.png"),
  createBrandIcon(512, "icon-512.png"),
]);

console.log("Generated Chequers9 favicon and app icons.");
