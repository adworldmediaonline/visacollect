import { getPostBySlug } from '@/lib/mdx';
import BlogPreview2 from '../components/BlogPreview2';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Breadcrumb from '@/components/Breadcrumbs';
const base_url = 'https://visacollect.com';
const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }) {
  try {
    const { meta } = await getPageContent(params.slug);

    if (!meta) notFound();

    return {
      title: meta.title,
      description: meta.description,
      metadataBase: new URL('https://visacollect.com'),

      alternates: {
        canonical: `/blog/${params.slug}/`,
      },
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }
}
export default async function Page({ params }) {
  const { meta, content } = await getPageContent(params.slug);
  if (!content) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    mainEntity: [
      {
        '@type': 'WebPage',
        '@id': `${base_url}/blog/${meta.slug}/`,
      },
    ],
    headline: meta.pageTitle,
    description: meta.description,
    image: `${base_url}${meta.img}`,
    author: {
      '@type': 'Organization',
      name: '',
    },

    publisher: {
      '@type': 'Organization',
      name: 'Visa Collect',
      logo: {
        '@type': 'ImageObject',
        url: 'https://visacollect.com/',
      },
    },

    datePublished: '2024-03-15',
    dateModified: '2024-03-15',
  };
  return (
    <div className="mt-10">
      <div className="mt-24">
        <Breadcrumb
          homeElement={'Home'}
          separator={<span> &gt; </span>}
          activeClasses="text-amber-500"
          // containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
          containerClasses="flex py-0 text-sm"
          listClasses="mx-2"
          capitalizeLinks
        />
      </div>
      <BlogPreview2
        blogs={JSON.stringify([]) ?? []}
        content={content}
        meta={meta}
        cta
      />
      <Script
        id="blogPosting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
