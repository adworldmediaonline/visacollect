'use client';
import React from 'react';
import { LuImagePlus } from 'react-icons/lu';
import Link from 'next/link';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { CiEdit } from 'react-icons/ci';
import { MdDelete, MdDeleteOutline } from 'react-icons/md';
import Image from 'next/image';
import { ImSpinner2 } from 'react-icons/im';
import { useRouter } from 'next/navigation';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import Formheading from '@/components/srilanka/common/Formheading';
import {
  applyInGroupsData,
  touristGroupsSchema,
} from '@/constant/srilankaConstant';
import SingleFileUpload from '@/components/srilanka/SingleFileUpload';
import useQueryGet from '@/hooks/useQuery';
import { useFormContext } from '@/context/formContext';
import apiEndpoint from '@/services/apiEndpoint';
import useUpdate from '@/hooks/useUpdate';
import useDelete from '@/hooks/useDelete';
import StepProcess from '@/components/srilanka/common/StepProcess';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDateWithDate } from '@/lib/minDate';
import { formatDateYearDayMonth } from '@/lib/dateFormatter';
const Page = ({ params }) => {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.SL_VISA_TOURIST_GROUPS,
    state?.formId,
    'touristGroups'
  );

  const updateMutation = useUpdate(
    apiEndpoint.SL_VISA_TOURIST_GROUPS_MEMBERS,
    params?.id,
    'form',
    '/srilanka/slvisa/tourist-eta/apply-in-group/step-two',
    getQuery.refetch,
    'touristGroups'
  );

  const deleteMutation = useDelete(
    apiEndpoint.SL_VISA_TOURIST_GROUPS_MEMBERS,
    getQuery.refetch,
    'touristGroups',
    'Member deleted successfully',
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
    return router.push('/srilanka/slvisa/tourist-eta/apply-in-group');
  }

  if (getQuery.isSuccess) {
    const {
      data: { data: touristGroupsData },
    } = getQuery;

    const currentMember = touristGroupsData?.members?.find(
      member => member?._id === params?.id
    );

    const { _id, updatedAt, createdAt, __v, formId, ...currentMemberData } =
      currentMember;

    return (
      <div>
        <Formmainsection
          title="Lorem Ipsum is simply dummy text of the printing"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <div className="container md:py-8 py-20 md;px-0 px-3">
          <StepProcess
            color1=" bg-[#0068E5]"
            color2="bg-[#E3E3E3]"
            color3="bg-[#E3E3E3] "
            color4="bg-[#E3E3E3]"
          />

          <Formheading
            formHead="Member Information - Tourist Purpose - Group"
            formPara="All information should be entered as per the applicant’s passport"
          />

          <div>
            <Formik
              initialValues={currentMemberData}
              validationSchema={touristGroupsSchema.yupSchemaMember}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting }) => {
                const formData = new FormData();

                Object.entries({
                  ...values,
                  formId: touristGroupsData._id,
                }).forEach(([key, value]) => {
                  if (Array.isArray(value)) {
                    formData.append(key, JSON.stringify(value));
                  } else if (value instanceof File) {
                    // Handle File objects
                    formData.append(key, value);
                  } else {
                    // For other non-array and non-File values
                    formData.append(key, value);
                  }
                });

                updateMutation.mutate(formData);
                setSubmitting(false);
              }}
            >
              {({ values, isValid, handleSubmit, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Surname/Family Name* </label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Enter your last name (surname) as it appears on your
                        passport
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="familyNameGroupTourist"
                        name="familyNameGroupTourist"
                        // placeholder="Surname"
                        className="new-form-input "
                      />

                      <ErrorMessage name="familyNameGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Other/Given Names*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Enter your given name as it appears on your passport
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="givenNameGroupTourist"
                        name="givenNameGroupTourist"
                        // placeholder="Given Name"
                        className="new-form-input "
                      />

                      <ErrorMessage name="givenNameGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Title*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Select your preferred title based on your gender,
                        marital status or professional designation.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="titleGroupTourist"
                        name="titleGroupTourist"
                        // placeholder="Title"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="Dr">DR</option>
                        <option value="Master">MASTER</option>
                        <option value="Miss">MISS</option>
                        <option value="Mr">MR</option>
                        <option value="Mrs">MRS</option>
                        <option value="Ms">MS</option>
                        <option value="Rev">REV</option>
                      </Field>

                      <ErrorMessage name="titleGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Date of Birth*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Select your date of birth as it appears in your passport
                        in the calendar provided below.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="dateOfBirthGroupTourist"
                        selected={new Date(values.dateOfBirthGroupTourist)}
                        setFieldValue={setFieldValue}
                        maxDate={new Date()}
                      />
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Gender*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please select your gender: Male or Female.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="genderGroupTourist"
                        name="genderGroupTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Field>

                      <ErrorMessage name="genderGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Nationality*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Your country of nationality is the country in which you
                        have or can obtain a passport.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="nationalityGroupTourist"
                        name="nationalityGroupTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="nationalityGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Country of Birth*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Select the country where you were born.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="countryOfBirthGroupTourist"
                        name="countryOfBirthGroupTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="countryOfBirthGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Are you fully vaccinated for COVID 19*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Tourist who has fully vaccinated recommended dosage
                        prior to your 14 days of arrival or COVID recovered
                        applicant after completed one dose of vaccination with
                        vaccination certificate.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="covidVaccinatedGroupTourist"
                        name="covidVaccinatedGroupTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Field>

                      <ErrorMessage name="covidVaccinatedGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Country of Address*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please select the name of the country in which you live
                        in.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="countryOfAddressGroupTourist"
                        name="countryOfAddressGroupTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Field>

                      <ErrorMessage name="countryOfAddressGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Occupation*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please provide your current occupation.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="occupationGroupTourist"
                        name="occupationGroupTourist"
                        // placeholder="Occupation"
                        className="new-form-input "
                      />

                      <ErrorMessage name="occupationGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Passport Number*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please specify Applicant&apos;s Passport Number
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="passportNumberGroupTourist"
                        name="passportNumberGroupTourist"
                        // placeholder="Passport Number"
                        className="new-form-input "
                      />

                      <ErrorMessage name="passportNumberGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Issue Date*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please specify the Issue Date of your current passport.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="issueDateGroupTourist"
                        selected={new Date(values.issueDateGroupTourist)}
                        setFieldValue={setFieldValue}
                        minDate={new Date(values.dateOfBirthGroupTourist)}
                        disabled={values.dateOfBirthGroupTourist === ''}
                      />
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Expiry date*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please specify the Expiry date of your current passport.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="expiryDateGroupTourist"
                        selected={new Date(values.expiryDateGroupTourist)}
                        setFieldValue={setFieldValue}
                        minDate={minDateWithDate(
                          1,
                          values.issueDateGroupTourist
                        )}
                      />
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Passport Front page (Bio data page) date*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please upload passport front page (which cover photo,
                        date of birth, passport number).
                      </div>
                    </div>

                    {/* upload file start  */}
                    <div className="order-2 col-span-8">
                      <div className="flex items-center w-full h-full gap-8 p-2 mb-5 overflow-hidden border rounded-md">
                        <div className="bg-gray-200 rounded-lg">
                          <SingleFileUpload
                            id="passportImageGroupTourist"
                            name="passportImageGroupTourist"
                            setFieldValue={setFieldValue}
                            value={values.passportImageGroupTourist}
                            errorMessage={
                              <ErrorMessage
                                name="profilePicture"
                                component="div"
                              />
                            }
                            accept="image/png, image/jpeg"
                          />

                          <label
                            htmlFor="passportImageGroupTourist"
                            className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                          >
                            <LuImagePlus size={40} className="text-gray-500" />
                          </label>
                        </div>
                        {values.passportImageGroupTourist instanceof File ? (
                          <div className="flex items-center w-full">
                            <Image
                              src={URL.createObjectURL(
                                values.passportImageGroupTourist
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
                        {values.passportImageGroupTourist !== File ? (
                          <div className="flex items-center w-full">
                            <Image
                              src={values.passportImageGroupTourist}
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

                      <ErrorMessage name="passportImageGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    {/* upload file end  */}
                  </div>

                  <div>
                    <div className="pt-5 pb-10">
                      <div className=" flex w-full justify-between bg-[#0068E5] px-3 py-4">
                        <h2 className="text-lg font-semibold text-white ">
                          Child information in parent&apos;s passport{' '}
                        </h2>
                        <div>
                          <div className="flex items-center gap-2">
                            <Field
                              type="checkbox"
                              name="isChildInformationEnable"
                              className="w-6 h-6"
                            />
                            <h2 className="text-white"> Enable </h2>
                          </div>
                        </div>
                      </div>

                      {values.isChildInformationEnable && (
                        <>
                          {' '}
                          <p className="py-5 text-lg font-semibold">
                            {' '}
                            Children under 16 years of age possessing separate
                            passport(s) should submit individual application(s){' '}
                          </p>
                          <FieldArray
                            name="childInformation"
                            render={arrayHelpers => (
                              <div>
                                <table className="w-full">
                                  <thead>
                                    <tr>
                                      <th>
                                        <div className="label-section">
                                          <label>Surname/Family Name *</label>
                                        </div>
                                      </th>
                                      <th>
                                        {' '}
                                        <div className="label-section">
                                          <label>Other/Given Names *</label>
                                        </div>
                                      </th>
                                      <th>
                                        {' '}
                                        <div className="label-section">
                                          <label>Date of Birth*</label>
                                        </div>
                                      </th>
                                      <th>
                                        {' '}
                                        <div className="label-section">
                                          <label>Gender*</label>
                                        </div>
                                      </th>
                                      <th>
                                        {' '}
                                        <div className="label-section">
                                          <label>Relationship *</label>
                                        </div>
                                      </th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {values.childInformation?.map(
                                      (child, index) => (
                                        <tr key={index}>
                                          <td className="px-3 py-2">
                                            <div className="order-2 col-span-8">
                                              <Field
                                                className="new-form-input "
                                                name={`childInformation[${index}].surnameFamilyName`}
                                              />
                                            </div>
                                          </td>

                                          <td>
                                            <div className="order-2 col-span-8">
                                              <Field
                                                className="new-form-input "
                                                name={`childInformation.${index}.otherGivenNames`}
                                              />
                                            </div>
                                          </td>

                                          <td className="px-3 py-2">
                                            <div className="order-2 col-span-8">
                                              <ReactDatePickerInput
                                                className="new-form-input"
                                                name={`childInformation.${index}.dateOfBirth`}
                                                selected={
                                                  values.childInformation[index]
                                                    .dateOfBirth
                                                    ? new Date(
                                                        values.childInformation[
                                                          index
                                                        ].dateOfBirth
                                                      )
                                                    : null
                                                }
                                                setFieldValue={setFieldValue}
                                                maxDate={new Date()}
                                              />
                                            </div>
                                          </td>

                                          <td>
                                            <div className="order-2 col-span-8">
                                              <Field
                                                component="select"
                                                className="new-form-input "
                                                name={`childInformation.${index}.gender`}
                                              >
                                                {' '}
                                                <option value="">Select</option>
                                                <option value="male">
                                                  Male
                                                </option>
                                                <option value="female">
                                                  Female
                                                </option>
                                              </Field>
                                            </div>
                                          </td>

                                          <td className="px-3 py-2">
                                            <div className="order-2 col-span-8">
                                              <Field
                                                component="select"
                                                className="new-form-input "
                                                name={`childInformation.${index}.relationship`}
                                              >
                                                {' '}
                                                <option value="">Select</option>
                                                <option value="male">
                                                  child
                                                </option>
                                              </Field>
                                            </div>
                                          </td>
                                          <td>
                                            <button
                                              type="button"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              }
                                            >
                                              <MdDeleteOutline />
                                            </button>
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </table>

                                <div className="py-8 text-center">
                                  <button
                                    type="button"
                                    className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2"
                                    onClick={() =>
                                      arrayHelpers.push({
                                        surnameFamilyName: '',
                                        otherGivenNames: '',
                                        dateOfBirth: '',
                                        gender: '',
                                        relationship: '',
                                      })
                                    }
                                  >
                                    Add More
                                  </button>
                                </div>
                              </div>
                            )}
                          />
                        </>
                      )}

                      {/* field array end */}
                    </div>
                  </div>

                  <Formsubhead subHead="declaration" />

                  <div>
                    {applyInGroupsData?.radioData?.map((e, i) => (
                      <div key={i}>
                        <div className="grid gap-8 py-8 md:grid-cols-12">
                          <div className="col-span-8">
                            <label>
                              <span className="pr-2">{e.id}.</span>
                              {e.question}
                            </label>
                          </div>

                          <div className="flex col-span-4 space-x-4">
                            <div className="px-2 space-x-2">
                              <Field
                                type="radio"
                                id={`${e.name}`}
                                name={`${e.name}`}
                                value="yes"
                              />
                              <label htmlFor={`question${e.name}Yes`}>
                                Yes
                              </label>
                            </div>
                            <div className="px-2 space-x-2">
                              <Field
                                type="radio"
                                name={`${e.name}`}
                                value="no"
                              />
                              <label htmlFor={`${e.name}`}>No</label>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    ))}
                  </div>

                  <div className="py-8 text-center">
                    {updateMutation.isError ? (
                      <div className="text-red-500">
                        An error occurred: {updateMutation.error.message}
                      </div>
                    ) : null}
                    <button
                      className={`formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2 ${
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
                        'Update Member'
                      )}
                    </button>
                  </div>

                  <div className="w-full h-full ">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left table-auto min-w-max">
                        <thead>
                          <tr className="rounded-xl">
                            {applyInGroupsData?.tableHead?.map(head => (
                              <th
                                key={head}
                                className="bg-[#0068E5] text-black p-4 "
                              >
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-bold leading-none "
                                >
                                  {head}
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {touristGroupsData?.members?.length > 0
                            ? touristGroupsData?.members
                                ?.filter(member => member?._id !== params?.id)
                                .map(member => (
                                  <tr key={member._id}>
                                    <td className="p-4">
                                      <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                      >
                                        {member?.givenNameGroupTourist}
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                      >
                                        {member?.passportNumberGroupTourist}
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                      >
                                        {member?.nationalityGroupTourist}
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                      >
                                        {formatDateYearDayMonth(
                                          member?.dateOfBirthGroupTourist
                                        )}
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                      >
                                        {formatDateYearDayMonth(
                                          member?.issueDateGroupTourist
                                        )}
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                      >
                                        {member?.genderGroupTourist}
                                      </div>
                                    </td>
                                    <td
                                      className={`p-4 flex space-x-5 items-center`}
                                    >
                                      <Link
                                        href={`/srilanka/slvisa/tourist-eta/apply-in-group/step-two/${member?._id}`}
                                      >
                                        <CiEdit size={24} />
                                      </Link>

                                      <button
                                        type="button"
                                        onClick={() =>
                                          deleteMutation.mutate(member?._id)
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
                            : 'No Member found'}
                          {deleteMutation.error ? (
                            <div className="text-red-500">
                              An error occurred:{' '}
                              {deleteMutation?.error?.message}
                            </div>
                          ) : null}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex items-center justify-center my-5">
                    {touristGroupsData?.members?.length > 0 ? (
                      <Link
                        href={`/srilanka/slvisa/tourist-eta/apply-in-group/review${touristGroupsData?._id}`}
                        className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2"
                      >
                        Next
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
};

export default Page;
