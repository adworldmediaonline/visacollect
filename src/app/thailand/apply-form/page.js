"use client"
import SubHeading from '@/components/thailand/common/SubHeading';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import React from 'react'

export default function Page() {
    return (
        <div>
            <div className="container  md:py-8 py-20 md;px-0 px-3 ">

                <h3 className=" text-lg ">
                    Home &gt;  Get your Embassy Registration!
                </h3>

                <div className="mx-auto pt-10 pb-4">
                    <h3 className=" text-4xl font-bold ">
                        Get your Embassy Registration!
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
                                <SubHeading subHead="Embassy Registration" />
                                <div className="main-form-section">
                                    <div className="label-section">
                                        <label className="">Email address </label>
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
                                        <label className="">When do you arrive at your destination? </label>
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
                                        <label className="">When do you depart from your destination? </label>
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
                                        <label className="">Destination country</label>
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
                                        <label className="">Emergency contact's email</label>
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
                                        <label className="">Emergency contact's full name </label>
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
                                        <label className="">Emergency contact's country code and phone number </label>
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


                                <div className="py-8 text-center">
                 
                  <button
                    className={`cursor-pointer w-fit items-center gap-3 border-2 rounded-lg font-semibold border-blueColor text-blueColor px-8 py-3 ${
                      !isValid ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={!isValid}
                    type="submit"
                  >
                   Next
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
