import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'app');
    return config;
  },
};

export default nextConfig;
