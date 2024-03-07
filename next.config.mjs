/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import { rehype } from 'rehype';
import withBundleAnalyzer from '@next/bundle-analyzer'; // Import the function

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
};
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default process.env.ANALYZE === 'true'
  ? withBundleAnalyzer(withMDX(nextConfig))
  : withMDX(nextConfig);

// export default withBundleAnalyzer(withMDX(nextConfig));
