'use client';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { ImSpinner2 } from 'react-icons/im';
import { useRouter } from 'next/navigation';
import apiEndpoint from '@/services/apiEndpoint';
import useQueryGet from '@/hooks/useQuery';
import StepProcess from '@/components/srilanka/common/StepProcess';
import useUpdate from '@/hooks/useUpdate';
import { businessThirdPartySchema } from '@/constant/srilankaConstant';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDate } from '@/lib/minDate';

const Page = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.SL_VISA_BUSINESS_THIRD_PARTY,
    id,
    'businessThirdParty'
  );

  const updateMutation = useUpdate(
    apiEndpoint.SL_VISA_BUSINESS_THIRD_PARTY,
    id,
    'form updated successfully',
    '/srilanka/slvisa/business-purpose-eta/apply-for-third-party/step-two',
    getQuery.refetch,
    'businessThirdParty'
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
    return router.push(
      '/srilanka/slvisa/business-purpose-eta/apply-for-third-party'
    );
  }
  if (getQuery.isSuccess) {
    const {
      data: {
        data: {
          _id,
          __v,
          createdAt,
          updatedAt,
          members,
          ...businessThirdPartyData
        },
      },
    } = getQuery;
    return (
      <div>
        <div>
          <Formmainsection
            title="Lorem Ipsum is simply dummy text of the printing"
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />

          <div className="container md:py-8 py-20 md;px-0 px-3">
            <StepProcess
              color1=" bg-[#0068E5]"
              color2="bg-[#E3E3E3]"
              color3="bg-[#E3E3E3] "
              color4="bg-[#E3E3E3]"
            />
            <Formheading
              formHead="Travel Information - Business Purpose - Third Party"
              formPara="All information should be entered as per the applicant’s passport"
            />

            <Formsubhead subHead="Note that now it is October 23, 2023, 11:58 am in Sri Lanka" />

            <div>
              <Formik
                initialValues={businessThirdPartyData}
                validationSchema={businessThirdPartySchema.yupSchema}
                validateOnChange={true}
                validateOnMount={true}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  updateMutation.mutate(values);
                  setSubmitting(false);
                }}
              >
                {({ values, isValid, setFieldValue }) => (
                  <Form>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>
                          Where you have been during last 14 days before this
                          trip?*{' '}
                        </label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Where you have been in since last 14 days.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="whereHaveBeenThirdPartyBusiness"
                          name="whereHaveBeenThirdPartyBusiness"
                          // placeholder="Place"
                          className="new-form-input "
                        />

                        <ErrorMessage name="whereHaveBeenThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Attended Arrrival Date*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please select the date you intend to enter Sri Lanka.
                          An ETA is valid for up to 03 month from date of issue.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <ReactDatePickerInput
                          className="new-form-input"
                          name="attendantArrivalDateThirdPartyBusiness"
                          selected={
                            new Date(
                              values.attendantArrivalDateThirdPartyBusiness
                            )
                          }
                          setFieldValue={setFieldValue}
                          minDate={minDate(1)}
                        />
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Purpose of visit*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Select you purpose of traveling to Sri Lanka.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="purposeOfVisitThirdPartyBusiness"
                          name="purposeOfVisitThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="PARTICIPATE IN BUSINESS MEETINGS AND NEGOTIATIONS">
                            PARTICIPATE IN BUSINESS MEETINGS AND NEGOTIATIONS
                          </option>
                          <option value="SHORT TERM TRAINING PROGRAMS">
                            SHORT TERM TRAINING PROGRAMS
                          </option>
                        </Field>

                        <ErrorMessage name="purposeOfVisitThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Purpose Description*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          as="textarea"
                          rows="3"
                          id="PurposeDescriptionThirdPartyBusiness"
                          name="PurposeDescriptionThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input"
                        />
                        <ErrorMessage name="PurposeDescriptionThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Port of departure*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="portOfDepartureThirdPartyBusiness"
                          name="portOfDepartureThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="portOfDepartureThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Arilne/Vessel*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="ArilineVesselThirdPartyBusiness"
                          name="ArilineVesselThirdPartyBusiness"
                          // placeholder="Ariline/Vessel"
                          className="new-form-input "
                        />

                        <ErrorMessage name="ArilineVesselThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Flight/Vessel Number*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="flightVesselNumberThirdPartyBusiness"
                          name="flightVesselNumberThirdPartyBusiness"
                          // placeholder="Passport Number"
                          className="new-form-input "
                        />

                        <ErrorMessage name="flightVesselNumberThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <Formsubhead subHead="Contact Details of Applicant's Company" />

                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Company Name </label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type your company Name.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="companyNameApplicantThirdPartyBusiness"
                          name="companyNameApplicantThirdPartyBusiness"
                          // placeholder="Place"
                          className="new-form-input "
                        />

                        <ErrorMessage name="companyNameApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Address Line 1* </label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type your current apartment or house / building
                          number in your address.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="addressLineOneApplicantThirdPartyBusiness"
                          name="addressLineOneApplicantThirdPartyBusiness"
                          // placeholder="Place"
                          className="new-form-input "
                        />

                        <ErrorMessage name="addressLineOneApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Address Line 2*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="addressLineTwoApplicantThirdPartyBusiness"
                          name="addressLineTwoApplicantThirdPartyBusiness"
                          className="new-form-input "
                        />

                        <ErrorMessage name="addressLineTwoApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>City*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type the name of the city in which you live
                          into the text box.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="cityApplicantThirdPartyBusiness"
                          name="cityApplicantThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="cityApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>State*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type the name of the state in which you live
                          into the text box.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="stateApplicantThirdPartyBusiness"
                          name="stateApplicantThirdPartyBusiness"
                          // placeholder="Ariline/Vessel"
                          className="new-form-input "
                        />

                        <ErrorMessage name="stateApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Zip/Postal Code*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="zipCodeApplicantThirdPartyBusiness"
                          name="zipCodeApplicantThirdPartyBusiness"
                          // placeholder="Ariline/Vessel"
                          className="new-form-input "
                        />

                        <ErrorMessage name="zipCodeApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Country*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please select the name of the country in which you
                          live in.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="countryApplicantThirdPartyBusiness"
                          name="countryApplicantThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                          <option value="france">France</option>
                        </Field>

                        <ErrorMessage name="countryApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Telephone No.*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type your current telephone number into the
                          text box.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="telephoneApplicantThirdPartyBusiness"
                          name="telephoneApplicantThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="telephoneApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Mobile No.*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="mobileApplicantThirdPartyBusiness"
                          name="mobileApplicantThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="mobileApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Fax Number*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="faxNumberApplicantThirdPartyBusiness"
                          name="faxNumberApplicantThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="faxNumberApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Email Address*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          VISA Approval/Acknowledgment will be sent to this
                          email address also.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="emailApplicantThirdPartyBusiness"
                          name="emailApplicantThirdPartyBusiness"
                          className="new-form-input"
                        />
                        <ErrorMessage name="emailApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Alternate Email Address*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          VISA Approval/Acknowledgment will be sent to this
                          alternate email address also.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="alternateEmailApplicantThirdPartyBusiness"
                          name="alternateEmailApplicantThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="alternateEmailApplicantThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <Formsubhead subHead="Contact Details of Sri Lankan Company" />

                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Company Name </label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type your company Name.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="companyNameSriLankanThirdPartyBusiness"
                          name="companyNameSriLankanThirdPartyBusiness"
                          // placeholder="Place"
                          className="new-form-input "
                        />

                        <ErrorMessage name="companyNameSriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Address Line 1* </label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type your current apartment or house / building
                          number in your address.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="addressLineOneSriLankanThirdPartyBusiness"
                          name="addressLineOneSriLankanThirdPartyBusiness"
                          // placeholder="Place"
                          className="new-form-input "
                        />

                        <ErrorMessage name="addressLineOneSriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Address Line 2*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="addressLineTwoSriLankanThirdPartyBusiness"
                          name="addressLineTwoSriLankanThirdPartyBusiness"
                          className="new-form-input "
                        />

                        <ErrorMessage name="addressLineTwoSriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>City*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type the name of the city in which you live
                          into the text box.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="citySriLankanThirdPartyBusiness"
                          name="citySriLankanThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="citySriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>State*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type the name of the state in which you live
                          into the text box.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="stateSriLankanThirdPartyBusiness"
                          name="stateSriLankanThirdPartyBusiness"
                          // placeholder="Ariline/Vessel"
                          className="new-form-input "
                        />

                        <ErrorMessage name="stateSriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Zip/Postal Code*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="zipCodeSriLankanThirdPartyBusiness"
                          name="zipCodeSriLankanThirdPartyBusiness"
                          // placeholder="Ariline/Vessel"
                          className="new-form-input "
                        />

                        <ErrorMessage name="zipCodeSriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Country*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please select the name of the country in which you
                          live in.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="countrySriLankanThirdPartyBusiness"
                          name="countrySriLankanThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                          <option value="france">France</option>
                        </Field>

                        <ErrorMessage name="countrySriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Telephone No.*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type your current telephone number into the
                          text box.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="telephoneSriLankanThirdPartyBusiness"
                          name="telephoneSriLankanThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="telephoneSriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Mobile No.*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="mobileSriLankanThirdPartyBusiness"
                          name="mobileSriLankanThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="mobileSriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Fax Number*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="faxNumberSriLankanThirdPartyBusiness"
                          name="faxNumberSriLankanThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="faxNumberSriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Email Address*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          VISA Approval/Acknowledgment will be sent to this
                          email address also.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="emailSriLankanThirdPartyBusiness"
                          name="emailSriLankanThirdPartyBusiness"
                          className="new-form-input"
                        />
                        <ErrorMessage name="emailSriLankanThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <Formsubhead subHead="Details of third party" />

                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Type of Third Party*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Specify your type Personal or Organization.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="partyTypeThirdPartyBusiness"
                          name="partyTypeThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                          <option value="france">France</option>
                        </Field>

                        <ErrorMessage name="partyTypeThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Surname/Family Name* </label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Enter your last name (surname) as it appears on your
                          passport
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="familyNameTypeOfThirdPartyBusiness"
                          name="familyNameTypeOfThirdPartyBusiness"
                          // placeholder="Surname"
                          className="new-form-input "
                        />

                        <ErrorMessage name="familyNameTypeOfThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Other/Given Names*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Enter your given name as it appears on your passport
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="givenNameTypeOfThirdPartyBusiness"
                          name="givenNameTypeOfThirdPartyBusiness"
                          // placeholder="Given Name"
                          className="new-form-input "
                        />

                        <ErrorMessage name="givenNameTypeOfThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Address Line 1* </label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type your current apartment or house / building
                          number in your address.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="addressLineOneThirdPartyBusiness"
                          name="addressLineOneThirdPartyBusiness"
                          // placeholder="Place"
                          className="new-form-input "
                        />

                        <ErrorMessage name="addressLineOneThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Address Line 2*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="addressLineTwoThirdPartyBusiness"
                          name="addressLineTwoThirdPartyBusiness"
                          className="new-form-input "
                        />

                        <ErrorMessage name="addressLineTwoThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>City*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type the name of the city in which you live
                          into the text box.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="cityThirdPartyBusiness"
                          name="cityThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="cityThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>State*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type the name of the state in which you live
                          into the text box.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="stateThirdPartyBusiness"
                          name="stateThirdPartyBusiness"
                          // placeholder="Ariline/Vessel"
                          className="new-form-input "
                        />

                        <ErrorMessage name="stateThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Zip/Postal Code*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="zipCodeThirdPartyBusiness"
                          name="zipCodeThirdPartyBusiness"
                          // placeholder="Ariline/Vessel"
                          className="new-form-input "
                        />

                        <ErrorMessage name="zipCodeThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Country*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please select the name of the country in which you
                          live in.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="countryThirdPartyBusiness"
                          name="countryThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                          <option value="france">France</option>
                        </Field>

                        <ErrorMessage name="countryThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Telephone No.*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please type your current telephone number into the
                          text box.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="telephoneThirdPartyBusiness"
                          name="telephoneThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="telephoneThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Mobile No.*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="mobileThirdPartyBusiness"
                          name="mobileThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="mobileThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Fax Number*</label>
                      </div>

                      <div className="mark-section ThirdParty"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="faxNumberThirdPartyBusiness"
                          name="faxNumberThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="faxNumberThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Email Address*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          VISA Approval/Acknowledgment will be sent to this
                          email address also.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="emailThirdPartyBusiness"
                          name="emailThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="emailThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Alternate Email Address*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          VISA Approval/Acknowledgment will be sent to this
                          alternate email address also.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="alternateEmailThirdPartyBusiness"
                          name="alternateEmailThirdPartyBusiness"
                          // placeholder="Port of Departure"
                          className="new-form-input "
                        />
                        <ErrorMessage name="alternateEmailThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="py-8 text-center">
                      {updateMutation.isError ? (
                        <div className="text-red-500">
                          An error occurred: {updateMutation.error.message}
                        </div>
                      ) : null}
                      <button
                        className={`formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-12 py-3 rounded-full ${
                          !isValid ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                        disabled={!isValid}
                        type="submit"
                      >
                        {updateMutation.isPending ? (
                          <>
                            <ImSpinner2 className="animate-spin" /> Loading
                          </>
                        ) : (
                          'Update'
                        )}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Page;
