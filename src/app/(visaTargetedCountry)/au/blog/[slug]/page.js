import BlogPreview from '@/app/(blogContent)/blog/components/BlogPreview';
import { australiaMDData } from '@/app/(visaCountries)/mainDirectoryData/australiaMDData';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  try {
    const slug = params.slug;
    const blogData = australiaMDData?.blogs?.find(blog => blog.slug === slug);

    if (!blogData) notFound();
    console.log(blogData);
    return {
      ...(blogData?.metadata
        ? blogData.metadata
        : {
            title: 'Title is missing!',
            description: 'Description is missing!',
          }),
    };
  } catch (error) {
    console.log(error);
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }
}

export default function Page({ params }) {
  const slug = params.slug;
  const blogData = australiaMDData?.blogs?.find(blog => blog.slug === slug);
  const relatedBlogs = australiaMDData?.blogs?.filter(
    blog => blog.slug !== slug
  );
  console.log(relatedBlogs);
  if (!blogData) notFound();
  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Blog',
  //   mainEntity: [
  //     {
  //       '@type': 'WebPage',
  //       '@id': `${base_url}/blog/${meta.slug}/`,
  //     },
  //   ],
  //   headline: meta.pageTitle,
  //   description: meta.description,
  //   image: `${base_url}${meta.img}`,
  //   author: {
  //     '@type': 'Organization',
  //     name: '',
  //   },

  //   publisher: {
  //     '@type': 'Organization',
  //     name: 'Visa Collect',
  //     logo: {
  //       '@type': 'ImageObject',
  //       url: 'https://visacollect.com/',
  //     },
  //   },
  //   image: '',
  //   datePublished: '2024-03-15',
  //   dateModified: '2024-03-15',
  // };
  return (
    <>
      <BlogPreview
        {...blogData}
        asideTitle="Popular Articles"
        relatedBlogs={relatedBlogs}
      />
    </>
  );
}
