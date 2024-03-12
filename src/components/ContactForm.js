import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendContactForm } from '../../lib/api';

export const ContactForm = () => {
  const [formStatus, setIsLoading] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });
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
      setIsLoading(prevLoading => ({
        ...prevLoading,
        isLoading: true,
      }));
      try {
        await sendContactForm(values);
        setIsLoading(prevLoading => ({
          ...prevLoading,
          isLoading: false,
          isError: false,
          isSuccess: true,
        }));
        formik.resetForm();
      } catch (error) {
        setIsLoading(prevLoading => ({
          ...prevLoading,
          isLoading: false,
          isSuccess: false,
          isError: true,
        }));
      }
    },
  });
  return (
    <div className="py-5 mx-auto col-8">
      <form
        onSubmit={formik.handleSubmit}
        className="p-5 my-5 bg-white shadow-sm send-mail-form"
      >
        <div className="gap-3 d-flex flex-column">
          <div className="d-flex flex-column">
            <input
              className="form-control form-control-sm"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Full name..."
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="d-flex flex-column">
            <input
              className="form-control form-control-sm"
              id="email"
              name="email"
              type="email"
              placeholder="Email..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>

          <textarea
            className="form-control form-control-sm"
            id="message"
            name="message"
            type="message"
            placeholder="Message..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-danger">{formik.errors.message}</div>
          ) : null}
          {formStatus.isError ? (
            <div className="text-danger">
              Something went wrong, please try again
            </div>
          ) : (
            false
          )}
          {formStatus.isSuccess ? (
            <div className="text-success">message send successfully</div>
          ) : (
            false
          )}
          <button
            disabled={formStatus.isLoading}
            type="submit"
            className="tp-btn-lg-yellow-header"
          >
            {formStatus.isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};
