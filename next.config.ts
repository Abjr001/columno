import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      new URL(
        "https://unsplash.com/fr/photos/embleme-mercedes-benz-argente-sur-surface-bleue-5MlBMYDsGBY",
      ),
    ],
  },
};

export default nextConfig;
