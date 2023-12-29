'use client';
import SubHeading from '@/components/thailand/common/SubHeading';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { thailandSchema } from '../_thailandFormSchema/thailandFormSchema';
import { CiEdit } from 'react-icons/ci';
import apiEndpoint from '@/services/apiEndpoint';
import usePost from '@/hooks/usePost';
import { useFormContext } from '@/context/formContext';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import { ImSpinner2 } from 'react-icons/im';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import useDelete from '@/hooks/useDelete';

export default function Page() {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.THAILAND_VISA_APPLICATION,
    state?.formId,
    'thailandVisaApplication'
  );

  const postMutation = usePost(
    apiEndpoint.THAILAND_VISA_APPLICATION_PERSON,
    'add person',
    false,
    false,
    'thailandVisaApplication'
  );

  const deleteMutation = useDelete(
    apiEndpoint.THAILAND_VISA_APPLICATION_PERSON,
    getQuery.refetch,
    'thailandVisaApplication',
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
    return router.push('/thailand/apply-form');
  }

  if (getQuery.isSuccess) {
    const {
      data: { data: thailandVisaApplicationData },
    } = getQuery;
    return (
      <div>
        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <h3 className="text-lg ">Home &gt; Embassy Registration</h3>

          <div className="pt-10 pb-4 mx-auto">
            <h3 className="text-4xl font-bold ">Thailand</h3>
          </div>

          <div>
            <Formik
              initialValues={thailandSchema.personInitialValues}
              validationSchema={thailandSchema.personYupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                postMutation.mutate({
                  ...values,
                  formId: thailandVisaApplicationData._id,
                });
                setSubmitting(false);
                // resetForm();
              }}
            >
              {({ values, isValid }) => (
                <Form>
                  <SubHeading subHead="Your Applicant Information" />
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>First and middle name </label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        // placeholder="Date Of Birth"
                        className="new-form-input "
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
                      <label>Last name </label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        // placeholder="Date Of Birth"
                        className="new-form-input "
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
                    <div className="order-2 col-span-9">
                      <Field
                        required
                        component="select"
                        id="nationality"
                        name="nationality"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="thailand">Thailand</option>
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
                      <label>Gender</label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        required
                        component="select"
                        id="gender"
                        name="gender"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
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
                      <label>Date of birth </label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        // placeholder="Date Of Birth"
                        className="new-form-input "
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
                      <label>Country of birth</label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        required
                        component="select"
                        id="countryOfBirth"
                        name="countryOfBirth"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="thailand">Thailand</option>
                        <option value="australia">Australia</option>
                      </Field>

                      <ErrorMessage name="countryOfBirth">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Country of residence</label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        required
                        component="select"
                        id="countryOfResidence"
                        name="countryOfResidence"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="thailand">Thailand</option>
                        <option value="australia">Australia</option>
                      </Field>

                      <ErrorMessage name="countryOfResidence">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Passport number </label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="text"
                        id="passportNumber"
                        name="passportNumber"
                        // placeholder="Date Of Birth"
                        className="new-form-input "
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
                      <label>Passport issue date</label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="date"
                        id="passportIssueDate"
                        name="passportIssueDate"
                        // placeholder="Date Of Birth"
                        className="new-form-input "
                      />

                      <ErrorMessage name="passportIssueDate">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Passport expiration date</label>
                    </div>
                    <div className="order-2 col-span-9">
                      <Field
                        type="date"
                        id="passportExpirationDate"
                        name="passportExpirationDate"
                        // placeholder="Date Of Birth"
                        className="new-form-input "
                      />

                      <ErrorMessage name="passportExpirationDate">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="py-5 text-center">
                    {postMutation.isError ? (
                      <div className="text-red-500">
                        An error occurred: {postMutation.error.message}
                      </div>
                    ) : null}
                    <button
                      className="inline-flex items-center gap-3 px-8 py-2 text-xl font-semibold border rounded-lg cursor-pointer text-primaryMain border-primaryMain"
                      disabled={!isValid}
                      type="submit"
                    >
                      {postMutation.isPending ? (
                        <>
                          <ImSpinner2 className="animate-spin" /> Loading
                        </>
                      ) : (
                        'Add Another Person'
                      )}
                    </button>
                  </div>

                  {/* table start  */}
                  <div className="w-full h-full py-8">
                    <table className="w-full text-left border table-auto min-w-max">
                      <thead>
                        <tr className="rounded-xl">
                          <th className="bg-[#F7BD6D] text-black p-4 ">
                            Full name
                          </th>
                          <th className="bg-[#F7BD6D] text-black p-4 ">
                            Nationality
                          </th>
                          <th className="bg-[#F7BD6D] text-black p-4 ">
                            Gender
                          </th>
                          <th className="bg-[#F7BD6D] text-black p-4 ">
                            Date Of Birth
                          </th>
                          <th className="bg-[#F7BD6D] text-black p-4 ">
                            Country of birth
                          </th>
                          <th className="bg-[#F7BD6D] text-black p-4 ">
                            Passport number
                          </th>
                          <th className="bg-[#F7BD6D] text-black p-4 ">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {thailandVisaApplicationData?.persons?.length > 0 ? (
                          thailandVisaApplicationData?.persons?.map(person => (
                            <tr key={person._id}>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {person?.firstName} {person?.lastName}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {person?.nationality}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {person?.gender}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {person?.dateOfBirth}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {person?.countryOfBirth}
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {person?.passportNumber}
                                </div>
                              </td>
                              <td className={`p-4 flex space-x-5 items-center`}>
                                <Link
                                  href={`/thailand/step-two/${person?._id}`}
                                >
                                  <CiEdit size={24} />
                                </Link>

                                <button
                                  type="button"
                                  onClick={() =>
                                    deleteMutation.mutate(person?._id)
                                  }
                                >
                                  {deleteMutation.isPending ? (
                                    <ImSpinner2 className="animate-spin" />
                                  ) : (
                                    <MdDelete size={24} />
                                  )}
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td>No Person found</td>
                          </tr>
                        )}
                        {deleteMutation.error ? (
                          <div className="text-red-500">
                            An error occurred: {deleteMutation?.error?.message}
                          </div>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                  {/* table end  */}

                  <div className="px-10 py-5 border rounded-lg border-primaryMain bg-primaryMain/10">
                    <div className="flex items-center justify-between pb-5 text-black">
                      <p className="text-2xl font-semibold">
                        {' '}
                        Products{' '}
                        <span className="text-sm font-normal">
                          CA Embassy Registration Embassy Registration (CA)
                        </span>
                      </p>
                      <p className="text-xl font-semibold">NA</p>
                    </div>
                    <div className="flex items-center justify-between pb-5 text-black">
                      <p className="text-2xl font-semibold">
                        {' '}
                        Embassy Registration Fee (CA)
                      </p>
                      <p className="text-xl font-semibold">NA</p>
                    </div>
                    <div className="flex items-center justify-between pb-5 text-black">
                      <p className="text-2xl font-semibold">
                        {' '}
                        Total{' '}
                        <span className="text-sm font-normal">
                          (For all applicants)
                        </span>{' '}
                      </p>
                      <p className="text-xl font-semibold">
                        NA{' '}
                        <span className="text-sm font-normal">
                          (Includes taxes and fees)
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="py-8 text-center">
                    {thailandVisaApplicationData?.persons?.length > 0 ? (
                      <Link
                        href={`/thailand/review/${thailandVisaApplicationData?._id}`}
                        className="items-center gap-3 px-8 py-3 font-semibold border-2 rounded-lg cursor-pointer w-fit border-primaryMain text-primaryMain "
                      >
                        Continue
                      </Link>
                    ) : null}
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
