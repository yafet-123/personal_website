'use client'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const validateForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.subject) {
    errors.subject = "Subject is required";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }

  return errors;
};

const handleSubmit = (values) => {
  // Handle form submission logic here
  console.log(values);
};

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <h1 className="headings-fonts text-white text-4xl md:text-6xl">
        Let's Collaborate.
      </h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="w-full mx-auto flex flex-col space-y-6">
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-1">
              Full Name:
              <span className="text-gray-500 text-sm ml-1">(required)</span>
            </label>
            <div className="flex">
              <div className="w-1/2 mr-2">
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full  p-2"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full  p-2"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email:
              <span className="text-gray-500 text-sm ml-1">(required)</span>
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full  p-2"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block mb-1">
              Subject:
              <span className="text-gray-500 text-sm ml-1">(required)</span>
            </label>
            <Field
              type="text"
              id="subject"
              name="subject"
              className="w-full  p-2"
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">
              Message:
              <span className="text-gray-500 text-sm ml-1">(required)</span>
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className="w-full  p-2"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-[#17c294] w-28 text-white paragraph-fonts py-2 px-4 mb-8 md:mb-0 md:py-4 md:px-8
                         shadow-black items-center rounded-md justify-center shadow-md hover:scale-105 duration-300"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
