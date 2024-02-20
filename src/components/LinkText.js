import Link from 'next/link';

export default function LinkText({ text, href }) {
  return (
    <Link className="text-lg font-semibold text-primary" href={href}>
      {text}
    </Link>
  );
}
