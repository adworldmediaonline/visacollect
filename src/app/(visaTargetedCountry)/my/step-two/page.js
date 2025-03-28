'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';
import { getAllCountries } from '@/lib/getAllCountries';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { MdDeleteOutline } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import { malaysiaSchema } from '@/constant/malaysiaSchema';
import { ImSpinner2 } from 'react-icons/im';
import usePost from '@/hooks/usePost';
import { useFormContext } from '@/context/formContext';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import useDelete from '@/hooks/useDelete';
import { addDays, format } from 'date-fns';

const Page = () => {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.MALAYSIA_VISA_APPLICATION,
    state.formId,
    'malaysiaVisaApplication'
  );

  const postMutation = usePost(
    apiEndpoint.MALAYSIA_VISA_APPLICATION_PEOPLE,
    'add person',
    false,
    false,
    'malaysiaVisaApplication'
  );

  const deleteMutation = useDelete(
    apiEndpoint.MALAYSIA_VISA_APPLICATION_PEOPLE,
    getQuery.refetch,
    'malaysiaVisaApplication',
    'person deleted successfully',
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
    return router.push('/my/step-one');
  }

  if (getQuery.isSuccess) {
    const {
      data: {
        data: { __v, createdAt, updatedAt, ...malaysiaVisaApplicationData },
      },
    } = getQuery;
    return (
      <div>
        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <Heading formHead="Apply Now for Malaysia Application" />

          <div>
            <Formik
              initialValues={malaysiaSchema.personInitialValues}
              validationSchema={malaysiaSchema.personYupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                postMutation.mutate({
                  ...values,
                  formId: malaysiaVisaApplicationData._id,
                });
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ values, isValid, setFieldValue }) => (
                <Form>
                  <SubHeading subHead="Your Applicant Information" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>First name and middle name </label>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        className="new-form-input"
                        name="firstName"
                        id="firstName"
                      />
                      <div className="text-xs text-gray-400">
                        Including a middle name is recommended, but it&apos;s
                        not required if you don&apos;t have one and Enter this
                        information as it appears in your passport.
                      </div>

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

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        className="new-form-input"
                        name="lastName"
                        id="lastName"
                      />
                      <div className="text-xs text-gray-400">
                        Enter this information as it appears in your passport.
                      </div>

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

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        id="nationality"
                        name="nationality"
                        component="select"
                        className="new-form-input"
                      >
                        <option value="">Select</option>
                        {getAllCountries()}
                      </Field>
                      <div className="text-xs text-gray-400">
                        Select the nationality listed on your passport.
                      </div>

                      <ErrorMessage name="nationality">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label> Gender </label>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        id="gender"
                        name="gender"
                        component="select"
                        className="new-form-input"
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Field>
                      <div className="text-xs text-gray-400">
                        Select the gender listed on your passport.
                      </div>

                      <ErrorMessage name="gender">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Country of birth </label>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        id="countryOfBirth"
                        name="countryOfBirth"
                        component="select"
                        className="new-form-input"
                      >
                        <option value="">Select</option>
                        {getAllCountries()}
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
                      <label>Country of residence </label>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        id="countryOfResidence"
                        name="countryOfResidence"
                        component="select"
                        className="new-form-input"
                      >
                        <option value="">Select</option>
                        {getAllCountries()}
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
                      <label>Passport number</label>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        className="new-form-input"
                        name="passportNumber"
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
                      <label>Passport Issue date</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="passportIssueDate"
                        selected={values.passportIssueDate}
                        setFieldValue={setFieldValue}
                        maxDate={new Date()}
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

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="passportExpirationDate"
                        selected={values.passportExpirationDate}
                        setFieldValue={setFieldValue}
                        minDate={addDays(new Date(), 180)}
                      />
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Date of birth</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="dateOfBirth"
                        selected={values.dateOfBirth}
                        setFieldValue={setFieldValue}
                        maxDate={values.passportIssueDate}
                        disabled={values.passportIssueDate === ''}
                      />
                      <ErrorMessage name="dateOfBirth">
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
                      className={`text-white bg-gradient-to-r from-[#1998C7] to-[#007FAE]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ${
                        !isValid ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                      disabled={!isValid}
                      type="submit"
                    >
                      {postMutation.isPending ? (
                        <>
                          <ImSpinner2 className="animate-spin" /> Loading
                        </>
                      ) : (
                        '+ Add Another person'
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
                      {malaysiaVisaApplicationData?.peoples?.length > 0 ? (
                        malaysiaVisaApplicationData?.peoples?.map(people => (
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
                              <Link href={`/my/step-two/${people?._id}`}>
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
                  {malaysiaVisaApplicationData?.peoples?.length > 0 ? (
                    <Link
                      href={`/malaysia/payment/${malaysiaVisaApplicationData?._id}`}
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
};

export default Page;
