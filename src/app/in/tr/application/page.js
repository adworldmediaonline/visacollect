'use client';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FaCirclePlus } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { Country, State, City } from 'country-state-city';
import Heading from '@/components/turkey/common/Heading';
import SubHeading from '@/components/turkey/common/SubHeading';
import { applicationSchema } from '@/constant/turkeyConstant';
import apiEndpoint from '@/services/apiEndpoint';
import usePost from '@/hooks/usePost';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDate } from '@/lib/minDate';
const Page = () => {
  const postMutation = usePost(
    apiEndpoint.TURKEY_VISA_APPLICATION,
    1,
    '/in/tr/application/payment',
    true,
    'turkeyVisaApplication'
  );

  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead="Online Application for Turkey" />

        <div>
          <Formik
            initialValues={applicationSchema.initialValues}
            validationSchema={applicationSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              postMutation.mutate(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ values, isValid, setFieldValue }) => (
              <Form>
                <SubHeading subHead="ITINERARY" />
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Country Citizenship * </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please specify your citizenship and the passport
                      you&apos;ll use for travel. If your country isn&apos;t
                      listed, it likely can&apos;t apply for an online visa.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="countryCitizenship"
                      name="countryCitizenship"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      {Country?.getAllCountries()?.map((country, index) => (
                        <option key={index} value={country?.name}>
                          {country?.name}
                        </option>
                      ))}
                    </Field>

                    <ErrorMessage name="countryCitizenship">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Arrival Date * </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please indicate an estimated date of entry.
                    </div>
                  </div>
                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="arrivalDate"
                      selected={values.arrivalDate}
                      setFieldValue={setFieldValue}
                      minDate={minDate(1)}
                    />
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section"></div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <div className="px-10 py-5 border rounded-lg border-primary bg-primary/20">
                      <div className="flex items-center justify-between pb-5 text-black">
                        <p> Number Of Entries</p>
                        <p>
                          {values.countryCitizenship
                            ? values.numberOfEntries
                            : 'N/A'}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pb-5 text-black">
                        <p> Visa Duration</p>
                        <p>
                          {values.countryCitizenship
                            ? values.visaDuration
                            : 'N/A'}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pb-5 text-black">
                        <p> Your Stay Cannot Exceed </p>
                        <p>
                          {values.countryCitizenship
                            ? values.yourStayCannotExceed
                            : 'N/A'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="w-full mt-10 border-primary " />

                <SubHeading subHead="PASSPORT DETAILS" />

                {/* add new application code start here */}

                <FieldArray name="passportDetails">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.passportDetails.length > 0 &&
                        values.passportDetails.map((visited, index) => (
                          <div key={index}>
                            {values.passportDetails.length > 1 ? (
                              <div className="pb-3 text-right">
                                <button
                                  className="inline-flex items-center gap-3 px-8 py-2 text-base border cursor-pointer border-primary text-primary "
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  <MdDelete /> Remove
                                </button>
                              </div>
                            ) : null}
                            <div>
                              <div className="main-form-section">
                                <div className="label-section">
                                  <label
                                    htmlFor={`passportDetails.${index}.fullName`}
                                  >
                                    Full Name: *
                                  </label>
                                </div>
                                <div className="mark-section group"></div>
                                <div className="order-2 col-span-8">
                                  <Field
                                    className="new-form-input "
                                    name={`passportDetails.${index}.fullName`}
                                    type="text"
                                  />

                                  <ErrorMessage
                                    name={`passportDetails.${index}.fullName`}
                                    component="div"
                                    className="text-red-600"
                                  />
                                </div>
                              </div>

                              {/* 2 */}
                              <div className="main-form-section">
                                <div className="label-section">
                                  <label
                                    htmlFor={`passportDetails.${index}.nationality`}
                                  >
                                    Nationality: *
                                  </label>
                                </div>
                                <div className="mark-section group"></div>
                                <div className="order-2 col-span-8">
                                  <Field
                                    className="new-form-input "
                                    name={`passportDetails.${index}.nationality`}
                                    type="text"
                                  />

                                  <ErrorMessage
                                    name={`passportDetails.${index}.nationality`}
                                    component="div"
                                    className="text-red-600"
                                  />
                                </div>
                              </div>

                              {/* 3 */}
                              <div className="main-form-section">
                                <div className="label-section">
                                  <label
                                    htmlFor={`passportDetails.${index}.passportNumber`}
                                  >
                                    PassportNumber: *
                                  </label>
                                </div>
                                <div className="mark-section group"></div>
                                <div className="order-2 col-span-8">
                                  <Field
                                    className="new-form-input "
                                    name={`passportDetails.${index}.passportNumber`}
                                    type="text"
                                  />

                                  <ErrorMessage
                                    name={`passportDetails.${index}.passportNumber`}
                                    component="div"
                                    className="text-red-600"
                                  />
                                </div>
                              </div>

                              {/* 3 */}
                              <div className="main-form-section">
                                <div className="label-section">
                                  <label
                                    htmlFor={`passportDetails.${index}.dateOfBirth`}
                                  >
                                    DateOfBirth: *
                                  </label>
                                </div>
                                <div className="mark-section group"></div>
                                <div className="order-2 col-span-8">
                                  <ReactDatePickerInput
                                    className="new-form-input"
                                    name={`passportDetails.${index}.dateOfBirth`}
                                    selected={
                                      values.passportDetails[index].dateOfBirth
                                    }
                                    setFieldValue={setFieldValue}
                                    maxDate={new Date()}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                      <div className="pt-5 text-center">
                        <button
                          className="inline-flex items-center gap-3 px-8 py-2 text-xl font-semibold cursor-pointer text-primary "
                          type="button"
                          onClick={() =>
                            push({
                              fullName: '',
                              nationality: '',
                              passportNumber: '',
                              dateOfBirth: '',
                            })
                          }
                        >
                          <FaCirclePlus /> Add More Application
                        </button>
                      </div>
                    </div>
                  )}
                </FieldArray>
                {/* add new application code end here */}
                <hr className="w-full mt-10 border-primary " />

                <SubHeading subHead="CONTACT DETAILS" />

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Full Name: *</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="contactDetailsFullName"
                      name="contactDetailsFullName"
                      className="new-form-input "
                    />

                    <ErrorMessage name="contactDetailsFullName">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Address: *</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="contactDetailsAddress"
                      name="contactDetailsAddress"
                      className="new-form-input "
                    />

                    <ErrorMessage name="contactDetailsAddress">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Email: *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      An email confirming your application
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="contactDetailsEmail"
                      name="contactDetailsEmail"
                      className="new-form-input "
                    />

                    <ErrorMessage name="contactDetailsEmail">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Contact Number: *</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please confirm your accurate phone number for quick
                      application updates. Provide an alternative contact if
                      your number isn&apos;t available.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="contactDetailsContactNumber"
                      name="contactDetailsContactNumber"
                      className="new-form-input "
                    />

                    <ErrorMessage name="contactDetailsContactNumber">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="py-8 text-center">
                  {postMutation.isError ? (
                    <div className="text-red-500">
                      An error occurred: {postMutation.error.message}
                    </div>
                  ) : null}
                  <button
                    className={`cursor-pointer  items-center gap-3 border-2  font-semibold bg-primary text-white w-fit px-12 py-3 rounded-full ${
                      !isValid ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={!isValid}
                    type="submit"
                  >
                    {postMutation.isPending ? (
                      <>Loading...</>
                    ) : (
                      'Submit The Application'
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
