/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    unoptimized: true,
  },

  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
