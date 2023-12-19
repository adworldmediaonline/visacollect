"use client";
import SubHeading from "@/components/thailand/common/SubHeading";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BsQuestionCircleFill } from "react-icons/bs";
import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { applicantInformationSchema } from "../_thailandFormSchema/thailandFormSchema";
import { CiEdit } from "react-icons/ci";

export default function Page() {
  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <h3 className=" text-lg ">Home &gt; Embassy Registration</h3>

        <div className="mx-auto pt-10 pb-4">
          <h3 className=" text-4xl font-bold ">Thailand</h3>
        </div>

        <div>
          <Formik
            initialValues={applicantInformationSchema.initialValues}
            validationSchema={applicantInformationSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("Application Information Data:", values);
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
                    <label className="">First and middle name </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="firstName">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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
                      id="lastName"
                      name="lastName"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="lastName">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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
                      id="nationality"
                      name="nationality"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="thailand">Thailand</option>
                    </Field>

                    <ErrorMessage name="nationality">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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
                      id="gender"
                      name="gender"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </Field>

                    <ErrorMessage name="gender">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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
                      id="dateOfBirth"
                      name="dateOfBirth"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="dateOfBirth">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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
                      id="countryOfBirth"
                      name="countryOfBirth"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="thailand">Thailand</option>
                      <option value="australia">Australia</option>
                    </Field>

                    <ErrorMessage name="countryOfBirth">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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
                      id="countryOfResidence"
                      name="countryOfResidence"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="thailand">Thailand</option>
                      <option value="australia">Australia</option>
                    </Field>

                    <ErrorMessage name="countryOfResidence">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">Passport number </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="text"
                      id="passportNumber"
                      name="passportNumber"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="passportNumber">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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
                      id="passportIssueDate"
                      name="passportIssueDate"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="passportIssueDate">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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
                      id="passportExpirationDate"
                      name="passportExpirationDate"
                      // placeholder="Date Of Birth"
                      className="new-form-input "
                    />

                    <ErrorMessage name="passportExpirationDate">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
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

                {/* table start  */}
                <div className="w-full h-full py-8">
                  <table className="w-full text-left table-auto min-w-max border">
                    <thead>
                      <tr className="rounded-xl">
                        <th className="bg-[#F7BD6D] text-black p-4 ">
                          Full name
                        </th>
                        <th className="bg-[#F7BD6D] text-black p-4 ">
                          Nationality
                        </th>
                        <th className="bg-[#F7BD6D] text-black p-4 ">Gender</th>
                        <th className="bg-[#F7BD6D] text-black p-4 ">
                          Date Of Birth
                        </th>
                        <th className="bg-[#F7BD6D] text-black p-4 ">
                          Country of birth
                        </th>
                        <th className="bg-[#F7BD6D] text-black p-4 ">
                          Passport number
                        </th>
                        <th className="bg-[#F7BD6D] text-black p-4 ">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            Gagan Vashishth
                          </div>
                        </td>
                        <td className="p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            Indian
                          </div>
                        </td>
                        <td className="p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            Male
                          </div>
                        </td>
                        <td className="p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            12/05/1997
                          </div>
                        </td>
                        <td className="p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            India
                          </div>
                        </td>
                        <td className="p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            876543
                          </div>
                        </td>
                        <td className={`p-4 flex space-x-5 items-center`}>
                          <CiEdit size={24} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* table end  */}

                <div className="px-10 py-5 border rounded-lg border-blueColor bg-blueColor/10">
                  <div className="flex items-center justify-between pb-5 text-black">
                    <p className="text-2xl font-semibold">
                      {" "}
                      Products{" "}
                      <span className="font-normal text-sm">
                        CA Embassy Registration Embassy Registration (CA)
                      </span>
                    </p>
                    <p className="text-xl font-semibold">NA</p>
                  </div>
                  <div className="flex items-center justify-between pb-5 text-black">
                    <p className="text-2xl font-semibold">
                      {" "}
                      Embassy Registration Fee (CA)
                    </p>
                    <p className="text-xl font-semibold">NA</p>
                  </div>
                  <div className="flex items-center justify-between pb-5 text-black">
                    <p className="text-2xl font-semibold">
                      {" "}
                      Total{" "}
                      <span className="font-normal text-sm">
                        (For all applicants)
                      </span>{" "}
                    </p>
                    <p className="text-xl font-semibold">
                      NA{" "}
                      <span className="font-normal text-sm">
                        (Includes taxes and fees)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="py-8 text-center">
                  <button
                    className={`cursor-pointer w-fit items-center gap-3 border-2 rounded-lg font-semibold border-blueColor text-blueColor px-8 py-3 ${
                      !isValid ? "cursor-not-allowed opacity-50" : ""
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
  );
}
