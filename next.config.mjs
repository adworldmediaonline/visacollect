/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import { rehype } from 'rehype';
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evisastorage.s3.ap-south-1.amazonaws.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/in/au/',
        destination:
          '/in-indian-visa-apply-online/au-Indian-tourist-visa-Australian-citizens',
        permanent: true,
      },
      {
        source: '/in/visa/step-one',
        destination: '/in-indian-visa-apply-online/visa/step-one',
        permanent: true,
      },
      {
        source: '/in/visa/step-two',
        destination: '/in-indian-visa-apply-online/visa/step-two',
        permanent: true,
      },
      {
        source: '/in/visa/step-three',
        destination: '/in-indian-visa-apply-online/visa/step-three',
        permanent: true,
      },
      {
        source: '/in/visa/step-four',
        destination: '/in-indian-visa-apply-online/visa/step-four',
        permanent: true,
      },
      {
        source: '/in/visa/step-five',
        destination: '/in-indian-visa-apply-online/visa/step-five',
        permanent: true,
      },
      {
        source: '/in/visa/step-six',
        destination: '/in-indian-visa-apply-online/visa/step-six',
        permanent: true,
      },
      {
        source: '/in/visa/step-seven',
        destination: '/in-indian-visa-apply-online/visa/step-seven',
        permanent: true,
      },
      {
        source: '/in/visa/step-eight',
        destination: '/in-indian-visa-apply-online/visa/step-eight',
        permanent: true,
      },
    ];
  },
};
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});
export default withMDX(nextConfig);
