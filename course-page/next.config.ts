import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  // Images are served from GHL's CDN, which already resizes them.
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;

// Makes Cloudflare bindings and .dev.vars available during `next dev`.
initOpenNextCloudflareForDev();
