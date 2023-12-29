'use client';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import StepProcess from '@/components/srilanka/common/StepProcess';
import { useFormContext } from '@/context/formContext';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ImSpinner2 } from 'react-icons/im';

const Page = () => {
  const { state } = useFormContext();
  const router = useRouter();

  const getQuery = useQueryGet(
    apiEndpoint.SL_VISA_BUSINESS_INDIVIDUAL,
    state?.formId,
    'businessIndividual'
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
    return router.push('/srilanka/slvisa/business-purpose-eta/apply-individual');
  }

  if (getQuery.isSuccess) {
    const { data: businessIndividualData } = getQuery.data;
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
          <Formheading formHead="Travel Information - Business Purpose - Individual" />
          <div className="space-y-2 divide-y-[1px] pt-5">
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Surname / Family Name
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.familyNameBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Other / Given Names
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.givenNameBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Title
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.titleBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Date of Birth
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize">
                {businessIndividualData?.dateOfBirthBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Gender
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.genderBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Nationality
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.nationalityBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Are you fully vaccinated for covid-19
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.covidVaccinatedBusinessIndividualTourist
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Country of Birth
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.countryOfBirthBusinessIndividualTourist
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Occupation
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.occupationBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Passport Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.passportNumberBusinessIndividualTourist
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Passport Issued Date
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.issueDateBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Passport Expiry Date
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.expiryDateBusinessIndividualTourist}
              </p>
            </div>

            <div className="py-5">
              <Formsubhead formheadreview="Travel Information" />
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Where you have been during last 14 days before this travel
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.whereHaveBeenBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Intended Arrival Date
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.attendantArrivalDateBusinessIndividualTourist
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Purpose of Visit
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.purposeOfVisitBusinessIndividualTourist
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Purpose Description
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.purposeDescriptionBusinessIndividualTourist
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Port of Departure
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.portOfDepartureBusinessIndividualTourist
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Airline/Vessel
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.arilineVesselBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Flight/Vessel Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.flightVesselNumberBusinessIndividualTourist
                }
              </p>
            </div>

            <div className="py-5">
              <Formsubhead formheadreview="Contact Details" />
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Company Name
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.companyNameBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Address
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.addressLineOneBusinessIndividualTourist
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Email Address
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.emailBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Alternate Email
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.alternateEmailBusinessIndividualTourist
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Telephone Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.telephoneBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Mobile Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.mobileBusinessIndividualTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Fax Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.faxNumberBusinessIndividualTourist}
              </p>
            </div>

            <div className="py-5">
              <Formsubhead formheadreview="Contact Details of Sri Lankan Company" />
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Company Name
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.companyNameBusinessIndividualTouristOfSrilankaCompany
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Address (Number)
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.addressLineOneBusinessIndividualTouristOfSrilankaCompany
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Address (Street)
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.addressLineTwoBusinessIndividualTouristOfSrilankaCompany
                }
              </p>
            </div>

            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                City
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.cityBusinessIndividualTouristOfSrilankaCompany
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                State
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.stateBusinessIndividualTouristOfSrilankaCompany
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Zip Code
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.zipCodeBusinessIndividualTouristOfSrilankaCompany
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Telephone Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.telephoneBusinessIndividualTouristOfSrilankaCompany
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Mobile Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.mobileBusinessIndividualTouristOfSrilankaCompany
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Fax Number
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.faxNumberBusinessIndividualTouristOfSrilankaCompany
                }
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Email Address
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {
                  businessIndividualData?.emailBusinessIndividualTouristOfSrilankaCompany
                }
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
                {businessIndividualData?.validResidenceBusinessTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Are you currently in Sri Lanka with a valid ETA or obtained an
                extension of visa?
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize ">
                {businessIndividualData?.validEtaOrExtensionBusinessTourist}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                Do you have a multiple entry visa to Sri Lanka?
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify capitalize">
                {businessIndividualData?.multipleEntryVisaBusinessTourist}
              </p>
            </div>

            <div className="py-8 text-center">
              <Link
                href={`/srilanka/slvisa/business-purpose-eta/apply-individual/${businessIndividualData?._id}`}
                className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2"
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
