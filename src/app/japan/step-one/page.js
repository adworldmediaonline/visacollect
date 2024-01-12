'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';
import { getAllCountries } from '@/lib/getAllCountries';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import Link from 'next/link';

import usePost from '@/hooks/usePost';
import { ImSpinner2 } from 'react-icons/im';
import apiEndpoint from '@/services/apiEndpoint';
import { addDays } from 'date-fns';
import CustomReactPhoneNumberInput from '@/components/common/CustomReactPhoneNumberInput';
import { japanSchema } from '@/constant/japanConstant';

const Page = () => {
  const postMutation = usePost(
    apiEndpoint.JAPAN_VISA_APPLICATION,
    1,
    '/japan/step-two',
    true,
    'japanVisaApplication'
  );
  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead="Get your Embassy Registration!" />

        <div>
          <Formik
            initialValues={japanSchema.initialValues}
            validationSchema={japanSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              postMutation.mutate(values);
              setSubmitting(false);
              resetForm();
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
                <SubHeading subHead="Embassy Registration" />
                {console.log(values)}
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Email address</label>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
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
                    <label>When do you arrive at your destination?</label>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="arriveDestination"
                      selected={values.arriveDestination}
                      setFieldValue={setFieldValue}
                      minDate={new Date()}
                    />
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>When do you depart from your destination?</label>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="departDestination"
                      selected={values.departDestination}
                      setFieldValue={setFieldValue}
                      minDate={addDays(values.arriveDestination, 1)}
                    />
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Destination country </label>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      id="destinationCountry"
                      name="destinationCountry"
                      component="select"
                      className="new-form-input"
                    >
                      <option value="">Select</option>
                      {getAllCountries()}
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

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="emergencyContactEmail"
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

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      className="new-form-input"
                      name="emergencyContactFullName"
                      id="emergencyContactFullName"
                    />
                    <div className="text-xs text-gray-400">
                      Including their middle name is recommended, but it&apos;s
                      not required if they don&apos;t have one.
                    </div>

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
                      Emergency contact&apos;s country code and phone number
                    </label>
                  </div>

                  <div className="order-2 col-span-8">
                    <CustomReactPhoneNumberInput
                      className="new-form-input"
                      name="emergencyContactPhoneNumber"
                      setFieldValue={setFieldValue}
                      errors={errors}
                      touched={touched}
                      setFieldTouched={setFieldTouched}
                    />

                    <div className="text-xs text-gray-400">
                      Please ensure the country code is correct for your phone
                      number. If it isn&apos;t, select the correct one.
                    </div>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport expiration date</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="passportExpirationDate"
                      selected={values.passportExpirationDate}
                      setFieldValue={setFieldValue}
                      minDate={addDays(new Date(), 180)}
                      disabled={values.arriveDestination === ''}
                    />
                  </div>
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
