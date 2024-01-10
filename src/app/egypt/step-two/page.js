'use client';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Heading from '@/components/australia/common/Heading';
import SubHeading from '@/components/thailand/common/SubHeading';
import React from 'react';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { egyptSchema } from '@/constant/egyptSchema';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormContext } from '@/context/formContext';
import { ImSpinner2 } from 'react-icons/im';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import usePost from '@/hooks/usePost';

const Page = () => {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.EGYPT_VISA_APPLICATION,
    state.formId,
    'egyptVisaApplication'
  );

  const postMutation = usePost(
    apiEndpoint.EGYPT_VISA_APPLICATION_VISA_DETAIL,
    2,
    '/egypt/payment',
    false,
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
    return router.push('/egypt/step-one');
  }

  if (getQuery.isSuccess) {
    const {
      data: {
        data: { __v, createdAt, updatedAt, ...egyptVisaApplicationData },
      },
    } = getQuery;
    return (
      <div>
        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <Heading formHead="Apply for a Egypt eVisa " />

          <div>
            <Formik
              initialValues={{
                ...egyptSchema.initialValuesVisaDetails,
                passportDetails: Array.from(
                  {
                    length: +egyptVisaApplicationData?.numberOfVisa,
                  },
                  (_, index) => ({
                    idFullName: '',
                    gender: '',
                    dateOfBirth: '',
                    nationality: '',
                    passportNumber: '',
                  })
                ),
              }}
              validationSchema={egyptSchema.yupSchemaVisaDetails}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                postMutation.mutate({
                  ...values,
                  formId: egyptVisaApplicationData._id,
                });
                setSubmitting(false);
                // resetForm();
              }}
            >
              {({ values, isValid, setFieldValue }) => (
                <Form>
                  <SubHeading subHead="Passport Details" />

                  <FieldArray
                    name="passportDetails"
                    render={arrayHelpers => (
                      <div>
                        <table className="w-full">
                          <thead>
                            <tr>
                              <th>
                                <div className="label-section">
                                  <label>S. No.</label>
                                </div>
                              </th>
                              <th>
                                <div className="label-section">
                                  <label>IDFull Name</label>
                                </div>
                              </th>
                              <th>
                                {' '}
                                <div className="label-section">
                                  <label>Gender</label>
                                </div>
                              </th>
                              <th>
                                {' '}
                                <div className="label-section">
                                  <label>Date of Birth (YYYY-MM-DD)</label>
                                </div>
                              </th>
                              <th>
                                {' '}
                                <div className="label-section">
                                  <label>Nationality</label>
                                </div>
                              </th>
                              <th>
                                {' '}
                                <div className="label-section">
                                  <label>Passport Number</label>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {values.passportDetails?.map(
                              (passportDetail, index) => (
                                <tr key={index}>
                                  <td>
                                    <div className="order-2 col-span-8">
                                      <p className="text-lg font-bold">
                                        {index + 1}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-3 py-2">
                                    <div className="order-2 col-span-8">
                                      <Field
                                        className="new-form-input "
                                        name={`passportDetails[${index}].idFullName`}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="order-2 col-span-8">
                                      <Field
                                        component="select"
                                        className="new-form-input "
                                        name={`passportDetails.${index}.gender`}
                                      >
                                        {' '}
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                      </Field>
                                    </div>
                                  </td>

                                  <td className="px-3 py-2">
                                    <div className="order-2 col-span-8">
                                      <ReactDatePickerInput
                                        className="new-form-input"
                                        name={`passportDetails.${index}.dateOfBirth`}
                                        selected={
                                          values.passportDetails[index]
                                            .dateOfBirth
                                        }
                                        setFieldValue={setFieldValue}
                                        maxDate={new Date()}
                                      />
                                    </div>
                                  </td>

                                  <td className="px-3 py-2">
                                    <div className="order-2 col-span-8">
                                      <Field
                                        component="select"
                                        className="new-form-input "
                                        name={`passportDetails.${index}.nationality`}
                                      >
                                        {' '}
                                        <option value="">Select</option>
                                        <option value="india">India</option>
                                        <option value="australia">
                                          Australia
                                        </option>
                                      </Field>
                                    </div>
                                  </td>

                                  <td>
                                    <div className="order-2 col-span-8">
                                      <Field
                                        className="new-form-input"
                                        name={`passportDetails.${index}.passportNumber`}
                                      />
                                    </div>
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  />

                  <SubHeading subHead="Order Details" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Arrival Date</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        If arrival date is unknown, estimated date is suggested:
                        - You can enter Egypt after the arrival date if the visa
                        still valid. - You can not enter Egypt before the
                        arrival date.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="orderDetails.dateOfArrival"
                        selected={values.orderDetails.dateOfArrival}
                        setFieldValue={setFieldValue}
                        minDate={new Date()}
                      />
                      <ErrorMessage name="orderDetails.dateOfArrival">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Departure Date</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        You can leave sooner or by the exit date. The exit date
                        is the last day you are permitted to be in Egypt.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="orderDetails.dateOfDeparture"
                        selected={values.orderDetails.dateOfDeparture}
                        setFieldValue={setFieldValue}
                        minDate={values.orderDetails.dateOfArrival}
                      />
                      <ErrorMessage name="orderDetails.dateOfDeparture">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Special Request</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        component="textarea"
                        // id="orderDetails.specialRequest"
                        name="orderDetails.specialRequest"
                        rows="4"
                        className="w-full border border-gray-400"
                      />
                      <ErrorMessage name="orderDetails.specialRequest">
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
                      name="confirmation"
                      id="confirmation"
                    />
                    <h2>
                      I would like to confirm the above information is correct.
                    </h2>
                    <ErrorMessage name="confirmation">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="flex items-center gap-4 py-7">
                    <Field
                      type="checkbox"
                      className="w-6 h-6"
                      name="termsAndConditions"
                      id="termsAndConditions"
                    />
                    <h2>I have read and agreed Terms and Conditions</h2>
                    <ErrorMessage name="termsAndConditions">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="py-8 text-center">
                    {postMutation.isError ? (
                      <div className="text-red-500">
                        An error occurred: {postMutation.error.message}
                      </div>
                    ) : null}
                    <button
                      className={`cursor-pointer w-fit items-center gap-3  rounded-full font-semibold text-white bg-primaryMain px-12 py-3 ${
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
                        'Submit'
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
