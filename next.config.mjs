const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dropbox.com"
      },
      {
        protocol: "https",
        hostname: "dl.dropboxusercontent.com"
      }
    ]
  },
  trailingSlash: true,
  basePath: isGitHubPages ? basePath : undefined,
  assetPrefix: isGitHubPages ? `${basePath}/` : undefined
};

export default nextConfig;
