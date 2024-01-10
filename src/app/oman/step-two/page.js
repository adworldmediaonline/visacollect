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
import SingleFileUpload from '@/components/srilanka/SingleFileUpload';
import { LuImagePlus } from 'react-icons/lu';
import Image from 'next/image';

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
            initialValues={omanSchema.peopleInitialValues}
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
              
                <SubHeading subHead="Personal Details" />


                <div className="main-form-section">
                  <div className="label-section">
                    <label>First Name</label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="firstName"
                      id="firstName"
                    />

                    <ErrorMessage name="firstName">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Last Name </label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="lastName"
                      id="lastName"
                    />

                    <ErrorMessage name="lastName">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Nationality</label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      className="new-form-input"
                      name="nationality"
                      id="nationality"
                    >
                      <option value="">Select</option>
                      {getAllCountries()}
                    </Field>

                    <ErrorMessage name="nationality">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Entry Type</label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      className="new-form-input"
                      name="entryType"
                      id="entryType"
                    >
                      <option value="">Select</option>
                      <option value="">30 days</option>
                      <option value="">1 year</option>
                      <option value="">10 days</option>

                    </Field>

                    <ErrorMessage name="entryType">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Date of Birth</label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="dateOfBirth"
                      // selected={values.dateOfBirth}
                      setFieldValue={setFieldValue}
                      maxDate={new Date()}
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
                    <label>Gender</label>
                  </div>

                  <div className="mark-section group"></div>
                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      component="select"
                      className="new-form-input"
                      name="gender"
                      id="gender"
                    >
                      <option value="">Select</option>

                      <option value="male">MALE</option>
                      <option value="female">FEMALE</option>
                    </Field>

                    <ErrorMessage name="gender">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport Number </label>
                  </div>

                  <div className="mark-section group">

                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="passportNumber"
                      id="passportNumber"
                    />

                    <ErrorMessage name="passportNumber">
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

                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="passportExpiryDate"
                      // selected={values.passportExpiryDate}
                      setFieldValue={setFieldValue}
                      maxDate={new Date()}
                    />
                    <ErrorMessage name="passportExpiryDate">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>





                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport Colored Picture</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please upload passport picture
                    </div>
                  </div>

                  {/* upload file start  */}
                  <div className="order-2 col-span-8">
                    <div className="flex items-center w-full h-full gap-8 p-2 mb-5 overflow-hidden border rounded-md">
                      <div className="bg-gray-200 rounded-lg">
                        <SingleFileUpload
                          id="passportColouredPhoto"
                          name="passportColouredPhoto"
                          setFieldValue={setFieldValue}
                          value={values.passportColouredPhoto}
                          errorMessage={
                            <ErrorMessage
                              name="passportColouredPhoto"
                              component="div"
                            />
                          }
                          accept="image/png, image/jpeg"
                        />

                        <label
                          htmlFor="passportColouredPhoto"
                          className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                          <LuImagePlus size={40} className="text-gray-500" />
                        </label>
                      </div>
                      {values.passportColouredPhoto ? (
                        <div className="flex items-center w-full">
                          <Image
                            src={URL.createObjectURL(
                              values.passportColouredPhoto
                            )}
                            alt={`Uploaded Image`}
                            width={100}
                            height={100}
                          />
                        </div>
                      ) : (
                        <div className="text-sm">
                          <p>Choose the Photo To Upload</p>
                          <p>No file chosen yet</p>
                        </div>
                      )}
                    </div>

                    <ErrorMessage name="passportColouredPhoto">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  {/* upload file end  */}
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Colored Photograph</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please upload your colored picture
                    </div>
                  </div>

                  {/* upload file start  */}
                  <div className="order-2 col-span-8">
                    <div className="flex items-center w-full h-full gap-8 p-2 mb-5 overflow-hidden border rounded-md">
                      <div className="bg-gray-200 rounded-lg">
                        <SingleFileUpload
                          id="profilePhoto"
                          name="profilePhoto"
                          setFieldValue={setFieldValue}
                          value={values.profilePhoto}
                          errorMessage={
                            <ErrorMessage
                              name="profilePhoto"
                              component="div"
                            />
                          }
                          accept="image/png, image/jpeg"
                        />

                        <label
                          htmlFor="profilePhoto"
                          className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                          <LuImagePlus size={40} className="text-gray-500" />
                        </label>
                      </div>
                      {values.profilePhoto ? (
                        <div className="flex items-center w-full">
                          <Image
                            src={URL.createObjectURL(
                              values.profilePhoto
                            )}
                            alt={`Uploaded Image`}
                            width={100}
                            height={100}
                          />
                        </div>
                      ) : (
                        <div className="text-sm">
                          <p>Choose the Photo To Upload</p>
                          <p>No file chosen yet</p>
                        </div>
                      )}
                    </div>

                    <ErrorMessage name="profilePhoto">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  {/* upload file end  */}
                </div>


                <div className="py-8 text-center">
                  <button
                    className={`cursor-pointer w-fit items-center gap-3  rounded-lg font-semibold text-white bg-primaryMain px-8 py-3 `}

                  >
                    + Add Another Peron
                  </button>
                </div>

            


                <div className="py-8 text-center">
                  <button
                    className={`cursor-pointer w-fit items-center gap-3  rounded-full font-semibold text-white bg-primaryMain px-12 py-3 ${!isValid ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                    disabled={!isValid}
                    type="submit"
                  >
                    Submit
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
