/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evisastorage.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/in',
        destination: `https://e-visa-delta.vercel.app/`,
      },
    ];
  },
};

module.exports = nextConfig;
