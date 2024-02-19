import Link from 'next/link';

export default function AsideBlogCard({ slug, title }) {
  return (
    <article className="shadow-card">
      <Link className="text-lg underline text-primary" href={`/blog/${slug}`}>
        <p className="line-clamp-2">{title}</p>
      </Link>
    </article>
  );
}
