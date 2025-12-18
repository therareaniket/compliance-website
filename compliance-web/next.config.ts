// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//     // output: 'export', // Remove Comment for output when you need to create a build folder
//     // basePath: '', // keep empty unless you're using a subfolder
//     // assetPrefix: '', // can be set if assets are hosted elsewhere
// };

// export default nextConfig;


import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
 
const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  // provide empty turbopack config to silence Turbopack vs Webpack warning
  turbopack: {},
};
 
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
 
export default bundleAnalyzer(nextConfig);