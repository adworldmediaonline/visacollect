'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import { Disclosure } from '@headlessui/react';
import { FaAngleDown } from 'react-icons/fa6';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

const Formmainsection = ({ title, para, button, stripeText }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <div
        className="w-full"
        style={{
          backgroundImage:
            "url('/assets/images/srilanka/home/bannerthree.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container justify-center flex flex-col h-[500px] md:h-[500px]">
          <div className="items-center">
            <h2 className="text-white md:text-[55px] text-[40px] font-bold leading-[1.2] md:w-[70%]">
              {' '}
              {title ?? ''}
            </h2>
            <p className="text-white md:w-[70%] py-2">{para ?? ''}</p>
          </div>
        </div>
      </div>
      <div className="bg-black/80 border-t-2 borer-white/70 md:h-20 h-full justify-center flex flex-col items-center -mt-[64px] md:-mt-20">
        <div className="w-full ">
          <div className="container flex justify-between w-full  rounded-2xl md:px-10">
            <div className="relative items-center hidden text-lg font-semibold text-white cursor-pointer group dropdown drop-shadow-2xl md:flex">
              Tourist ETA
              <span>
                <FiChevronDown className="mt-1 text-white" size={18} />
              </span>
              <div className="absolute hidden h-auto transition-all duration-300 translate-y-2 group-hover:block dropdown-menu top-4 md:-left-10 ">
                <div className="top-0 bg-white p-2 shadow-lg shadow-black/30 text-[#655B5A] w-60 flex flex-col ">
                  <Link
                    href="/sl/slvisa/tourist-eta/apply-individual"
                    className="px-4 py-3 text-sm  hover:bg-black hover:text-white"
                  >
                    Apply for an individual
                  </Link>
                  <Link
                    href="/sl/slvisa/tourist-eta/apply-in-group"
                    className="px-4 py-3 text-sm  hover:bg-black hover:text-white"
                  >
                    Apply for a group
                  </Link>
                  <Link
                    href="/sl/slvisa/tourist-eta/apply-for-third-party"
                    className="px-4 py-3 text-sm  hover:bg-black hover:text-white"
                  >
                    Apply for a third party
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative items-center hidden text-lg font-semibold text-white cursor-pointer group dropdown drop-shadow-2xl md:flex">
              Business Purpose
              <span>
                <FiChevronDown className="mt-1 text-white" size={18} />
              </span>
              <div className="absolute hidden h-auto transition-all duration-300 translate-y-2 group-hover:block dropdown-menu top-4 md:-left-10 ">
                <div className="top-0 bg-white p-2 shadow-lg shadow-black/30 text-[#655B5A] w-60 flex flex-col ">
                  <Link
                    href="/sl/slvisa/business-purpose-eta/apply-individual"
                    className="px-4 py-3 text-sm  hover:bg-black hover:text-white"
                  >
                    Apply for an individual
                  </Link>
                  <Link
                    href="/sl/slvisa/business-purpose-eta/apply-in-group"
                    className="px-4 py-3 text-sm  hover:bg-black hover:text-white"
                  >
                    Apply for a group
                  </Link>
                  <Link
                    href="/sl/slvisa/business-purpose-eta/apply-for-third-party"
                    className="px-4 py-3 text-sm  hover:bg-black hover:text-white"
                  >
                    Apply for a third party
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative items-center hidden text-lg font-semibold text-white cursor-pointer group dropdown drop-shadow-2xl md:flex">
              Transit Purpose
              <span>
                <FiChevronDown className="mt-1 text-white" size={18} />
              </span>
              <div className="absolute hidden h-auto transition-all duration-300 translate-y-2 group-hover:block dropdown-menu top-4 md:-left-10 ">
                <div className="top-0 bg-white p-2 shadow-lg shadow-black/30 text-[#655B5A] w-60 flex flex-col ">
                  <Link
                    href="/srilanka"
                    className="px-4 py-3 text-sm  hover:bg-black hover:text-white"
                  >
                    Apply for an individual
                  </Link>
                  <Link
                    href="/srilanka"
                    className="px-4 py-3 text-sm  hover:bg-black hover:text-white"
                  >
                    Apply for a group
                  </Link>
                  <Link
                    href="/srilanka"
                    className="px-4 py-3 text-sm  hover:bg-black hover:text-white"
                  >
                    Apply for a third party
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
        <div className="container grid justify-center grid-cols-12 item-center">
          <div className="flex col-span-4">
            <h2 className="text-[20px] text-white font-bold">Tourist ETA</h2>

            <Select className="w-[60%] bg-transparent border-none"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
          <div className="flex col-span-4">
            <h2 className="text-[20px] text-white font-bold">Tourist ETA</h2>

            <Select className="w-[60%] bg-transparent border-none"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>

          <div className="flex col-span-4">
            <h2 className="text-[20px] text-white font-bold">Tourist ETA</h2>

            <Select className="w-[60%] bg-transparent border-none"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>




        </div> */}
      </div>
    </div>
  );
};

export default Formmainsection;
