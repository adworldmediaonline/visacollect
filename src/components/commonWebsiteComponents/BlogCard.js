import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function BlogCard({ title, description, slug, linkText, img }) {
  return (
    <Link href={`${slug}`}>
      <div className="p-4">
        <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
          <img
            className="object-cover object-center w-full lg:h-48 md:h-36"
            src={img}
            alt="blog"
          />
          <div className="p-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 title-font line-clamp-3">
              {title}
            </h3>
            <p className="mb-3 leading-relaxed line-clamp-3">{description}</p>
            <div className="flex flex-wrap items-center ">
              <Link
                href={slug}
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
