'use client';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';
import React from 'react';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';
import Link from 'next/link';

const Page = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.OMAN_VISA_APPLICATION,
    id,
    'omanVisaApplication'
  );

  if (getQuery.isPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        <ImSpinner2 className="w-4 h-4 text-black animate-spin" />
        loading
      </div>
    );
  }

  if (getQuery.error) {
    return router.push('/om/step-two');
  }

  if (getQuery.isSuccess) {
    const {
      data: { data: omanApplicationData },
    } = getQuery;
    return (
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead=" Visa Application Review" />

        <div className=" flex justify-between items-center bg-[#0068E5] py-4 px-4 rounded-t-lg my-10">
          <h2 className="text-lg font-semibold text-white ">Order Summary</h2>
          <Link
            href={`/om/step-one/${omanApplicationData?._id}`}
            className="px-10 py-2 bg-white rounded-lg text-primary"
          >
            Edit
          </Link>
        </div>
        <div className="space-y-2 divide-y-[1px] pt-5">
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Reference Id
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              name
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Destination
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              name
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              First Name
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              number
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Last Name
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              number
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Passport Number
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              number
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Date of Birth
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              number
            </p>
          </div>
        </div>

        <SubHeading subHead="SELECT PAYMENT METHOD" />
        <div className="space-y-2 divide-y-[1px] pt-5"></div>

        <div>
          <button>Buy</button>
        </div>
      </div>
    );
  }
};

export default Page;
