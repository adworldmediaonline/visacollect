import { stressFreeTravel } from '@/constant/images';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCardSmall({ description = 'test', slug = '#' }) {
  return (
    <Link href={slug}>
      <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
        <div className="relative flex-shrink-0 mb-4 overflow-hidden rounded-lg w-28 h-28 sm:mb-0">
          {' '}
          <Image
            priority
            fill
            alt="blog"
            className="object-cover object-center rounded-lg"
            src={stressFreeTravel}
          />
        </div>

        <div className="flex-grow sm:pl-8">
          <p className="line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
}
