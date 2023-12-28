'use client';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import StepProcess from '@/components/srilanka/common/StepProcess';
import { useFormContext } from '@/context/formContext';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ImSpinner2 } from 'react-icons/im';

const Page = () => {
  const { state } = useFormContext();
  const router = useRouter();
  const {
    isPending: getTouristIndividualByIdIsPending,
    error: getTouristIndividualByIdError,
    data: getTouristIndividualByIdData,
    isSuccess: getTouristIndividualByIdIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ['touristIndividual'],
    queryFn: () =>
      axiosInstance.get(
        `${apiEndpoint.SL_VISA_TOURIST_INDIVIDUAL}/${state.formId}`
      ),
    enabled: !!state.formId,
  });

  if (getTouristIndividualByIdIsPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        <ImSpinner2 className="w-4 h-4 text-black animate-spin" />
        loading
      </div>
    );
  }

  if (getTouristIndividualByIdError) {
    return router.push('/srilanka/slvisa/tourist-eta/apply-individual');
  }

  if (getTouristIndividualByIdIsSuccess) {
    const { data: touristIndividualData } = getTouristIndividualByIdData;

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
              color2="bg-[#F7BD6D]" 
              color3="bg-[#E3E3E3] "
              color4="bg-[#E3E3E3]"
              />
          </div>
          <Formheading formHead="Travel Information - Tourist Purpose - Individual" />
          <div className="space-y-2 divide-y-[1px] pt-5">
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Surname / Family Name
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.familyNameIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Other / Given Names
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.givenNameIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Title
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.titleIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Date of Birth
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize">
                {touristIndividualData?.dateOfBirthIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Gender
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.genderIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Nationality
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.nationalityIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Are you fully vaccinated for covid-19
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.covidVaccinatedIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Country of Birth
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.countryOfBirthIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Occupation
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.occupationIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Passport Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.passportNumberIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Passport Issued Date
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.issueDateIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Passport Expiry Date
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.expiryDateIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Passport Front Page
              </h2>
              {/* <p className="font-bold leading-relaxed tracking-wide text-justify capitalize "> */}
              <div className="relative w-32 aspect-video">
                <Image
                  src={touristIndividualData?.passportImageIndividualTourist}
                  alt="passport image"
                  fill
                  className="object-cover"
                />
              </div>
              {/* </p> */}
            </div>

            <div className="py-5">
              <Formsubhead formheadreview="Travel Information" />
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Where you have been during last 14 days before this travel
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.whereHaveBeenIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Intended Arrival Date
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.attendantArrivalDateIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Purpose of Visit
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.purposeOfVisitIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                No. of validity required
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.visaValidPeriodIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Port of Departure
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.portOfDepartureIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Airline/Vessel
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.arilineVesselIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Flight/Vessel Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.flightVesselNumberIndividualTourist}
              </p>
            </div>

            <div className="py-5">
              <Formsubhead formheadreview="Contact Details" />
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Address
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.addressLineOneIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Address 2
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.addressLineTwoIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Address in Sri Lanka
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.addressInSrilankaIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Email Address
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.emailIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Alternate Email
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.alternateEmailIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Telephone Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.telephoneIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Mobile Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.mobileIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Fax Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.faxNumberIndividualTourist}
              </p>
            </div>

            <div className="py-5">
              <Formsubhead formheadreview="Summary" />
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Total Application Fee for the Individual
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                View Document
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                eServices Processing Fee
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                View Document
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Total VISA Application Fee
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                View Document
              </p>
            </div>

            <div className="py-5">
              <Formsubhead formheadreview="Declaration" />
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Do you have a valid residence visa to Sri Lanka?
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.validResidenceIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Are you currently in Sri Lanka with a valid ETA or obtained an
                extension of visa?
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {touristIndividualData?.validEtaOrExtensionIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Do you have a multiple entry visa to Sri Lanka?
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize">
                {touristIndividualData?.multipleEntryVisaIndividualTourist}
              </p>
            </div>

            <div className="py-8 text-center">
              <Link
                href={`/srilanka/slvisa/tourist-eta/apply-individual/${touristIndividualData?._id}`}
                className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#F7BD6D] px-8 py-2"
              >
                Edit Data
              </Link>
            </div>

            <div className="py-8 text-left">
              <button className="inline-flex items-center gap-3 px-8 py-2 text-white bg-green-700 cursor-pointer formbtn">
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
