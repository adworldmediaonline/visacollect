import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function BlogCard() {
  return (
    <div className="p-4 ">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
        <img
          className="object-cover object-center w-full lg:h-48 md:h-36"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-6">
          <h3 className="mb-3 text-lg font-medium text-gray-900 title-font">
            The Catalyzer
          </h3>
          <p className="mb-3 leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="flex flex-wrap items-center ">
            <Link
              href="#"
              className="inline-flex items-center text-primary md:mb-2 lg:mb-0"
            >
              Learn More
              <FaArrowRightLong className="ms-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
