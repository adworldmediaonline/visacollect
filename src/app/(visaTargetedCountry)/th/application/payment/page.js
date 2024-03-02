'use client';
import apiEndpoint from '@/services/apiEndpoint';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useFormContext } from '@/context/formContext';
import useQueryGet from '@/hooks/useQuery';

import usePostPayment from '@/hooks/usePostPayment';

const Page = () => {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.AUSTRALIA_VISA_APPLICATION,
    state.formId,
    'australiaVisaApplication'
  );

  const makePaymentMutation = usePostPayment(
    apiEndpoint.AUSTRALIA_VISA_APPLICATION_PAYMENT,
    'Payment completed successfully',
    // '/au/application/payment/success',
    false,
    'australiaVisaApplication'
  );

  if (getQuery.isPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        {/* <ImSpinner2 className="w-4 h-4 text-black animate-spin" /> */}
        loading
      </div>
    );
  }

  if (getQuery.error) {
    return router.push('/au/application');
  }

  if (getQuery.isSuccess) {
    const { data: applicationData } = getQuery.data;

    const makePayment = async () => {
      makePaymentMutation.mutate({
        totalPrice: 1,
        formId: applicationData._id,
      });
    };
    return (
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead="eVisitor ETA Visa to Australia Application" />

        <SubHeading subHead="CUSTOMER INFORMATION" />
        <div className="space-y-2 divide-y-[1px] pt-5">
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Destination
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              AUSTRALIA
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Application Number
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              name
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Passenger
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {applicationData?.personalDetails?.givenName}{' '}
              {applicationData?.personalDetails?.surnameFamilyName}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">email</h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {applicationData?.personalDetails?.emailAddress}
            </p>
          </div>
        </div>

        <SubHeading subHead="PAYMENT" />
        <div className="space-y-2 divide-y-[1px] pt-5">
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              E-visa Fee
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              59
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Insurance Fee
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {applicationData?.travelInsurance?.insuranceFee}
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
  }
};

export default Page;
