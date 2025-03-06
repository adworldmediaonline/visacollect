'use client';

import { useState } from 'react';
import BlogCard from './components/BlogCard';
import { australiaMDData } from '@/app/(visaCountries)/mainDirectoryData/australiaMDData';
import { indiaMDData } from '@/app/(visaCountries)/mainDirectoryData/indiaMDData';
import { thailandMDData } from '@/app/(visaCountries)/mainDirectoryData/thailandMDData';
import { morroccoMDData } from '@/app/(visaCountries)/mainDirectoryData/morroccoMDData';
import { turkeyMDData } from '@/app/(visaCountries)/mainDirectoryData/turkeyMDData';
import { srilankaMDData } from '@/app/(visaCountries)/mainDirectoryData/srilankaMDData';
import { malaysiaMDData } from '@/app/(visaCountries)/mainDirectoryData/malaysiaMDData';

export default function FilterBlogs({ defaultValue, defaultPosts }) {
  const [filter, setFilter] = useState(defaultValue);
  const mainDirectoryDataBlogs = [
    australiaMDData,
    indiaMDData,
    thailandMDData,
    morroccoMDData,
    turkeyMDData,
    srilankaMDData,
    malaysiaMDData,
  ];

  const filterBlogs =
    mainDirectoryDataBlogs.find(country => country.code === filter) ?? [];

  const handleFilter = countryCode => {
    setFilter(countryCode);
  };
  console.log(filterBlogs);
  return (
    <>
      <div className="flex flex-wrap justify-center mb-8">
        <button
          type="button"
          onClick={() => handleFilter('generalBlogs')}
          className={`m-2 px-3 py-1 rounded-lg shadow-md ${
            filter === 'generalBlogs'
              ? 'text-white bg-gradient-to-r from-[#1998C7] to-[#007FAE]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none'
              : 'bg-white hover:bg-gray-200'
          }`}
        >
          General Blogs
        </button>
        {mainDirectoryDataBlogs.map(country => (
          <button
            type="button"
            key={country.code}
            onClick={() => handleFilter(country.code)}
            className={`m-2 px-3 py-1 rounded-lg shadow-md ${
              filter === country.code
                ? 'text-white bg-gradient-to-r from-[#1998C7] to-[#007FAE]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none'
                : 'bg-white hover:bg-gray-200'
            }`}
          >
            {country?.code}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filter === 'generalBlogs' &&
          defaultPosts?.map(post => (
            <BlogCard imgSrc="" post={post} key={post.slug} />
          ))}
        {filterBlogs?.blogs?.map(post => (
          <BlogCard imgSrc="" post={post} key={post.slug} href={post.href} />
        ))}
      </div>
    </>
  );
}
