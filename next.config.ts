import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Imágenes públicas de Supabase Storage
      {
        protocol: "https",
        hostname: "xpyazbwzjpqmrvaoorbd.supabase.co",
        pathname: "/storage/v1/object/public/productos/**",
      },
    ],
  },
};

export default nextConfig;
