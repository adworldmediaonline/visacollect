import { imageNotFound } from '@/app/(visaCountries)/mainDirectoryHomePagesBlog/images/blogImages';
import { stressFreeTravel } from '@/constant/images';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCardSmall({ title, slug, img }) {
  return (
    <Link href={slug ? slug : '#'}>
      <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
        <div className="relative flex-shrink-0 w-24 h-24 mb-4 overflow-hidden transition ease-in-out rounded-lg shadow-md sm:mb-0 hover:-translate-y-1 ">
          {' '}
          <Image
            priority
            fill
            alt="blog"
            className="object-cover object-center rounded-lg"
            src={img ? img : imageNotFound}
          />
        </div>

        <div className="flex-grow sm:pl-4">
          <p className="line-clamp-3">{title ?? 'title not found'}</p>
        </div>
      </div>
    </Link>
  );
}
