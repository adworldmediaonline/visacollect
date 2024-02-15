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
  //         source: '/in/au',
  //         destination: `/in/au-Indian-tourist-visa-Australian-citizens`,
  //       },
  //     ],
  //   };
  // },
  async redirects() {
    return [
      {
        source: '/in/au/',
        destination: '/in/au-Indian-tourist-visa-Australian-citizens',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
