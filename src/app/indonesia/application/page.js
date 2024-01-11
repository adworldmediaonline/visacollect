'use client';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Heading from '@/components/australia/common/Heading';
import SubHeading from '@/components/australia/common/SubHeading';
import React from 'react';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { getAllCountries } from '@/lib/getAllCountries';
import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';
import { addDays } from 'date-fns';
import { indonesiaSchema } from '@/constant/indonesiaConstant';

function Page() {
  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead=" Visa to Indonesia Application" />

        <div>
          <Formik
            initialValues={indonesiaSchema.initialValue}
            validationSchema={indonesiaSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            // onSubmit={(values, { setSubmitting, resetForm }) => {
            //   postMutation.mutate(values);
            //   setSubmitting(false);
            //   // resetForm();
            // }}
          >
            {({ values, isValid, setFieldValue }) => (
              <Form>
                <SubHeading subHead="Personal Details" />

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Surname *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Surname is also known as Last name or Family name.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="personalDetails.surname"
                      id="personalDetails.surname"
                    />

                    <ErrorMessage name="personalDetails.surname">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Given Name(s) *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please provide your Given Name(s), also known as first
                      name, exactly as it appears in your passport or identity
                      document. Include any middle names.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="personalDetails.givenName"
                      id="personalDetails.givenName"
                    />

                    <ErrorMessage name="personalDetails.givenName">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Mother&apos;s Given Name(s) *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      This field may include the name of your biological,
                      adoptive, step-parent or guardian. Do not include the
                      middle name in this field. If your parent has no given
                      name, or if you do not know their given name, enter
                      UNKNOWN.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="personalDetails.motherGivenName"
                      id="personalDetails.motherGivenName"
                    />

                    <ErrorMessage name="personalDetails.motherGivenName">
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

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Date of birth: *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select your date of birth, as it appears on your passport.{' '}
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="dateOfBirth"
                      selected={values.dateOfBirth}
                      setFieldValue={setFieldValue}
                      maxDate={values.passportDateOfIssue}
                      disabled={values.passportDateOfIssue === ''}
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
                      select the name of the country shown in the Place of birth
                      field on your passport.
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
                    <label>Place of birth</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Enter the name of your Place of Birth shown in the place
                      of birth field on your passport.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="personalDetails.placeOfBirth"
                      id="personalDetails.placeOfBirth"
                    />

                    <ErrorMessage name="personalDetails.placeOfBirth">
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
                      name="countryOfCitizenship"
                      id="countryOfCitizenship"
                    >
                      <option value="">Select</option>
                      {getAllCountries()}
                    </Field>

                    <ErrorMessage name="countryOfCitizenship">
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
                      Please indicate the country/territory of your citizenship,
                      the country of the passport you will use to travel.{' '}
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      className="new-form-input"
                      name="passportCountry"
                      id="passportCountry"
                    >
                      <option value="">Select</option>
                      {getAllCountries()}
                    </Field>

                    <ErrorMessage name="passportCountry">
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
                      selected={values.passportDateOfIssue}
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
                      selected={values.passportDetails.passportExpiryDate}
                      setFieldValue={setFieldValue}
                      minDate={addDays(values.passportDateOfIssue, 180)}
                      disabled={values.passportDateOfIssue === ''}
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
                      to indicate a correct phone number, since you may receive
                      updates on the status of your Application.
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
                    <label>Intended Date of Entry *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please indicate the date you will enter the country.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="travelDetails.intendedDateOfEntry"
                      selected={values.travelDetails.intendedDateOfEntry}
                      setFieldValue={setFieldValue}
                      // minDate={addDays(new Date(), 5)}
                      minDate={new Date()}
                    />
                    <ErrorMessage name="travelDetails.intendedDateOfEntry">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Intended Date of Exit *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      The length of the stay should not exceed 60 days.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="travelDetails.intendedDateOfExit"
                      selected={values.travelDetails.intendedDateOfExit}
                      setFieldValue={setFieldValue}
                      // minDate={addDays(new Date(), 5)}
                      minDate={values.travelDetails.intendedDateOfEntry}
                    />
                    <ErrorMessage name="travelDetails.intendedDateOfExit">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Accommodation Type *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please select the accommodation type that best describes
                      where you will stay during your trip.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      id="travelDetails.accommodationType"
                      name="travelDetails.accommodationType"
                      component="select"
                      className="new-form-input"
                    >
                      <option value="">Select</option>
                      <option value="tourism">Tourism</option>
                      <option value="india">Business</option>
                      <option value="transit">Transit</option>
                    </Field>

                    <ErrorMessage name="travelDetails.accommodationType">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Address of Accommodation *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please indicate the address of your accommodation or host.
                      If you are staying on a cruise ship, please provide the
                      name.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      id="travelDetails.addressOfAccommodation"
                      name="travelDetails.addressOfAccommodation"
                    />

                    <ErrorMessage name="travelDetails.addressOfAccommodation">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className=" main-form-section">
                  <div className="label-section">
                    <label>Province of Accommodation * </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please indicate the province of your accommodation or
                      host&apos;s address. Please note that if you are staying
                      on a cruise ship you must select the province to visit.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      id="travelDetails.provinceOfAccommodation"
                      name="travelDetails.provinceOfAccommodation"
                      component="select"
                      className="new-form-input"
                    >
                      <option value="">Select</option>
                      <option value="Tourism">Tourism</option>
                      <option value="india">Business</option>
                      <option value="australia">Transit</option>
                    </Field>

                    <ErrorMessage name="travelDetails.provinceOfAccommodation">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="flex flex-col gap-2 py-4">
                  <h2>Are you traveling with minors (under 18 years old)? *</h2>

                  <div className="flex gap-8 pt-4">
                    <div className="flex gap-4">
                      <Field
                        type="radio"
                        className="w-6 h-6"
                        name="travelDetails.travelingWithMinor"
                        id="travelDetailstravellingWithMinorsYes"
                        value="yes"
                      />
                      <h3>Yes</h3>
                    </div>
                    <div className="flex gap-4">
                      <Field
                        type="radio"
                        className="w-6 h-6"
                        name="travelDetails.travelingWithMinor"
                        id="travelDetailstravellingWithMinorsNo"
                        value="no"
                      />
                      <h3>No</h3>
                    </div>
                  </div>
                </div>
                {values.travelDetails.travelingWithMinor === 'yes' && (
                  <>
                    <div className=" main-form-section">
                      <div className="label-section">
                        <label>
                          How many minors are you traveling with? *{' '}
                        </label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Please select the number of minors you are traveling
                          with (if applicable).
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          id="travelDetails.numberOfMinor"
                          name="travelDetails.numberOfMinor"
                          component="select"
                          className="new-form-input"
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Field>

                        <ErrorMessage name="travelDetails.numberOfMinor">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* minor form */}
                    {values.travelDetails.numberOfMinor !== '' && (
                      <>
                        <FieldArray
                          name="travelDetails.minorInformation"
                          render={arrayHelpers => (
                            <div>
                              {values.travelDetails.minorInformation?.map(
                                (minorInfo, index) => (
                                  <div
                                    key={index}
                                    className="main-form-section"
                                  >
                                    <div className="label-section">
                                      <label>Minor One Passport Number *</label>
                                    </div>

                                    <div className="mark-section group">
                                      <BsQuestionCircleFill
                                        className=" side-icon"
                                        size={20}
                                      />
                                      <div className="tooltip-content">
                                        Please note that a separate application
                                        must be completed for minors under 18
                                        years old.
                                      </div>
                                    </div>

                                    <div className="order-2 col-span-8">
                                      <Field
                                        type="text"
                                        className="new-form-input"
                                        name={`travelDetails.minorInformation[${index}].minorPassportNumber`}
                                      />

                                      <ErrorMessage
                                        name={`travelDetails.minorInformation[${index}].minorPassportNumber`}
                                      >
                                        {errorMsg => (
                                          <div style={{ color: 'red' }}>
                                            {errorMsg}
                                          </div>
                                        )}
                                      </ErrorMessage>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        />
                      </>
                    )}
                  </>
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
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
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
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="py-8 text-center">
                  <button
                    className={`cursor-pointer w-fit items-center gap-3  rounded-full font-semibold text-white bg-primaryMain px-12 py-3 ${
                      !isValid ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={!isValid}
                    type="submit"
                  >
                    Next
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

export default Page;
