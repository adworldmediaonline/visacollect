"use client"
import SubHeading from '@/components/thailand/common/SubHeading';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6';

export default function Page() {
    return (
        <div>
            <div className="container  md:py-8 py-20 md;px-0 px-3 ">

                <h3 className=" text-lg ">
                    Home &gt;  Embassy Registration
                </h3>

                <div className="mx-auto pt-10 pb-4">
                    <h3 className=" text-4xl font-bold ">
                        Thailand
                    </h3>
                </div>


                <div>
                    <Formik
                        // initialValues={applicationSchema.initialValues}
                        // validationSchema={applicationSchema.yupSchema}
                        validateOnChange={true}
                        validateOnMount={true}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            postMutation.mutate(values);
                            setSubmitting(false);
                            resetForm();
                        }}
                    >
                        {({ values, isValid }) => (
                            <Form>
                                <SubHeading subHead="Your Applicant Information" />
                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">First and middle name  </label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            type="text"
                                            id="arrivalDate"
                                            name="arrivalDate"
                                            // placeholder="Date Of Birth"
                                            className="new-form-input "
                                        />

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Last name </label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            type="text"
                                            id="arrivalDate"
                                            name="arrivalDate"
                                            // placeholder="Date Of Birth"
                                            className="new-form-input "
                                        />

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Nationality</label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            required
                                            component="select"
                                            id="countryCitizenship"
                                            name="countryCitizenship"
                                            className="new-form-input "
                                        >
                                            <option value="">Select</option>
                                            <option value="">Thailand</option>
                                        </Field>

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Gender</label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            required
                                            component="select"
                                            id="countryCitizenship"
                                            name="countryCitizenship"
                                            className="new-form-input "
                                        >
                                            <option value="">Select</option>
                                            <option value="">Female</option>
                                            <option value="">Male</option>
                                        </Field>

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Date of birth </label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            type="date"
                                            id="arrivalDate"
                                            name="arrivalDate"
                                            // placeholder="Date Of Birth"
                                            className="new-form-input "
                                        />

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Country of birth</label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            required
                                            component="select"
                                            id="countryCitizenship"
                                            name="countryCitizenship"
                                            className="new-form-input "
                                        >
                                            <option value="">Select</option>
                                            <option value="">Thailand</option>
                                            <option value="">Australia</option>
                                        </Field>

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Country of residence</label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            required
                                            component="select"
                                            id="countryCitizenship"
                                            name="countryCitizenship"
                                            className="new-form-input "
                                        >
                                            <option value="">Select</option>
                                            <option value="">Thailand</option>
                                            <option value="">Australia</option>
                                        </Field>

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Passport number  </label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            type="text"
                                            id="arrivalDate"
                                            name="arrivalDate"
                                            // placeholder="Date Of Birth"
                                            className="new-form-input "
                                        />

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Passport issue date</label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            type="date"
                                            id="arrivalDate"
                                            name="arrivalDate"
                                            // placeholder="Date Of Birth"
                                            className="new-form-input "
                                        />

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Passport expiration date</label>
                                    </div>
                                    <div className="order-2 col-span-9">
                                        <Field
                                            type="date"
                                            id="arrivalDate"
                                            name="arrivalDate"
                                            // placeholder="Date Of Birth"
                                            className="new-form-input "
                                        />

                                        <ErrorMessage name="countryCitizenship">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                <div className="py-5 text-center">
                                    <button
                                        className="inline-flex rounded-lg  items-center gap-3 px-8 py-2 text-xl font-semibold cursor-pointer text-blueColor border border-blueColor "
                                        type="button"
                                    >
                                        <FaCirclePlus /> Add Another Person
                                    </button>
                                </div>



                                <div className="px-10 py-5 border rounded-lg border-blueColor bg-blueColor/10">
                                    <div className="flex items-center justify-between pb-5 text-black">
                                    <p className='text-2xl font-semibold'> Products <span className='font-normal text-sm'>
                                            CA Embassy Registration
                                            Embassy Registration (CA)
                                        </span></p>
                                        <p className='text-xl font-semibold'>
                                            NA
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between pb-5 text-black">
                                    <p className='text-2xl font-semibold'> Embassy Registration Fee (CA)</p>
                                        <p className='text-xl font-semibold'>
                                            NA
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between pb-5 text-black">
                                        <p className='text-2xl font-semibold'> Total  <span className='font-normal text-sm'>(For all applicants)</span> </p>
                                        <p className='text-xl font-semibold'>NA  <span className='font-normal text-sm'>(Includes taxes and fees)</span>
                                        </p>
                                    </div>
                                </div>



                                <div className="py-8 text-center">

                                    <button
                                        className={`cursor-pointer w-fit items-center gap-3 border-2 rounded-lg font-semibold border-blueColor text-blueColor px-8 py-3 ${!isValid ? 'cursor-not-allowed opacity-50' : ''
                                            }`}
                                        disabled={!isValid}
                                        type="submit"
                                    >
                                        Continue
                                    </button>
                                </div>

                            </Form>
                        )}
                    </Formik>

                </div>

            </div>
        </div>
    )
}
