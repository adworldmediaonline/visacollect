'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeadingSection from './HeadingSection';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../ui/button';
import { cn } from '@/lib/cn';

const data = [
  {
    id: 1,
    imgSrc: '/assets/images/main/india-desti.png',
    title: 'India',
    link: '/in',
    comingSoon: false,
    altText: 'Apply for India Visa Online Now - Quick and Easy Process',
  },
  {
    id: 2,
    imgSrc: '/assets/images/main/srilanka.jpg',
    title: 'Srilanka',
    link: '/lk',
    comingSoon: false,
    altText: 'Apply for Sri lanka visa - Beaches of Sri lanka',
  },
  {
    id: 3,
    imgSrc: '/assets/images/main/australia.jpg',
    title: 'Australia',
    link: '/au',
    comingSoon: false,
    altText: 'Apply for Australia visa online - smooth process',
  },
  {
    id: 4,
    imgSrc: '/assets/images/main/turkey.jpg',
    title: 'Turkey',
    link: '/tr',
    comingSoon: false,
    altText: 'Turkey visa online - Apply Easily with Secure Online System',
  },
  {
    id: 5,
    imgSrc: '/assets/images/main/thailand.jpg',
    title: 'Thailand',
    link: '/th',
    comingSoon: false,
    altText: `Apply thailand visa online - Thailand's E-Visa`,
  },
  {
    id: 6,
    imgSrc: '/assets/images/main/cambodia.jpg',
    title: 'Cambodia',
    link: '/kh',
    comingSoon: false,
    altText: `Cambodia visa online - hustlefree visa process`,
  },
  {
    id: 7,
    imgSrc: '/assets/images/main/oman.jpg',
    title: 'Oman',
    link: '/om',
    comingSoon: false,
    altText: `oman visa online -  Visa Collect`,
  },
  {
    id: 8,
    imgSrc: '/assets/images/main/egypt.jpg',
    title: 'Egypt',
    link: '/eg',
    comingSoon: false,
    altText: `Online Visa for Egypt: Hassle-free travel made possible with just a few clicks`,
  },
  {
    id: 9,
    imgSrc: '/assets/images/main/morocco.jpg',
    title: 'Morrocco',
    link: '/ma',
    comingSoon: false,
    altText: `Apply morocco e visa - Visa Collect`,
  },
  {
    id: 10,
    imgSrc: '/assets/images/main/malaysia.jpg',
    title: 'Malaysia',
    link: '/my',
    comingSoon: false,
    altText: `Apply malaysia visa online - Online Application`,
  },
  {
    id: 11,
    imgSrc: '/assets/images/main/japan.jpg',
    title: 'Japan',
    link: '/jp',
    comingSoon: false,
    altText: `Apply japan visa online - Visa Collect`,
  },
  {
    id: 12,
    imgSrc: '/assets/images/main/singapore.jpg',
    title: 'Singapore',
    link: '/sg',
    comingSoon: false,
    altText: `Apply singapore visa online - Fees, Documents, Validity`,
  },
  {
    id: 13,
    imgSrc: '/assets/images/main/indonesia.jpg',
    title: 'Indonesia',
    link: '/id',
    comingSoon: false,
    altText: `How to Apply for Indonesia Visa Online - Visa Collect`,
  },
];
const OurPopularDestination = ({ visitAllCountry }) => {
  const [popularDestinations, setPopularDestinations] = useState(data);
  const [loadMore, setLoadMore] = useState(1);
  const [defaultPopularDestinations, setDefaultPopularDestinations] =
    useState(8);
  const currentPopularDestinations = popularDestinations.slice(
    0,
    defaultPopularDestinations * loadMore
  );
  return (
    <div className="py-12 space-y-12 md:py-12">
      {/* title start  */}
      <div className="max-w-3xl mx-auto text-center">
        <HeadingSection title="We Process Visas for" />
      </div>
      {/* title end  */}
      <div className="container space-y-8">
        <div className="relative grid-cols-4 gap-6 space-y-8 md:grid md:space-y-0">
          {currentPopularDestinations?.map((e, i) => (
            <div
              key={i}
              className="max-w-sm shadow-md group rounded-2xl dark:border-gray-700"
            >
              <div className="relative z-0 overflow-hidden rounded-t-3xl">
                <Image
                  src={e.imgSrc}
                  width={500}
                  height={500}
                  className="mx-auto full h-[200px] "
                  alt={e.altText}
                />
                <div className="absolute bottom-0 z-10 flex items-end justify-end w-full h-full bg-black/40">
                  <h2 className="w-full py-2 text-lg font-semibold text-center text-white uppercase bg-secondary/60">
                    {e?.title}
                  </h2>
                </div>
              </div>
              <div className="px-5 py-4 text-center space-y-3 border-primary border-[1px] rounded-b-2xl border-b-2 group-hover:bg-secondary group-hover:text-white text-primary">
                <Link
                  href={e.comingSoon ? '#' : e.link}
                  className="flex items-center justify-center space-x-2 font-semibold"
                >
                  <span>Read More</span>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {' '}
          <button
            onClick={() => setLoadMore(prevLoadMore => prevLoadMore + 1)}
            type="button"
            className="text-white bg-gradient-to-r from-[#1998C7] to-[#007FAE]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPopularDestination;
