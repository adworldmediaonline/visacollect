'use client';
import { LuImagePlus } from 'react-icons/lu';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import { ImSpinner2 } from 'react-icons/im';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import ReactDatePicker from 'react-datepicker';
import { CiCalendarDate } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import {
  applyIndividualRadioData,
  touristIndividualsSchema,
} from '@/constant/srilankaConstant';
import SingleFileUpload from '@/components/srilanka/SingleFileUpload';
import apiEndpoint from '@/services/apiEndpoint';
import axiosInstance from '@/services/api';
import useUpdate from '@/hooks/useUpdate';
import { addDays } from '@/lib/addDays';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDateWithDate } from '@/lib/minDate';

export default function Page({ params }) {
  const router = useRouter();
  const {
    isPending: getTouristIndividualByIdIsPending,
    error: getTouristIndividualByIdError,
    data: getTouristIndividualByIdData,
    isSuccess: getTouristIndividualByIdIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ['touristIndividual'],
    queryFn: () =>
      axiosInstance.get(
        `${apiEndpoint.SL_VISA_TOURIST_INDIVIDUAL}/${params?.id}`
      ),
    enabled: !!params?.id,
  });

  const updateMutation = useUpdate(
    apiEndpoint.SL_VISA_TOURIST_INDIVIDUAL,
    params?.id,
    'form',
    '/srilanka/slvisa/tourist-eta/apply-individual/review',
    refetch,
    'touristIndividual'
  );
  if (getTouristIndividualByIdIsPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        <ImSpinner2 className="w-4 h-4 text-black animate-spin" />
        loading
      </div>
    );
  }

  if (getTouristIndividualByIdError) {
    return router.push('/srilanka/slvisa/tourist-eta/apply-individual');
  }

  if (getTouristIndividualByIdIsSuccess) {
    const {
      data: { __v, _id, createdAt, updatedAt, ...touristIndividualData },
    } = getTouristIndividualByIdData;

    return (
      <div>
        <Formmainsection
          title="Lorem Ipsum is simply dummy text of the printing"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <div className="flex items-center justify-center pt-8 space-x-6">
            <div className="flex flex-col items-center justify-start col-span-3 ">
              <p className=" bg-[#0068E5]  items-center flex flex-col w-12 h-12 py-1 rounded-full text-[25px] font-bold text-center">
                1
              </p>
              <h2 className="py-2 font-bold">Application</h2>
            </div>
            <hr className=" w-40 h-[2px] bg-[#E3E3E3] rounded-full" />
            <div className="flex flex-col items-center justify-start col-span-3 ">
              <p className=" bg-[rgb(227,227,227)] items-center flex flex-col w-12 h-12 py-1 rounded-full text-[25px] font-bold text-center">
                2
              </p>
              <h2 className="py-2 font-bold">Review</h2>
            </div>
            <hr className=" w-40 h-[2px] bg-[#E3E3E3] rounded-full" />
            <div className="flex flex-col items-center justify-start col-span-3 ">
              <p className="bg-[#E3E3E3]  items-center flex flex-col w-12 h-12 py-1 rounded-full text-[25px] font-bold text-center">
                3
              </p>
              <h2 className="py-2 font-bold">Payment</h2>
            </div>
            <hr className=" w-40 h-[2px] bg-[#E3E3E3] rounded-full" />
            <div className="flex flex-col items-center justify-start col-span-3 ">
              <p className="bg-[#E3E3E3]  items-center flex flex-col w-12 h-12 py-1 rounded-full text-[25px] font-bold text-center">
                4
              </p>
              <h2 className="py-2 font-bold ">Complete</h2>
            </div>
          </div>

          <Formheading
            formHead="Travel Information - Tourist Purpose - Individual"
            formPara="All information should be entered as per the applicant's passport"
            // subHead=""
          />

          <div>
            <Formik
              initialValues={touristIndividualData}
              validationSchema={touristIndividualsSchema.yupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const formData = new FormData();

                Object.entries(values).forEach(([key, value]) => {
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
                        id="familyNameIndividualTourist"
                        name="familyNameIndividualTourist"
                        // placeholder="Surname"
                        className="new-form-input "
                      />

                      <ErrorMessage name="familyNameIndividualTourist">
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
                        id="givenNameIndividualTourist"
                        name="givenNameIndividualTourist"
                        // placeholder="Given Name"
                        className="new-form-input "
                      />

                      <ErrorMessage name="givenNameIndividualTourist">
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
                        id="titleIndividualTourist"
                        name="titleIndividualTourist"
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

                      <ErrorMessage name="titleIndividualTourist">
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
                        name="dateOfBirthIndividualTourist"
                        selected={new Date(values.dateOfBirthIndividualTourist)}
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
                        id="genderIndividualTourist"
                        name="genderIndividualTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Field>

                      <ErrorMessage name="genderIndividualTourist">
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
                        id="nationalityIndividualTourist"
                        name="nationalityIndividualTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="nationalityIndividualTourist">
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
                        id="countryOfBirthIndividualTourist"
                        name="countryOfBirthIndividualTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="countryOfBirthIndividualTourist">
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
                        id="covidVaccinatedIndividualTourist"
                        name="covidVaccinatedIndividualTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Field>

                      <ErrorMessage name="covidVaccinatedIndividualTourist">
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
                        id="occupationIndividualTourist"
                        name="occupationIndividualTourist"
                        // placeholder="Occupation"
                        className="new-form-input "
                      />

                      <ErrorMessage name="occupationIndividualTourist">
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
                        id="passportNumberIndividualTourist"
                        name="passportNumberIndividualTourist"
                        // placeholder="Passport Number"
                        className="new-form-input "
                      />

                      <ErrorMessage name="passportNumberIndividualTourist">
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
                        name="issueDateIndividualTourist"
                        selected={new Date(values.issueDateIndividualTourist)}
                        setFieldValue={setFieldValue}
                        minDate={new Date(values.dateOfBirthIndividualTourist)}
                        disabled={values.dateOfBirthIndividualTourist === ''}
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
                        name="expiryDateIndividualTourist"
                        selected={new Date(values.expiryDateIndividualTourist)}
                        setFieldValue={setFieldValue}
                        minDate={minDateWithDate(
                          1,
                          values.issueDateIndividualTourist
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
                            id="passportImageIndividualTourist"
                            name="passportImageIndividualTourist"
                            setFieldValue={setFieldValue}
                            value={values.passportImageIndividualTourist}
                            errorMessage={
                              <ErrorMessage
                                name="profilePicture"
                                component="div"
                              />
                            }
                            accept="image/png, image/jpeg"
                          />

                          <label
                            htmlFor="passportImageIndividualTourist"
                            className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                          >
                            <LuImagePlus size={40} className="text-gray-500" />
                          </label>
                        </div>
                        {values.passportImageIndividualTourist instanceof
                        File ? (
                          <div className="flex items-center w-full">
                            <Image
                              src={URL.createObjectURL(
                                values.passportImageIndividualTourist
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
                        {values.passportImageIndividualTourist !== File ? (
                          <div className="flex items-center w-full">
                            <Image
                              src={values.passportImageIndividualTourist}
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

                      <ErrorMessage name="passportImageIndividualTourist">
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
                                              <Field
                                                type="date"
                                                className="new-form-input "
                                                name={`childInformation.${index}.dateOfBirth`}
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
                                              <MdDeleteOutline
                                                className="text-primary"
                                                size={30}
                                              />
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
                  {/* CHILD INFORMATION ADDED END */}

                  <Formsubhead subHead="Note that now it is October 23, 2023, 11:58 am in Sri Lanka" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>
                        Where you have been during last 14 days before this
                        trip?*{' '}
                      </label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Where you have been in since last 14 days.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="whereHaveBeenIndividualTourist"
                        name="whereHaveBeenIndividualTourist"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="whereHaveBeenIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Attended Arrrival Date*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please select the date you intend to enter Sri Lanka. An
                        ETA is valid for up to 03 month from date of issue.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePicker
                        showIcon
                        selected={
                          new Date(values.attendantArrivalDateIndividualTourist)
                        }
                        minDate={addDays(
                          values.expiryDateIndividualTourist,
                          180
                        )}
                        onChange={date =>
                          setFieldValue(
                            'attendantArrivalDateIndividualTourist',
                            date
                          )
                        }
                        dateFormat="dd-MM-yyyy"
                        icon={<CiCalendarDate />}
                        className="w-full new-form-input"
                        name="attendantArrivalDateIndividualTourist"
                        placeholderText="Enter arrival date"
                        // wrapperClassName="date-picker"
                        disabled={values.expiryDateIndividualTourist === ''}
                      />

                      <ErrorMessage name="attendantArrivalDateIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Purpose of visit*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Select you purpose of traveling to Sri Lanka.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="purposeOfVisitIndividualTourist"
                        name="purposeOfVisitIndividualTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="M.I.C.E Tourism (Meetings, Incentives, Conferences & Exhibitions/Events)">
                          M.I.C.E Tourism (Meetings, Incentives, Conferences &
                          Exhibitions/Events)
                        </option>
                        <option value="Medical treatment including Ayurvedic (herbal)">
                          Medical treatment including Ayurvedic (herbal)
                        </option>
                        <option value="Participate in Art, Music, and Dance Events">
                          Participate in Art, Music, and Dance Events
                        </option>
                        <option value="Participate in Pilgrimages">
                          Participate in Pilgrimages
                        </option>
                        <option value="Participate in Sport Events">
                          Participate in Sport Events
                        </option>
                        <option value="Participate in Weddings">
                          Participate in Weddings
                        </option>
                        <option value="Sightseeing or Holidaying">
                          Sightseeing or Holidaying
                        </option>
                        <option value="Visiting friends and relatives">
                          Visiting friends and relatives
                        </option>
                      </Field>

                      <ErrorMessage name="purposeOfVisitIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>No. of Days Visa Required*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Select your visa validity period.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="visaValidPeriodIndividualTourist"
                        name="visaValidPeriodIndividualTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="option1">30 Days</option>
                      </Field>

                      <ErrorMessage name="visaValidPeriodIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Port of departure*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="portOfDepartureIndividualTourist"
                        name="portOfDepartureIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="portOfDepartureIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Arilne/Vessel*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="arilineVesselIndividualTourist"
                        name="arilineVesselIndividualTourist"
                        className="new-form-input "
                      />

                      <ErrorMessage name="arilineVesselIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Flight/Vessel Number*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="flightVesselNumberIndividualTourist"
                        name="flightVesselNumberIndividualTourist"
                        // placeholder="Passport Number"
                        className="new-form-input "
                      />

                      <ErrorMessage name="flightVesselNumberIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <Formsubhead subHead="Contact Details" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Address Line 1* </label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type your current apartment or house / building
                        number in your address.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="addressLineOneIndividualTourist"
                        name="addressLineOneIndividualTourist"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineOneIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Address Line 2*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="addressLineTwoIndividualTourist"
                        name="addressLineTwoIndividualTourist"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineTwoIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>City*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type the name of the city in which you live into
                        the text box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="cityIndividualTourist"
                        name="cityIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="cityIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>State*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type the name of the state in which you live into
                        the text box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="stateIndividualTourist"
                        name="stateIndividualTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="stateIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Zip/Postal Code*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="zipCodeIndividualTourist"
                        name="zipCodeIndividualTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="zipCodeIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Country*</label>
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
                        id="countryIndividualTourist"
                        name="countryIndividualTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="countryIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Address In Sri Lanka*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please enter the address of Sri Lanka which you are
                        going to stay.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        as="textarea"
                        name="addressInSrilankaIndividualTourist"
                        rows="4"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressInSrilankaIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Email Address*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        VISA Approval/Acknowledgment will be sent to this email
                        address also.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="emailIndividualTourist"
                        name="emailIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="emailIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Alternate Email Address*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        VISA Approval/Acknowledgment will be sent to this
                        alternate email address also.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="alternateEmailIndividualTourist"
                        name="alternateEmailIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="alternateEmailIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Telephone No.*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type your current telephone number into the text
                        box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="telephoneIndividualTourist"
                        name="telephoneIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="telephoneIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Mobile No.*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="mobileIndividualTourist"
                        name="mobileIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="mobileIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Fax Number*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="faxNumberIndividualTourist"
                        name="faxNumberIndividualTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="faxNumberIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <Formsubhead subHead="Declaration Details" />

                  <div>
                    {applyIndividualRadioData.map((e, i) => (
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
                    {updateMutation.error ? (
                      <div className="text-red-500">
                        An error occurred: {updateMutation?.error?.message}
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
