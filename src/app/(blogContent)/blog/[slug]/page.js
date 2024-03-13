import { getPostBySlug } from '@/lib/mdx';
import BlogPreview2 from '../components/BlogPreview2';
import { notFound } from 'next/navigation';

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
  const { content } = await getPageContent(params.slug);
  if (!content) notFound();
  return (
    <div className="mt-10">
      <BlogPreview2 blogs={JSON.stringify([]) ?? []} content={content} />
    </div>
  );
}
