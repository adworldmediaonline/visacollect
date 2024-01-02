'use client';
import SubHeading from '@/components/thailand/common/SubHeading';
import useQueryGet from '@/hooks/useQuery';
import { formatDate, formatDateYearDayMonth } from '@/lib/dateFormatter';
import apiEndpoint from '@/services/apiEndpoint';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

export default function Page({ params }) {
  const { id } = params;
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.THAILAND_VISA_APPLICATION,
    id,
    'thailandVisaApplication'
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
    return router.push('/thailand/apply-form');
  }

  if (getQuery.isSuccess) {
    const {
      data: { data: thailandVisaApplicationData },
    } = getQuery;

    return (
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <h3 className="text-lg ">Home &gt; Embassy Registration</h3>

        <div className="pt-10 pb-4 mx-auto">
          <h3 className="text-4xl font-bold ">Review</h3>
        </div>

        <SubHeading subHead="Embassy Registration" />

        <div className="space-y-2 divide-y-[1px] pt-5">
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Email address
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {thailandVisaApplicationData?.emailAddress}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              When do you arrive at your destination?
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {formatDate(thailandVisaApplicationData?.whenArriveDestination)}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              When do you depart from your destination?
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {formatDate(thailandVisaApplicationData?.whenDepartDestination)}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Destination country
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {thailandVisaApplicationData?.destinationCountry}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Emergency contact&apos;s email
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {thailandVisaApplicationData?.emergencyContactEmail}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Emergency contact&apos;s full name
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {thailandVisaApplicationData?.emergencyContactFullName}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Emergency contact&apos;s country code and phone number
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {
                thailandVisaApplicationData?.emergencyContactCountryCodeAndPhoneNumber
              }
            </p>
          </div>
        </div>
        {/* your applicants info start here */}

        <SubHeading subHead="Your Applicant Information" />

        {/* <div className="space-y-2 divide-y-[1px] py-5">
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              First and middle name
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Last name
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Nationality
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Gender
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Date of birth
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Country of birth
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Country of residence
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Passport number
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Passport issue date
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Passport expiration date
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              text
            </p>
          </div>
        </div> */}

        {/* table start  */}
        <div className="w-full h-full py-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border table-auto min-w-max">
              <thead>
                <tr className="rounded-xl">
                  <th className="bg-[#0068E5] text-black p-4 ">Full name</th>
                  <th className="bg-[#0068E5] text-black p-4 ">Nationality</th>
                  <th className="bg-[#0068E5] text-black p-4 ">Gender</th>
                  <th className="bg-[#0068E5] text-black p-4 ">
                    Date Of Birth
                  </th>
                  <th className="bg-[#0068E5] text-black p-4 ">
                    Country of birth
                  </th>
                  <th className="bg-[#0068E5] text-black p-4 ">
                    Passport number
                  </th>
                </tr>
              </thead>
              <tbody>
                {thailandVisaApplicationData?.persons?.length > 0 ? (
                  thailandVisaApplicationData?.persons?.map(person => (
                    <tr key={person._id}>
                      <td className="p-4">
                        <div
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {person?.firstName} {person?.lastName}
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {person?.nationality}
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {person?.gender}
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {formatDateYearDayMonth(person?.dateOfBirth)}
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {person?.countryOfBirth}
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {person?.passportNumber}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>No Person found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* table end  */}
        {/* your applicants info end here */}
        <div className="px-10 py-5 border rounded-lg border-primaryMain bg-primaryMain/10">
          <div className="flex items-center justify-between pb-5 text-black">
            <p className="text-2xl font-semibold">
              {' '}
              Products{' '}
              <span className="text-sm font-normal">
                CA Embassy Registration Embassy Registration (CA)
              </span>
            </p>
            <p className="text-xl font-semibold">
              {thailandVisaApplicationData?.persons?.length}
            </p>
          </div>
          <div className="flex items-center justify-between pb-5 text-black">
            <p className="text-2xl font-semibold">
              {' '}
              Embassy Registration Fee (CA)
            </p>
            <p className="text-xl font-semibold">NA</p>
          </div>
          <div className="flex items-center justify-between pb-5 text-black">
            <p className="text-2xl font-semibold">
              {' '}
              Total{' '}
              <span className="text-sm font-normal">
                (For all applicants)
              </span>{' '}
            </p>
            <p className="text-xl font-semibold">
              NA{' '}
              <span className="text-sm font-normal">
                (Includes taxes and fees)
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center py-8 space-x-5 text-center">
          <Link
            href={`/thailand/apply-form/${thailandVisaApplicationData?._id}`}
            className="items-center gap-3 px-8 py-3 font-semibold border-2 rounded-lg cursor-pointer w-fit border-primaryMain text-primaryMain "
          >
            Edit
          </Link>

          <button
            className="items-center gap-3 px-8 py-3 font-semibold border-2 rounded-lg cursor-pointer w-fit border-primaryMain text-primaryMain"
            type="submit"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}
