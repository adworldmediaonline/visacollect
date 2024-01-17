'use client';
import Tabs from '@/components/hongkong/Tabs';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Heading from '@/components/australia/common/Heading';
import SubHeading from '@/components/australia/common/SubHeading';
import React from 'react';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { getAllCountries } from '@/lib/getAllCountries';
import { cambodiaSchema } from '@/constant/cambodiaSchema';
import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';
import { addDays } from 'date-fns';


const Page = () => {
    return (
        <div className='container  py-20 md:px-0 px-5 '>

            <Heading formHead=" Online Application for Entry for Visit/Transit in Hong Kong" />

            <Tabs color1=" bg-[#0068E5] text-white"
                color2="bg-[#E3E3E3]"
                color3="bg-[#E3E3E3] "
                color4="bg-[#E3E3E3]" />

            <div>
                <Formik
                    initialValues={cambodiaSchema.initialValue}
                    validationSchema={cambodiaSchema.yupSchema}
                    validateOnChange={true}
                    validateOnMount={true}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        postMutation.mutate(values);
                        setSubmitting(false);
                        // resetForm();
                    }}
                >
                    {({ values, isValid, setFieldValue }) => (
                        <Form>
                            {console.log(values)}
                            <SubHeading subHead="Personal Details" />
                            <div className='main-section'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Full Name<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">
                                                {/* <BsQuestionCircleFill className=" side-icon" size={20} />
                                                <div className="tooltip-content">
                                                    Family name is also known as Last name or Surname.
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                        />

                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Maiden surname (if applicable)
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                        />

                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Alias <span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">
                                                <BsQuestionCircleFill className=" side-icon" size={20} />
                                                <div className="tooltip-content">
                                                    A person is known by any other name in addition to his real/ official name
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                        />

                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </div>

                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Sex<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
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
                                            <option value="female">OTHER</option>
                                        </Field>

                                        <ErrorMessage name="personalDetails.gender">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Hong Kong identity card no. (if any)
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <div className='flex space-x-5'>

                                            <Field
                                                type="text"
                                                className="new-form-input"
                                                name="personalDetails.familyName"
                                                id="personalDetails.familyName"
                                            />
                                            <div className='flex items-center space-x-2'>
                                                <div>(</div>
                                                <Field
                                                    type="text"
                                                    className="new-form-input"
                                                    name="personalDetails.familyName"
                                                    id="personalDetails.familyName"
                                                />
                                                <div>)</div>
                                            </div>
                                        </div>
                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Date of birth <span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <ReactDatePickerInput
                                            className="new-form-input"
                                            name="dateOfBirth"
                                            selected={values.dateOfBirth}
                                            setFieldValue={setFieldValue}
                                            maxDate={values.passportDateOfIssue}
                                        />
                                        <ErrorMessage name="dateOfBirth">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </div>

                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                E-mail address<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                        />

                                        <ErrorMessage name="personalDetails.gender">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Re-enter e-mail address<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <div className='flex space-x-5'>

                                            <Field
                                                type="text"
                                                className="new-form-input"
                                                name="personalDetails.familyName"
                                                id="personalDetails.familyName"
                                            />


                                        </div>
                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Marital/Relationship status <span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            component="select"
                                            className="new-form-input"
                                            name="personalDetails.gender"
                                            id="personalDetails.gender"
                                        >
                                            <option value="">Select</option>

                                            <option value="male">Bachelor/Spinster</option>
                                            <option value="female">Married</option>
                                            <option value="female">Separated</option>
                                            <option value="female">Divorced</option>
                                            <option value="female">Widowed</option>
                                            <option value="female">Others  </option>
                                        </Field>

                                        <ErrorMessage name="personalDetails.gender">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>

                                        <div className='flex space-x-5'>

                                            <Field
                                                type="text"
                                                className="new-form-input mt-4"
                                                name="personalDetails.familyName"
                                                id="personalDetails.familyName"
                                            />


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Nationality/Place of domicile (applicable to overseas Chinese residents, Macao residents and Chinese residents of Taiwan living overseas)<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            required
                                            component="select"
                                            className="new-form-input"
                                            name="personalDetails.countryOfBirth"
                                            id="personalDetails.countryOfBirth"
                                        >
                                            <option value="">Select</option>
                                            {getAllCountries()}
                                        </Field>

                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Others<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                        />

                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </div>

                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Travel document type<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            component="select"
                                            className="new-form-input"
                                            name="personalDetails.gender"
                                            id="personalDetails.gender"
                                        >
                                            <option value="">Select</option>

                                            <option value="male">Bachelor/Spinster</option>
                                            <option value="female">Married</option>
                                            <option value="female">Separated</option>
                                            <option value="female">Divorced</option>
                                            <option value="female">Widowed</option>
                                            <option value="female">Others  </option>
                                        </Field>

                                        <ErrorMessage name="personalDetails.gender">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>


                                    </div>

                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Travel document no.<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <div className='flex space-x-5'>

                                            <Field
                                                type="text"
                                                className="new-form-input"
                                                name="personalDetails.familyName"
                                                id="personalDetails.familyName"
                                            />


                                        </div>
                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Place of issue <span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>

                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                        />

                                        <ErrorMessage name="personalDetails.gender">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col gap-2 py-7">
                                <h2 className='font-semibold text-lg'>Is there any included spouse/partner#/children/siblings in the applicant’s travel document who is/are travelling with the applicant? <span className='text-red-500'> *</span></h2>
                                <p className='text-sm'> A party to a same-sex civil partnership, same-sex civil union, "same-sex marriage", opposite-sex civil partnership or opposite-sex civil union entered into by him/her in accordance with the local law in force of the place of celebration and with such status being legally and officially recorgnised by the local authorities of the place of celebration. </p>

                                <div className="flex gap-8 pt-4">
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            className="w-6 h-6"
                                            name="travelDetails.touristPurpose"
                                            id="travelDetailstouristPurposeYes"
                                            value="yes"
                                        />
                                        <h3>Yes</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            className="w-6 h-6"
                                            name="travelDetails.touristPurpose"
                                            id="travelDetailstouristPurposeNo"
                                            value="no"
                                        />
                                        <h3>No</h3>
                                    </div>
                                </div>
                            </div>


                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Present address  <span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">

                                        <div className="flex flex-col gap-2 py-7">
                                            <h2 className=''>Address Type :</h2>

                                            <div className="flex gap-8 pt-4">
                                                <div className="flex gap-4">
                                                    <Field
                                                        type="radio"
                                                        className="w-6 h-6"
                                                        name="travelDetails.touristPurpose"
                                                        id="travelDetailstouristPurposeYes"
                                                        value="yes"
                                                    />
                                                    <h3>Within Hong Kong</h3>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Field
                                                        type="radio"
                                                        className="w-6 h-6"
                                                        name="travelDetails.touristPurpose"
                                                        id="travelDetailstouristPurposeNo"
                                                        value="no"
                                                    />
                                                    <h3>Other Address</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <div className='label-mark'>
                                                <div className="">
                                                    <label className="">
                                                        Floor
                                                    </label>
                                                </div>
                                                <div>
                                                    <div className="mark-section  group">

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-2 col-span-8">
                                                <Field
                                                    type="text"
                                                    className="new-form-input"
                                                    name="personalDetails.familyName"
                                                    id="personalDetails.familyName"
                                                />

                                            </div>
                                        </div>
                                        <div className='flex justify-between items-end space-x-5 mt-5'>
                                            <div className="w-full">
                                                <div className='label-mark'>
                                                    <div className="">
                                                        <label className="">
                                                            Unit
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <div className="mark-section  group">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-2 col-span-8">
                                                    <Field
                                                        required
                                                        component="select"
                                                        className="new-form-input"
                                                        name="personalDetails.countryOfBirth"
                                                        id="personalDetails.countryOfBirth"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="">Select</option>
                                                        <option value="">Select</option>
                                                    </Field>


                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className='label-mark'>
                                                    <div className="">
                                                        <label className=" font-semibold">

                                                        </label>
                                                    </div>
                                                    <div>
                                                        <div className="mark-section  group">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-2 col-span-8">
                                                    <Field
                                                        type="text"
                                                        className="new-form-input"
                                                        name="personalDetails.familyName"
                                                        id="personalDetails.familyName"
                                                    />

                                                </div>
                                            </div>

                                        </div>
                                        <div className="w-full mt-5">
                                            <div className='label-mark'>
                                                <div className="">
                                                    <label className="">
                                                        Full Address<span className='text-red-500'> *</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <div className="mark-section  group">

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-2 col-span-8">
                                                <Field
                                                    type="text"
                                                    className="new-form-input"
                                                    name="personalDetails.familyName"
                                                    id="personalDetails.familyName"
                                                    component="textarea"
                                                />

                                            </div>
                                        </div>


                                        <div className='mt-5'>
                                            <Field
                                                type="text"
                                                className="new-form-input"
                                                name="personalDetails.familyName"
                                                id="personalDetails.familyName"
                                                component="textarea"
                                            />
                                        </div>
                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Permanent address (if different from present address)
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">

                                        <div className="flex flex-col gap-2 py-7">
                                            <h2 className=''>Address Type :</h2>

                                            <div className="flex gap-8 pt-4">
                                                <div className="flex gap-4">
                                                    <Field
                                                        type="radio"
                                                        className="w-6 h-6"
                                                        name="travelDetails.touristPurpose"
                                                        id="travelDetailstouristPurposeYes"
                                                        value="yes"
                                                    />
                                                    <h3>Within Hong Kong</h3>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Field
                                                        type="radio"
                                                        className="w-6 h-6"
                                                        name="travelDetails.touristPurpose"
                                                        id="travelDetailstouristPurposeNo"
                                                        value="no"
                                                    />
                                                    <h3>Other Address</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <div className='label-mark'>
                                                <div className="">
                                                    <label className=" ">
                                                        Floor
                                                    </label>
                                                </div>
                                                <div>
                                                    <div className="mark-section  group">

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-2 col-span-8">
                                                <Field
                                                    type="text"
                                                    className="new-form-input"
                                                    name="personalDetails.familyName"
                                                    id="personalDetails.familyName"
                                                />

                                            </div>
                                        </div>
                                        <div className='flex justify-between items-end space-x-5 mt-5'>
                                            <div className="w-full">
                                                <div className='label-mark'>
                                                    <div className="">
                                                        <label className="">
                                                            Unit
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <div className="mark-section  group">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-2 col-span-8">
                                                    <Field
                                                        required
                                                        component="select"
                                                        className="new-form-input"
                                                        name="personalDetails.countryOfBirth"
                                                        id="personalDetails.countryOfBirth"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="">Select</option>
                                                        <option value="">Select</option>
                                                    </Field>


                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className='label-mark'>
                                                    <div className="">
                                                        <label className=" font-semibold">

                                                        </label>
                                                    </div>
                                                    <div>
                                                        <div className="mark-section  group">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-2 col-span-8">
                                                    <Field
                                                        type="text"
                                                        className="new-form-input"
                                                        name="personalDetails.familyName"
                                                        id="personalDetails.familyName"
                                                    />

                                                </div>
                                            </div>

                                        </div>
                                        <div className="w-full mt-5">
                                            <div className='label-mark'>
                                                <div className="">
                                                    <label className="">
                                                        Full Address
                                                    </label>
                                                </div>
                                                <div>
                                                    <div className="mark-section  group">

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-2 col-span-8">
                                                <Field
                                                    type="text"
                                                    className="new-form-input"
                                                    name="personalDetails.familyName"
                                                    id="personalDetails.familyName"
                                                    component="textarea"
                                                />

                                            </div>
                                        </div>


                                        <div className='mt-5'>
                                            <Field
                                                type="text"
                                                className="new-form-input"
                                                name="personalDetails.familyName"
                                                id="personalDetails.familyName"
                                                component="textarea"
                                            />
                                        </div>
                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </div>

                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Contact telephone no.<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                        />

                                        <ErrorMessage name="personalDetails.gender">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Fax no. (if any)                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <div className='flex space-x-5'>

                                            <Field
                                                type="text"
                                                className="new-form-input"
                                                name="personalDetails.familyName"
                                                id="personalDetails.familyName"
                                            />


                                        </div>
                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Country/Territory of domicile <span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">

                                        <Field
                                            type="text"
                                            className="new-form-input mt-4"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                        />
                                        <ErrorMessage name="personalDetails.gender">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>

                                    </div>
                                </div>
                            </div>

                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Has the applicant acquired permanent residence in his/her country/territory of domicile?<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">

                                        <div className="flex gap-8 pt-4">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="radio"
                                                    className="w-6 h-6"
                                                    name="travelDetails.touristPurpose"
                                                    id="travelDetailstouristPurposeYes"
                                                    value="yes"
                                                />
                                                <h3>Yes</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Field
                                                    type="radio"
                                                    className="w-6 h-6"
                                                    name="travelDetails.touristPurpose"
                                                    id="travelDetailstouristPurposeNo"
                                                    value="no"
                                                />
                                                <h3>No</h3>
                                            </div>
                                        </div>

                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Length of residence in country/territory of domicile<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <ReactDatePickerInput
                                            className="new-form-input"
                                            name="dateOfBirth"
                                            selected={values.dateOfBirth}
                                            setFieldValue={setFieldValue}
                                            maxDate={values.passportDateOfIssue}
                                        />

                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </div>

                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Has the applicant acquired permanent residence in his/her country/territory of domicile?<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">

                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.middleName"
                                            id="personalDetails.middleName"
                                        />


                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Name of the current employer (if applicable)
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.middleName"
                                            id="personalDetails.middleName"
                                        />


                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center gap-10 py-10">
                                <h2>Monthly income/deposit <span className='text-red-500'> *</span></h2>

                                <div className="flex gap-8 ">
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            className="w-6 h-6"
                                            name="travelDetails.touristPurpose"
                                            id="travelDetailstouristPurposeYes"
                                            value="yes"
                                        />
                                        <h3>Monthly income (HK$)</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            className="w-6 h-6"
                                            name="travelDetails.touristPurpose"
                                            id="travelDetailstouristPurposeNo"
                                            value="no"
                                        />
                                        <h3>Deposit (HK$)</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Monthly income (HK$)
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">

                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.middleName"
                                            id="personalDetails.middleName"
                                        />


                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Deposit (HK$)
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.middleName"
                                            id="personalDetails.middleName"
                                        />


                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-10">
                                <div className='label-mark'>
                                    <div className="">
                                        <label className=" font-semibold">
                                            Present address  <span className='text-red-500'> *</span>
                                        </label>
                                    </div>
                                    <div>
                                        <div className="mark-section  group">

                                        </div>
                                    </div>
                                </div>
                                <div className="order-2 col-span-8">

                                    <div className="flex flex-col gap-2 py-7">
                                        <h2 className=''>Address Type :</h2>

                                        <div className="flex gap-8 pt-4">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="radio"
                                                    className="w-6 h-6"
                                                    name="travelDetails.touristPurpose"
                                                    id="travelDetailstouristPurposeYes"
                                                    value="yes"
                                                />
                                                <h3>Within Hong Kong</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Field
                                                    type="radio"
                                                    className="w-6 h-6"
                                                    name="travelDetails.touristPurpose"
                                                    id="travelDetailstouristPurposeNo"
                                                    value="no"
                                                />
                                                <h3>Other Address</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className='label-mark'>
                                            <div className="">
                                                <label className=" ">
                                                    Floor
                                                </label>
                                            </div>
                                            <div>
                                                <div className="mark-section  group">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-2 col-span-8">
                                            <Field
                                                type="text"
                                                className="new-form-input"
                                                name="personalDetails.familyName"
                                                id="personalDetails.familyName"
                                            />

                                        </div>
                                    </div>
                                    <div className='flex justify-between items-end space-x-5 mt-5'>
                                        <div className="w-full">
                                            <div className='label-mark'>
                                                <div className="">
                                                    <label className="">
                                                        Unit
                                                    </label>
                                                </div>
                                                <div>
                                                    <div className="mark-section  group">

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-2 col-span-8">
                                                <Field
                                                    required
                                                    component="select"
                                                    className="new-form-input"
                                                    name="personalDetails.countryOfBirth"
                                                    id="personalDetails.countryOfBirth"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                </Field>


                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className='label-mark'>
                                                <div className="">
                                                    <label className=" font-semibold">

                                                    </label>
                                                </div>
                                                <div>
                                                    <div className="mark-section  group">

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-2 col-span-8">
                                                <Field
                                                    type="text"
                                                    className="new-form-input"
                                                    name="personalDetails.familyName"
                                                    id="personalDetails.familyName"
                                                />

                                            </div>
                                        </div>

                                    </div>
                                    <div className="w-full mt-5">
                                        <div className='label-mark'>
                                            <div className="">
                                                <label className="">
                                                    Full Address<span className='text-red-500'> *</span>
                                                </label>
                                            </div>
                                            <div>
                                                <div className="mark-section  group">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-2 col-span-8">
                                            <Field
                                                type="text"
                                                className="new-form-input"
                                                name="personalDetails.familyName"
                                                id="personalDetails.familyName"
                                                component="textarea"
                                            />

                                        </div>
                                    </div>


                                    <div className='mt-5'>
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                            component="textarea"
                                        />
                                    </div>
                                    <ErrorMessage name="personalDetails.familyName">
                                        {errorMsg => (
                                            <div style={{ color: 'red' }}>{errorMsg}</div>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>


                            <SubHeading subHead=" Previous Travel Records to Hong Kong" />

                            <div className="w-full ">
                                <div className='label-mark'>
                                    <div className="">
                                        <label className=" font-semibold">
                                            Number of previous entries to Hong Kong (if any)  <span className='text-red-500'> *</span>
                                        </label>
                                    </div>
                                    <div>
                                        <div className="mark-section  group">

                                        </div>
                                    </div>
                                </div>
                                <div className="order-2 col-span-8 md:w-[50%]">
                                    <Field
                                        type="text"
                                        component="select"
                                        className="new-form-input"
                                        name="personalDetails.gender"
                                        id="personalDetails.gender"
                                    >
                                        <option value="">Select</option>

                                        <option value="male">Bachelor/Spinster</option>
                                        <option value="female">Married</option>
                                        <option value="female">Separated</option>
                                        <option value="female">Divorced</option>
                                        <option value="female">Widowed</option>
                                        <option value="female">Others  </option>
                                    </Field>

                                    <ErrorMessage name="personalDetails.gender">
                                        {errorMsg => (
                                            <div style={{ color: 'red' }}>{errorMsg}</div>
                                        )}
                                    </ErrorMessage>


                                </div>
                            </div>

                            <div className='main-section pt-8'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Date<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <ReactDatePickerInput
                                            className="new-form-input"
                                            name="dateOfBirth"
                                            selected={values.dateOfBirth}
                                            setFieldValue={setFieldValue}
                                            maxDate={values.passportDateOfIssue}
                                        />

                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Purpose<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <Field
                                            type="text"
                                            className="new-form-input"
                                            name="personalDetails.familyName"
                                            id="personalDetails.familyName"
                                        />

                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </div>


                            <SubHeading subHead=" Details of Proposed Stay in Hong Kong" />

                            <div className='main-section'>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Proposed date of entry<span className='text-red-500'> *</span>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <ReactDatePickerInput
                                            className="new-form-input"
                                            name="dateOfBirth"
                                            selected={values.dateOfBirth}
                                            setFieldValue={setFieldValue}
                                            maxDate={values.passportDateOfIssue}
                                        />

                                        <ErrorMessage name="personalDetails.gender">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className='label-mark'>
                                        <div className="">
                                            <label className=" font-semibold">
                                                Proposed duration of stay
                                            </label>
                                        </div>
                                        <div>
                                            <div className="mark-section  group">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-2 col-span-8">
                                        <div className='flex space-x-5'>

                                            <ReactDatePickerInput
                                                className="new-form-input"
                                                name="dateOfBirth"
                                                selected={values.dateOfBirth}
                                                setFieldValue={setFieldValue}
                                                maxDate={values.passportDateOfIssue}
                                            />

                                            <Field
                                                required
                                                id="travelDetails.purposeOfVisit"
                                                name="travelDetails.purposeOfVisit"
                                                component="select"
                                                className="new-form-input"
                                            >
                                                <option value="">Select</option>
                                                <option value="tourism">Day(s)</option>
                                                <option value="india">Month(s)</option>
                                                <option value="transit">Year(s)</option>
                                            </Field>
                                        </div>
                                        <ErrorMessage name="personalDetails.familyName">
                                            {errorMsg => (
                                                <div style={{ color: 'red' }}>{errorMsg}</div>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col gap-2 py-4">
                                <h2>Are you traveling to Cambodia for Tourist Purpose? *</h2>

                                <div className="flex gap-8 pt-4">
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            className="w-6 h-6"
                                            name="travelDetails.touristPurpose"
                                            id="travelDetailstouristPurposeYes"
                                            value="yes"
                                        />
                                        <h3>Yes</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            className="w-6 h-6"
                                            name="travelDetails.touristPurpose"
                                            id="travelDetailstouristPurposeNo"
                                            value="no"
                                        />
                                        <h3>No</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 py-4">
                                <h2>Are you traveling to Cambodia for Tourist Purpose? *</h2>

                                <div className="flex gap-8 pt-4">
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            className="w-6 h-6"
                                            name="travelDetails.touristPurpose"
                                            id="travelDetailstouristPurposeYes"
                                            value="yes"
                                        />
                                        <h3>Yes</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            className="w-6 h-6"
                                            name="travelDetails.touristPurpose"
                                            id="travelDetailstouristPurposeNo"
                                            value="no"
                                        />
                                        <h3>No</h3>
                                    </div>
                                </div>
                            </div>


                            <div className="py-8 text-center">
                                <button
                                    className={`cursor-pointer w-fit items-center gap-3  rounded-full font-semibold text-white bg-primaryMain px-12 py-3 ${!isValid ? 'cursor-not-allowed opacity-50' : ''
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
    )
}

export default Page