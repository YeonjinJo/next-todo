/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yeonjin.org'
      },
    ],
  },
};

export default nextConfig;
