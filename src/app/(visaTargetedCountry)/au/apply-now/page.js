'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';

import Heading from '@/components/australia/common/Heading';
import SubHeading from '@/components/australia/common/SubHeading';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import DropzoneFileUpload from '@/components/DropzoneFileUpload';
import { applicationSchema } from '@/constant/australiaConstant';
import usePost2 from '@/hooks/usePost2';
import { getAllCountriesForAustraliaVisa } from '@/lib/getAllCountries';
import apiEndpoint from '@/services/apiEndpoint';
import { Tab } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

const portOfArrivalData = [
  'Sydney Kingsford Smith International Airport (SYD)',
  'Melbourne Tullamarine International Airport (MEL)',
  'Brisbane International Airport (BNE)',
  'Perth International Airport (PER)',
  'Adelaide International Airport (ADL)',
  'Gold Coast Airport (OOL)',
  'Cairns International Airport (CNS)',
  'Darwin International Airport (DRW)',
  'Canberra International Airport (CBR)',
  'Sydney (Port Jackson)',
  'Melbourne (Port of Melbourne)',
  'Brisbane (Port of Brisbane)',
  'Perth/Fremantle (Port of Fremantle)',
  'Adelaide (Port Adelaide)',
  'Darwin (Port of Darwin)',
  'Hobart (Port of Hobart)',
  'Cairns (Port of Cairns)',
];

const subclassCountryData = [
  {
    name: 'eVisiter Subclass 651 (Duration : Up to 3 month at a time)',
    value: 'subclass651',
    data: [
      'Andorra',
      'Austria',
      'Belgium',
      'Bulgaria',
      'Croatia',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Estonia',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Hungary',
      'Iceland',
      'Ireland',
      'Italy',
      'Latvia',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Malta',
      'Monaco',
      'The Netherlands',
      'Norway',
      'Poland',
      'Portugal',
      'Romania',
      'Republic of San Marino',
      'Slovakia',
      'Slovenia',
      'Spain',
      'Sweden',
      'Switzerland',
      'United Kingdom – British Citizen',
      'Vatican City',
    ],
  },
  {
    name: `Visitor visa subclass 600 (Duration : Stay Up to 12 months)`,
    value: 'subclass600',
    data: [
      'Andorra',
      'Austria',
      'Belgium',
      'Brunei',
      'Canada',
      'Denmark',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Hong Kong (SAR PRC)',
      'Iceland',
      'Ireland',
      'Italy',
      'Japan',
      'Liechtenstein',
      'Luxembourg',
      'Malaysia',
      'Malta',
      'Monaco',
      'The Netherlands',
      'Norway',
      'Portugal',
      'Republic of San Marino',
      'Singapore',
      'South Korea',
      'Spain',
      'Sweden',
      'Switzerland',
      'Taiwan',
      'United Kingdom (British Citizen)',
      'United States',
      'Vatican City',
    ],
  },
];

const AustraliaApplicationPage = () => {
  const postMutation = usePost2({
    apiEndpointUrl: apiEndpoint.AUSTRALIA_VISA_APPLICATION,
    isDispatch: true,
    queryKey: ['australiaVisaApplication'],
    successMessage: 'application completed successfully',
  });

  const [selectedSubclass, setSelectedSubclass] = useState('');

  const calculateTotalDays = (
    travelInsuranceStartDate,
    travelInsuranceReturnDate
  ) => {
    const startDate = new Date(travelInsuranceStartDate);
    const returnDate = new Date(travelInsuranceReturnDate);

    const timeDifference = returnDate - startDate;

    const totalDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return isNaN(totalDays) ? 0 : totalDays;
  };

  const calculateTotalPrice = (
    travelInsuranceStartDate,
    travelInsuranceReturnDate
  ) => {
    const pricePerDay = 2.9;
    const totalDays = calculateTotalDays(
      travelInsuranceStartDate,
      travelInsuranceReturnDate
    );

    // Check if totalDays is a valid number
    if (isNaN(totalDays)) {
      return 'Invalid date range';
    }

    const totalPrice = totalDays * pricePerDay;

    return totalPrice.toFixed(2);
  };

  const handleSelectedSubclass = e => {
    console.log(e.target.value);
    setSelectedSubclass(e.target.value);
  };
  const handleBack = () => {
    setSelectedSubclass('');
  };

  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        {selectedSubclass ? (
          <>
            <div className="flex justify-center">
              <button
                onClick={handleBack}
                className="flex items-center justify-center gap-3 pt-16"
              >
                <BiArrowBack color="#000" size={16} /> <span>Go Back</span>
              </button>
            </div>
            <Heading
              formHead="eVisitor ETA Visa to Australia Application"
              divClassName="pt-0"
            />

            <div>
              <Formik
                initialValues={applicationSchema.initialValues}
                validationSchema={applicationSchema.yupSchema}
                validateOnChange={true}
                validateOnMount={true}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  console.log(values);
                  const formData = new FormData();
                  Object.entries({
                    ...values,

                    travelInsurance: {
                      ...values.travelInsurance,
                      insuranceFee: calculateTotalPrice(
                        values.travelInsurance.startDate,
                        values.travelInsurance.returnDate
                      ),
                    },
                  }).forEach(([key, value]) => {
                    if (typeof value === 'string' || value instanceof Blob) {
                      formData.append(key, value);
                    } else if (Array.isArray(value)) {
                      if (
                        value.every(
                          item =>
                            item instanceof Blob || typeof item === 'string'
                        )
                      ) {
                        value.forEach(item => formData.append(key, item));
                      } else {
                        formData.append(key, JSON.stringify(value));
                      }
                    } else {
                      formData.append(key, JSON.stringify(value));
                    }
                  });

                  // for (const pair of formData.entries()) {
                  //   console.log(pair[0], pair[1]);
                  // }
                  postMutation.mutate(formData);
                  setSubmitting(false);
                  // resetForm();
                }}
              >
                {({ values, isValid, setFieldValue, handleChange }) => (
                  <Form>
                    <SubHeading subHead="TRAVEL DETAILS" />
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Purpose of stay: * </label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Reason to enter Australia
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          id="travelDetails.purposeOfStay"
                          name="travelDetails.purposeOfStay"
                          component="select"
                          className="new-form-input"
                        >
                          <option value="">Select</option>
                          <option value="Tourism">Tourism</option>
                          <option value="india">Business</option>
                        </Field>

                        <ErrorMessage name="travelDetails.purposeOfStay">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Planned date of travel to Australia:*</label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          If you don’t know the exact date, enter approximate
                          date
                        </div>
                      </div>
                      <div className="order-2 col-span-8">
                        <ReactDatePickerInput
                          className="new-form-input"
                          name="travelDetails.plannedDate"
                          selected={values.travelDetails.plannedDate}
                          setFieldValue={setFieldValue}
                          minDate={new Date()}
                        />
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Passenger nationality: * </label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          As in passport used for traveling
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          className="new-form-input"
                          name="travelDetails.passengerNationality"
                          id="travelDetails.passengerNationality"
                        >
                          <option value="">Select</option>
                          {getAllCountriesForAustraliaVisa({
                            countryData: subclassCountryData.filter(
                              item => item.name === selectedSubclass
                            ),
                          })}
                        </Field>

                        <ErrorMessage name="travelDetails.passengerNationality">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Port of Arrival:*</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          className="new-form-input"
                          name="travelDetails.portOfArrival"
                          id="travelDetails.portOfArrival"
                        >
                          <option value="">Select</option>

                          {portOfArrivalData.length > 0
                            ? portOfArrivalData.map((port, index) => (
                                <option key={index} value={port}>
                                  {port}
                                </option>
                              ))
                            : null}
                        </Field>

                        <ErrorMessage name="travelDetails.portOfArrival">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <SubHeading subHead="PERSONAL DETAILS" />
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Given Name: *</label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Enter all names, as in your passport
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="personalDetails.givenName"
                          id="personalDetails.givenName"
                        />

                        <ErrorMessage name="personalDetails.givenName">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Surname(s) / family name(s): m*</label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Enter all surnames / family names, as in your passport
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="personalDetails.surnameFamilyName"
                          id="personalDetails.surnameFamilyName"
                        />

                        <ErrorMessage name="personalDetails.surnameFamilyName">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>E-mail address: *</label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Your ETA Visa will be sent here
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="personalDetails.emailAddress"
                        />

                        <ErrorMessage name="personalDetails.emailAddress">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Confirm e-mail address: *</label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          The two e-mail addresses must match
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="personalDetails.confirmEmailAddress"
                          id="personalDetails.confirmEmailAddress"
                        />

                        <ErrorMessage name="personalDetails.confirmEmailAddress">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Date of birth: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <ReactDatePickerInput
                          className="new-form-input"
                          name="personalDetails.dateOfBirth"
                          selected={values.personalDetails.dateOfBirth}
                          setFieldValue={setFieldValue}
                          maxDate={new Date()}
                        />
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Country/territory of birth:*</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          className="new-form-input"
                          name="personalDetails.countryTerritoryOfBirth"
                          id="personalDetails.countryTerritoryOfBirth"
                        >
                          <option value="">Select</option>
                          {getAllCountriesForAustraliaVisa({
                            countryData: subclassCountryData.filter(
                              item => item.name === selectedSubclass
                            ),
                          })}
                        </Field>

                        <ErrorMessage name="personalDetails.countryTerritoryOfBirth">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>City of birth:*</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="personalDetails.cityOfBirth"
                          id="personalDetails.cityOfBirth"
                        />

                        <ErrorMessage name="personalDetails.cityOfBirth">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Marital status: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          component="select"
                          className="new-form-input"
                          name="personalDetails.maritalStatus"
                          id="personalDetails.maritalStatus"
                        >
                          <option value="">Select</option>
                          <option value="single">SINGLE</option>
                          <option value="engaged">ENGAGED</option>
                          <option value="married">MARRIED</option>
                          <option value="divorced">DIVORCED</option>
                          <option value="seprated">SEPRATED</option>
                          <option value="widowed">WIDOWED</option>
                        </Field>

                        <ErrorMessage name="personalDetails.maritalStatus">
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
                          name="personalDetails.gender"
                          id="personalDetails.gender"
                        >
                          <option value="">Select</option>

                          <option value="male">MALE</option>
                          <option value="female">FEMALE</option>
                        </Field>

                        <ErrorMessage name="personalDetails.gender">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <SubHeading subHead="PASSPORT DETAILS" />
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Passport Number: * </label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill className="side-icon" size={20} />
                        <div className="tooltip-content">
                          Enter your Passport number written on the passport
                        </div>
                      </div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          className="new-form-input"
                          name="passportDetails.passportNumber"
                          id="passportDetails.passportNumber"
                        />

                        <ErrorMessage name="passportDetails.passportNumber">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Issuing authority: *</label>
                      </div>

                      <div className="mark-section group">
                        <BsQuestionCircleFill
                          className=" side-icon"
                          size={20}
                        />
                        <div className="tooltip-content">
                          Government agency issuing passports
                        </div>
                      </div>
                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="passportDetails.issuingAuthority"
                          id="passportDetails.issuingAuthority"
                        />

                        <ErrorMessage name="passportDetails.issuingAuthority">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Passport date of issue: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <ReactDatePickerInput
                          className="new-form-input"
                          name="passportDetails.dateOfIssue"
                          selected={values.passportDetails.dateOfIssue}
                          setFieldValue={setFieldValue}
                          minDate={new Date(values.personalDetails.dateOfBirth)}
                          disabled={values.personalDetails.dateOfBirth === ''}
                        />
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Passport date of expiry: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <ReactDatePickerInput
                          className="new-form-input"
                          name="passportDetails.dateOfExpiry"
                          selected={values.passportDetails.dateOfExpiry}
                          setFieldValue={setFieldValue}
                          minDate={new Date()}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 py-7">
                      <Field
                        type="checkbox"
                        className="w-6 h-6"
                        name="passportDetails.citizen"
                        id="passportDetails.citizen"
                        onChange={e => {
                          handleChange(e);
                          if (!values.passportDetails.citizen) {
                            setFieldValue(
                              'passportDetails.additionalCitizenship',
                              ''
                            );
                          }
                        }}
                      />
                      <h2>I&lsquo;m a citizen of more than one country</h2>
                      <ErrorMessage name="passportDetails.citizen">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    {values.passportDetails.citizen && (
                      <div className="main-form-section">
                        <div className="label-section">
                          <label>Additional citizenship*: *</label>
                        </div>

                        <div className="mark-section group">
                          <BsQuestionCircleFill
                            className=" side-icon"
                            size={20}
                          />
                          <div className="tooltip-content">
                            Second nationality acquisition process
                          </div>
                        </div>

                        <div className="order-2 col-span-8">
                          <Field
                            required
                            component="select"
                            className="new-form-input"
                            name="passportDetails.additionalCitizenship"
                            id="passportDetails.additionalCitizenship"
                          >
                            <option value="">Select</option>
                            {getAllCountriesForAustraliaVisa({
                              countryData: subclassCountryData.filter(
                                item => item.name === selectedSubclass
                              ),
                            })}
                          </Field>
                          <ErrorMessage name="passportDetails.additionalCitizenship">
                            {errorMsg => (
                              <div style={{ color: 'red' }}>{errorMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col gap-2 py-4">
                      <h2>
                        Have you ever obtained an Australian visa using your
                        current or previous passport(s)? *
                      </h2>

                      <div className="flex gap-8">
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="passportDetails.obtainedVisa"
                            id="passportDetailsObtainedVisaYes"
                            value="yes"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.passportDetails.obtainedVisa === 'no'
                              ) {
                                setFieldValue(
                                  'passportDetails.visaGrantNumber',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>Yes</h3>
                        </div>
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="passportDetails.obtainedVisa"
                            id="passportDetailsObtainedVisaNo"
                            value="no"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.passportDetails.obtainedVisa === 'no'
                              ) {
                                setFieldValue(
                                  'passportDetails.visaGrantNumber',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>No</h3>
                        </div>
                      </div>
                    </div>
                    {values.passportDetails.obtainedVisa === 'yes' && (
                      <>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>
                              Australian visa grant number (if known)
                            </label>
                          </div>

                          <div className="mark-section group">
                            <BsQuestionCircleFill
                              className=" side-icon"
                              size={20}
                            />
                            <div className="tooltip-content">
                              Australian visa grant number (if known)
                            </div>
                          </div>

                          <div className="order-2 col-span-8">
                            <Field
                              required
                              className="new-form-input"
                              name="passportDetails.visaGrantNumber"
                              id="passportDetails.visaGrantNumber"
                            />

                            <ErrorMessage name="passportDetails.visaGrantNumber">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                      </>
                    )}
                    <SubHeading subHead="NATIONAL IDENTITY CARD" />
                    <div className="flex flex-col gap-2 py-4">
                      <h2>
                        Does this applicant have a national identity card?
                      </h2>

                      <div className="flex gap-8">
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="nationalIdentityCard.hasNationalIdentityCard"
                            id="nationalIdentityCardHasNationalIdentityCardYes"
                            value="yes"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.nationalIdentityCard
                                  .hasNationalIdentityCard === 'no'
                              ) {
                                setFieldValue(
                                  'nationalIdentityCard.familyName',
                                  ''
                                );
                                setFieldValue(
                                  'nationalIdentityCard.givenName',
                                  ''
                                );
                                setFieldValue(
                                  'nationalIdentityCard.identificationNumber',
                                  ''
                                );
                                setFieldValue(
                                  'nationalIdentityCard.countryOfIssue',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>Yes</h3>
                        </div>
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="nationalIdentityCard.hasNationalIdentityCard"
                            id="nationalIdentityCardHasNationalIdentityCardNo"
                            value="no"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.nationalIdentityCard
                                  .hasNationalIdentityCard === 'no'
                              ) {
                                setFieldValue(
                                  'nationalIdentityCard.familyName',
                                  ''
                                );
                                setFieldValue(
                                  'nationalIdentityCard.givenName',
                                  ''
                                );
                                setFieldValue(
                                  'nationalIdentityCard.identificationNumber',
                                  ''
                                );
                                setFieldValue(
                                  'nationalIdentityCard.countryOfIssue',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>No</h3>
                        </div>
                      </div>
                    </div>
                    {values.nationalIdentityCard.hasNationalIdentityCard ===
                      'yes' && (
                      <>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Family names</label>
                          </div>

                          <div className="mark-section group">
                            <BsQuestionCircleFill
                              className=" side-icon"
                              size={20}
                            />
                            <div className="tooltip-content">
                              Enter details exactly as shown on the national
                              identity card. ​
                            </div>
                          </div>

                          <div className="order-2 col-span-8">
                            <Field
                              required
                              className="new-form-input"
                              name="nationalIdentityCard.familyName"
                              id="nationalIdentityCard.familyName"
                            />

                            <ErrorMessage name="nationalIdentityCard.familyName">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Given names</label>
                          </div>

                          <div className="mark-section group">
                            <BsQuestionCircleFill
                              className="side-icon"
                              size={20}
                            />
                            <div className="tooltip-content">
                              Enter details exactly as shown on the national
                              identity card. ​
                            </div>
                          </div>

                          <div className="order-2 col-span-8">
                            <Field
                              required
                              className="new-form-input"
                              name="nationalIdentityCard.givenName"
                              id="nationalIdentityCard.givenName"
                            />

                            <ErrorMessage name="nationalIdentityCard.givenName">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Identification number</label>
                          </div>

                          <div className="mark-section group">
                            <BsQuestionCircleFill
                              className="side-icon"
                              size={20}
                            />
                            <div className="tooltip-content">
                              Enter details exactly as shown on the national
                              identity card. ​
                            </div>
                          </div>

                          <div className="order-2 col-span-8">
                            <Field
                              required
                              className="new-form-input"
                              name="nationalIdentityCard.identificationNumber"
                              id="nationalIdentityCard.identificationNumber"
                            />

                            <ErrorMessage name="nationalIdentityCard.identificationNumber">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Country of issue</label>
                          </div>

                          <div className="mark-section group">
                            <BsQuestionCircleFill
                              className=" side-icon"
                              size={20}
                            />
                            <div className="tooltip-content">
                              Enter details exactly as shown on the national
                              identity card. ​
                            </div>
                          </div>

                          <div className="order-2 col-span-8">
                            <Field
                              required
                              component="select"
                              className="new-form-input"
                              name="nationalIdentityCard.countryOfIssue"
                              id="nationalIdentityCard.countryOfIssue"
                            >
                              <option value="">Select</option>
                              {getAllCountriesForAustraliaVisa({
                                countryData: subclassCountryData.filter(
                                  item => item.name === selectedSubclass
                                ),
                              })}
                            </Field>

                            <ErrorMessage name="nationalIdentityCard.countryOfIssue">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                      </>
                    )}
                    {/* contact details code start here */}
                    <SubHeading subHead="CONTACT DETAILS" />
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Street address / name: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="contactDetails.address"
                          id="contactDetails.address"
                        />

                        <ErrorMessage name="contactDetails.address">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>House number / unit: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          id="contactDetails.houseNumber"
                          name="contactDetails.houseNumber"
                          className="new-form-input "
                        />

                        <ErrorMessage name="contactDetails.houseNumber">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Apartment number / unit: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="contactDetails.apartmentNumber"
                          id="contactDetails.apartmentNumber"
                        />

                        <ErrorMessage name="contactDetails.apartmentNumber">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Zip code / postal code: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="contactDetails.zipPostalCode"
                          id="contactDetails.zipPostalCode"
                        />

                        <ErrorMessage name="contactDetails.zipPostalCode">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>City/town: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="contactDetails.cityTown"
                          id="contactDetails.cityTown"
                        />

                        <ErrorMessage name="contactDetails.cityTown">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Province/state: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="contactDetails.provinceState"
                          id="contactDetails.provinceState"
                        />

                        <ErrorMessage name="contactDetails.provinceState">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Country/territory: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          required
                          component="select"
                          className="new-form-input"
                          name="contactDetails.countryTerritory"
                          id="contactDetails.countryTerritory"
                        >
                          <option value="">Select</option>
                          {getAllCountriesForAustraliaVisa({
                            countryData: subclassCountryData.filter(
                              item => item.name === selectedSubclass
                            ),
                          })}
                        </Field>

                        <ErrorMessage name="contactDetails.countryTerritory">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="main-form-section">
                      <div className="label-section">
                        <label>Phone number: *</label>
                      </div>

                      <div className="mark-section group"></div>

                      <div className="order-2 col-span-8">
                        <Field
                          type="text"
                          className="new-form-input"
                          name="contactDetails.phoneNumber"
                          id="contactDetails.phoneNumber"
                        />

                        <ErrorMessage name="contactDetails.phoneNumber">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    {/* postal address is the same as residence address */}
                    <div className="flex flex-col gap-4 py-2">
                      <h2>
                        Is the postal address the same as the residential
                        address?
                      </h2>

                      <div className="flex gap-8">
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="contactDetails.isPostalAddressSameAsResidentialAddress"
                            id="contactDetailsIsPostalAddressSameAsResidentialAddressYes"
                            value="yes"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.contactDetails
                                  .isPostalAddressSameAsResidentialAddress ===
                                'no'
                              ) {
                                setFieldValue(
                                  'contactDetails.addressPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.apartmentNumberPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.cityTownPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.cityTownPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.houseNumberPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.phoneNumberPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.provinceStatePostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.zipPostalCodePostal',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>Yes</h3>
                        </div>
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="contactDetails.isPostalAddressSameAsResidentialAddress"
                            id="contactDetailsIsPostalAddressSameAsResidentialAddressNo"
                            value="no"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.contactDetails
                                  .isPostalAddressSameAsResidentialAddress ===
                                'no'
                              ) {
                                setFieldValue(
                                  'contactDetails.addressPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.apartmentNumberPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.cityTownPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.cityTownPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.houseNumberPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.phoneNumberPostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.provinceStatePostal',
                                  ''
                                );
                                setFieldValue(
                                  'contactDetails.zipPostalCodePostal',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>No</h3>
                        </div>
                      </div>
                    </div>
                    {values.contactDetails
                      .isPostalAddressSameAsResidentialAddress === 'no' && (
                      <>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Street address / name: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              className="new-form-input"
                              name="contactDetails.addressPostal"
                              id="contactDetails.addressPostal"
                            />

                            <ErrorMessage name="contactDetails.addressPostal">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>House number / unit: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              id="contactDetails.houseNumberPostal"
                              name="contactDetails.houseNumberPostal"
                              className="new-form-input "
                            />

                            <ErrorMessage name="contactDetails.houseNumberPostal">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Apartment number / unit: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              className="new-form-input"
                              name="contactDetails.apartmentNumberPostal"
                              id="contactDetails.apartmentNumberPostal"
                            />

                            <ErrorMessage name="contactDetails.apartmentNumberPostal">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Zip code / postal code: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              className="new-form-input"
                              name="contactDetails.zipPostalCodePostal"
                              id="contactDetails.zipPostalCodePostal"
                            />

                            <ErrorMessage name="contactDetails.zipPostalCodePostal">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>City/town: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              className="new-form-input"
                              name="contactDetails.cityTownPostal"
                              id="contactDetails.cityTownPostal"
                            />

                            <ErrorMessage name="contactDetails.cityTownPostal">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Province/state: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              className="new-form-input"
                              name="contactDetails.provinceStatePostal"
                              id="contactDetails.provinceStatePostal"
                            />

                            <ErrorMessage name="contactDetails.provinceStatePostal">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Country/territory: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              required
                              component="select"
                              className="new-form-input"
                              name="contactDetails.countryTerritoryPostal"
                              id="contactDetails.countryTerritoryPostal"
                            >
                              <option value="">Select</option>
                              {getAllCountriesForAustraliaVisa({
                                countryData: subclassCountryData.filter(
                                  item => item.name === selectedSubclass
                                ),
                              })}
                            </Field>

                            <ErrorMessage name="contactDetails.countryTerritoryPostal">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Phone number: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              className="new-form-input"
                              name="contactDetails.phoneNumberPostal"
                              id="contactDetails.phoneNumberPostal"
                            />

                            <ErrorMessage name="contactDetails.phoneNumberPostal">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                      </>
                    )}
                    {/* postal address is the same as residence address */}
                    {/* contact details code end here */}
                    <SubHeading subHead="BACKGROUND QUESTIONS" />
                    <div className="flex flex-col gap-4 py-2">
                      <h2>
                        Have you ever committed, been arrested for, been charged
                        with or convicted of any criminal offence in any
                        country/territory? Please enter the year*
                      </h2>

                      <div className="flex gap-8">
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="backgroundQuestions.criminalOffence"
                            id="backgroundQuestionsCriminalOffenceYes"
                            value="yes"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.backgroundQuestions.criminalOffence ===
                                'no'
                              ) {
                                setFieldValue(
                                  'backgroundQuestions.criminalOffenceDetails',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>Yes</h3>
                        </div>
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="backgroundQuestions.criminalOffence"
                            id="backgroundQuestionsCriminalOffenceNo"
                            value="no"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.backgroundQuestions.criminalOffence ===
                                'no'
                              ) {
                                setFieldValue(
                                  'backgroundQuestions.criminalOffenceDetails',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>No</h3>
                        </div>
                      </div>
                    </div>
                    {values.backgroundQuestions.criminalOffence === 'yes' && (
                      <div className="py-4">
                        <p className="text-primary">
                          Please provide details of each offence and the
                          penalties imposed: *
                        </p>
                        <Field
                          className=" border-[#CECECE] border  px-4 py-2 rounded-md w-96"
                          name="backgroundQuestions.criminalOffenceDetails"
                          id="backgroundQuestions.criminalOffenceDetails"
                        />
                        <ErrorMessage name="backgroundQuestions.criminalOffenceDetails">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    )}
                    <div className="flex flex-col gap-4 py-2">
                      <h2>
                        Have you ever been charged with any offence that is
                        currently awaiting legal action? *
                      </h2>

                      <div className="flex gap-8">
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="backgroundQuestions.offenceCharge"
                            value="yes"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.backgroundQuestions.offenceCharge ===
                                'no'
                              ) {
                                setFieldValue(
                                  'backgroundQuestions.offenceChargeDetails',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>Yes</h3>
                        </div>
                        <div className="flex gap-4">
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="backgroundQuestions.offenceCharge"
                            value="no"
                            onChange={e => {
                              handleChange(e);
                              if (
                                values.backgroundQuestions.offenceCharge ===
                                'no'
                              ) {
                                setFieldValue(
                                  'backgroundQuestions.offenceChargeDetails',
                                  ''
                                );
                              }
                            }}
                          />
                          <h3>No</h3>
                        </div>
                      </div>
                    </div>
                    {values.backgroundQuestions.offenceCharge === 'yes' && (
                      <div className="py-4">
                        <p className="text-primary">
                          Please provide details of each charge: *
                        </p>
                        <Field
                          className=" border-[#CECECE] border  px-4 py-2 rounded-md w-96"
                          name="backgroundQuestions.offenceChargeDetails"
                          id="backgroundQuestions.offenceChargeDetails"
                        />
                        <ErrorMessage name="backgroundQuestions.offenceChargeDetails">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    )}
                    <SubHeading subHead="VAT INVOICE (OPTIONAL)" />
                    <div className="flex gap-4 pb-6">
                      <div>
                        <Field
                          type="checkbox"
                          className="w-6 h-6"
                          name="vatInvoice.needVatInvoice"
                          onChange={e => {
                            handleChange(e);
                            if (!values.vatInvoice.needVatInvoice) {
                              setFieldValue(
                                'vatInvoice.taxIdentificationNumber',
                                ''
                              );

                              setFieldValue('vatInvoice.companyName', '');
                              setFieldValue('vatInvoice.companyCountry', '');
                              setFieldValue('vatInvoice.companyCity', '');
                              setFieldValue('vatInvoice.companyPostal', '');
                              setFieldValue('vatInvoice.companyStreet', '');
                            }
                          }}
                        />
                      </div>
                      <h2 className="font-semibold">I need VAT invoice</h2>
                    </div>
                    {values.vatInvoice.needVatInvoice && (
                      <>
                        {' '}
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>
                              Tax identification number (Company VAT): *
                            </label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              className="new-form-input"
                              name="vatInvoice.taxIdentificationNumber"
                            />

                            <ErrorMessage name="vatInvoice.taxIdentificationNumber">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>
                              Company, employer, school or facility name: *
                            </label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              name="vatInvoice.companyName"
                              className="new-form-input "
                            />

                            <ErrorMessage name="vatInvoice.companyName">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Company country: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              required
                              component="select"
                              className="new-form-input"
                              name="vatInvoice.companyCountry"
                              id="vatInvoice.companyCountry"
                            >
                              <option value="">Select</option>
                              {getAllCountriesForAustraliaVisa({
                                countryData: subclassCountryData.filter(
                                  item => item.name === selectedSubclass
                                ),
                              })}
                            </Field>

                            <ErrorMessage name="vatInvoice.companyCountry">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Company city: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              name="vatInvoice.companyCity"
                              className="new-form-input "
                            />

                            <ErrorMessage name="vatInvoice.companyCity">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Company postal: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              className="new-form-input"
                              name="vatInvoice.companyPostal"
                            />

                            <ErrorMessage name="vatInvoice.companyPostal">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Company street: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <Field
                              type="text"
                              className="new-form-input"
                              name="vatInvoice.companyStreet"
                            />

                            <ErrorMessage name="vatInvoice.companyStreet">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                      </>
                    )}
                    <SubHeading subHead="WOULD YOU LIKE TO ADD TRAVEL INSURANCE?" />
                    <div className="flex gap-8 md:-mt-5">
                      <div className="flex gap-4">
                        <Field
                          type="radio"
                          className="w-6 h-6"
                          name="travelInsurance.isTravelInsurance"
                          value="yes"
                          onChange={e => {
                            handleChange(e);
                            if (
                              values.travelInsurance.isTravelInsurance === 'no'
                            ) {
                              setFieldValue('travelInsurance.startDate', '');
                              setFieldValue('travelInsurance.returnDate', '');
                              setFieldValue(
                                'travelInsurance.travelInsuranceTermsAndConditions',
                                false
                              );
                            }
                          }}
                        />
                        <h3>Yes</h3>
                      </div>
                      <div className="flex gap-4">
                        <Field
                          type="radio"
                          className="w-6 h-6"
                          name="travelInsurance.isTravelInsurance"
                          value="no"
                        />
                        <h3>No</h3>
                      </div>
                    </div>
                    {values.travelInsurance.isTravelInsurance === 'yes' && (
                      <>
                        {' '}
                        <ul className="py-10 pl-5 list-disc">
                          <li>Cover of medical expenses up to € 250 000</li>
                          <li className="py-2">
                            Includes COVID-19 infection and quarantine
                          </li>
                          <li>
                            Protection if your luggage or possessions are lost,
                            stolen or damaged.
                          </li>
                        </ul>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Please select a start date: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <ReactDatePickerInput
                              className="new-form-input"
                              name="travelInsurance.startDate"
                              selected={values.travelInsurance.startDate}
                              setFieldValue={setFieldValue}
                            />
                          </div>
                        </div>
                        <div className="main-form-section">
                          <div className="label-section">
                            <label>Please select a return date: *</label>
                          </div>

                          <div className="mark-section group"></div>

                          <div className="order-2 col-span-8">
                            <ReactDatePickerInput
                              className="new-form-input"
                              name="travelInsurance.returnDate"
                              selected={values.travelInsurance.returnDate}
                              setFieldValue={setFieldValue}
                              minDate={
                                new Date(values.travelInsurance.startDate)
                              }
                            />
                          </div>
                        </div>
                        <p className="py-3 font-bold">
                          {' '}
                          Total insurance price: €{' '}
                          {calculateTotalPrice(
                            values.travelInsurance.startDate,
                            values.travelInsurance.returnDate
                          )}
                        </p>
                        <p> € 2.90 per person per day </p>
                        <div className="py-10">
                          <img src="/assets/images/australia/imgform.png" />
                        </div>
                        <div className="flex gap-4 pb-6">
                          <div>
                            <Field
                              type="checkbox"
                              className="w-6 h-6"
                              name="travelInsurance.travelInsuranceTermsAndConditions"
                            />
                          </div>
                          <h2 className="font-semibold">
                            I declare I have read and accept
                            <span className="text-primary">
                              General Conditions of Signal Iduna Group Insurance
                              and scope
                            </span>{' '}
                            . I confirm that the insurance conditions meet my
                            travel needs, and in case of insuring other persons,
                            I have their authorization to submit them to the
                            insurance and I shall notify them about the scope
                            and conditions of the insurance.*
                            <span className="text-red-600">(required)</span>
                          </h2>
                        </div>
                        <ErrorMessage name="travelInsurance.travelInsuranceTermsAndConditions">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </>
                    )}

                    {/* document uploads start  */}
                    <SubHeading subHead="DOCUMENT UPLOADS" />
                    <DropzoneFileUpload
                      uploadLabel="Passport documents"
                      fieldName="passportDocuments"
                      labelSection="Passport Documents"
                      tooltipContent="A valid passport with at least six months validity from the date you intend to enter Australia"
                    />
                    <DropzoneFileUpload
                      uploadLabel="Passport Size Photo"
                      fieldName="passportSizePhoto"
                      labelSection="Passport Size Photo"
                      tooltipContent="A valid passport with at least six months validity from the date you intend to enter Australia"
                      multiple={true}
                    />
                    <DropzoneFileUpload
                      uploadLabel="Bank Statement Pay Slips"
                      fieldName="bankStatementPaySlips"
                      labelSection="Bank Statement Pay Slips"
                      tooltipContent="Upload your latest bank statement pay slips"
                      multiple={true}
                    />
                    <DropzoneFileUpload
                      uploadLabel="Business Card"
                      fieldName="businessCard"
                      labelSection="Business Card"
                      tooltipContent="Upload your business card"
                      multiple={true}
                    />
                    <DropzoneFileUpload
                      uploadLabel="Invitation Letter"
                      fieldName="invitationLetter"
                      labelSection="Invitation Letter"
                      tooltipContent="Upload your invitation letter"
                      multiple={true}
                    />
                    <DropzoneFileUpload
                      uploadLabel="Travel and Health Insurance"
                      fieldName="travelAndHealthInsurance"
                      labelSection="Travel and Health Insurance"
                      tooltipContent="Upload your travel and health insurance documents"
                      multiple={true}
                    />
                    <DropzoneFileUpload
                      uploadLabel="Police Certificate"
                      fieldName="policeCertificate"
                      labelSection="Police Certificate"
                      tooltipContent="Upload your police certificate"
                      multiple={true}
                    />
                    <DropzoneFileUpload
                      uploadLabel="Medical Certificate"
                      fieldName="medicalCertificate"
                      labelSection="Medical Certificate"
                      tooltipContent="Upload your medical certificate"
                      multiple={true}
                    />
                    <DropzoneFileUpload
                      uploadLabel="Additional Documents"
                      fieldName="additionalDocuments"
                      labelSection="Additional Documents"
                      tooltipContent="Upload any additional documents"
                      multiple={true}
                    />

                    {/* document uploads end  */}

                    <SubHeading subHead="EXPRESS PROCESSING (OPTIONAL +10.00 EUR)" />
                    <hr className="w-full h-[0.15rem]  mt-4 bg-primary" />
                    <div className="flex gap-4 pt-12">
                      <div>
                        <Field
                          type="checkbox"
                          className="w-6 h-6"
                          name="termsAndConditions"
                        />
                      </div>

                      <div>
                        <h2 className="font-semibold">
                          I accept the
                          <span className="text-primary">
                            Terms and Conditions
                          </span>{' '}
                          required to process my application.*
                          <span className="text-red-600">(required)</span>
                        </h2>
                        <p className="pt-5 text-sm text-gray-800">
                          The price charged may vary and will be provided at the
                          last page (the fee covers the costs of the immigration
                          service). According to art. 9 par. 2 letter a and art.
                          10 of the General Data Protection Regulation of 27th
                          April 2016 (Official Journal of the European Union UE
                          L 119 of 05/04/2016) I agree to processing the
                          personal data concerning sex, health and information
                          on convictions and violations of law or related
                          security measures for the performance of the contract
                          of visa agency by international visa service llp.
                        </p>
                      </div>
                    </div>
                    <div className="py-8 text-center">
                      {postMutation.isError ? (
                        <div className="text-red-500">
                          An error occurred: {postMutation.error.message}
                        </div>
                      ) : null}
                      <button
                        className={`cursor-pointer w-fit items-center gap-3 border-2 r font-semibold bg-primary text-white px-12 py-3 rounded-full ${
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
          </>
        ) : (
          <>
            <Heading formHead="choose your subclass" />
            <div className="flex justify-center max-w-sm mx-auto my-4">
              <select
                value={selectedSubclass}
                onChange={handleSelectedSubclass}
                className="px-3 py-3 border"
              >
                <option value="">Choose subclass</option>
                {subclassCountryData.map(country => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <CountryDataTabs subclassCountryData={subclassCountryData} />
          </>
        )}
      </div>
    </div>
  );
};

export default AustraliaApplicationPage;

const CountryDataTabs = ({ subclassCountryData }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex flex-col max-w-xl mx-auto">
        {subclassCountryData.map(country => (
          <Tab as={Fragment} key={country}>
            {/* {country.name} */}
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? 'text-white bg-gradient-to-r from-[#1998C7] to-[#007FAE]  hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5    focus:outline-none '
                    : 'bg-white text-black shadow-md px-5 py-2.5'
                }
              >
                {country.name}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="py-5">
        {subclassCountryData.map(country => (
          <Tab.Panel
            key={country}
            className="flex flex-wrap divide-x-[1px]  [&_div]:p-3 [&_div]:gap-3"
          >
            {country.data.map(item => (
              <div key={item}>{item}</div>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
