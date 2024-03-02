import Link from 'next/link';

export default function AsideBlogCard({ slug, title }) {
  return (
    <article>
      <Link className="text-lg underline text-primary" href={slug}>
        <p className="line-clamp-3">{title}</p>
      </Link>
    </article>
  );
}
