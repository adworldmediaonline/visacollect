'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeadingSection from './HeadingSection';
import { FaLongArrowAltRight } from 'react-icons/fa';

const OurPopularDestination = ({ visitAllCountry }) => {
  const data = [
    {
      id: 1,
      imgSrc: '/assets/images/main/india-desti.png',
      title: 'India',
      link: '/in',
      comingSoon: false,
    },
    {
      id: 2,
      imgSrc: '/assets/images/main/srilanka.jpg',
      title: 'Srilanka',
      link: '/lk',
      comingSoon: false,
    },
    {
      id: 3,
      imgSrc: '/assets/images/main/australia.jpg',
      title: 'Australia',
      link: '/au',
      comingSoon: false,
    },
    {
      id: 4,
      imgSrc: '/assets/images/main/turkey.jpg',
      title: 'Turkey',
      link: '/tr',
      comingSoon: false,
    },
    {
      id: 5,
      imgSrc: '/assets/images/main/thailand.jpg',
      title: 'Thailand',
      link: '/th',
      comingSoon: false,
    },
    {
      id: 6,
      imgSrc: '/assets/images/main/cambodia.jpg',
      title: 'Cambodia',
      link: '/kh',
      comingSoon: false,
    },
    {
      id: 7,
      imgSrc: '/assets/images/main/oman.jpg',
      title: 'Oman',
      link: '/om',
      comingSoon: false,
    },
    {
      id: 8,
      imgSrc: '/assets/images/main/egypt.jpg',
      title: 'Egypt',
      link: '/eg',
      comingSoon: false,
    },
    {
      id: 9,
      imgSrc: '/assets/images/main/morocco.jpg',
      title: 'Morrocco',
      link: '/ma',
      comingSoon: false,
    },
    {
      id: 10,
      imgSrc: '/assets/images/main/malaysia.jpg',
      title: 'Malaysia',
      link: '/my',
      comingSoon: false,
    },
  ];

  return (
    <div className="py-12 space-y-12 md:py-12">
      {/* title start  */}
      <div className="max-w-3xl mx-auto text-center">
        <HeadingSection title="We Process Visas for" />
      </div>
      {/* title end  */}
      <div className="container space-y-8">
        <div className="relative grid-cols-4 gap-6 space-y-8 md:grid md:space-y-0">
          {data?.map((e, i) => (
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
                  alt={e.title}
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
        {visitAllCountry && (
          <div className="flex justify-center">
            <Link href="/all-countries">
              <button className="flex px-12 py-2 mx-auto text-center btnBlue ">
                Visit All Destinations
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurPopularDestination;
