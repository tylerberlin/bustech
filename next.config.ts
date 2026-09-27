import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages.
  output: "export",
  basePath,
  images: { unoptimized: true },
  // Pin the project root; a pnpm-workspace.yaml in the home directory
  // otherwise confuses Turbopack's root detection.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
