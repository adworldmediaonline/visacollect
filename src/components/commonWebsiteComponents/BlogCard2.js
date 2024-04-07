import { imageNotFound } from '@/app/(visaCountries)/mainDirectoryHomePagesBlog/images/blogImages';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function BlogCard2({
  linkText = 'Read More',
  img,
  slug,
  basePath,
  pageTitle,
  description,
}) {
  return (
    <Link href={`${basePath}/${slug}`}>
      <div className="p-4">
        <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
          <div className="relative overflow-hidden aspect-video">
            <Image
              className="object-cover object-center w-full lg:h-48 md:h-36"
              src={img ? img : imageNotFound}
              alt="blog"
              fill
            />
          </div>
          <div className="p-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 title-font line-clamp-3">
              {pageTitle ?? slug}
            </h3>
            <p className="mb-3 leading-relaxed line-clamp-3">
              {description ?? 'description not found'}
            </p>
            <div className="flex flex-wrap items-center ">
              <Link
                href={`${basePath}/${slug}`}
                className="inline-flex items-center text-primary md:mb-2 lg:mb-0"
              >
                {linkText}
                <FaArrowRightLong className="ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
