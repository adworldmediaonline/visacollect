'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Heading from '@/components/australia/common/Heading';
import SubHeading from '@/components/australia/common/SubHeading';
import React from 'react';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { getAllCountries } from '@/lib/getAllCountries';
import { cambodiaSchema } from '@/constant/cambodiaSchema';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2, ImSpinner8 } from 'react-icons/im';
import { addDays } from 'date-fns';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import useUpdate from '@/hooks/useUpdate';

function Page({ params }) {
  const { id } = params;
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.CAMBODIA_VISA_APPLICATION,
    id,
    'cambodiaVisaApplication'
  );

  const updateMutation = useUpdate(
    apiEndpoint.CAMBODIA_VISA_APPLICATION,
    id,
    'form',
    '/kh/payment',
    getQuery.refetch,
    'cambodiaVisaApplication'
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
    return router.push('/kh/payment');
  }

  if (getQuery.isSuccess) {
    const {
      data: {
        data: {
          _id,
          __v,
          createdAt,
          updatedAt,
          ...cambodiaVisaApplicationData
        },
      },
    } = getQuery;
    return (
      <div>
        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <Heading formHead=" Visa to Cambodia Application" />

          <div>
            <Formik
              initialValues={cambodiaVisaApplicationData}
              validationSchema={cambodiaSchema.yupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                updateMutation.mutate(values);
                setSubmitting(false);
              }}
            >
              {({ values, isValid, setFieldValue }) => (
                <Form>
                  <SubHeading subHead="Personal Details" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Family name (s) *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Family name is also known as Last name or Surname.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="personalDetails.familyName"
                        id="personalDetails.familyName"
                      />

                      <ErrorMessage name="personalDetails.familyName">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>First Name *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please provide your first name exactly as shown on the
                        Passport.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="personalDetails.firstName"
                        id="personalDetails.firstName"
                      />

                      <ErrorMessage name="personalDetails.firstName">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Middle Name(s)</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please provide your Middle name(s) exactly as shown on
                        the Passport.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="personalDetails.middleName"
                        id="personalDetails.middleName"
                      />

                      <ErrorMessage name="personalDetails.middleName">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Date of birth: *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Select your date of birth, as it appears on your
                        passport.{' '}
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="dateOfBirth"
                        selected={new Date(values.dateOfBirth)}
                        setFieldValue={setFieldValue}
                        maxDate={values.passportDateOfIssue}
                      />
                      <ErrorMessage name="dateOfBirth">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Country of Birth *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        select the name of the country shown in the Place of
                        birth field on your passport.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        className="new-form-input"
                        name="personalDetails.countryOfBirth"
                        id="personalDetails.countryOfBirth"
                      >
                        <option value="">Select</option>
                        {getAllCountries()}
                      </Field>

                      <ErrorMessage name="personalDetails.countryOfBirth">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Country of Citizenship *</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        className="new-form-input"
                        name="personalDetails.countryOfCitizenship"
                        id="personalDetails.countryOfCitizenship"
                      >
                        <option value="">Select</option>
                        {getAllCountries()}
                      </Field>

                      <ErrorMessage name="personalDetails.countryOfCitizenship">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Gender *</label>
                    </div>

                    <div className="mark-section group"></div>
                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        component="select"
                        className="new-form-input"
                        name="personalDetails.gender"
                        id="personalDetails.gender"
                      >
                        <option value="">Select</option>

                        <option value="male">MALE</option>
                        <option value="female">FEMALE</option>
                      </Field>

                      <ErrorMessage name="personalDetails.gender">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <SubHeading subHead="Passport Details" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Country of Passport *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please indicate the country/territory of your
                        citizenship, the country of the passport you will use to
                        travel.{' '}
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        className="new-form-input"
                        name="passportDetails.passportCountry"
                        id="passportDetails.passportCountry"
                      >
                        <option value="">Select</option>
                        {getAllCountries()}
                      </Field>

                      <ErrorMessage name="passportDetails.passportCountry">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Passport Number *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Enter the passport number exactly as it appears on the
                        biographic information page.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="passportDetails.passportNumber"
                        id="passportDetails.passportNumber"
                      />

                      <ErrorMessage name="passportDetails.passportNumber">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Passport Date of Issue *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Issue date can be found on your passport or travel
                        document.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="passportDateOfIssue"
                        selected={new Date(values.passportDateOfIssue)}
                        setFieldValue={setFieldValue}
                        maxDate={new Date()}
                      />
                      <ErrorMessage name="passportDateOfIssue">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Passport Expiry Date *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Expiry date can be found on your passport or travel
                        document.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="passportDetails.passportExpiryDate"
                        selected={
                          new Date(values.passportDetails.passportExpiryDate)
                        }
                        setFieldValue={setFieldValue}
                        minDate={addDays(values.passportDateOfIssue, 180)}
                      />
                      <ErrorMessage name="passportDetails.passportExpiryDate">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <SubHeading subHead="Contact Details" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>E-mail address: *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        You will receive an e-mail that confirms the receipt of
                        your Application at the e-mail address you provide.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        id="contactDetails.emailAddress"
                        name="contactDetails.emailAddress"
                      />

                      <ErrorMessage name="contactDetails.emailAddress">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Confirm e-mail address: *</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="contactDetails.confirmEmailAddress"
                        id="contactDetails.confirmEmailAddress"
                      />

                      <ErrorMessage name="contactDetails.confirmEmailAddress">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Phone Number *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please indicate a mobile/cell telephone. It is important
                        to indicate a correct phone number, since you may
                        receive updates on the status of your Application.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="contactDetails.phoneNumber"
                        id="contactDetails.phoneNumber"
                      />

                      <ErrorMessage name="contactDetails.phoneNumber">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <SubHeading subHead="Travel Details" />

                  <div className="pt-10 main-form-section">
                    <div className="label-section">
                      <label>Port of Entry * </label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please note that only the listed ports of entry support
                        e-Visa.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        id="travelDetails.portOfEntry"
                        name="travelDetails.portOfEntry"
                        component="select"
                        className="new-form-input"
                      >
                        <option value="">Select</option>
                        <option value="Tourism">Tourism</option>
                        <option value="india">Business</option>
                        <option value="australia">Transit</option>
                      </Field>

                      <ErrorMessage name="travelDetails.portOfEntry">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Proposed Date of Entry *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please indicate an estimated date of entry. An evisa to
                        Cambodia once issued is valid for 3 months before you
                        travel.{' '}
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="travelDetails.proposedDateOfEntry"
                        selected={
                          new Date(values.travelDetails.proposedDateOfEntry)
                        }
                        setFieldValue={setFieldValue}
                        minDate={addDays(new Date(), 5)}
                      />
                      <ErrorMessage name="travelDetails.proposedDateOfEntry">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 py-4">
                    <h2>
                      Are you traveling to Cambodia for Tourist Purpose? *
                    </h2>

                    <div className="flex gap-8 pt-4">
                      <div className="flex gap-4">
                        <Field
                          type="radio"
                          className="w-6 h-6"
                          name="travelDetails.touristPurpose"
                          id="travelDetailstouristPurposeYes"
                          value="yes"
                        />
                        <h3>Yes</h3>
                      </div>
                      <div className="flex gap-4">
                        <Field
                          type="radio"
                          className="w-6 h-6"
                          name="travelDetails.touristPurpose"
                          id="travelDetailstouristPurposeNo"
                          value="no"
                        />
                        <h3>No</h3>
                      </div>
                    </div>
                  </div>

                  {values.travelDetails.touristPurpose === 'no' && (
                    <div className="pt-10 main-form-section">
                      <div className="label-section">
                        <label>Purpose of Visit * </label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please select the Purpose of Visit that best describes
                          your trip to Cambodia.{' '}
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          id="travelDetails.purposeOfVisit"
                          name="travelDetails.purposeOfVisit"
                          component="select"
                          className="new-form-input"
                        >
                          <option value="">Select</option>
                          <option value="tourism">Tourism</option>
                          <option value="india">Business</option>
                          <option value="transit">Transit</option>
                        </Field>

                        <ErrorMessage name="travelDetails.purposeOfVisit">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  )}

                  <SubHeading subHead="Declaration of Applicant" />

                  <div className="flex items-center gap-4 py-7">
                    <Field
                      type="checkbox"
                      className="w-6 h-6"
                      name="termsAndConditions"
                      id="termsAndConditions"
                    />
                    <h2>
                      I have read and understood the terms and conditions and
                      privacy policy.
                    </h2>
                    <ErrorMessage name="termsAndConditions">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="flex items-center gap-4 py-7">
                    <Field
                      type="checkbox"
                      className="w-6 h-6"
                      name="declareInformation"
                      id="declareInformation"
                    />
                    <h2>
                      I declare that the information I have given in this
                      application is truthful, complete and correct.
                    </h2>
                    <ErrorMessage name="declareInformation">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="py-8 text-center">
                    {updateMutation.isError ? (
                      <div className="text-red-500">
                        An error occurred: {updateMutation.error.message}
                      </div>
                    ) : null}
                    <button
                      className={`text-white bg-gradient-to-r from-[#1998C7] to-[#007FAE]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ${
                        !isValid ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                      disabled={!isValid}
                      type="submit"
                    >
                      {updateMutation.isPending ? (
                        <>
                          Loading...{' '}
                          <ImSpinner8 className="w-4 h-4 animate-spin" />
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
    );
  }
}

export default Page;
