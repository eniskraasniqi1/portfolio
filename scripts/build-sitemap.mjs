#!/usr/bin/env node
// Regenerates public/sitemap.xml with today's ISO date as <lastmod>.
// Wired into the `prebuild` npm script so every deploy ships fresh dates.

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "..", "public", "sitemap.xml");

const SITE = "https://eniskrasniqi.vercel.app";
const today = new Date().toISOString().slice(0, 10);

const routes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/stack", priority: "0.8", changefreq: "monthly" },
];

const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

await writeFile(outPath, xml, "utf8");
console.log(`sitemap.xml written with lastmod=${today}`);
