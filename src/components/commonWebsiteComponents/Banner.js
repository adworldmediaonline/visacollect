import React from 'react';
import Link from 'next/link';
import { FaInfoCircle } from 'react-icons/fa';
import { getAllCountries } from '@/lib/getAllCountries';
import HomePageTitle from '../common/countryHomePage/HomePageTitle';

export const Banner = ({
  validity,
  entries,
  price,
  link,
  pageTitle,
  pageName,
  pageTitleDescription,
}) => {
  return (
    <div>
      <div className="container py-16">
        <div>
          <p className="py-8">Home &gt; {pageName}</p>
        </div>
        <HomePageTitle pageTitle={pageTitle} />
        <p className="mt-1 text-base">{pageTitleDescription ?? ''}</p>
        <div className="mt-8">
          <div className="flex flex-col gap-4 md:flex-row xl">
            <div className="flex flex-shrink-0 gap-3 md:basis-96">
              {/* Passport Select */}
              <div className="flex-1 mb-4">
                <label
                  htmlFor="passportSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Passport
                </label>
                <select id="passportSelect" className="text-sm new-form-input">
                  <option value="">select</option>
                  {getAllCountries()}
                </select>
              </div>

              {/* Destination Select */}
              <div className="flex-1 mb-4">
                <label
                  htmlFor="destinationSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Destination
                </label>
                <select
                  id="destinationSelect"
                  className="text-sm new-form-input"
                >
                  <option value="">select</option>
                  {getAllCountries()}
                </select>
              </div>
            </div>

            {/* Business Tourism Buttons */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Traveling for
              </label>
              {/* Button 1 */}
              <button className="px-4 py-2 mr-2 text-sm font-normal text-white rounded-full bg-secondary ">
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

        <div className="flex flex-col gap-8 p-4 mt-5 text-lg text-black border-t border-b border-l-8 border-r rounded-lg md:items-center md:flex-row border-primary">
          <div className="flex flex-col items-start">
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
          <div className="md:ml-auto">
            <Link href={link}>
              <button className="w-full px-16 py-3 text-xl font-semibold text-white duration-150 ease-in-out rounded-full bg-secondary hover:scale-105">
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
