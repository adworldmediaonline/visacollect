'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Heading from '@/components/australia/common/Heading';
import SubHeading from '@/components/australia/common/SubHeading';
import React from 'react';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { getAllCountries } from '@/lib/getAllCountries';
import { omanSchema } from '@/constant/omanSchema';
import Select from 'react-select';
import Link from 'next/link';

const options = [
  { value: 'hotel', label: 'Hotel' },
  { value: 'toursAndctivity', label: 'Tours & Activity' },
  { value: 'Flight', label: 'Flight' },
  { value: 'airportTransfer', label: 'Airport Transfer' },
  { value: 'tourPackage', label: 'Tour Package' },
]


function Page() {
  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead=" Visa Application Form " />

        <div>
          <Formik
            initialValues={omanSchema.initialValue}
            // validationSchema={omanSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              // postMutation.mutate({
              //     ...values,
              //     travelInsurance: {
              //         ...values.travelInsurance,
              //         insuranceFee: calculateTotalPrice(
              //             values.travelInsurance.startDate,
              //             values.travelInsurance.returnDate
              //         ),
              //     },
              // });
              setSubmitting(false);
              // resetForm();
            }}
          >
            {({ values, isValid, setFieldValue }) => (
              <Form>
                {console.log(values)}
                <SubHeading subHead="General Details" />

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Your current address</label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="generalDetails.currentAddress"
                      id="generalDetails.currentAddress"
                    />

                    <ErrorMessage name="generalDetails.currentAddress">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>City</label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="generalDetails.city"
                      id="generalDetails.city"
                    />

                    <ErrorMessage name="generalDetails.city">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>State / Province</label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="generalDetails.state"
                      id="generalDetails.state"
                    />

                    <ErrorMessage name="generalDetails.state">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Zipcode / Pincode / Postal Code</label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="generalDetails.zipCode"
                      id="generalDetails.zipCode"
                    />

                    <ErrorMessage name="generalDetails.zipCode">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Contact Number</label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      type="text"
                      className="new-form-input"
                      name="generalDetails.phoneNumber"
                      id="generalDetails.phoneNumber"
                    />

                    <ErrorMessage name="generalDetails.phoneNumber">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Whatsapp Number</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      For effective communication and timely updates, please enter your WhatsApp number.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      type="text"
                      className="new-form-input"
                      name="generalDetails.whatsappNumber"
                      id="generalDetails.whatsappNumber"
                    />

                    <ErrorMessage name="generalDetails.whatsappNumber">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Travel Date/ Arrival Date</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      The &apos;Arrival Date&apos; field is where you can specify the date you plan to arrive at your destination
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="arrivalDate"
                      // selected={values.arrivalDate}
                      setFieldValue={setFieldValue}
                      maxDate={new Date()}
                    />
                    <ErrorMessage name="arrivalDate">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Type your email</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please enter a valid email address in this field. We will use this email address to communicate with you and send important updates.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      type="text"
                      className="new-form-input"
                      name="generalDetails.email"
                      id="generalDetails.email"
                    />

                    <ErrorMessage name="generalDetails.email">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Purpose of Visit</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      className="new-form-input"
                      name="generalDetails.purposeOfVisit"
                      id="generalDetails.purposeOfVisit"
                    >
                      <option value="">Select</option>
                      <option value="">one</option>
                      <option value="">two</option>
                      <option value="">three</option>
                    </Field>

                    <ErrorMessage name="generalDetails.purposeOfVisit">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-7">
                  <Field
                    type="checkbox"
                    className="w-6 h-6"
                    name="termsAndConditions"
                    id="termsAndConditions"
                  />
                  <h2>
                    I have read and agree with the terms and conditions.
                  </h2>
                  <ErrorMessage name="termsAndConditions">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                <Link href="/oman/step-two">
                  <div className="py-8 text-center">
                    <button
                      className={`cursor-pointer w-fit items-center gap-3  rounded-full font-semibold text-white bg-primaryMain px-12 py-3 ${!isValid ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                      disabled={!isValid}
                      type="submit"
                    >
                      Next
                    </button>
                  </div>
                </Link>

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Page;
