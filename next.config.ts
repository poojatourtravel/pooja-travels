import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Allow common image hosting services
      { protocol: "https", hostname: "*.googleapis.com" },
      { protocol: "https", hostname: "*.cloudinary.com" },
      { protocol: "https", hostname: "*.imgur.com" },
      { protocol: "https", hostname: "*.unsplash.com" },
      { protocol: "https", hostname: "*.pexels.com" },
      { protocol: "https", hostname: "*.pixabay.com" },
      { protocol: "https", hostname: "*" }, // Allow any HTTPS domain
    ],
  },
};

export default nextConfig;
