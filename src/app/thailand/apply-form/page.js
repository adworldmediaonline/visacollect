"use client";
import SubHeading from "@/components/thailand/common/SubHeading";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BsQuestionCircleFill } from "react-icons/bs";
import React from "react";
import { registrationSchema } from "../_thailandFormSchema/thailandFormSchema";

export default function Page() {
  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <h3 className=" text-lg ">Home &gt; Get your Embassy Registration!</h3>

        <div className="mx-auto pt-10 pb-4">
          <h3 className=" text-4xl font-bold ">
            Get your Embassy Registration!
          </h3>
        </div>

        <div>
          <Formik
            initialValues={registrationSchema.initialValues}
            validationSchema={registrationSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // console.log("Registration Data:", values);
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
                      id="emailAddress"
                      name="emailAddress"
                      // placeholder="email Address"
                      className="new-form-input "
                    />

                    <ErrorMessage name="emailAddress">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">
                      When do you arrive at your destination?{" "}
                    </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="date"
                      id="whenArriveDestination"
                      name="whenArriveDestination"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="whenArriveDestination">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">
                      When do you depart from your destination?{" "}
                    </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="date"
                      id="whenDepartDestination"
                      name="whenDepartDestination"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="whenDepartDestination">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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
                      id="destinationCountry"
                      name="destinationCountry"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="Thailand">Thailand</option>
                    </Field>

                    <ErrorMessage name="destinationCountry">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">Emergency contact&apos;s email</label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="text"
                      id="emergencyContactEmail"
                      name="emergencyContactEmail"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="emergencyContactEmail">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">
                      Emergency contact&apos;s full name{" "}
                    </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="text"
                      id="emergencyContactFullName"
                      name="emergencyContactFullName"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="emergencyContactFullName">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">
                      Emergency contact&apos;s country code and phone number{" "}
                    </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="text"
                      id="EmergencyContactCountryCodeAndPhoneNumber"
                      name="EmergencyContactCountryCodeAndPhoneNumber"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="EmergencyContactCountryCodeAndPhoneNumber">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="py-8 text-center">
                  <button
                    className={`cursor-pointer w-fit items-center gap-3 border-2 rounded-lg font-semibold border-primaryMain text-primaryMain px-8 py-3 ${
                      !isValid ? "cursor-not-allowed opacity-40" : ""
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
  );
}
