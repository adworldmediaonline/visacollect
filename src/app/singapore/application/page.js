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

const Page = () => {

    return (
        <div>
            <div className="container  md:py-8 py-20 md;px-0 px-3 ">
                <Heading formHead="Apply Now for Malaysia Application" />

                <div>
                    <Formik
                        // initialValues={.initialValues}
                        // validationSchema={.yupSchema}
                        validateOnChange={true}
                        validateOnMount={true}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            // postMutation.mutate({
                            //   ...values,
                            //   travelInsurance: {
                            //     ...values.travelInsurance,
                            //     insuranceFee: calculateTotalPrice(
                            //       values.travelInsurance.startDate,
                            //       values.travelInsurance.returnDate
                            //     ),
                            //   },
                            // });
                            setSubmitting(false);
                            // resetForm();
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
                                            name="passportDetails.passportNumber"
                                            id="passportDetails.passportNumber"
                                        />
                                        <div className="text-gray-400 text-xs">
                                            Including a middle name is recommended, but it&apos;s not required if you don&apos;t have one and Enter this information as it appears in your passport.
                                        </div>

                                        <ErrorMessage name="passportDetails.passportNumber">
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
                                            name="passportDetails.passportNumber"
                                            id="passportDetails.passportNumber"
                                        />
                                        <div className="text-gray-400 text-xs">
                                            Enter this information as it appears in your passport.
                                        </div>

                                        <ErrorMessage name="passportDetails.passportNumber">
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
                                            id="travelDetails.purposeOfStay"
                                            name="travelDetails.purposeOfStay"
                                            component="select"
                                            className="new-form-input"
                                        >
                                            <option value="">Select</option>
                                            {getAllCountries()}
                                        </Field>
                                        <div className="text-gray-400 text-xs">
                                            Select the nationality listed on your passport.
                                        </div>

                                        <ErrorMessage name="travelDetails.purposeOfStay">
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
                                            id="travelDetails.purposeOfStay"
                                            name="travelDetails.purposeOfStay"
                                            component="select"
                                            className="new-form-input"
                                        >
                                            <option value="">Male</option>
                                            <option value="">Female</option>

                                        </Field>
                                        <div className="text-gray-400 text-xs">
                                            Select the gender listed on your passport.
                                        </div>


                                        <ErrorMessage name="travelDetails.purposeOfStay">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
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
                                            name="passportDetails.dateOfIssue"
                                            // selected={values.passportDetails.dateOfIssue}
                                            setFieldValue={setFieldValue}
                                        // minDate={new Date(values.personalDetails.dateOfBirth)}
                                        // disabled={values.personalDetails.dateOfBirth === ''}
                                        />
                                    </div>
                                </div>
                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label>Country of birth </label>
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
                                            {getAllCountries()}
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
                                        <label>Country of residence </label>
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
                                            {getAllCountries()}
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
                                        <label>Passport number</label>
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
                                        <label>Passport Issue date</label>
                                    </div>

                                    <div className="mark-section group"></div>

                                    <div className="order-2 col-span-8">
                                        <ReactDatePickerInput
                                            className="new-form-input"
                                            name="passportDetails.dateOfIssue"
                                            // selected={values.passportDetails.dateOfIssue}
                                            setFieldValue={setFieldValue}
                                        // minDate={new Date(values.personalDetails.dateOfBirth)}
                                        // disabled={values.personalDetails.dateOfBirth === ''}
                                        />
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
                                            name="passportDetails.dateOfIssue"
                                            // selected={values.passportDetails.dateOfIssue}
                                            setFieldValue={setFieldValue}
                                        // minDate={new Date(values.personalDetails.dateOfBirth)}
                                        // disabled={values.personalDetails.dateOfBirth === ''}
                                        />
                                    </div>
                                </div>


                                <div className="py-8 text-center">
                                    <button
                                        className={`cursor-pointer w-fit items-center gap-3  rounded-lg font-semibold text-white bg-primaryMain px-8 py-3 `}

                                    >
                                        + Add Another Peron
                                    </button>
                                </div>


                                <table className="w-full my-10">
                                    <thead className='bg-primary text-white'>
                                        <tr>
                                            <th className='py-3 rounded-tl-md'>
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
                                            <th className='rounded-tr-md'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr >
                                            <td className="px-3 py-2">
                                                <div className="order-2 col-span-8 text-center">
                                                    name
                                                </div>
                                            </td>

                                            <td>
                                                <div className="order-2 col-span-8 text-center">
                                                    surname
                                                </div>
                                            </td>

                                            <td className="px-3 py-2">
                                                <div className="order-2 col-span-8 text-center">
                                                    gender
                                                </div>
                                            </td>

                                            <td>
                                                <div className="order-2 col-span-8 text-center">
                                                    date of birth
                                                </div>
                                            </td>

                                            <td className='flex space-x-3 justify-center'>

                                                <button
                                                    type="button"
                                                >
                                                    <FaEdit
                                                        className="text-primary"
                                                        size={30}
                                                    />
                                                </button>
                                                <button
                                                    type="button"
                                                >
                                                    <MdDeleteOutline
                                                        className="text-primary"
                                                        size={30}
                                                    />
                                                </button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>


                                <Link href="/malaysia/payment">
                                    <div className="py-8 text-center">

                                        <button
                                            className={`cursor-pointer w-fit items-center gap-3  rounded-lg font-semibold text-white bg-primaryMain px-8 py-3 ${!isValid ? 'cursor-not-allowed opacity-50' : ''
                                                }`}
                                            disabled={!isValid}
                                            type="submit"
                                        >

                                            Submit The Application

                                        </button>
                                    </div>
                                </Link>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Page;
