'use client';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';
import React from 'react';
import { useFormContext } from '@/context/formContext';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import usePostPayment from '@/hooks/usePostPayment';
import Link from 'next/link';

const Page = () => {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.CAMBODIA_VISA_APPLICATION,
    state.formId,
    'cambodiaVisaApplication'
  );

  const makePaymentMutation = usePostPayment(
    apiEndpoint.EVISA_APPLICATION_PAYMENT,
    'payment added successfully',
    // '/australia/application/payment/success',
    false,
    'cambodiaVisaApplication'
  );
  const applicationData = null;
  const makePayment = async () => {
    makePaymentMutation.mutate({
      totalPrice: 1,
      // formId: applicationData._id,
    });
  };
  return (
    <div className="container  md:py-8 py-20 md;px-0 px-3 ">
      <Heading formHead=" ETA Visa to Cambodia Application" />

      <div className=" flex justify-between items-center bg-[#0068E5] py-4 px-4 rounded-t-lg my-10">
        <h2 className="text-lg font-semibold text-white ">Order Summary</h2>
        <Link
          href={`/cambodia/application/${applicationData?._id}`}
          className="px-10 py-2 bg-white rounded-lg text-primary"
        >
          Edit
        </Link>
      </div>
      <div className="space-y-2 divide-y-[1px] pt-5">
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Full Name
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            {console.log(applicationData)}
            {applicationData?.personalDetails?.firstName}{' '}
            {applicationData?.personalDetails?.middleName}{' '}
            {applicationData?.personalDetails?.familyName}
            {}
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Email Address
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            {applicationData?.contactDetails?.emailAddress}
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Passport Number
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            {applicationData?.passportDetails?.passportNumber}
          </p>
        </div>
      </div>

      <SubHeading subHead="PAYMENT" />
      <div className="space-y-2 divide-y-[1px] pt-5">
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            1 Cambodia e-Visa (99 USD)
          </h2>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Total amount
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            amount
          </p>
        </div>
      </div>

      <SubHeading subHead="SELECT PAYMENT METHOD" />
      <div className="space-y-2 divide-y-[1px] pt-5"></div>

      <div>
        {makePaymentMutation.isError ? (
          <div className="text-red-500">
            An error occurred: {makePaymentMutation.error.message}
          </div>
        ) : null}
        <button
          className={`cursor-pointer w-full items-center gap-3 border-2 rounded-lg font-semibold border-primary text-primary px-8 py-3
            }`}
          disabled={makePaymentMutation.isPending}
          onClick={makePayment}
        >
          {makePaymentMutation.isPending ? <>Loading...</> : 'Buy'}
        </button>
      </div>
    </div>
  );
};

export default Page;
