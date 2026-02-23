import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://auridian.io";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/advisory`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/experience`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
