'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from './button';
import usePost from '@/hooks/usePost';
import Link from 'next/link';

export default function ContactUs() {
  const postMutation = usePost(
    'http://localhost:3000/api/contact',
    'form submitted successfully',
    '/thankyou',
    false,
    'contactForm',
    'form submitted successfully'
  );
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
    }),
    onSubmit: async values => {
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
      <section className="relative text-gray-600">
        <div className="container flex flex-wrap pt-10 pb-24 mx-auto sm:flex-nowrap">
          <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.931445110928!2d77.0751763!3d28.4514829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18eb0c8b6705%3A0x1b7e0905e02039ab!2sRider%20House%2C%20Sector%2044%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1710238760248!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              // style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            ></iframe>
            <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                  ADDRESS
                </h2>
                <p className="mt-1 hover:text-primary">
                  <Link
                    href="https://www.google.com/maps/place/Rider+House/%20@28.4514806,77.0730605,17z/data=!4m7!3m6!1s0x390d18eb0ce0%208cd1:0x2406f413db6895ca!4b1!8m2!3d28.4515566!4d77.07524%2037!16s%2Fg%2F11n6snwf9q"
                    target="_blank"
                  >
                    Plot No. 136, 3rd Floor, Rider House, Sector 44, 122003
                  </Link>
                </p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                  EMAIL
                </h2>
                <Link
                  href="mailto:info@visacollect.com"
                  className="leading-relaxed text-primary"
                >
                  info@visacollect.com
                </Link>
              </div>
            </div>
          </div>
          <form
            className="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"
            onSubmit={formik.handleSubmit}
          >
            <div className="relative mb-4">
              <label for="name" className="text-sm leading-7 text-gray-600">
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
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label for="email" className="text-sm leading-7 text-gray-600">
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
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label for="message" className="text-sm leading-7 text-gray-600">
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
                className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-danger">{formik.errors.message}</div>
              ) : null}
            </div>
            {postMutation.isError ? (
              <div className="text-red-500">
                An error occurred: {postMutation.error['response']?.data?.error}
              </div>
            ) : null}
            <Button type="submit" isValid={formik.isValid}>
              {' '}
              {postMutation.isPending ? <>Loading...</> : 'Submit'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
