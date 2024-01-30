import React from 'react';
import Link from 'next/link';
import { FaInfoCircle } from 'react-icons/fa';
import HomePageTitle from '@/app/australia/_homePage/HomePageTitle';

export const Banner = ({
  name,
  type,
  validity,
  entries,
  price,
  link,
  pageTitle,
  pageName,
}) => {
  return (
    <div>
      <div className="container py-16">
        <div>
          <p className="py-8">Home &gt; {pageName}</p>
        </div>
        <HomePageTitle pageTitle={pageTitle} />
        <div className="mt-8">
          <div className="flex gap-4">
            {/* Passport Select */}
            <div className="mb-4">
              <label
                htmlFor="passportSelect"
                className="block text-sm font-medium text-gray-700"
              >
                Passport
              </label>
              <select
                id="passportSelect"
                className="p-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                {/* Add your passport options here */}
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            {/* Destination Select */}
            <div className="mb-4">
              <label
                htmlFor="destinationSelect"
                className="block text-sm font-medium text-gray-700"
              >
                Destination
              </label>
              <select
                id="destinationSelect"
                className="p-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                {/* Add your destination options here */}
                <option value="destination1">Destination 1</option>
                <option value="destination2">Destination 2</option>
                <option value="destination3">Destination 3</option>
              </select>
            </div>

            {/* Business Tourism Buttons */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Traveling for
              </label>
              {/* Button 1 */}
              <button className="px-4 py-2 mr-2 text-sm font-normal text-white rounded-full bg-primary ">
                All
              </button>

              {/* Button 2 */}
              <button className="px-4 py-2 mr-2 text-sm font-normal text-black bg-gray-100 rounded-full ">
                Tourism
              </button>

              {/* Button 3 */}
              <button className="px-4 py-2 text-sm font-normal text-black bg-gray-100 rounded-full ">
                Business
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 p-4 mt-5 text-lg text-black border-t border-b border-l-8 border-r rounded-lg border-primaryMain">
          <div className="flex flex-col">
            <span className="font-bold">Visa</span>
            <span className="text-sm font-normal text-red-500">
              REQUIRED FOR TRAVEL
            </span>
          </div>
          <p className="flex items-center gap-2 text-sm">
            <FaInfoCircle className="text-red-500" />
            You need a Visa to travel to Australia if you have a passport from
            United States.
          </p>
          <div className="ml-auto">
            <Link href={link}>
              <button className="w-full px-16 py-3 text-xl font-semibold text-white duration-150 ease-in-out rounded-full bg-primary hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full space-y-5 "></div>

        <div className="flex flex-wrap mt-6 md:space-x-5">
          <div className="border-2 rounded-md border-primary basis-[250px]">
            <div className="flex flex-col items-center py-3 space-y-2">
              <p className="text-sm">{validity}</p>
              <p className="text-sm">{entries}</p>
              <p className="text-sm">Fee</p>
              <p className="text-2xl">{price}</p>
              <p className="text-sm">/applicant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
