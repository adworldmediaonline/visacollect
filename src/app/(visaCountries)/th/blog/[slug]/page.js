import BlogPreview from '@/app/(blogContent)/blog/components/BlogPreview';
import { thailandMDData } from '@/app/(visaCountries)/mainDirectoryData/thailandMDData';

import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  try {
    const slug = params.slug;
    const blogData = thailandMDData?.blogs?.find(blog => blog.slug === slug);

    if (!blogData) notFound();

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
  const blogData = thailandMDData?.blogs?.find(blog => blog.slug === slug);
  const relatedBlogs = thailandMDData?.blogs?.filter(
    blog => blog.slug !== slug
  );

  if (!blogData) notFound();
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
