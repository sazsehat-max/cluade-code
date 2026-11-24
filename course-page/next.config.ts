import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the page is plain HTML/CSS/JS served by Cloudflare Pages.
  // The two API endpoints live in /functions as Cloudflare Pages Functions.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
