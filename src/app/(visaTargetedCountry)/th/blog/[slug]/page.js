import BlogPreview from '@/app/(blogContent)/blog/components/BlogPreview';
import { thailandMDData } from '@/app/(visaCountries)/mainDirectoryData/thailandMDData';

import { notFound } from 'next/navigation';
import Script from 'next/script';
const base_url = 'https://www.visacollect.com';
export async function generateMetadata({ params }) {
  try {
    const slug = params.slug;
    const blogData = thailandMDData?.blogs?.find(blog => blog.slug === slug);

    if (!blogData) notFound();

    return {
      ...(blogData?.metadata
        ? blogData.metadata
        : {
            title: 'title is missing!',
            description: 'description is missing!',
          }),
    };
  } catch (error) {
    console.log(error);
    return {
      title: 'not found',
      description: 'the page you are looking for does not exist',
    };
  }
}

export default function Page({ params }) {
  const slug = params.slug;
  const blogData = thailandMDData?.blogs?.find(blog => blog.slug === slug);
  const relatedBlogs = thailandMDData?.blogs?.filter(
    blog => blog.slug !== slug
  );

  if (!blogData) notFound();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    mainEntity: [
      {
        '@type': 'WebPage',
        '@id': `${base_url}/in/blog/${blogData.slug}/`,
      },
    ],
    headline: blogData.pageTitle,
    description: blogData.metadata.description,
    image: `${base_url}${blogData.imgUrl}`,
    author: {
      '@type': 'Organization',
      name: '',
    },

    publisher: {
      '@type': 'Organization',
      name: 'Visa Collect',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.visacollect.com/',
      },
    },

    datePublished: '2024-03-15',
    dateModified: '2024-03-15',
  };
  return (
    <>
      <BlogPreview
        {...blogData}
        asideTitle="Popular Articles"
        relatedBlogs={relatedBlogs}
      />
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
