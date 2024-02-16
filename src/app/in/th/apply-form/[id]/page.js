'use client';
import SubHeading from '@/components/thailand/common/SubHeading';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { ImSpinner2, ImSpinner8 } from 'react-icons/im';
import { thailandSchema } from '../../_thailandFormSchema/thailandFormSchema';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import useUpdate from '@/hooks/useUpdate';
import apiEndpoint from '@/services/apiEndpoint';
import { minDate } from '@/lib/minDate';

export default function Page({ params }) {
  const { id } = params;
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.THAILAND_VISA_APPLICATION,
    id,
    'thailandVisaApplication'
  );

  const updateMutation = useUpdate(
    apiEndpoint.THAILAND_VISA_APPLICATION,
    id,
    'form',
    '/in/th/step-two',
    getQuery.refetch,
    'thailandVisaApplication'
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
    return router.push('/in/th/apply-form');
  }

  if (getQuery.isSuccess) {
    const {
      data: {
        data: {
          _id,
          __v,
          createdAt,
          updatedAt,
          persons,
          ...thailandVisaApplicationData
        },
      },
    } = getQuery;

    return (
      <div>
        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <h3 className="text-lg ">Home &gt; Get your Embassy Registration!</h3>

          <div className="pt-10 pb-4 mx-auto">
            <h3 className="text-4xl font-bold ">
              Get your Embassy Registration!
            </h3>
          </div>

          <div>
            <Formik
              initialValues={thailandVisaApplicationData}
              validationSchema={thailandSchema.yupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                updateMutation.mutate(values);
                setSubmitting(false);
              }}
            >
              {({ values, isValid, setFieldValue }) => (
                <Form>
                  <SubHeading subHead="Embassy Registration" />
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Email address </label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="text"
                        id="emailAddress"
                        name="emailAddress"
                        className="new-form-input "
                      />

                      <ErrorMessage name="emailAddress">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>When do you arrive at your destination? </label>
                    </div>
                    <div className="order-2 col-span-9">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="whenArriveDestination"
                        selected={new Date(values.whenArriveDestination)}
                        setFieldValue={setFieldValue}
                        minDate={minDate(1)}
                      />
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>When do you depart from your destination? </label>
                    </div>
                    <div className="order-2 col-span-9">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="whenDepartDestination"
                        selected={new Date(values.whenDepartDestination)}
                        setFieldValue={setFieldValue}
                        minDate={new Date(values.whenArriveDestination)}
                        disabled={values.whenArriveDestination === ''}
                      />
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Destination country</label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        required
                        component="select"
                        id="destinationCountry"
                        name="destinationCountry"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="Thailand">Thailand</option>
                      </Field>

                      <ErrorMessage name="destinationCountry">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Emergency contact&apos;s email</label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="text"
                        id="emergencyContactEmail"
                        name="emergencyContactEmail"
                        className="new-form-input "
                      />

                      <ErrorMessage name="emergencyContactEmail">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Emergency contact&apos;s full name </label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="text"
                        id="emergencyContactFullName"
                        name="emergencyContactFullName"
                        className="new-form-input "
                      />

                      <ErrorMessage name="emergencyContactFullName">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>
                        Emergency contact&apos;s country code and phone number{' '}
                      </label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="text"
                        id="emergencyContactCountryCodeAndPhoneNumber"
                        name="emergencyContactCountryCodeAndPhoneNumber"
                        className="new-form-input "
                      />

                      <ErrorMessage name="emergencyContactCountryCodeAndPhoneNumber">
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
                      className={`cursor-pointer w-fit items-center gap-3 border-2 rounded-full font-semibold border-primaryMain text-primaryMain px-12 py-3 ${
                        !isValid ? 'cursor-not-allowed opacity-40' : ''
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
