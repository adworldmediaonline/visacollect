'use client';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';
import React from 'react';
import { useFormContext } from '@/context/formContext';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import Link from 'next/link';

const Page = () => {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.EGYPT_VISA_APPLICATION,
    state.formId,
    'egyptVisaApplication'
  );

  // const makePaymentMutation = usePostPayment(
  //   apiEndpoint.CAMBODIA_VISA_APPLICATION_PAYMENT,
  //   'Payment completed successfully',
  //   // '/australia/application/payment/success',
  //   false,
  //   'cambodiaVisaApplication'
  // );

  if (getQuery.isPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        {/* <ImSpinner2 className="w-4 h-4 text-black animate-spin" /> */}
        loading
      </div>
    );
  }

  if (getQuery.error) {
    return router.push('/egypt/step-two');
  }

  if (getQuery.isSuccess) {
    const { data: egyptApplicationData } = getQuery.data;

    // const makePayment = async () => {
    //   makePaymentMutation.mutate({
    //     evisaFee: 59,
    //     formId: applicationData._id,
    //   });
    // };

    return (
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead=" ETA Visa to Cambodia Application" />

        <div className=" flex justify-between items-center bg-[#0068E5] py-4 px-4 rounded-t-lg my-10">
          <h2 className="text-lg font-semibold text-white ">Order Summary</h2>
          <Link
            href={`/egypt/step-one/${egyptApplicationData?._id}`}
            className="px-10 py-2 bg-white rounded-lg text-primary"
          >
            Edit
          </Link>
        </div>
        <div className="space-y-2 divide-y-[1px] pt-5">
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">Email</h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {egyptApplicationData?.email}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Number of Visa
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {egyptApplicationData?.numberOfVisa}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Type of Visa
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {egyptApplicationData?.typeOfVisa}
            </p>
          </div>
        </div>

        <SubHeading subHead="PAYMENT" />
        <div className="space-y-2 divide-y-[1px] pt-5">
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Visa Service Fees
              <br />
              Normal fee ($69)
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              amount
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Promotion discount
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              amount
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Total Visa Service Fees
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              amount
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Processing Time
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              amount
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Egypt Government & Admin Fee(Required)
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              amount
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Total Service Fees
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              amount
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Covid-19 Insurance
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              amount
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">Total</h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              amount
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
