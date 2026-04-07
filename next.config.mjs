/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ["cdn.simpleicons.org"],
  },
};

export default nextConfig;
