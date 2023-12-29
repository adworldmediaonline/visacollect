import Link from 'next/link';
import React from 'react';

const BannerMain = () => {
  const smallIcon = [
    {
      id: 1,
      imgSrc: '/assets/images/main/happy.png',
      title: '10k+ Happy Customers',
    },
    {
      id: 2,
      imgSrc: '/assets/images/main/time.png',
      title: '99% On Time Delivery',
    },
    {
      id: 3,
      imgSrc: '/assets/images/main/experience.png',
      title: '5+ Years of Experience',
    },
    {
      id: 4,
      imgSrc: '/assets/images/main/rating.png',
      title: 'Ratings By Customers',
    },
  ];
  return (
    <div>
      <div
        className="w-full relative"
        style={{
          backgroundImage: "url('/assets/images/main/bannerimg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container justify-center flex flex-col h-[550px]">
          <div className="space-y-3">
            <h2 className="text-white md:text-[55px] text-[40px] font-bold leading-[1.2] md:w-[50%]">
              {' '}
              Find Visa information for all countries and apply today.
            </h2>
            <p className="text-white md:w-[70%] py-2">
              Focus on your trip, not paperwork. Let us help you easily get your
              travel documents.
            </p>
            <div className="flex space-x-4">
              {smallIcon.map((e, i) => (
                <div key={i} className="text-white w-24 space-y-2">
                  <img src={e.imgSrc} className="w-8 h-8" />
                  <h5 className="text-sm">{e.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:absolute md:w-96 rounded-md p-8 bg-white text-black top-36 right-24 space-y-4">
          <h2 className="font-semibold text-lg">
            Get Started With Your Visa Now!
          </h2>
          <div className="mb-5">
            <label
              htmlFor="fName"
              className=" block text-base font-medium text-[#07074D]"
            >
              Where am I from?
            </label>
            <select
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option default disabled>
                Select
              </option>
              <option>India</option>
              <option>Australia</option>
              <option>Sri lanka</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="fName"
              className=" block text-base font-medium text-[#07074D]"
            >
              Where am I Going?
            </label>
            <select
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option default disabled>
                Select
              </option>
              <option>India</option>
              <option>Australia</option>
              <option>Sri lanka</option>
            </select>
          </div>
          <button className="btnBlue w-full text-center py-2">
            Apply Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerMain;
