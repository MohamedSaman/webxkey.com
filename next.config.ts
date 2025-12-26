// next.config.js (or next.config.ts)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: export' to enable server components
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // Optionally, you can add these for more specific matching:
        // port: '',
        // pathname: '/images/**',
      },
    ],
    qualities: [75, 85],
    // You can remove unoptimized: true if you're not doing static export
  },
  compiler: {
    styledComponents: true,
  },
  // Disable caching issues in development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Improve development experience
  experimental: {
    webpackBuildWorker: true,
  },
};


export default nextConfig;