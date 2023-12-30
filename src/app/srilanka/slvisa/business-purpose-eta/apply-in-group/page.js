'use client';
import Formheading from '@/components/srilanka/common/Formheading';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import StepProcess from '@/components/srilanka/common/StepProcess';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';
import { businessGroupSchema } from '@/constant/srilankaConstant';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDate } from '@/lib/minDate';
const Page = () => {
  const postMutation = usePost(
    apiEndpoint.SL_VISA_BUSINESS_GROUPS,
    1,
    '/srilanka/slvisa/business-purpose-eta/apply-in-group/step-two',
    true,
    'businessGroups'
  );

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
          formHead="Travel Information - Business Purpose - Group"
          formPara="All information should be entered as per the applicant’s passport"
        />
        <Formsubhead subHead="Note that now it is December 1, 2023, 11:33 am in Sri Lanka" />

        <div>
          <Formik
            initialValues={businessGroupSchema.initialValues}
            validationSchema={businessGroupSchema.yupSchema}
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
                      Where you have been during last 14 days before this trip?*{' '}
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
                      id="whereHaveBeenBusinessGroup"
                      name="whereHaveBeenBusinessGroup"
                      // placeholder="Place"
                      className="new-form-input "
                    />

                    <ErrorMessage name="whereHaveBeenBusinessGroup">
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
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="attendantArrivalDateBusinessGroup"
                      selected={values.attendantArrivalDateBusinessGroup}
                      setFieldValue={setFieldValue}
                      minDate={minDate(1)}
                    />
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
                      id="purposeOfVisitBusinessGroup"
                      name="purposeOfVisitBusinessGroup"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="PARTICIPATE IN BUSINESS MEETINGS AND NEGOTIATIONS">
                        PARTICIPATE IN BUSINESS MEETINGS AND NEGOTIATIONS
                      </option>
                      <option value="SHORT TERM TRAINING PROGRAMS">
                        SHORT TERM TRAINING PROGRAMS
                      </option>
                    </Field>

                    <ErrorMessage name="purposeOfVisitBusinessGroup">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Purpose Description*</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      as="textarea"
                      rows="3"
                      id="purposeOfDescriptionBusinessGroup"
                      name="purposeOfDescriptionBusinessGroup"
                      // placeholder="Port of Departure"
                      className="new-form-input"
                    />
                    <ErrorMessage name="purposeOfDescriptionBusinessGroup">
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
                      id="portOfDepartureBusinessGroup"
                      name="portOfDepartureBusinessGroup"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="portOfDepartureBusinessGroup">
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
                      id="arilineVesselBusinessGroup"
                      name="arilineVesselBusinessGroup"
                      className="new-form-input "
                    />

                    <ErrorMessage name="arilineVesselBusinessGroup">
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
                      id="flightVesselNumberBusinessGroup"
                      name="flightVesselNumberBusinessGroup"
                      // placeholder="Passport Number"
                      className="new-form-input "
                    />

                    <ErrorMessage name="flightVesselNumberBusinessGroup">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <Formsubhead subHead="Contact Details of Company / Organisation" />
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Company Name </label>
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
                      id="companyNameBusinessGroup"
                      name="companyNameBusinessGroup"
                      // placeholder="Place"
                      className="new-form-input "
                    />

                    <ErrorMessage name="companyNameBusinessGroup">
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
                      id="addressLineOneBusinessGroup"
                      name="addressLineOneBusinessGroup"
                      // placeholder="Place"
                      className="new-form-input "
                    />

                    <ErrorMessage name="addressLineOneBusinessGroup">
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
                      id="addressLineTwoBusinessGroup"
                      name="addressLineTwoBusinessGroup"
                      className="new-form-input "
                    />

                    <ErrorMessage name="addressLineTwoBusinessGroup">
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
                      id="cityBusinessGroup"
                      name="cityBusinessGroup"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="cityBusinessGroup">
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
                      id="stateBusinessGroup"
                      name="stateBusinessGroup"
                      // placeholder="Ariline/Vessel"
                      className="new-form-input "
                    />

                    <ErrorMessage name="stateBusinessGroup">
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
                      id="zipCodeBusinessGroup"
                      name="zipCodeBusinessGroup"
                      // placeholder="Ariline/Vessel"
                      className="new-form-input "
                    />

                    <ErrorMessage name="zipCodeBusinessGroup">
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
                      id="countryBusinessGroup"
                      name="countryBusinessGroup"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="india">India</option>
                      <option value="australia">Australia</option>
                      <option value="france">France</option>
                    </Field>

                    <ErrorMessage name="countryBusinessGroup">
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
                      id="telephoneBusinessGroup"
                      name="telephoneBusinessGroup"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="telephoneBusinessGroup">
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
                      id="mobileBusinessGroup"
                      name="mobileBusinessGroup"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="mobileBusinessGroup">
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
                      id="faxNumberBusinessGroup"
                      name="faxNumberBusinessGroup"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="faxNumberBusinessGroup">
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
                      id="emailBusinessGroup"
                      name="emailBusinessGroup"
                      className="new-form-input"
                    />
                    <ErrorMessage name="emailBusinessGroup">
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
                      id="alternateEmailBusinessGroup"
                      name="alternateEmailBusinessGroup"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="alternateEmailBusinessGroup">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                {/* Contact Details of the Sri Lankan Company start */}
                <>
                  <Formsubhead
                    subHead="Contact Details of the Sri Lankan Company
"
                  />

                  <div className="main-form-section">
                    <div className="label-section">
                      <label>Company Name </label>
                    </div>

                    <div className="mark-section group"></div>

                    <div className="order-2 col-span-8">
                      <Field
                        type="text"
                        id="companyNameBusinessGroupOfSrilankaCompany"
                        name="companyNameBusinessGroupOfSrilankaCompany"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="companyNameBusinessGroupOfSrilankaCompany">
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
                        id="addressLineOneBusinessGroupOfSrilankaCompany"
                        name="addressLineOneBusinessGroupOfSrilankaCompany"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineOneBusinessGroupOfSrilankaCompany">
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
                        id="addressLineTwoBusinessGroupOfSrilankaCompany"
                        name="addressLineTwoBusinessGroupOfSrilankaCompany"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineTwoBusinessGroupOfSrilankaCompany">
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
                        id="cityBusinessGroupOfSrilankaCompany"
                        name="cityBusinessGroupOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="cityBusinessGroupOfSrilankaCompany">
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
                        id="stateBusinessGroupOfSrilankaCompany"
                        name="stateBusinessGroupOfSrilankaCompany"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="stateBusinessGroupOfSrilankaCompany">
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
                        id="zipCodeBusinessGroupOfSrilankaCompany"
                        name="zipCodeBusinessGroupOfSrilankaCompany"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="zipCodeBusinessGroupOfSrilankaCompany">
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
                        id="telephoneBusinessGroupOfSrilankaCompany"
                        name="telephoneBusinessGroupOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="telephoneBusinessGroupOfSrilankaCompany">
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
                        id="mobileBusinessGroupOfSrilankaCompany"
                        name="mobileBusinessGroupOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="mobileBusinessGroupOfSrilankaCompany">
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
                        id="faxNumberBusinessGroupOfSrilankaCompany"
                        name="faxNumberBusinessGroupOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="faxNumberBusinessGroupOfSrilankaCompany">
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
                        id="emailBusinessGroupOfSrilankaCompany"
                        name="emailBusinessGroupOfSrilankaCompany"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="emailBusinessGroupOfSrilankaCompany">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                </>
                {/* Contact Details of the Sri Lankan Company end  */}

                <div className="py-8 text-center">
                  {postMutation.isError ? (
                    <div className="text-red-500">
                      An error occurred:
                      {postMutation.error}
                      {postMutation.error.message}
                    </div>
                  ) : null}
                  <button
                    className={`formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-8 py-2 ${
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
  );
};

export default Page;
