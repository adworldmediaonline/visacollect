'use client';
import React from 'react';
import { LuImagePlus } from 'react-icons/lu';
import Link from 'next/link';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete, MdDeleteOutline } from 'react-icons/md';
import Image from 'next/image';
import { ImSpinner2 } from 'react-icons/im';
import apiEndpoint from '@/services/apiEndpoint';
import usePost from '@/hooks/usePost';
import useDelete from '@/hooks/useDelete';
import { useRouter } from 'next/navigation';
import { businessGroupSchema, businessGroupsRadio } from '@/constant/srilankaConstant';
import useQueryGet from '@/hooks/useQuery';
import { useFormContext } from '@/context/formContext';
import SingleFileUpload from '@/components/srilanka/SingleFileUpload';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formheading from '@/components/srilanka/common/Formheading';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import useUpdate from '@/hooks/useUpdate';
import StepProcess from '@/components/srilanka/common/StepProcess';

const tableHead = [
  'Given Name',
  'Passport No.',
  'Nationality',
  'Date of Birth',
  'Passport Issued Date',
  'Gender',
  '',
];

const Page = ({ params }) => {
  const router = useRouter();
  const { state } = useFormContext();
  const getQuery = useQueryGet(
    apiEndpoint.SL_VISA_BUSINESS_GROUPS,
    state?.formId,
    'businessGroups'
  );

  const postMutation = usePost(
    apiEndpoint.SL_VISA_BUSINESS_GROUPS_MEMBERS,
    'add member',
    false,
    false,
    'businessGroups'
  );

  const updateMutation = useUpdate(
    apiEndpoint.SL_VISA_BUSINESS_GROUPS_MEMBERS,
    params?.id,
    'form',
    '/srilanka/slvisa/business-purpose-eta/apply-in-group/step-two',
    getQuery.refetch,
    'businessGroups'
  );

  const deleteMutation = useDelete(
    apiEndpoint.SL_VISA_BUSINESS_GROUPS_MEMBERS,
    getQuery.refetch,
    'businessGroups',
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
    return router.push('/srilanka/slvisa/business-purpose-eta/apply-in-group');
  }

  if (getQuery.isSuccess) {
    const {
      data: { data: businessGroupsData },
    } = getQuery;

    const currentMember = businessGroupsData?.members?.find(
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
            color1=" bg-[#F7BD6D]"
            color2="bg-[#E3E3E3]"
            color3="bg-[#E3E3E3] "
            color4="bg-[#E3E3E3]"
          />

          <Formheading
            formHead="Member Information - Business Purpose - Group"
            formPara="All information should be entered as per the applicant’s passport"
          />

          <div>
            <Formik
              initialValues={currentMemberData}
              validationSchema={businessGroupSchema.yupSchemaMember}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const formData = new FormData();

                Object.entries({
                  ...values,
                  formId: businessGroupsData._id,
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
              {({ values, isValid, setFieldValue }) => (
                <Form>
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
                        id="familyNameBusinessGroupMember"
                        name="familyNameBusinessGroupMember"
                        // placeholder="Surname"
                        className="new-form-input "
                      />

                      <ErrorMessage name="familyNameBusinessGroupMember">
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
                        id="givenNameBusinessGroupMember"
                        name="givenNameBusinessGroupMember"
                        // placeholder="Given Name"
                        className="new-form-input "
                      />

                      <ErrorMessage name="givenNameBusinessGroupMember">
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
                        id="titleBusinessGroupMember"
                        name="titleBusinessGroupMember"
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

                      <ErrorMessage name="titleBusinessGroupMember">
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
                      <Field
                        type="date"
                        id="dateOfBirthBusinessGroupMember"
                        name="dateOfBirthBusinessGroupMember"
                        // placeholder="Date Of Birth"
                        className="new-form-input "
                      />

                      <ErrorMessage name="dateOfBirthBusinessGroupMember">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
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
                        id="genderBusinessGroupMember"
                        name="genderBusinessGroupMember"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Field>

                      <ErrorMessage name="genderBusinessGroupMember">
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
                        id="nationalityBusinessGroupMember"
                        name="nationalityBusinessGroupMember"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="nationalityBusinessGroupMember">
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
                        id="countryOfBirthBusinessGroupMember"
                        name="countryOfBirthBusinessGroupMember"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="countryOfBirthBusinessGroupMember">
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
                        id="covidVaccinatedBusinessGroupMember"
                        name="covidVaccinatedBusinessGroupMember"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Field>

                      <ErrorMessage name="covidVaccinatedBusinessGroupMember">
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
                        id="countryOfAddressBusinessGroupMember"
                        name="countryOfAddressBusinessGroupMember"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="countryOfAddressBusinessGroupMember">
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
                        id="occupationBusinessGroupMember"
                        name="occupationBusinessGroupMember"
                        // placeholder="Occupation"
                        className="new-form-input "
                      />

                      <ErrorMessage name="occupationBusinessGroupMember">
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
                        id="passportNumberBusinessGroupMember"
                        name="passportNumberBusinessGroupMember"
                        // placeholder="Passport Number"
                        className="new-form-input "
                      />

                      <ErrorMessage name="passportNumberBusinessGroupMember">
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
                      <Field
                        type="date"
                        id="issueDateBusinessGroupMember"
                        name="issueDateBusinessGroupMember"
                        // placeholder="Date Of Birth"
                        className="new-form-input"
                      />

                      <ErrorMessage name="issueDateBusinessGroupMember">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
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
                      <Field
                        type="date"
                        id="expiryDateBusinessGroupMember"
                        name="expiryDateBusinessGroupMember"
                        // placeholder="Expiry Date"
                        className="new-form-input "
                      />

                      <ErrorMessage name="expiryDateBusinessGroupMember">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
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
                            id="passportImageBusinessGroupMember"
                            name="passportImageBusinessGroupMember"
                            setFieldValue={setFieldValue}
                            value={values.passportImageBusinessGroupMember}
                            errorMessage={
                              <ErrorMessage
                                name="profilePicture"
                                component="div"
                              />
                            }
                            accept="image/png, image/jpeg"
                          />

                          <label
                            htmlFor="passportImageBusinessGroupMember"
                            className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                          >
                            <LuImagePlus size={40} className="text-gray-500" />
                          </label>
                        </div>

                        {values.passportImageBusinessGroupMember instanceof
                        File ? (
                          <div className="flex items-center w-full">
                            <div className="relative h-28 w-28">
                              <Image
                                src={URL.createObjectURL(
                                  values.passportImageBusinessGroupMember
                                )}
                                alt="Uploaded Image"
                                fill={true}
                                sizes="100vw"
                                className="object-cover"
                              />
                            </div>
                          </div>
                        ) : values.passportImageBusinessGroupMember ? (
                          <div className="flex items-center w-full">
                            <div className="relative h-28 w-28">
                              <Image
                                src={values.passportImageBusinessGroupMember}
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

                      <ErrorMessage name="passportImageBusinessGroupMember">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    {/* upload file end  */}
                  </div>
                  {/* CHILD INFORMATION ADDED START */}
                  <div>
                    <div className="pt-5 pb-10">
                      <div className=" flex w-full justify-between bg-[#F7BD6D] px-3 py-4">
                        <h2 className="text-lg font-semibold text-black ">
                          Child information in parent&apos;s passport{' '}
                        </h2>
                        <div>
                          <div className="flex items-center gap-4">
                            <Field
                              type="checkbox"
                              name="isChildInformationEnable"
                              className="w-6 h-6"
                            />
                            <h2> Enable </h2>
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
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Surname/Family Name</th>
                                      <th>Other Given Names</th>
                                      <th>Date of Birth</th>
                                      <th>Gender</th>
                                      <th>Relationship</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {values.childInformation?.map(
                                      (child, index) => (
                                        <tr key={index}>
                                          <td>
                                            <div className="label-section">
                                              <label>
                                                Surname/Family Name *
                                              </label>
                                            </div>

                                            <div className="mark-section group">
                                              <BsQuestionCircleFill
                                                className=" side-icon"
                                                size={20}
                                              />
                                              <div className="tooltip-content">
                                                Enter your last name
                                              </div>
                                            </div>

                                            <div className="order-2 col-span-8">
                                              <Field
                                                className="new-form-input "
                                                name={`childInformation[${index}].surnameFamilyName`}
                                              />
                                            </div>
                                          </td>

                                          <td>
                                            <div className="label-section">
                                              <label>Other/Given Names *</label>
                                            </div>

                                            <div className="mark-section group">
                                              <BsQuestionCircleFill
                                                className=" side-icon"
                                                size={20}
                                              />
                                              <div className="tooltip-content">
                                                Enter your first name
                                              </div>
                                            </div>

                                            <div className="order-2 col-span-8">
                                              <Field
                                                className="new-form-input "
                                                name={`childInformation.${index}.otherGivenNames`}
                                              />
                                            </div>
                                          </td>

                                          <td>
                                            <div className="label-section">
                                              <label>Date of Birth*</label>
                                            </div>

                                            <div className="mark-section group">
                                              <BsQuestionCircleFill
                                                className=" side-icon"
                                                size={20}
                                              />
                                              <div className="tooltip-content">
                                                Select your date of birth as it
                                                appears in your passport in the
                                                calendar provided below.
                                              </div>
                                            </div>

                                            <div className="order-2 col-span-8">
                                              <Field
                                                type="date"
                                                className="new-form-input "
                                                name={`childInformation.${index}.dateOfBirth`}
                                              />
                                            </div>
                                          </td>

                                          <td>
                                            <div className="label-section">
                                              <label>Gender*</label>
                                            </div>

                                            <div className="mark-section group">
                                              <BsQuestionCircleFill
                                                className=" side-icon"
                                                size={20}
                                              />
                                              <div className="tooltip-content">
                                                Please select your gender: Male
                                                or Female.
                                              </div>
                                            </div>

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

                                          <td>
                                            <div className="label-section">
                                              <label>Relationship *</label>
                                            </div>

                                            <div className="mark-section group">
                                              <BsQuestionCircleFill
                                                className=" side-icon"
                                                size={20}
                                              />
                                              <div className="tooltip-content">
                                                Please select your relation with
                                                the person
                                              </div>
                                            </div>

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
                                    className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#F7BD6D] px-8 py-2"
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
                  {/* CHILD INFORMATION CODE END HERE */}

                  <Formsubhead subHead="declaration" />

                  <div>
                    {businessGroupsRadio?.map((e, i) => (
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
                      className={`formbtn cursor-pointer inline-flex items-center gap-3 bg-[#F7BD6D] px-8 py-2 ${
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
                    <table className="w-full text-left table-auto min-w-max">
                      <thead>
                        <tr className="rounded-xl">
                          {tableHead?.map(head => (
                            <th
                              key={head}
                              className="bg-[#F7BD6D] text-black p-4 "
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
                        {businessGroupsData?.members?.length > 0 ? (
                          businessGroupsData?.members
                            ?.filter(member => member?._id !== params?.id)
                            .map(member => (
                              <tr key={member._id}>
                                <td className="p-4">
                                  <div
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {member?.givenNameBusinessGroupMember}
                                  </div>
                                </td>
                                <td className="p-4">
                                  <div
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {member?.passportNumberBusinessGroupMember}
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
                                    {member?.nationalityBusinessGroupMember}
                                  </div>
                                </td>
                                <td className="p-4">
                                  <div
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {member?.issueDateBusinessGroupMember}
                                  </div>
                                </td>
                                <td className="p-4">
                                  <div
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {member?.genderBusinessGroupMember}
                                  </div>
                                </td>
                                <td
                                  className={`p-4 flex space-x-5 items-center`}
                                >
                                  <Link
                                    href={`/srilanka/slvisa/business-purpose-eta/apply-in-group/step-two/${member?._id}`}
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
                        ) : (
                          <tr>
                            <td>No Member found</td>
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
                  <div className="flex items-center justify-center my-5">
                    {businessGroupsData?.members?.length > 0 ? (
                      <Link
                        href={`/srilanka/slvisa/business-purpose-eta/apply-in-group/review/${businessGroupsData?._id}`}
                        className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#F7BD6D] px-8 py-2"
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
