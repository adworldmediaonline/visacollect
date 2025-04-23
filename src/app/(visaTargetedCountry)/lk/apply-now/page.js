'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';

import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';

import CustomReactPhoneNumberInput from '@/components/common/CustomReactPhoneNumberInput';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import DropzoneFileUpload from '@/components/DropzoneFileUpload';
import CustomInputField from '@/components/formUi/CustomInputField';
import CustomInputSelectWrapper from '@/components/formUi/CustomInputSelectWrapper';
import CustomSelectField from '@/components/formUi/CustomSelectField';
import SectionLabel from '@/components/formUi/SectionLabel';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import StepProcess from '@/components/srilanka/common/StepProcess';
import {
  applyIndividualRadioData,
  touristIndividualsSchema,
} from '@/constant/srilankaConstant';
import usePost from '@/hooks/usePost';
import { minDate, minDateWithDate } from '@/lib/minDate';
import { Country } from 'country-state-city';
import { touristVisaTypes } from '@/constant/applyNowPagesData/applyNowPagesData';

const typeOfPassportData = [
  {
    label: 'Ordinary Passport - Issued to Citizens of a country',
    value: 'Ordinary Passport - Issued to Citizens of a country',
  },
];
export default function ApplyNowPage() {
  const postMutation = usePost(
    apiEndpoint.SL_VISA_TOURIST_INDIVIDUAL,
    1,
    '/lk/apply-now/review',
    true,
    'touristIndividual'
  );

  return (
    <div>
      <Formmainsection />

      <div>
        <div className="container py-20 md:py-8">
          {/* <div className="sticky z-30 bg-white top-20"> */}
          <StepProcess
            color1=" bg-[#0068E5]"
            color2="bg-[#E3E3E3]"
            color3="bg-[#E3E3E3] "
            color4="bg-[#E3E3E3]"
          />
          {/* </div> */}

          <Formheading
            formHead="Sri Lanka Tourist Visa "
            formPara="Your Trip Details"
          />

          <div>
            <Formik
              initialValues={touristIndividualsSchema.initialValues}
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

                postMutation.mutate(formData);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({
                values,
                setValues,
                isValid,
                handleSubmit,
                setFieldValue,
                errors,
                touched,
                setFieldTouched,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <CustomInputSelectWrapper>
                    <CustomSelectField
                      labelName="Type of passport"
                      tooltipContent="type of passport is required"
                      name="typeOfPassport"
                      selectOptions={typeOfPassportData}
                    />
                    <CustomSelectField
                      labelName="Visa Type"
                      tooltipContent="Visa type is required"
                      name="visaType"
                      selectOptions={[
                        { value: 'tourist visa', label: 'Tourist Visa' },
                        { value: 'business visa', label: 'BUSINESS VISA' },
                      ]}
                    />
                    <CustomSelectField
                      labelName="No. of Days Visa Required"
                      tooltipContent="Select your visa validity period."
                      name="visaValidPeriodIndividualTourist"
                      selectOptions={
                        values.visaType === 'tourist visa'
                          ? touristVisaTypes
                          : values.visaType === 'business visa'
                          ? businessVisaTypes
                          : []
                      }
                      selectOptionsLabel={
                        values.visaType === ''
                          ? 'Please choose visa type first'
                          : 'Select'
                      }
                    />
                  </CustomInputSelectWrapper>

                  <CustomInputSelectWrapper>
                    <CustomSelectField
                      labelName="Title"
                      tooltipContent="Type of passport is required"
                      name="titleIndividualTourist"
                      selectOptions={[
                        { value: 'Dr', label: 'DR' },
                        { value: 'Master', label: 'MASTER' },
                        { value: 'Miss', label: 'MISS' },
                        { value: 'Mr', label: 'MR' },
                        { value: 'Mrs', label: 'MRS' },
                        { value: 'Ms', label: 'MS' },
                        { value: 'Rev', label: 'REV' },
                      ]}
                    />

                    <CustomInputField
                      labelName="Surname/Family Name"
                      tooltipContent="Enter your last name (surname) as it appears on your passport"
                      name="familyNameIndividualTourist"
                    />
                    <CustomInputField
                      labelName="Other/Given Names"
                      tooltipContent=" Enter your given name as it appears on your passport"
                      name="givenNameIndividualTourist"
                    />
                  </CustomInputSelectWrapper>

                  <CustomInputSelectWrapper>
                    <CustomSelectField
                      labelName="Gender"
                      tooltipContent="Please select your gender: Male or Female."
                      name="genderIndividualTourist"
                      selectOptions={[
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' },
                      ]}
                    />
                    <CustomSelectField
                      labelName="Martial Status"
                      tooltipContent="Please select your martial status: Single, Married or Divorced."
                      name="martialStatus"
                      selectOptions={[
                        { value: 'single', label: 'Single' },
                        { value: 'married', label: 'Married' },
                        { value: 'divorced', label: 'Divorced' },
                      ]}
                    />
                    <CustomSelectField
                      labelName="Nationality"
                      tooltipContent="Your country of nationality is the country in which you have or can obtain a passport."
                      name="nationalityIndividualTourist"
                      selectOptions={Country?.getAllCountries()?.map(
                        country => ({
                          label: country.name,
                          value: country.name,
                        })
                      )}
                    />
                  </CustomInputSelectWrapper>

                  <CustomInputSelectWrapper>
                    <div className="input-group-new">
                      <SectionLabel
                        labelName="Date of Birth*"
                        tooltipContent="Select your date of birth as it appears in your passport in the calendar provided below."
                      />

                      <div>
                        <ReactDatePickerInput
                          className="new-form-input"
                          name="dateOfBirthIndividualTourist"
                          selected={values.dateOfBirthIndividualTourist}
                          setFieldValue={setFieldValue}
                          maxDate={new Date()}
                        />
                      </div>
                    </div>

                    <CustomSelectField
                      labelName="Country Of Birth"
                      tooltipContent="Select the country where you were born."
                      name="countryOfBirthIndividualTourist"
                      selectOptions={Country?.getAllCountries()?.map(
                        country => ({
                          label: country.name,
                          value: country.name,
                        })
                      )}
                    />
                    <CustomSelectField
                      labelName="Place Of Birth"
                      tooltipContent="Select the country where you were born."
                      name="placeOfBirth"
                      selectOptions={Country?.getAllCountries()?.map(
                        country => ({
                          label: country.name,
                          value: country.name,
                        })
                      )}
                    />
                  </CustomInputSelectWrapper>

                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Occupation*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please provide your current occupation.
                      </div>
                    </div>

                    <div>
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
                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Passport Number*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please specify Applicant&apos;s Passport Number
                      </div>
                    </div>

                    <div>
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
                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Passport place of issue*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Passport place of issue
                      </div>
                    </div>

                    <div>
                      <Field
                        type="text"
                        id="passportPlaceOfIssue"
                        name="passportPlaceOfIssue"
                        // placeholder="Passport Number"
                        className="new-form-input "
                      />

                      <ErrorMessage name="passportPlaceOfIssue">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Issue Date*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please specify the Issue Date of your current passport.
                      </div>
                    </div>

                    <div>
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="issueDateIndividualTourist"
                        selected={values.issueDateIndividualTourist}
                        setFieldValue={setFieldValue}
                        minDate={new Date(values.dateOfBirthIndividualTourist)}
                        disabled={values.dateOfBirthIndividualTourist === ''}
                      />
                    </div>
                  </div>
                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Expiry date*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please specify the Expiry date of your current passport.
                      </div>
                    </div>

                    <div>
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="expiryDateIndividualTourist"
                        selected={values.expiryDateIndividualTourist}
                        setFieldValue={setFieldValue}
                        minDate={minDateWithDate(
                          1,
                          values.issueDateIndividualTourist
                        )}
                      />
                    </div>
                  </div>

                  {/*  document uploads */}
                  <DropzoneFileUpload
                    uploadLabel="Passport front page image"
                    fieldName="passportFrontImage"
                    labelSection="Passport Front page (Bio data page) date"
                    tooltipContent="Please upload passport front page (which cover photo, date
                      of birth, passport number)."
                  />

                  {/* if visa type business visa show this  */}
                  {values.visaType === 'business visa' && (
                    <DropzoneFileUpload
                      uploadLabel="Upload Invitation Letter"
                      fieldName="invitationLetter"
                      labelSection="Invitation/Request letter from relevant institutions"
                      tooltipContent="Invitation/Request letter from relevant institutions"
                      multiple
                    />
                  )}
                  <DropzoneFileUpload
                    uploadLabel="Passport size photo"
                    fieldName="passportSizePhoto"
                    labelSection="Passport size photo"
                    tooltipContent="Please upload passport size photo"
                  />

                  <DropzoneFileUpload
                    uploadLabel="Additional Documents"
                    fieldName="additionalDocuments"
                    labelSection="Additional Documents"
                    tooltipContent="Please upload documents"
                    multiple
                  />

                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Attended Arrival Date*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please select the date you intend to enter Sri Lanka. An
                        ETA is valid for up to 03 month from date of issue.
                      </div>
                    </div>

                    <div>
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="attendantArrivalDateIndividualTourist"
                        selected={values.attendantArrivalDateIndividualTourist}
                        setFieldValue={setFieldValue}
                        minDate={minDate(1)}
                      />
                    </div>
                  </div>
                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Purpose of visit*</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Select you purpose of traveling to Sri Lanka.
                      </div>
                    </div>

                    <div>
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

                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Port of entry in Sri Lanka</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div>
                      <Field
                        required
                        component="select"
                        id="portOfDepartureIndividualTourist"
                        name="portOfDepartureIndividualTourist"
                        // placeholder="Title"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="Bandaranaike International Airport">
                          Bandaranaike International Airport
                        </option>
                        <option value="Jaffna International Airport">
                          Jaffna International Airport
                        </option>
                        <option value="Mattala Rajapaksa International Airport">
                          Mattala Rajapaksa International Airport
                        </option>
                      </Field>

                      <ErrorMessage name="portOfDepartureIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <Formsubhead subHead="Contact Details" />

                  <div className="input-group-new">
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

                    <div>
                      <Field
                        type="text"
                        id="addressLineOneIndividualTourist"
                        name="addressLineOneIndividualTourist"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineOneIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Address Line 2*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div>
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
                  <div className="input-group-new">
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

                    <div>
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
                  <div className="input-group-new">
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

                    <div>
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
                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Zip/Postal Code*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div>
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
                  <div className="input-group-new">
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

                    <div>
                      <Field
                        required
                        component="select"
                        id="countryIndividualTourist"
                        name="countryIndividualTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        {Country?.getAllCountries()?.map((country, index) => (
                          <option key={index} value={country?.name}>
                            {country?.name}
                          </option>
                        ))}
                      </Field>

                      <ErrorMessage name="countryIndividualTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="input-group-new">
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

                    <div>
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
                  <div className="input-group-new">
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

                    <div>
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
                  <div className="input-group-new">
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

                    <div>
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
                  <div className="input-group-new">
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

                    <div>
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
                  <div className="input-group-new">
                    <div className="label-section">
                      <label>Mobile No.*</label>
                    </div>

                    <div className="mark-section group"></div>

                    <div>
                      {/* <Field
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
                      </ErrorMessage> */}
                      <CustomReactPhoneNumberInput
                        errors={errors}
                        setFieldValue={setFieldValue}
                        touched={touched}
                        setFieldTouched={setFieldTouched}
                        name="mobileIndividualTourist"
                      />
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
                    {postMutation.isError ? (
                      <div className="text-red-500">
                        An error occurred: {postMutation.error.message}
                      </div>
                    ) : null}
                    <button
                      className={`formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-12 py-3 rounded-full ${
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
    </div>
  );
}
