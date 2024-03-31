import LinkButton from '@/components/ui/link-button';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ post, href }) {
  return (
    <div class="bg-white shadow-md hover:shadow-lg hover:scale-105 duration-500 transition-all delay-150 ease-in-out border border-gray-200 rounded-lg h-full flex flex-col">
      <Link href={href ? href : post.slug} className="no-underline">
        <div className="relative overflow-hidden aspect-video">
          <Image
            fill
            class="rounded-t-lg"
            src={post.img}
            alt=""
            className="object-cover"
          />
        </div>
      </Link>
      <div class="p-5 flex-1 flex flex-col items-start">
        <Link
          href={href ? href : post.slug}
          className="no-underline line-clamp-2"
        >
          <h5 class="text-primary font-semibold text-2xl tracking-tight mb-2">
            {post?.pageTitle}
          </h5>
        </Link>
        <p class="font-normal text-gray-700 mb-3 line-clamp-3">
          {post?.metadata ? post?.metadata?.description : post?.description}
        </p>
        <LinkButton
          href={href ? href : post.slug}
          className="mt-auto no-underline hover:bg-secondary"
        >
          Read More
        </LinkButton>
      </div>
    </div>
  );
}
