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
    // You can remove unoptimized: true if you're not doing static export
  },
  compiler: {
    styledComponents: true,
  },
};


export default nextConfig;