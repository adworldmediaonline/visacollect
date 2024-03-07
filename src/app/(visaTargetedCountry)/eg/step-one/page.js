'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Heading from '@/components/australia/common/Heading';
import React from 'react';
import { egyptSchema } from '@/constant/egyptSchema';
import SubHeading from '@/components/thailand/common/SubHeading';
import Link from 'next/link';
import CustomReactPhoneNumberInput from '@/components/common/CustomReactPhoneNumberInput';
import apiEndpoint from '@/services/apiEndpoint';
import usePost from '@/hooks/usePost';
import { ImSpinner2 } from 'react-icons/im';
function Page() {
  const postMutation = usePost(
    apiEndpoint.EGYPT_VISA_APPLICATION,
    1,
    '/eg/step-two',
    true,
    'egyptVisaApplication'
  );
  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead=" Apply for a Egypt eVisa " />

        <div>
          <Formik
            initialValues={egyptSchema.initialValues}
            validationSchema={egyptSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              postMutation.mutate(values);
              setSubmitting(false);
              // resetForm();
            }}
          >
            {({
              values,
              isValid,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
            }) => (
              <Form>
                <SubHeading subHead="Information for Visa" />
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Type of Visa</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      What type of visa do you need?
                    </div>
                  </div>
                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      component="select"
                      className="new-form-input"
                      name="typeOfVisa"
                      id="typeOfVisa"
                    >
                      <option value="">Select</option>
                      <option value="single">
                        Tourist e visa (30 days Single Entry)
                      </option>
                      <option value="multiple">
                        Tourist e visa (30 days Multiple Entry)
                      </option>
                    </Field>

                    <ErrorMessage name="typeOfVisa">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Number of Visa</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      How many applicants would you like to apply visa for?
                    </div>
                  </div>
                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      component="select"
                      className="new-form-input"
                      name="numberOfVisa"
                      id="numberOfVisa"
                    >
                      <option value="1">Only 1 applicant</option>
                      <option value="2">Group of 2 applicants</option>
                      <option value="3">Group of 3 applicants</option>
                      <option value="4">Group of 4 applicants</option>
                      <option value="5">Group of 5 applicants</option>
                      <option value="6">Group of 6 applicants</option>
                      <option value="7">Group of 7 applicants</option>
                      <option value="8">Group of 8 applicants</option>
                      <option value="9">Group of 9 applicants</option>
                      <option value="10">Group of 10 applicants</option>
                      <option value="11">Group of 11 applicants</option>
                      <option value="12">Group of 12 applicants</option>
                      <option value="13">Group of 13 applicants</option>
                      <option value="14">Group of 14 applicants</option>
                      <option value="15">Group of 15 applicants</option>
                    </Field>

                    <ErrorMessage name="numberOfVisa">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Processing Time </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Time to process your visa
                    </div>
                  </div>
                  <div className="order-2 col-span-8">
                    <div className="pt-4 space-y-4">
                      <div className="flex gap-4">
                        <Field
                          type="radio"
                          className="w-6 h-6"
                          name="processingTime"
                          id="processingTimeNormal"
                          value="normal"
                        />
                        <h3>Normal (Guaranteed within 3 working days)</h3>
                      </div>
                      <div className="flex gap-4">
                        <Field
                          type="radio"
                          className="w-6 h-6"
                          name="processingTime"
                          id="processingTimeUrgent"
                          value="urgent"
                        />
                        <h3>Urgent (Guaranteed within 2 working days)</h3>
                      </div>
                      <div className="flex gap-4">
                        <Field
                          type="radio"
                          className="w-6 h-6"
                          name="processingTime"
                          id="processingTimeSuper"
                          value="super"
                        />
                        <h3>Super Urgent (Within 1 working day)</h3>
                      </div>
                    </div>

                    <ErrorMessage name="processingTime">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div>
                  <div className="label-section">
                    <label>Covid-19 Insurance </label>
                  </div>
                  <div className="flex items-center gap-4 py-7">
                    <Field
                      type="checkbox"
                      className="w-6 h-6"
                      name="covidInsurance"
                      id="covidInsurance"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-primary">
                        US$ 50,000.00 Covered Expenses
                      </h2>
                    </div>
                  </div>
                  <p className="pb-3 font-bold text-red-500">
                    Advantages of getting visa approval by the Government.
                    Without it, the visa may be refused.
                  </p>
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
                      id="email"
                      name="email"
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
                    {/* <Field type="text" name="phoneNumber" id="phoneNumber" /> */}
                    <CustomReactPhoneNumberInput
                      className="new-form-input"
                      name="phoneNumber"
                      setFieldValue={setFieldValue}
                      errors={errors}
                      touched={touched}
                      setFieldTouched={setFieldTouched}
                    />

                    <ErrorMessage name="phoneNumber">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Type of Visa</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">communication Channel</div>
                  </div>
                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      component="select"
                      className="new-form-input"
                      name="communicationChannel"
                      id="communicationChannel"
                    >
                      <option value="">communication Channel</option>
                      <option value="skypeID">Skype Id</option>
                      <option value="whatsapp">Whatsapp Number</option>
                    </Field>

                    <ErrorMessage name="communicationChannel">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                {/* <div className="main-form-section">
                  <div className="label-section">
                    <label>ID</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="communicationChannelNumberOrId"
                      id="communicationChannelNumberOrId"
                    />

                    <ErrorMessage name="communicationChannelNumberOrId">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div> */}
                {values.communicationChannel !== '' &&
                  values.communicationChannel.toLowerCase().includes('id') && (
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>ID</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="communicationChannelNumberOrId"
                          id="communicationChannelNumberOrId"
                        />

                        <ErrorMessage name="communicationChannelNumberOrId">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  )}{' '}
                {values.communicationChannel !== '' &&
                  !values.communicationChannel.toLowerCase().includes('id') && (
                    <>
                      <div className="main-form-section">
                        <div className="label-section">
                          <label>Phone</label>
                        </div>
                        <div className="mark-section group"></div>
                        <div className="order-2 col-span-8">
                          <CustomReactPhoneNumberInput
                            className="new-form-input"
                            name="communicationChannelNumberOrId"
                            setFieldValue={setFieldValue}
                            errors={errors}
                            touched={touched}
                            setFieldTouched={setFieldTouched}
                          />
                          <ErrorMessage name="communicationChannelNumberOrId">
                            {errorMsg => (
                              <div style={{ color: 'red' }}>{errorMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>{' '}
                      </div>
                    </>
                  )}
                <div className="py-8 text-center">
                  {postMutation.isError ? (
                    <div className="text-red-500">
                      An error occurred: {postMutation.error.message}
                    </div>
                  ) : null}
                  <button
                    className={`text-white bg-gradient-to-r from-[#1998C7] to-[#007FAE]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ${
                      !isValid ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={!isValid}
                    type="submit"
                  >
                    {postMutation.isPending ? (
                      <>
                        {' '}
                        <ImSpinner2 className="animate-spin" />
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
}

export default Page;
