import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { getAllCountries } from '@/lib/getAllCountries';
import HomePageTitle from '../common/countryHomePage/HomePageTitle';
import LinkButton from './link-button';
import Button from './button';
import BannerInlineForm2 from './banner-inline-form-2';
import Breadcrumb from '../Breadcrumbs';

export default function Banner2({
  validity,
  entries,
  price,
  link,
  pageTitle,
  pageTitleDescription,
  breadcrumb,
}) {
  return (
    <div>
      <div className="mt-24">
        <Breadcrumb
          homeElement={'Home'}
          separator={<span> &gt; </span>}
          activeClasses="text-amber-500"
          // containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
          containerClasses="flex py-0 text-sm"
          listClasses="mx-2"
          capitalizeLinks
        />
      </div>
      <div className="container pt-8 pb-16">
        <HomePageTitle pageTitle={pageTitle} />
        <p className="mt-1 text-base">{pageTitleDescription ?? ''}</p>
        <div className="mt-8">
          <div className="flex flex-col gap-4 md:flex-row xl">
            <div className="flex flex-shrink-0 gap-3 md:basis-200">
              <BannerInlineForm2 />
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
          <div className="md:ml-auto shrink-0">
            <LinkButton href={link} className="px-10 py-4 text-base shrink-0">
              Apply Now
            </LinkButton>
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
}
