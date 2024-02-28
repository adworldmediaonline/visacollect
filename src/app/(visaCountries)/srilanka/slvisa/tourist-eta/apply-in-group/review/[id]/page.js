'use client';
import { ImSpinner2 } from 'react-icons/im';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import StepProcess from '@/components/srilanka/common/StepProcess';
import { formatDateYearDayMonth } from '@/lib/dateFormatter';

const tableHead = [
  'Given Name',
  'Passport No.',
  'Nationality',
  'Date of Birth',
  'Passport Issued Date',
  'Gender',
  'passportExpiryDate',
  'visaFee',
];

const Page = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.SL_VISA_TOURIST_GROUPS,
    id,
    'touristGroups'
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
    return router.push('/srilanka/slvisa/tourist-eta/apply-in-group');
  }

  if (getQuery.isSuccess) {
    const {
      data: { data: touristGroupsData },
    } = getQuery;

    return (
      <div>
        <Formmainsection
          title="Lorem Ipsum is simply dummy text of the printing"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <div className="container">
          <div className="  md:py-8 py-20 md;px-0 px-3 ">
            <StepProcess
              color1="bg-[#E3E3E3]"
              color2="bg-[#0068E5]"
              color3="bg-[#E3E3E3] "
              color4="bg-[#E3E3E3]"
            />
          </div>
          <Formheading formHead="Travel Information - Tourist Purpose - Group" />
          <div className="space-y-2 divide-y-[1px] pt-5">
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Where you have been during last 14 days before this travel
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.whereHaveBeenGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Intended Arrival Date
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {formatDateYearDayMonth(
                  touristGroupsData?.attendantArrivalDateGroupTourist
                )}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Purpose of Visit
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.purposeOfVisitGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                No. of validity required
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.visaValidPeriodGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Port of Departure
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.portOfDepartureGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Airline/Vessel
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.ArilineVesselGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Flight/Vessel Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.flightVesselNumberGroupTourist}
              </p>
            </div>

            <div className="py-5">
              <Formsubhead formheadreview="Contact Details" />
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Address
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.addressLineOneGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Address in Sri Lanka
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.addressInSrilankaGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Email Address
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.emailGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Alternate Email
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.alternateEmailGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Telephone Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.telephoneGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Mobile Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.mobileGroupTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Fax Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {touristGroupsData?.faxNumberGroupTourist}
              </p>
            </div>

            <div className="py-8 text-center">
              <Link
                href={`/srilanka/slvisa/tourist-eta/apply-in-group/${touristGroupsData?._id}`}
                className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2"
              >
                Edit Travel Info
              </Link>
            </div>

            <div className="py-8">
              <div className="w-full h-full ">
                <div className="overflow-x-auto">
                  <table className="w-full text-left table-auto min-w-max">
                    <thead>
                      <tr className="rounded-xl">
                        {tableHead.map(head => (
                          <th
                            key={head}
                            className="bg-[#0068E5] text-black p-4 "
                          >
                            <div
                              variant="small"
                              color="blue-gray"
                              className="font-bold leading-none "
                            >
                              {head}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {touristGroupsData?.members?.length > 0
                        ? touristGroupsData?.members?.map(member => (
                            <tr key={member._id}>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {member?.givenNameGroupTourist}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {member?.passportNumberGroupTourist}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {member?.nationalityGroupTourist}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {formatDateYearDayMonth(
                                    member?.dateOfBirthGroupTourist
                                  )}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {formatDateYearDayMonth(
                                    member?.issueDateGroupTourist
                                  )}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {member?.genderGroupTourist}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {formatDateYearDayMonth(
                                    member?.expiryDateGroupTourist
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))
                        : 'No Member found'}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end w-full ">
                  <div className="w-fit bg-[#0068E5] text-black flex space-x-5 items-center p-3 font-semibold">
                    <p>Total Visa Fee </p> <p> 50 USD </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-8 text-center">
              <Link
                href="/srilanka/slvisa/tourist-eta/apply-in-group/step-two"
                className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2"
              >
                Edit Member Info
              </Link>
            </div>

            <div className="py-5">
              <Formsubhead formheadreview="Summary" />
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Total Application Fee for the Individual
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                View Document
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                eServices Processing Fee
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                View Document
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Total VISA Application Fee
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                View Document
              </p>
            </div>

            <div className="py-8 text-left">
              <button className="inline-flex items-center gap-3 px-12 py-3 rounded-full text-white bg-green-700 cursor-pointer formbtn">
                Proceed to Pay
              </button>

              <div className="pt-4 text-red-500">
                Please note that incase of payment failure or application not
                updated, send an email to (visa@etagov.la)
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Page;
