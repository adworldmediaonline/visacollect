'use client';
import { useState } from 'react';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import Link from 'next/link';
import { LuImagePlus } from 'react-icons/lu';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { Country } from 'country-state-city';
import Image from 'next/image';
import { ImSpinner2 } from 'react-icons/im';
import { MdDeleteOutline } from 'react-icons/md';
import {
  businessIndividualRadio,
  businessIndividualsSchema,
} from '@/constant/srilankaConstant';
import SingleFileUpload from '@/components/india/SingleFileUpload';
import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import StepProcess from '@/components/srilanka/common/StepProcess';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDate, minDateWithDate } from '@/lib/minDate';

const Page = () => {
  const [images, setImages] = useState();

  const postMutation = usePost(
    apiEndpoint.SL_VISA_BUSINESS_INDIVIDUAL,
    1,
    '/srilanka/slvisa/business-purpose-eta/apply-individual/review',
    true,
    'touristIndividual'
  );
  return (
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

        <Formheading formHead="Travel Information - Business Purpose - Individual" />

        <div>
          <Formik
            initialValues={businessIndividualsSchema.initialValues}
            validationSchema={businessIndividualsSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const formData = new FormData();

              Object.entries(values).forEach(([key, value]) => {
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

              postMutation.mutate(formData);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ values, isValid, setFieldValue }) => (
              <Form>
                <p className="pb-5 text-lg font-semibold text-red-600">
                  Important - Business ETA can be used only for the purpose of
                  short term business matters. Any other purposes shall not be
                  entertained through this scheme and please refrain from
                  applying to avoid unnecessary hassles at the port of entry.{' '}
                </p>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Surname/Family Name* </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Enter your last name (surname) as it appears on your
                      passport
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="familyNameBusinessIndividualTourist"
                      name="familyNameBusinessIndividualTourist"
                      // placeholder="Surname"
                      className="new-form-input "
                    />

                    <ErrorMessage name="familyNameBusinessIndividualTourist">
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Enter your given name as it appears on your passport
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="givenNameBusinessIndividualTourist"
                      name="givenNameBusinessIndividualTourist"
                      // placeholder="Given Name"
                      className="new-form-input "
                    />

                    <ErrorMessage name="givenNameBusinessIndividualTourist">
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select your preferred title based on your gender, marital
                      status or professional designation.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="titleBusinessIndividualTourist"
                      name="titleBusinessIndividualTourist"
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

                    <ErrorMessage name="titleBusinessIndividualTourist">
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select your date of birth as it appears in your passport
                      in the calendar provided below.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="dateOfBirthBusinessIndividualTourist"
                      selected={values.dateOfBirthBusinessIndividualTourist}
                      setFieldValue={setFieldValue}
                      maxDate={new Date()}
                    />
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Gender*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please select your gender: Male or Female.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="genderBusinessIndividualTourist"
                      name="genderBusinessIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Field>

                    <ErrorMessage name="genderBusinessIndividualTourist">
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Your country of nationality is the country in which you
                      have or can obtain a passport.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="nationalityBusinessIndividualTourist"
                      name="nationalityBusinessIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      {Country?.getAllCountries()?.map((country, index) => (
                        <option key={index} value={country?.name}>
                          {country?.name}
                        </option>
                      ))}
                    </Field>

                    <ErrorMessage name="nationalityBusinessIndividualTourist">
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select the country where you were born.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="countryOfBirthBusinessIndividualTourist"
                      name="countryOfBirthBusinessIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      {Country?.getAllCountries()?.map((country, index) => (
                        <option key={index} value={country?.name}>
                          {country?.name}
                        </option>
                      ))}
                    </Field>

                    <ErrorMessage name="countryOfBirthBusinessIndividualTourist">
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Tourist who has fully vaccinated recommended dosage prior
                      to your 14 days of arrival or COVID recovered applicant
                      after completed one dose of vaccination with vaccination
                      certificate.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="covidVaccinatedBusinessIndividualTourist"
                      name="covidVaccinatedBusinessIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Field>

                    <ErrorMessage name="covidVaccinatedBusinessIndividualTourist">
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please provide your current occupation.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="occupationBusinessIndividualTourist"
                      name="occupationBusinessIndividualTourist"
                      // placeholder="Occupation"
                      className="new-form-input "
                    />

                    <ErrorMessage name="occupationBusinessIndividualTourist">
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please specify Applicant&apos;s Passport Number
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="passportNumberBusinessIndividualTourist"
                      name="passportNumberBusinessIndividualTourist"
                      // placeholder="Passport Number"
                      className="new-form-input "
                    />

                    <ErrorMessage name="passportNumberBusinessIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport Issue Date*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please specify the Issue Date of your current passport.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="issueDateBusinessIndividualTourist"
                      selected={values.issueDateBusinessIndividualTourist}
                      setFieldValue={setFieldValue}
                      minDate={
                        new Date(values.dateOfBirthBusinessIndividualTourist)
                      }
                      disabled={
                        values.dateOfBirthBusinessIndividualTourist === ''
                      }
                    />
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport Expiry date*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please specify the Expiry date of your current passport.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="expiryDateBusinessIndividualTourist"
                      selected={values.expiryDateBusinessIndividualTourist}
                      setFieldValue={setFieldValue}
                      minDate={minDateWithDate(
                        1,
                        values.issueDateBusinessIndividualTourist
                      )}
                    />
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport Front page (Bio data page) date*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please upload passport front page (which cover photo, date
                      of birth, passport number).
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    {/* upload file start  */}

                    <div className="flex items-center w-full max-w-lg gap-8 p-2 mb-5 overflow-hidden border rounded-md h-36">
                      <div className="bg-gray-200 rounded-lg">
                        <SingleFileUpload
                          id="uploadPicture"
                          name="passportImageBusinessIndividualTourist"
                          setFieldValue={setFieldValue}
                          value={values.passportImageBusinessIndividualTourist}
                          errorMessage={
                            <ErrorMessage
                              name="passportImageBusinessIndividualTourist"
                              component="div"
                            />
                          }
                          accept="image/png, image/jpeg"
                        />

                        <label
                          htmlFor="uploadPicture"
                          className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                          <LuImagePlus size={40} className="text-gray-500" />
                        </label>
                      </div>
                      {values.passportImageBusinessIndividualTourist ? (
                        <div className="flex items-center w-full">
                          <div className="flex flex-wrap gap-2 mt-2">
                            <div>
                              <div className="relative overflow-hidden">
                                <Image
                                  src={URL.createObjectURL(
                                    values.passportImageBusinessIndividualTourist
                                  )}
                                  alt={`Uploaded Image`}
                                  width={100}
                                  height={100}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm">
                          <p>Choose the Photo To Upload</p>
                          <p>No file chosen yet</p>
                        </div>
                      )}
                    </div>

                    {/* upload file end  */}

                    <ErrorMessage name="passportImageBusinessIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                {/* CHILD INFORMATION ADDED START */}
                <div>
                  <div className="pt-5 pb-10">
                    <div className=" flex w-full justify-between bg-[#0068E5] px-3 py-4">
                      <h2 className="text-lg font-semibold text-white ">
                        Child information in parent&apos;s passport{' '}
                      </h2>
                      <div>
                        <div className="flex items-center gap-4">
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
                          passport(s) should submit individual application(s){' '}
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
                                            <ReactDatePickerInput
                                              className="new-form-input"
                                              name={`childInformation.${index}.dateOfBirth`}
                                              selected={
                                                values.childInformation[index]
                                                  .dateOfBirth
                                              }
                                              setFieldValue={setFieldValue}
                                              maxDate={new Date()}
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
                                              <option value="">Select</option>
                                              <option value="male">Male</option>
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
                                              <option value="">Select</option>
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
                {/* CHILD INFORMATION ADDED END */}
                <Formsubhead subHead="Note that now it is November 30, 2023, 11:22 am in Sri Lanka" />

                <div className="main-form-section">
                  <div className="label-section">
                    <label>
                      Where you have been during last 14 days before this trip?*{' '}
                    </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Where you have been in since last 14 days.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="whereHaveBeenBusinessIndividualTourist"
                      name="whereHaveBeenBusinessIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      {Country?.getAllCountries()?.map((country, index) => (
                        <option key={index} value={country?.name}>
                          {country?.name}
                        </option>
                      ))}
                    </Field>

                    <ErrorMessage name="whereHaveBeenBusinessIndividualTourist">
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please select the date you intend to enter Sri Lanka. An
                      ETA is valid for up to 03 month from date of issue.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="attendantArrivalDateBusinessIndividualTourist"
                      selected={
                        values.attendantArrivalDateBusinessIndividualTourist
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

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select you purpose of traveling to Sri Lanka.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="purposeOfVisitBusinessIndividualTourist"
                      name="purposeOfVisitBusinessIndividualTourist"
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

                    <ErrorMessage name="purposeOfVisitBusinessIndividualTourist">
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

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      as="textarea"
                      rows="3"
                      id="purposeDescriptionBusinessIndividualTourist"
                      name="purposeDescriptionBusinessIndividualTourist"
                      // placeholder="Port of Departure"
                      className="new-form-input"
                    />
                    <ErrorMessage name="purposeDescriptionBusinessIndividualTourist">
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

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="portOfDepartureBusinessIndividualTourist"
                      name="portOfDepartureBusinessIndividualTourist"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="portOfDepartureBusinessIndividualTourist">
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

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="arilineVesselBusinessIndividualTourist"
                      name="arilineVesselBusinessIndividualTourist"
                      // placeholder="Ariline/Vessel"
                      className="new-form-input "
                    />

                    <ErrorMessage name="arilineVesselBusinessIndividualTourist">
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

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="flightVesselNumberBusinessIndividualTourist"
                      name="flightVesselNumberBusinessIndividualTourist"
                      // placeholder="Passport Number"
                      className="new-form-input "
                    />

                    <ErrorMessage name="flightVesselNumberBusinessIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                {/*Contact Details of the Applicant's Company start  */}
                <>
                  <Formsubhead subHead="Contact Details of the Applicant's Company" />
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Company Name </label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="companyNameBusinessIndividualTourist"
                        name="companyNameBusinessIndividualTourist"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="companyNameBusinessIndividualTourist">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type your current apartment or house / building
                        number in your address.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="addressLineOneBusinessIndividualTourist"
                        name="addressLineOneBusinessIndividualTourist"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineOneBusinessIndividualTourist">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="addressLineTwoBusinessIndividualTourist"
                        name="addressLineTwoBusinessIndividualTourist"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineTwoBusinessIndividualTourist">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type the name of the city in which you live into
                        the text box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="cityBusinessIndividualTourist"
                        name="cityBusinessIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="cityBusinessIndividualTourist">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type the name of the state in which you live into
                        the text box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="stateBusinessIndividualTourist"
                        name="stateBusinessIndividualTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="stateBusinessIndividualTourist">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="zipCodeBusinessIndividualTourist"
                        name="zipCodeBusinessIndividualTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="zipCodeBusinessIndividualTourist">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please select the name of the country in which you live
                        in.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="countryBusinessIndividualTourist"
                        name="countryBusinessIndividualTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        {Country?.getAllCountries()?.map((country, index) => (
                          <option key={index} value={country?.name}>
                            {country?.name}
                          </option>
                        ))}
                      </Field>

                      <ErrorMessage name="countryBusinessIndividualTourist">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type your current telephone number into the text
                        box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="telephoneBusinessIndividualTourist"
                        name="telephoneBusinessIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="telephoneBusinessIndividualTourist">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="mobileBusinessIndividualTourist"
                        name="mobileBusinessIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="mobileBusinessIndividualTourist">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="faxNumberBusinessIndividualTourist"
                        name="faxNumberBusinessIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="faxNumberBusinessIndividualTourist">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        VISA Approval/Acknowledgment will be sent to this email
                        address also.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="emailBusinessIndividualTourist"
                        name="emailBusinessIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="emailBusinessIndividualTourist">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        VISA Approval/Acknowledgment will be sent to this
                        alternate email address also.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="alternateEmailBusinessIndividualTourist"
                        name="alternateEmailBusinessIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="alternateEmailBusinessIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                </>
                {/* Contact Details of the Applicant's Company end  */}

                {/* Contact Details of the Sri Lankan Company start */}
                <>
                  <Formsubhead
                    subHead="Contact Details of the Sri Lankan Company
"
                  />
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Company Name </label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="companyNameBusinessIndividualTouristOfSrilankaCompany"
                        name="companyNameBusinessIndividualTouristOfSrilankaCompany"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="companyNameBusinessIndividualTouristOfSrilankaCompany">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type your current apartment or house / building
                        number in your address.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="addressLineOneBusinessIndividualTouristOfSrilankaCompany"
                        name="addressLineOneBusinessIndividualTouristOfSrilankaCompany"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineOneBusinessIndividualTouristOfSrilankaCompany">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="addressLineTwoBusinessIndividualTouristOfSrilankaCompany"
                        name="addressLineTwoBusinessIndividualTouristOfSrilankaCompany"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineTwoBusinessIndividualTouristOfSrilankaCompany">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type the name of the city in which you live into
                        the text box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="cityBusinessIndividualTouristOfSrilankaCompany"
                        name="cityBusinessIndividualTouristOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="cityBusinessIndividualTouristOfSrilankaCompany">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type the name of the state in which you live into
                        the text box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="stateBusinessIndividualTouristOfSrilankaCompany"
                        name="stateBusinessIndividualTouristOfSrilankaCompany"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="stateBusinessIndividualTouristOfSrilankaCompany">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="zipCodeBusinessIndividualTouristOfSrilankaCompany"
                        name="zipCodeBusinessIndividualTouristOfSrilankaCompany"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="zipCodeBusinessIndividualTouristOfSrilankaCompany">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type your current telephone number into the text
                        box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="telephoneBusinessIndividualTouristOfSrilankaCompany"
                        name="telephoneBusinessIndividualTouristOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="telephoneBusinessIndividualTouristOfSrilankaCompany">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="mobileBusinessIndividualTouristOfSrilankaCompany"
                        name="mobileBusinessIndividualTouristOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="mobileBusinessIndividualTouristOfSrilankaCompany">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="faxNumberBusinessIndividualTouristOfSrilankaCompany"
                        name="faxNumberBusinessIndividualTouristOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="faxNumberBusinessIndividualTouristOfSrilankaCompany">
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

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        VISA Approval/Acknowledgment will be sent to this email
                        address also.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="emailBusinessIndividualTouristOfSrilankaCompany"
                        name="emailBusinessIndividualTouristOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="emailBusinessIndividualTouristOfSrilankaCompany">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                </>
                {/* Contact Details of the Sri Lankan Company end  */}
                <Formsubhead subHead="Declaration Details" />

                <div>
                  {businessIndividualRadio?.map((e, i) => (
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
                            <label htmlFor={`question${e.name}Yes`}>Yes</label>
                          </div>
                          <div className="px-2 space-x-2">
                            <Field type="radio" name={`${e.name}`} value="no" />
                            <label htmlFor={`${e.name}`}>No</label>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  ))}
                </div>

                <div className="py-8 text-center">
                  {postMutation.isError ? (
                    <div className="text-red-500">
                      An error occurred: {postMutation.error.message}
                    </div>
                  ) : null}
                  <button
                    className={`formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2 ${
                      !isValid ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={!isValid}
                    type="submit"
                  >
                    {postMutation.isPending ? (
                      <>
                        <ImSpinner2 className="animate-spin" /> Loading
                      </>
                    ) : (
                      'Next'
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
};

export default Page;
