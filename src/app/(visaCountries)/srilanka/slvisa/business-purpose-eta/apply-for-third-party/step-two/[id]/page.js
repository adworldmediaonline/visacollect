'use client';
import { LuImagePlus } from 'react-icons/lu';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete, MdDeleteOutline } from 'react-icons/md';
import { ImSpinner2 } from 'react-icons/im';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useFormContext } from '@/context/formContext';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import { businessThirdPartySchema } from '@/constant/srilankaConstant';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import useDelete from '@/hooks/useDelete';
import SingleFileUpload from '@/components/srilanka/SingleFileUpload';
import useUpdate from '@/hooks/useUpdate';
import StepProcess from '@/components/srilanka/common/StepProcess';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDateWithDate } from '@/lib/minDate';
const data = [
  {
    id: 1,
    question: 'Do you have a valid residence visa to Sri Lanka? *',
    name: 'validResidenceThirdPartyBusiness',
    inputName: 'validResidenceThirdPartyBusiness',
  },
  {
    id: 2,
    question:
      'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
    name: 'validEtaOrExtensionThirdPartyBusiness',
    inputName: 'validEtaOrExtensionThirdPartyBusiness',
  },
  {
    id: 3,
    question: ' Do you have a multiple entry visa to Sri Lanka?*',
    name: 'multipleEntryVisaThirdPartyBusiness',
    inputName: 'multipleEntryVisaThirdPartyBusiness',
  },
];

const tableHead = [
  'Given Name',
  'Passport No.',
  'Nationality',
  'Date of Birth',
  'Passport Issued Date',
  'Gender',
  '',
];

const tableRows = [
  {
    name: 'John Michael',
    number: '123456789',
    nationality: 'ALBANIA',
    dateOfBirth: '05-10-1997',
    gender: 'FEMALE',
    passportIssuedDate: '23/04/18',
  },
  {
    name: 'Alexa Liras',
    number: '123456789',
    nationality: 'ALBANIA',
    dateOfBirth: '05-10-1997',
    gender: 'FEMALE',
    passportIssuedDate: '23/04/18',
  },
];

const Page = ({ params }) => {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.SL_VISA_BUSINESS_THIRD_PARTY,
    state?.formId,
    'businessThirdParty'
  );

  const updateMutation = useUpdate(
    apiEndpoint.SL_VISA_BUSINESS_THIRD_PARTY_MEMBERS,
    params?.id,
    'form',
    '/srilanka/slvisa/business-purpose-eta/apply-for-third-party/step-two',
    getQuery.refetch,
    'businessThirdParty'
  );

  const deleteMutation = useDelete(
    apiEndpoint.SL_VISA_BUSINESS_THIRD_PARTY_MEMBERS,
    getQuery.refetch,
    'businessThirdParty',
    'Member deleted successfully',
    false
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
      data: { data: businessThirdPartyData },
    } = getQuery;

    const currentMember = businessThirdPartyData?.members?.find(
      member => member?._id === params?.id
    );

    const { _id, updatedAt, createdAt, __v, formId, ...currentMemberData } =
      currentMember;

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
              formHead="Member Information - Business Purpose - Third Party"
              formPara="All information should be entered as per the applicant’s passport"
            />

            <div>
              <Formik
                initialValues={currentMemberData}
                validationSchema={
                  businessThirdPartySchema.yupSchemaMemberBusiness
                }
                validateOnChange={true}
                validateOnMount={true}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  const formData = new FormData();

                  Object.entries({
                    ...values,
                    formId: businessThirdPartyData._id,
                  }).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                      formData.append(key, JSON.stringify(value));
                    } else if (value instanceof File) {
                      // Handle File objects
                      formData.append(key, value);
                    } else {
                      // For other non-array and non-File values
                      formData.append(key, value);
                    }
                  });

                  updateMutation.mutate(formData);
                  setSubmitting(false);
                }}
              >
                {({
                  values,
                  isValid,

                  setFieldValue,
                }) => (
                  <Form>
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
                          id="familyNameThirdPartyBusiness"
                          name="familyNameThirdPartyBusiness"
                          // placeholder="Surname"
                          className="new-form-input "
                        />

                        <ErrorMessage name="familyNameThirdPartyBusiness">
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
                          id="givenNameThirdPartyBusiness"
                          name="givenNameThirdPartyBusiness"
                          // placeholder="Given Name"
                          className="new-form-input "
                        />

                        <ErrorMessage name="givenNameThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Title*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Select your preferred title based on your gender,
                          marital status or professional designation.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="titleThirdPartyBusiness"
                          name="titleThirdPartyBusiness"
                          // placeholder="Title"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="Dr">DR</option>
                          <option value="Master">MASTER</option>
                          <option value="Miss">MISS</option>
                          <option value="Mr">MR</option>
                          <option value="Mrs">MRS</option>
                          <option value="Ms">MS</option>
                          <option value="Rev">REV</option>
                        </Field>

                        <ErrorMessage name="titleThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Date of Birth*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Select your date of birth as it appears in your
                          passport in the calendar provided below.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <ReactDatePickerInput
                          className="new-form-input"
                          name="dateOfBirthThirdPartyBusiness"
                          selected={
                            new Date(values.dateOfBirthThirdPartyBusiness)
                          }
                          setFieldValue={setFieldValue}
                          maxDate={new Date()}
                        />
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Gender*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please select your gender: Male or Female.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="genderThirdPartyBusiness"
                          name="genderThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Field>

                        <ErrorMessage name="genderThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Nationality*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Your country of nationality is the country in which
                          you have or can obtain a passport.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="nationalityThirdPartyBusiness"
                          name="nationalityThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                          <option value="france">France</option>
                        </Field>

                        <ErrorMessage name="nationalityThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Country of Birth*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Select the country where you were born.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="countryOfBirthThirdPartyBusiness"
                          name="countryOfBirthThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                          <option value="france">France</option>
                        </Field>

                        <ErrorMessage name="countryOfBirthThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Are you fully vaccinated for COVID 19*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Business who has fully vaccinated recommended dosage
                          prior to your 14 days of arrival or COVID recovered
                          applicant after completed one dose of vaccination with
                          vaccination certificate.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          id="covidVaccinatedThirdPartyBusiness"
                          name="covidVaccinatedThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </Field>

                        <ErrorMessage name="covidVaccinatedThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Country of Address*</label>
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
                          id="countryOfAddressThirdPartyBusiness"
                          name="countryOfAddressThirdPartyBusiness"
                          className="new-form-input "
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="france">France</option>
                        </Field>

                        <ErrorMessage name="countryOfAddressThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Occupation*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please provide your current occupation.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="occupationThirdPartyBusiness"
                          name="occupationThirdPartyBusiness"
                          // placeholder="Occupation"
                          className="new-form-input "
                        />

                        <ErrorMessage name="occupationThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Passport Number*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please specify Applicant&apos;s Passport Number
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="passportNumberThirdPartyBusiness"
                          name="passportNumberThirdPartyBusiness"
                          // placeholder="Passport Number"
                          className="new-form-input "
                        />

                        <ErrorMessage name="passportNumberThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Issue Date*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please specify the Issue Date of your current
                          passport.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <ReactDatePickerInput
                          className="new-form-input"
                          name="issueDateThirdPartyBusiness"
                          selected={
                            new Date(values.issueDateThirdPartyBusiness)
                          }
                          setFieldValue={setFieldValue}
                          minDate={
                            new Date(values.dateOfBirthThirdPartyBusiness)
                          }
                          disabled={values.dateOfBirthThirdPartyBusiness === ''}
                        />
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Expiry date*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please specify the Expiry date of your current
                          passport.
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <ReactDatePickerInput
                          className="new-form-input"
                          name="expiryDateThirdPartyBusiness"
                          selected={
                            new Date(values.expiryDateThirdPartyBusiness)
                          }
                          setFieldValue={setFieldValue}
                          minDate={minDateWithDate(
                            1,
                            values.issueDateThirdPartyBusiness
                          )}
                        />
                      </div>
                    </div>

                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Passport Front page (Bio data page) date*</label>
                      </div>

                      <div className="mark-section ThirdParty">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please upload passport front page (which cover photo,
                          date of birth, passport number).
                        </div>
                      </div>

                      {/* upload file start  */}
                      <div className="order-2 col-span-8">
                        <div className="flex items-center w-full h-full gap-8 p-2 mb-5 overflow-hidden border rounded-md">
                          <div className="bg-gray-200 rounded-lg">
                            <SingleFileUpload
                              id="passportImageThirdPartyBusiness"
                              name="passportImageThirdPartyBusiness"
                              setFieldValue={setFieldValue}
                              value={values.passportImageThirdPartyBusiness}
                              errorMessage={
                                <ErrorMessage
                                  name="profilePicture"
                                  component="div"
                                />
                              }
                              accept="image/png, image/jpeg"
                            />

                            <label
                              htmlFor="passportImageThirdPartyBusiness"
                              className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                            >
                              <LuImagePlus
                                size={40}
                                className="text-gray-500"
                              />
                            </label>
                          </div>

                          {values.passportImageThirdPartyBusiness instanceof
                          File ? (
                            <div className="flex items-center w-full">
                              <div className="relative h-28 w-28">
                                <Image
                                  src={URL.createObjectURL(
                                    values.passportImageThirdPartyBusiness
                                  )}
                                  alt="Uploaded Image"
                                  fill={true}
                                  sizes="100vw"
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          ) : values.passportImageThirdPartyBusiness ? (
                            <div className="flex items-center w-full">
                              <div className="relative h-28 w-28">
                                <Image
                                  src={values.passportImageThirdPartyBusiness}
                                  alt="Uploaded Image"
                                  fill={true}
                                  sizes="100vw"
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="text-sm">
                              <p>Choose the Photo To Upload</p>
                              <p>No file chosen yet</p>
                            </div>
                          )}
                        </div>

                        <ErrorMessage name="passportImageThirdPartyBusiness">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      {/* upload file end  */}
                    </div>

                    {/* CHILD INFORMATION ADDED START */}
                    <div>
                      <div className="pt-5 pb-10">
                        <div className=" flex w-full justify-between bg-[#0068E5] px-3 py-4">
                          <h2 className="text-lg font-semibold text-white ">
                            Child information in parent&apos;s passport{' '}
                          </h2>
                          <div>
                            <div className="flex items-center gap-2">
                              <Field
                                type="checkbox"
                                name="isChildInformationEnable"
                                className="w-6 h-6"
                              />
                              <h2 className="text-white"> Enable </h2>
                            </div>
                          </div>
                        </div>

                        {values.isChildInformationEnable && (
                          <>
                            {' '}
                            <p className="py-5 text-lg font-semibold">
                              {' '}
                              Children under 16 years of age possessing separate
                              passport(s) should submit individual
                              application(s){' '}
                            </p>
                            <FieldArray
                              name="childInformation"
                              render={arrayHelpers => (
                                <div>
                                  <table className="w-full">
                                    <thead>
                                      <tr>
                                        <th>
                                          <div className="label-section">
                                            <label>Surname/Family Name *</label>
                                          </div>
                                        </th>
                                        <th>
                                          {' '}
                                          <div className="label-section">
                                            <label>Other/Given Names *</label>
                                          </div>
                                        </th>
                                        <th>
                                          {' '}
                                          <div className="label-section">
                                            <label>Date of Birth*</label>
                                          </div>
                                        </th>
                                        <th>
                                          {' '}
                                          <div className="label-section">
                                            <label>Gender*</label>
                                          </div>
                                        </th>
                                        <th>
                                          {' '}
                                          <div className="label-section">
                                            <label>Relationship *</label>
                                          </div>
                                        </th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {values.childInformation?.map(
                                        (child, index) => (
                                          <tr key={index}>
                                            <td className="px-3 py-2">
                                              <div className="order-2 col-span-8">
                                                <Field
                                                  className="new-form-input "
                                                  name={`childInformation[${index}].surnameFamilyName`}
                                                />
                                              </div>
                                            </td>

                                            <td>
                                              <div className="order-2 col-span-8">
                                                <Field
                                                  className="new-form-input "
                                                  name={`childInformation.${index}.otherGivenNames`}
                                                />
                                              </div>
                                            </td>

                                            <td className="px-3 py-2">
                                              <div className="order-2 col-span-8">
                                                <Field
                                                  type="date"
                                                  className="new-form-input "
                                                  name={`childInformation.${index}.dateOfBirth`}
                                                />
                                              </div>
                                            </td>

                                            <td>
                                              <div className="order-2 col-span-8">
                                                <Field
                                                  component="select"
                                                  className="new-form-input "
                                                  name={`childInformation.${index}.gender`}
                                                >
                                                  {' '}
                                                  <option value="">
                                                    Select
                                                  </option>
                                                  <option value="male">
                                                    Male
                                                  </option>
                                                  <option value="female">
                                                    Female
                                                  </option>
                                                </Field>
                                              </div>
                                            </td>

                                            <td className="px-3 py-2">
                                              <div className="order-2 col-span-8">
                                                <Field
                                                  component="select"
                                                  className="new-form-input "
                                                  name={`childInformation.${index}.relationship`}
                                                >
                                                  {' '}
                                                  <option value="">
                                                    Select
                                                  </option>
                                                  <option value="male">
                                                    child
                                                  </option>
                                                </Field>
                                              </div>
                                            </td>
                                            <td>
                                              <button
                                                type="button"
                                                onClick={() =>
                                                  arrayHelpers.remove(index)
                                                }
                                              >
                                                <MdDeleteOutline />
                                              </button>
                                            </td>
                                          </tr>
                                        )
                                      )}
                                    </tbody>
                                  </table>

                                  <div className="py-8 text-center">
                                    <button
                                      type="button"
                                      className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2"
                                      onClick={() =>
                                        arrayHelpers.push({
                                          surnameFamilyName: '',
                                          otherGivenNames: '',
                                          dateOfBirth: '',
                                          gender: '',
                                          relationship: '',
                                        })
                                      }
                                    >
                                      Add More
                                    </button>
                                  </div>
                                </div>
                              )}
                            />
                          </>
                        )}

                        {/* field array end */}
                      </div>
                    </div>
                    {/* CHILD INFORMATION CODE END HERE */}

                    <Formsubhead subHead="declaration" />

                    <div>
                      {data.map((e, i) => (
                        <div key={i}>
                          <div className="grid gap-8 py-8 md:grid-cols-12">
                            <div className="col-span-8">
                              <label>
                                <span className="pr-2">{e.id}.</span>
                                {e.question}
                              </label>
                            </div>

                            <div className="flex col-span-4 space-x-4">
                              <div className="px-2 space-x-2">
                                <Field
                                  type="radio"
                                  id={`${e.name}`}
                                  name={`${e.name}`}
                                  value="yes"
                                />
                                <label htmlFor={`question${e.name}Yes`}>
                                  Yes
                                </label>
                              </div>
                              <div className="px-2 space-x-2">
                                <Field
                                  type="radio"
                                  name={`${e.name}`}
                                  value="no"
                                />
                                <label htmlFor={`${e.name}`}>No</label>
                              </div>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      ))}
                    </div>

                    <div className="py-8 text-center">
                      {updateMutation.isError ? (
                        <div className="text-red-500">
                          An error occurred: {updateMutation.error.message}
                        </div>
                      ) : null}
                      <button
                        className={`formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2 ${
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
                          'Update Member'
                        )}
                      </button>
                    </div>

                    <div className="w-full h-full ">
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
                          {businessThirdPartyData?.members?.length > 0 ? (
                            businessThirdPartyData?.members
                              ?.filter(member => member?._id !== params?.id)
                              ?.map(member => (
                                <tr key={member._id}>
                                  <td className="p-4">
                                    <div
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                    >
                                      {member?.givenNameThirdPartyBusiness}
                                    </div>
                                  </td>
                                  <td className="p-4">
                                    <div
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                    >
                                      {member?.passportNumberThirdPartyBusiness}
                                    </div>
                                  </td>
                                  <td className="p-4">
                                    <div
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                    >
                                      {member?.nationalityThirdPartyBusiness}
                                    </div>
                                  </td>
                                  <td className="p-4">
                                    <div
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                    >
                                      {member?.dateOfBirthThirdPartyBusiness}
                                    </div>
                                  </td>
                                  <td className="p-4">
                                    <div
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                    >
                                      {member?.issueDateThirdPartyBusiness}
                                    </div>
                                  </td>
                                  <td className="p-4">
                                    <div
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                    >
                                      {member?.genderThirdPartyBusiness}
                                    </div>
                                  </td>
                                  <td
                                    className={`p-4 flex space-x-5 items-center`}
                                  >
                                    <Link
                                      href={`/srilanka/slvisa/business-purpose-eta/apply-for-third-party/step-two/${member?._id}`}
                                    >
                                      <CiEdit size={24} />
                                    </Link>

                                    <button
                                      type="button"
                                      onClick={() =>
                                        deleteMutation.mutate(member?._id)
                                      }
                                    >
                                      {deleteMutation.isPending ? (
                                        <ImSpinner2 className="animate-spin" />
                                      ) : (
                                        <MdDelete size={24} />
                                      )}
                                    </button>
                                  </td>
                                </tr>
                              ))
                          ) : (
                            <tr>
                              <td>No Member found</td>
                            </tr>
                          )}
                          {deleteMutation.error ? (
                            <div className="text-red-500">
                              An error occurred:{' '}
                              {deleteMutation?.error?.message}
                            </div>
                          ) : null}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex items-center justify-center my-5">
                      {businessThirdPartyData?.members?.length > 0 ? (
                        <Link
                          href={`/srilanka/slvisa/business-purpose-eta/apply-for-third-party/review/${businessThirdPartyData?._id}`}
                          className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-12 py-3 rounded-full"
                        >
                          Next
                        </Link>
                      ) : null}
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
