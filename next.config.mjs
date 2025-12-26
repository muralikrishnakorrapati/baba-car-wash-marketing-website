/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
