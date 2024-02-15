/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evisastorage.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
  // async rewrites() {
  //   //   return [
  //   //     {
  //   //       source: '/in',
  //   //       destination: `https://e-visa-delta.vercel.app/`,
  //   //     },
  //   //   ];
  //   // },
  //   return {
  //     beforeFiles: [
  //       {
  //         // source: '/in',
  //         source: '/in{/}?',
  //         destination: `https://e-visa-delta.vercel.app`,
  //       },
  //       {
  //         // source: '/in',
  //         source: '/in/visa/step-one{/}?',
  //         destination: `https://e-visa-delta.vercel.app/visa/step-one`,
  //       },
  //     ],
  //   };
  // },
};

module.exports = nextConfig;
