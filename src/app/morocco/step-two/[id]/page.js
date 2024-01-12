'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Heading from '@/components/australia/common/Heading';
import SubHeading from '@/components/australia/common/SubHeading';
import React from 'react';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { getAllCountries } from '@/lib/getAllCountries';

import SingleFileUpload from '@/components/srilanka/SingleFileUpload';
import { LuImagePlus } from 'react-icons/lu';
import Image from 'next/image';
import { useFormContext } from '@/context/formContext';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';
import Link from 'next/link';
import { MdDeleteOutline } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { addDays, format } from 'date-fns';
import usePost from '@/hooks/usePost';
import useDelete from '@/hooks/useDelete';
import useUpdate from '@/hooks/useUpdate';
import { moroccoSchema } from '@/constant/moroccoConstant';

const options = [
  { value: 'hotel', label: 'Hotel' },
  { value: 'toursAndctivity', label: 'Tours & Activity' },
  { value: 'Flight', label: 'Flight' },
  { value: 'airportTransfer', label: 'Airport Transfer' },
  { value: 'tourPackage', label: 'Tour Package' },
];

function Page({ params }) {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.MOROCCO_VISA_APPLICATION,
    state?.formId,
    'moroccoVisaApplication'
  );

  const updateMutation = useUpdate(
    apiEndpoint.MOROCCO_VISA_APPLICATION_PEOPLE,
    params?.id,
    'form',
    '/morocco/step-two',
    getQuery.refetch,
    'moroccoVisaApplication'
  );

  const deleteMutation = useDelete(
    apiEndpoint.MOROCCO_VISA_APPLICATION_PEOPLE,
    getQuery.refetch,
    'moroccoVisaApplication',
    'Person deleted successfully',
    false
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
    return router.push('/morocco/step-two');
  }

  if (getQuery.isSuccess) {
    const {
      data: { data: moroccoVisaApplicationData },
    } = getQuery;

    const currentPeople = moroccoVisaApplicationData?.peoples?.find(
      person => person?._id === params?.id
    );

    const { _id, updatedAt, createdAt, __v, formId, ...currentPeopleData } =
      currentPeople;
    return (
      <div>
        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <Heading formHead=" Visa Application Form " />

          <div>
            <Formik
              initialValues={currentPeopleData}
              validationSchema={moroccoSchema.peopleYupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const formData = new FormData();

                Object.entries({
                  ...values,
                  formId: moroccoVisaApplicationData._id,
                }).forEach(([key, value]) => {
                  if (Array.isArray(value)) {
                    formData.append(key, JSON.stringify(value));
                  } else if (value instanceof File) {
                    formData.append(key, value);
                  } else {
                    formData.append(key, value);
                  }
                });

                updateMutation.mutate(formData);
                setSubmitting(false);
                // resetForm();
              }}
            >
              {({ values, isValid, setFieldValue }) => (
                <Form>
                  <SubHeading subHead="Personal Details" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>First Name</label>
                    </div>

                    <div className="mark-section group"></div>

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

                    <div className="mark-section group"></div>

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

                    <div className="mark-section group"></div>

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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        className="new-form-input"
                        name="entryType"
                        id="entryType"
                      >
                        <option value="">Select</option>
                        <option value="30 days">30 days</option>
                        <option value="1 year">1 year</option>
                        <option value="10 days">10 days</option>
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="dateOfBirth"
                        selected={new Date(values.dateOfBirth)}
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

                    <div className="mark-section group"></div>

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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="passportExpiryDate"
                        selected={new Date(values.passportExpiryDate)}
                        setFieldValue={setFieldValue}
                        minDate={addDays(new Date(), 180)}
                      />
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

                        {values.passportColouredPhoto instanceof File ? (
                          <div className="flex items-center w-full">
                            <div className="relative h-28 w-28">
                              <Image
                                src={URL.createObjectURL(
                                  values.passportColouredPhoto
                                )}
                                alt="Uploaded Image"
                                fill={true}
                                sizes="100vw"
                                className="object-cover"
                              />
                            </div>
                          </div>
                        ) : values.passportColouredPhoto ? (
                          <div className="flex items-center w-full">
                            <div className="relative h-28 w-28">
                              <Image
                                src={values.passportColouredPhoto}
                                alt="Uploaded Image"
                                fill={true}
                                sizes="100vw"
                                className="object-cover"
                              />
                            </div>
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
                                name="profilePicture"
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

                        {values.profilePhoto instanceof File ? (
                          <div className="flex items-center w-full">
                            <div className="relative h-28 w-28">
                              <Image
                                src={URL.createObjectURL(values.profilePhoto)}
                                alt="Uploaded Image"
                                fill={true}
                                sizes="100vw"
                                className="object-cover"
                              />
                            </div>
                          </div>
                        ) : values.profilePhoto ? (
                          <div className="flex items-center w-full">
                            <div className="relative h-28 w-28">
                              <Image
                                src={values.profilePhoto}
                                alt="Uploaded Image"
                                fill={true}
                                sizes="100vw"
                                className="object-cover"
                              />
                            </div>
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
                    {updateMutation.isError ? (
                      <div className="text-red-500">
                        An error occurred: {updateMutation.error.message}
                      </div>
                    ) : null}
                    <button
                      className={`cursor-pointer w-fit items-center gap-3  rounded-lg font-semibold text-white bg-primaryMain px-8 py-3 ${
                        !isValid ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                      disabled={!isValid}
                      type="submit"
                    >
                      {updateMutation.isPending ? (
                        <>
                          <ImSpinner2 className="animate-spin" /> Loading
                        </>
                      ) : (
                        'Update'
                      )}
                    </button>
                  </div>

                  <table className="w-full my-10">
                    <thead className="text-white bg-primary">
                      <tr>
                        <th className="py-3 rounded-tl-md">
                          <div className="label-section">
                            <label>First and middle name </label>
                          </div>
                        </th>
                        <th>
                          {' '}
                          <div className="label-section">
                            <label>Last name</label>
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
                            <label>Date of birth</label>
                          </div>
                        </th>
                        <th className="rounded-tr-md">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {moroccoVisaApplicationData?.peoples?.length > 0 ? (
                        moroccoVisaApplicationData?.peoples
                          ?.filter(people => people?._id !== params?.id)
                          .map(people => (
                            <tr key={people._id}>
                              <td className="px-3 py-2">
                                <div className="order-2 col-span-8 text-center">
                                  {people?.firstName}
                                </div>
                              </td>

                              <td>
                                <div className="order-2 col-span-8 text-center">
                                  {people?.lastName}
                                </div>
                              </td>

                              <td className="px-3 py-2">
                                <div className="order-2 col-span-8 text-center">
                                  {people?.gender}
                                </div>
                              </td>

                              <td>
                                <div className="order-2 col-span-8 text-center">
                                  {format(
                                    new Date(people?.dateOfBirth),
                                    'dd/MM/yyyy'
                                  )}
                                </div>
                              </td>

                              <td className="flex justify-center space-x-3">
                                <Link href={`/morocco/step-two/${people?._id}`}>
                                  <FaEdit className="text-primary" size={30} />
                                </Link>

                                <button
                                  type="button"
                                  onClick={() =>
                                    deleteMutation.mutate(people?._id)
                                  }
                                >
                                  {deleteMutation.isPending ? (
                                    <ImSpinner2 className="animate-spin" />
                                  ) : (
                                    <MdDeleteOutline
                                      className="text-primary"
                                      size={30}
                                    />
                                  )}
                                </button>
                              </td>
                            </tr>
                          ))
                      ) : (
                        <tr>
                          <td>No People found</td>
                        </tr>
                      )}
                      {deleteMutation.error ? (
                        <div className="text-red-500">
                          An error occurred: {deleteMutation?.error?.message}
                        </div>
                      ) : null}
                    </tbody>
                  </table>
                  {moroccoVisaApplicationData?.peoples?.length > 0 ? (
                    <Link
                      href={`/morocco/payment/${moroccoVisaApplicationData?._id}`}
                      className="items-center gap-3 px-12 py-3 font-semibold text-white rounded-full cursor-pointer w-fit bg-primaryMain"
                    >
                      Next
                    </Link>
                  ) : null}
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
