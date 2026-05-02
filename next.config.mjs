/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // OGP画像のホストが可変のため全許可
      },
    ],
  },
};

export default nextConfig;
