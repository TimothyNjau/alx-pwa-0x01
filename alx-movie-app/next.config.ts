import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

module.exports = nextConfig;
export default nextConfig;
