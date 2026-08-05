import { writeFile } from "node:fs/promises";
import path from "node:path";
import { projects } from "../src/content/projects.js";
import { site } from "../src/content/site.js";

const routes = ["/", "/about", "/projects", "/services", "/contact"];
const projectRoutes = projects.map((project) => `/projects/${project.id}/${project.slug}`);
const urls = [...routes, ...projectRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((route) => `  <url>
    <loc>${new URL(route, site.website).toString()}</loc>
    <changefreq>${route === "/" ? "weekly" : route.startsWith("/projects/") ? "monthly" : "yearly"}</changefreq>
    <priority>${route === "/" ? "1.0" : route === "/projects" ? "0.9" : route.startsWith("/projects/") ? "0.8" : "0.7"}</priority>
  </url>`).join("\n")}
</urlset>
`;

await writeFile(path.resolve("public/sitemap.xml"), xml, "utf8");
console.log(`Generated sitemap with ${urls.length} URLs.`);
