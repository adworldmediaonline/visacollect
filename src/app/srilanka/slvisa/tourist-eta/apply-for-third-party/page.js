'use client';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import { touristThirdPartySchema } from '@/constant/srilankaConstant';
import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import StepProcess from '@/components/srilanka/common/StepProcess';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDate } from '@/lib/minDate';

const Page = () => {
  const postMutation = usePost(
    apiEndpoint.SL_VISA_TOURIST_THIRD_PARTY,
    1,
    '/srilanka/slvisa/tourist-eta/apply-for-third-party/step-two',
    true,
    'touristThirdParty'
  );
  return (
    <div>
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
            formHead="Travel Information - Tourist Purpose - Third Party"
            formPara="All information should be entered as per the applicant’s passport"
          />

          <Formsubhead subHead="Note that now it is October 23, 2023, 11:58 am in Sri Lanka" />

          <div>
            <Formik
              initialValues={touristThirdPartySchema.initialValues}
              validationSchema={touristThirdPartySchema.yupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                postMutation.mutate(values);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ values, isValid, setFieldValue }) => (
                <Form>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>
                        Where you have been during last 14 days before this
                        trip?*{' '}
                      </label>
                    </div>

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className="side-icon" size={20} />
                      <div className="tooltip-content">
                        Where you have been in since last 14 days.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="whereHaveBeenThirdPartyTourist"
                        name="whereHaveBeenThirdPartyTourist"
                        className="new-form-input "
                      />

                      <ErrorMessage name="whereHaveBeenThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please select the date you intend to enter Sri Lanka. An
                        ETA is valid for up to 03 month from date of issue.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <ReactDatePickerInput
                        className="new-form-input"
                        name="attendantArrivalDateThirdPartyTourist"
                        selected={values.attendantArrivalDateThirdPartyTourist}
                        setFieldValue={setFieldValue}
                        minDate={minDate(1)}
                      />
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Purpose of visit*</label>
                    </div>

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Select you purpose of traveling to Sri Lanka.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="purposeOfVisitThirdPartyTourist"
                        name="purposeOfVisitThirdPartyTourist"
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

                      <ErrorMessage name="purposeOfVisitThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Select your visa validity period.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="visaValidPeriodThirdPartyTourist"
                        name="visaValidPeriodThirdPartyTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="option1">30 Days</option>
                      </Field>

                      <ErrorMessage name="visaValidPeriodThirdPartyTourist">
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

                    <div className="mark-section ThirdParty"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="portOfDepartureThirdPartyTourist"
                        name="portOfDepartureThirdPartyTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="portOfDepartureThirdPartyTourist">
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

                    <div className="mark-section ThirdParty"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="arilineVesselThirdPartyTourist"
                        name="arilineVesselThirdPartyTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="arilineVesselThirdPartyTourist">
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

                    <div className="mark-section ThirdParty"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="flightVesselNumberThirdPartyTourist"
                        name="flightVesselNumberThirdPartyTourist"
                        // placeholder="Passport Number"
                        className="new-form-input "
                      />

                      <ErrorMessage name="flightVesselNumberThirdPartyTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <Formsubhead subHead="Details of third party" />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Type of Third Party*</label>
                    </div>

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Specify your type Personal or Organization.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        required
                        component="select"
                        id="partyNameThirdPartyTourist"
                        name="partyThirdPartyTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="partyThirdPartyTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Surname/Family Name* </label>
                    </div>

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Enter your last name (surname) as it appears on your
                        passport
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="familyNameTypeOfThirdPartyTourist"
                        name="familyNameTypeOfThirdPartyTourist"
                        // placeholder="Surname"
                        className="new-form-input "
                      />

                      <ErrorMessage name="familyNameTypeOfThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Enter your given name as it appears on your passport
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="givenNameTypeOfThirdPartyTourist"
                        name="givenNameTypeOfThirdPartyTourist"
                        className="new-form-input "
                      />

                      <ErrorMessage name="givenNameTypeOfThirdPartyTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Address Line 1* </label>
                    </div>

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type your current apartment or house / building
                        number in your address.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="addressLineOneThirdPartyTourist"
                        name="addressLineOneThirdPartyTourist"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineOneThirdPartyTourist">
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

                    <div className="mark-section ThirdParty"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="addressLineTwoThirdPartyTourist"
                        name="addressLineTwoThirdPartyTourist"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineTwoThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type the name of the city in which you live into
                        the text box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="cityThirdPartyTourist"
                        name="cityThirdPartyTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="cityThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type the name of the state in which you live into
                        the text box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="stateThirdPartyTourist"
                        name="stateThirdPartyTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="stateThirdPartyTourist">
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

                    <div className="mark-section ThirdParty"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="zipCodeThirdPartyTourist"
                        name="zipCodeThirdPartyTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="zipCodeThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
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
                        id="countryThirdPartyTourist"
                        name="countryThirdPartyTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="countryThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please enter the address of Sri Lanka which you are
                        going to stay.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        as="textarea"
                        name="addressInSrilankaThirdPartyTourist"
                        rows="4"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressInSrilankaThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        Please type your current telephone number into the text
                        box.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="telephoneThirdPartyTourist"
                        name="telephoneThirdPartyTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="telephoneThirdPartyTourist">
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

                    <div className="mark-section ThirdParty"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="mobileThirdPartyTourist"
                        name="mobileThirdPartyTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="mobileThirdPartyTourist">
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

                    <div className="mark-section ThirdParty"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="faxNumberThirdPartyTourist"
                        name="faxNumberThirdPartyTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="faxNumberThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        VISA Approval/Acknowledgment will be sent to this email
                        address also.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="emailThirdPartyTourist"
                        name="emailThirdPartyTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="emailThirdPartyTourist">
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

                    <div className="mark-section ThirdParty">
                      <BsQuestionCircleFill className=" side-icon" size={20} />
                      <div className="tooltip-content">
                        VISA Approval/Acknowledgment will be sent to this
                        alternate email address also.
                      </div>
                    </div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="alternateEmailThirdPartyTourist"
                        name="alternateEmailThirdPartyTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="alternateEmailThirdPartyTourist">
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
};

export default Page;
