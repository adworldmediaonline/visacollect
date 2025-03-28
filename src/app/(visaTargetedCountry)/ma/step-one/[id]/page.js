'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Heading from '@/components/australia/common/Heading';
import SubHeading from '@/components/australia/common/SubHeading';
import React from 'react';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';

import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';
import CustomReactPhoneNumberInput from '@/components/common/CustomReactPhoneNumberInput';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import useUpdate from '@/hooks/useUpdate';
import { moroccoSchema } from '@/constant/moroccoConstant';

const options = [
  { value: 'hotel', label: 'Hotel' },
  { value: 'toursAndctivity', label: 'Tours & Activity' },
  { value: 'Flight', label: 'Flight' },
  { value: 'airportTransfer', label: 'Airport Transfer' },
  { value: 'tourPackage', label: 'Tour Package' },
];

const Page = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.MOROCCO_VISA_APPLICATION,
    id,
    'moroccoVisaApplication'
  );

  const updateMutation = useUpdate(
    apiEndpoint.MOROCCO_VISA_APPLICATION,
    id,
    'form updated successfully',
    '/morocco/step-two',
    getQuery.refetch,
    'moroccoVisaApplication'
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
    return router.push('/morocco/step-one');
  }

  if (getQuery.isSuccess) {
    const {
      data: {
        data: {
          _id,
          __v,
          createdAt,
          updatedAt,
          peoples,
          ...moroccoVisaApplicationData
        },
      },
    } = getQuery;
    return (
      <div>
        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <Heading formHead=" Visa Application Form " />

          <div>
            <Formik
              initialValues={moroccoVisaApplicationData}
              validationSchema={moroccoSchema.yupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                updateMutation.mutate(values);
                setSubmitting(false);
                // resetForm();
              }}
            >
              {({
                values,
                isValid,
                setFieldValue,
                setFieldTouched,
                errors,
                touched,
              }) => (
                <Form>
                  <SubHeading subHead="General Details" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Your current address</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="currentAddress"
                        id="currentAddress"
                      />

                      <ErrorMessage name="currentAddress">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="city"
                        id="city"
                      />

                      <ErrorMessage name="city">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="state"
                        id="state"
                      />

                      <ErrorMessage name="state">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="zipCode"
                        id="zipCode"
                      />

                      <ErrorMessage name="zipCode">
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <CustomReactPhoneNumberInput
                        className="new-form-input"
                        name="phoneNumber"
                        setFieldValue={setFieldValue}
                        errors={errors}
                        touched={touched}
                        setFieldTouched={setFieldTouched}
                        defaultValue={values.phoneNumber}
                      />
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Whatsapp Number</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        For effective communication and timely updates, please
                        enter your WhatsApp number.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <CustomReactPhoneNumberInput
                        className="new-form-input"
                        name="whatsappNumber"
                        setFieldValue={setFieldValue}
                        errors={errors}
                        touched={touched}
                        setFieldTouched={setFieldTouched}
                        defaultValue={values.whatsappNumber}
                      />
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Travel Date/ Arrival Date</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        The &apos;Arrival Date&apos; field is where you can
                        specify the date you plan to arrive at your destination
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="arrivalDate"
                        selected={new Date(values.arrivalDate)}
                        setFieldValue={setFieldValue}
                        minDate={new Date()}
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
                        Please enter a valid email address in this field. We
                        will use this email address to communicate with you and
                        send important updates.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        type="text"
                        className="new-form-input"
                        name="email"
                        id="email"
                      />

                      <ErrorMessage name="email">
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
                        name="purposeOfVisit"
                        id="purposeOfVisit"
                      >
                        <option value="">Select</option>
                        <option value="one">one</option>
                        <option value="two">two</option>
                        <option value="three">three</option>
                      </Field>

                      <ErrorMessage name="purposeOfVisit">
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
                          {' '}
                          <ImSpinner2 className="animate-spin" />
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
};

export default Page;
