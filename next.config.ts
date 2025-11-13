// next.config.js (or next.config.ts)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: export' to enable server components
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;