'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import { useRouter } from 'next/navigation';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import Formheading from '@/components/srilanka/common/Formheading';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import { touristGroupsSchema } from '@/constant/srilankaConstant';
import apiEndpoint from '@/services/apiEndpoint';
import useQueryGet from '@/hooks/useQuery';
import useUpdate from '@/hooks/useUpdate';
import StepProcess from '@/components/srilanka/common/StepProcess';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDate } from '@/lib/minDate';

export default function Page({ params }) {
  const { id } = params;
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.SL_VISA_TOURIST_GROUPS,
    id,
    'touristGroups'
  );

  const updateMutation = useUpdate(
    apiEndpoint.SL_VISA_TOURIST_GROUPS,
    id,
    'form updated successfully',
    '/srilanka/slvisa/tourist-eta/apply-in-group/step-two',
    getQuery.refetch,
    'touristGroups'
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
      data: {
        data: { _id, __v, createdAt, updatedAt, members, ...touristGroupsData },
      },
    } = getQuery;

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
            formHead="Travel Information - Tourist Purpose - Group"
            formPara="All information should be entered as per the applicant’s passport"
          />
          <Formsubhead subHead="Note that now it is October 23, 2023, 11:58 am in Sri Lanka" />

          <div>
            <Formik
              initialValues={touristGroupsData}
              validationSchema={touristGroupsSchema.yupSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting }) => {
                updateMutation.mutate(values);
                setSubmitting(false);
              }}
            >
              {({ values, isValid }) => (
                <Form>
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
                        id="whereHaveBeenGroupTourist"
                        name="whereHaveBeenGroupTourist"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="whereHaveBeenGroupTourist">
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
                        name="attendantArrivalDateGroupTourist"
                        selected={
                          new Date(values.attendantArrivalDateGroupTourist)
                        }
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
                        id="purposeOfVisitGroupTourist"
                        name="purposeOfVisitGroupTourist"
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

                      <ErrorMessage name="purposeOfVisitGroupTourist">
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
                        id="visaValidPeriodGroupTourist"
                        name="visaValidPeriodGroupTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="option1">30 Days</option>
                      </Field>

                      <ErrorMessage name="visaValidPeriodGroupTourist">
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
                        id="portOfDepartureGroupTourist"
                        name="portOfDepartureGroupTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="portOfDepartureGroupTourist">
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
                        id="ArilineVesselGroupTourist"
                        name="ArilineVesselGroupTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="ArilineVesselGroupTourist">
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
                        id="flightVesselNumberGroupTourist"
                        name="flightVesselNumberGroupTourist"
                        // placeholder="Passport Number"
                        className="new-form-input "
                      />

                      <ErrorMessage name="flightVesselNumberGroupTourist">
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
                        id="addressLineOneGroupTourist"
                        name="addressLineOneGroupTourist"
                        // placeholder="Place"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineOneGroupTourist">
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
                        id="addressLineTwoGroupTourist"
                        name="addressLineTwoGroupTourist"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressLineTwoGroupTourist">
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
                        id="cityGroupTourist"
                        name="cityGroupTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="cityGroupTourist">
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
                        id="stateGroupTourist"
                        name="stateGroupTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="stateGroupTourist">
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
                        id="zipCodeGroupTourist"
                        name="zipCodeGroupTourist"
                        // placeholder="Ariline/Vessel"
                        className="new-form-input "
                      />

                      <ErrorMessage name="zipCodeGroupTourist">
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
                        id="countryGroupTourist"
                        name="countryGroupTourist"
                        className="new-form-input "
                      >
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                      </Field>

                      <ErrorMessage name="countryGroupTourist">
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
                        name="addressInSrilankaGroupTourist"
                        rows="4"
                        className="new-form-input "
                      />

                      <ErrorMessage name="addressInSrilankaGroupTourist">
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
                        id="emailGroupTourist"
                        name="emailGroupTourist"
                        className="new-form-input"
                      />
                      <ErrorMessage name="emailGroupTourist">
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
                        id="alternateEmailGroupTourist"
                        name="alternateEmailGroupTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="alternateEmailGroupTourist">
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
                        id="telephoneGroupTourist"
                        name="telephoneGroupTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="telephoneGroupTourist">
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
                        id="mobileGroupTourist"
                        name="mobileGroupTourist"
                        // placeholder="Port of Departure"
                        className="new-form-input "
                      />
                      <ErrorMessage name="mobileGroupTourist">
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
                        id="faxNumberGroupTourist"
                        name="faxNumberGroupTourist"
                        className="new-form-input"
                      />
                      <ErrorMessage name="faxNumberGroupTourist">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
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
