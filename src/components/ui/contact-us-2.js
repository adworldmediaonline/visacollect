"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./button";
import usePost from "@/hooks/usePost";
import Link from "next/link";

export default function ContactUs2() {
    const postMutation = usePost(
        "https://www.visacollect.com/api/contact",
        "form submitted successfully",
        "/thankyou",
        false,
        "contactForm",
        "form submitted successfully"
    );
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            message: Yup.string()
                .max(150, "Must be 150 characters or less")
                .required("Required"),
        }),
        onSubmit: async (values) => {
            console.log(values);
            postMutation.mutate({
                ...values,
            });
            formik.setSubmitting(false);
            formik.resetForm();
        },
    });
    return (
        <div>
            <section className="relative text-black">
                <div>
                    <form
                        className="flex flex-col w-full"
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="relative mb-4">
                            <label
                                for="name"
                                className="text-sm leading-7 text-black"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                placeholder="Full name..."
                                className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded-full outline-none placeholder:text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-danger">
                                    {formik.errors.name}
                                </div>
                            ) : null}
                        </div>
                        <div className="relative mb-4">
                            <label
                                for="email"
                                className="text-sm leading-7 text-black"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email..."
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded-full outline-none placeholder:text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>
                        <div className="relative mb-4">
                            <label
                                for="message"
                                className="text-sm leading-7 text-black"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                type="message"
                                placeholder="Message..."
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                className="w-full h-32 px-3 py-1 text-base leading-6 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded-full outline-none resize-none placeholder:text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className="text-danger">
                                    {formik.errors.message}
                                </div>
                            ) : null}
                        </div>
                        {postMutation.isError ? (
                            <div className="text-red-500">
                                An error occurred: {postMutation.error.message}
                            </div>
                        ) : null}
                        <Button type="submit" isValid={formik.isValid}>
                            {" "}
                            {postMutation.isPending ? (
                                <>Loading...</>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
