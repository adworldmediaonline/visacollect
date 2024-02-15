'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { CiCalendarDate } from 'react-icons/ci';
import ReactDatePicker from 'react-datepicker';
import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import { applicationSchema } from '@/constant/australiaConstant';
import { getAllCountries } from '@/lib/getAllCountries';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';

const Page = () => {
  const postMutation = usePost(
    apiEndpoint.AUSTRALIA_VISA_APPLICATION,
    1,
    '/in/au/application/payment',
    true,
    'australiaVisaApplication'
  );

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

  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead="eVisitor ETA Visa to Australia Application" />

        <div>
          <Formik
            initialValues={applicationSchema.initialValues}
            validationSchema={applicationSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              postMutation.mutate({
                ...values,
                travelInsurance: {
                  ...values.travelInsurance,
                  insuranceFee: calculateTotalPrice(
                    values.travelInsurance.startDate,
                    values.travelInsurance.returnDate
                  ),
                },
              });
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ values, isValid, setFieldValue }) => (
              <Form>
                <SubHeading subHead="TRAVEL DETAILS" />

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Purpose of stay: * </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
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
                      <option value="australia">Transit</option>
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
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      If you don’t know the exact date, enter approximate date
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
                    <BsQuestionCircleFill className=" side-icon" size={20} />
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
                      {getAllCountries()}
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
                      <option value="Tourism">Tourism</option>
                      <option value="india">Business</option>
                      <option value="australia">Transit</option>
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
                    <BsQuestionCircleFill className=" side-icon" size={20} />
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
                    <BsQuestionCircleFill className=" side-icon" size={20} />
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
                    <BsQuestionCircleFill className=" side-icon" size={20} />
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
                    <BsQuestionCircleFill className=" side-icon" size={20} />
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
                      {getAllCountries()}
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
                    <BsQuestionCircleFill className=" side-icon" size={20} />
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
                  />
                  <h2>I&lsquo;m a citizen of more than one country</h2>
                  <ErrorMessage name="passportDetails.citizen">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                {values.passportDetails.citizen && (
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Additional citizenship*: *</label>
                    </div>

                    <div className="mark-section group">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
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
                        {getAllCountries()}
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
                    Have you ever obtained an Australian visa using your current
                    or previous passport(s)? *
                  </h2>

                  <div className="flex gap-8">
                    <div className="flex gap-4">
                      <Field
                        type="radio"
                        className="w-6 h-6"
                        name="passportDetails.obtainedVisa"
                        id="passportDetailsObtainedVisaYes"
                        value="yes"
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
                      />
                      <h3>No</h3>
                    </div>
                  </div>
                </div>

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
                      {getAllCountries()}
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
                      />
                      <h3>No</h3>
                    </div>
                  </div>
                </div>
                {values.backgroundQuestions.criminalOffence === 'yes' && (
                  <div className="py-4">
                    <p className="text-primary">
                      Please provide details of each offence and the penalties
                      imposed: *
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
                      />
                      <h3>Yes</h3>
                    </div>
                    <div className="flex gap-4">
                      <Field
                        type="radio"
                        className="w-6 h-6"
                        name="backgroundQuestions.offenceCharge"
                        value="no"
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
                          {getAllCountries()}
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
                          minDate={new Date(values.travelInsurance.startDate)}
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
                      <img src="/assets/images/in/au/imgform.png" />
                    </div>
                    {/* <div className="pb-6">
                      <div className="flex gap-4 pb-2">
                        <div  >
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="travelInsurance.acceptFinalBalance"
                            value="yes"
                          />
                        </div>
                        <h2 className="font-semibold">
                          I accept the price and add to final balance
                        </h2>
                      </div>

                      <div className="flex gap-4 ">
                        <div  >
                          <Field
                            type="radio"
                            className="w-6 h-6"
                            name="travelInsurance.acceptFinalBalance"
                            value="no"
                          />
                        </div>
                        <h2 className="font-semibold">No, Thanks.</h2>
                      </div>
                    </div> */}
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
                          General Conditions of Signal Iduna Group Insurance and
                          scope
                        </span>{' '}
                        . I confirm that the insurance conditions meet my travel
                        needs, and in case of insuring other persons, I have
                        their authorization to submit them to the insurance and
                        I shall notify them about the scope and conditions of
                        the insurance.*
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

                <SubHeading subHead="EXPRESS PROCESSING (OPTIONAL +10.00 EUR)" />

                {/* <div className="flex flex-col gap-4 py-2">
                  <h2>
                    Would you like to add express processing and have your
                    application processed in 24 hours or less? (typical):
                  </h2>

                  <div className="flex gap-8">
                    <div className="flex gap-4">
                      <input type="checkbox" className="w-6 h-6" />
                      <h3>Yes</h3>
                    </div>
                    <div className="flex gap-4">
                      <input type="checkbox" className="w-6 h-6" />
                      <h3>No</h3>
                    </div>
                  </div>
                </div> */}

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
                      service). According to art. 9 par. 2 letter a and art. 10
                      of the General Data Protection Regulation of 27th April
                      2016 (Official Journal of the European Union UE L 119 of
                      05/04/2016) I agree to processing the personal data
                      concerning sex, health and information on convictions and
                      violations of law or related security measures for the
                      performance of the contract of visa agency by
                      international visa service llp.
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
      </div>
    </div>
  );
};

export default Page;
