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
      {
        protocol: 'https',
        hostname: 'https://storageevisa.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/india/',
        destination: '/in',
        permanent: true,
      },
      {
        source: '/srilanka/',
        destination: '/lk',
        permanent: true,
      },
      {
        source: '/thailand/',
        destination: '/th',
        permanent: true,
      },
      {
        source: '/australia/application/',
        destination: '/au/application',
        permanent: true,
      },
      {
        source: '/turkey/',
        destination: '/tr',
        permanent: true,
      },
      {
        source: '/my/application/',
        destination: '/my/step-one',
        permanent: true,
      },
      {
        source: '/sl/slvisa/tourist-eta/apply-for-third-party/',
        destination: '/lk/slvisa/tourist-eta/apply-for-third-party/',
        permanent: true,
      },
      {
        source: '/sl/slvisa/tourist-eta/apply-individual/',
        destination: '/lk/slvisa/tourist-eta/apply-individual/',
        permanent: true,
      },
      {
        source: '/sl/slvisa/tourist-eta/apply-in-group/',
        destination: '/lk/slvisa/tourist-eta/apply-in-group/',
        permanent: true,
      },
      {
        source: '/sl/slvisa/business-purpose-eta/apply-individual/',
        destination: '/lk/slvisa/business-purpose-eta/apply-individual/',
        permanent: true,
      },
      {
        source: '/sl/slvisa/business-purpose-eta/apply-in-group/',
        destination: '/lk/slvisa/business-purpose-eta/apply-in-group/',
        permanent: true,
      },
      {
        source: '/sl/slvisa/business-purpose-eta/apply-for-third-party/',
        destination: '/lk/slvisa/business-purpose-eta/apply-for-third-party/',
        permanent: true,
      },
      {
        source: '/australia/',
        destination: '/au/',
        permanent: true,
      },
      {
        source: '/in/au-Indian-tourist-visa-Australian-citizens/',
        destination: '/au/indian-tourist-visa-for-australian-citizens/',
        permanent: true,
      },
      {
        source: '/turkey/application/',
        destination: '/tr/application/',
        permanent: true,
      },
      {
        source: '/visa/step-one/',
        destination: '/in/visa/step-one/',
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
