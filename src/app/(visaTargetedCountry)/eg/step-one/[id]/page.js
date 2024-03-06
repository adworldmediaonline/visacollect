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
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import useUpdate from '@/hooks/useUpdate';
function Page({ params }) {
  const { id } = params;
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.EGYPT_VISA_APPLICATION,
    id,
    'egyptVisaApplication'
  );

  const updateMutation = useUpdate(
    apiEndpoint.EGYPT_VISA_APPLICATION,
    id,
    'form',
    '/egypt/payment',
    getQuery.refetch,
    'egyptVisaApplication'
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
    return router.push('/egypt/payment');
  }

  if (getQuery.isSuccess) {
    const {
      data: {
        data: { _id, __v, createdAt, updatedAt, ...egyptVisaApplicationData },
      },
    } = getQuery;
    return (
      <div>
        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <Heading formHead=" Apply for a Egypt eVisa " />

          <div>
            <Formik
              initialValues={egyptVisaApplicationData}
              validationSchema={egyptSchema.yupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                updateMutation.mutate(values);
                setSubmitting(false);
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
                        to indicate a correct phone number, since you may
                        receive updates on the status of your Application.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      {/* <Field type="text" name="phoneNumber" id="phoneNumber" /> */}
                      <CustomReactPhoneNumberInput
                        className="new-form-input"
                        name="phoneNumber"
                        defaultValue={values.phoneNumber}
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
                      <div className="tooltip-content">
                        communication Channel
                      </div>
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
                    values.communicationChannel
                      .toLowerCase()
                      .includes('id') && (
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
                    !values.communicationChannel
                      .toLowerCase()
                      .includes('id') && (
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
                              defaultValue={
                                values.communicationChannelNumberOrId
                              }
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
                    {updateMutation.isError ? (
                      <div className="text-red-500">
                        An error occurred: {updateMutation.error.message}
                      </div>
                    ) : null}
                    <button
                      className={`cursor-pointer w-fit items-center gap-3  rounded-full font-semibold text-white bg-primaryMain px-12 py-3 ${
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
}

export default Page;
