"use client";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import HeadingSection from "./HeadingSection";
import { FaLongArrowAltRight } from "react-icons/fa";

const OurPopularDestination = () => {
  const data = [
    {
      id: 1,
      imgSrc: "/assets/images/main/india-desti.png",
      title: "India",
      link: "/",
    },
    {
      id: 1,
      imgSrc: "/assets/images/main/india-desti.png",
      title: "India",
      link: "/",
    },
    {
      id: 2,
      imgSrc: "/assets/images/main/india-desti.png",
      title: "India",
      link: "/",
    },
    {
      id: 3,
      imgSrc: "/assets/images/main/india-desti.png",
      title: "India",
      link: "/",
    },
  ];

  return (
    <div className="md:py-12 py-12 space-y-12 bg-sky-50">
      {/* title start  */}
      <div className="max-w-3xl mx-auto text-center">
        <HeadingSection title="Our Popular Destinations" />
      </div>
      {/* title end  */}
      <div className="container space-y-8">
        <div className="md:grid grid-cols-4 gap-6 md:space-y-0 space-y-8">
          {data.map((e, i) => (
            <div
              key={i}
              className=" group shadow-md rounded-2xl max-w-sm dark:border-gray-700"
            >
              <div className="relative overflow-hidden z-0 rounded-t-3xl">
                <Image
                  src={e.imgSrc}
                  width={500}
                  height={500}
                  className="full mx-auto"
                />
                <div className="absolute bottom-0 z-10 bg-black/40 w-full h-full flex justify-end items-end">
                  <h2 className=" bg-primary w-full text-white text-lg uppercase font-semibold text-center py-2 bg-black/50">
                    {e.title}
                  </h2>
                </div>
              </div>
              <div className="px-5 py-4 text-center space-y-3 border-x-primary border-x-[1px] rounded-b-2xl border-b-2 group-hover:bg-primaryMain group-hover:text-white text-primaryMain">
                <Link
                  href={e.link}
                  className="font-semibold  flex items-center space-x-2 justify-center"
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
        <div>
          <button className="btnBlue flex  px-12 mx-auto text-center py-2">
            View All Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPopularDestination;
