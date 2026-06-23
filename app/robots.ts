import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep the CRM and auth surfaces out of search indexes.
      disallow: ["/dashboard/", "/clients/", "/invoices/", "/incidents/", "/login"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
