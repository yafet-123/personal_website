'use client'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {BsFacebook, BsYoutube, BsLinkedin, BsInstagram, BsTwitter} from 'react-icons/bs'

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
  const socialMediaLinks = [
    {id:"/",path:<BsLinkedin size={30} color="black"/>},
    {id:"/",path:<BsInstagram size={30} color="black"/>},
  ]
  return (
    <div className="flex flex-col gap-8 md:gap-12 w-full md:px-10">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="w-full flex flex-col space-y-6">
          <div className="font-poppins text-left text-[#010101]">
            <h1 className="font-bold tetx-[1.7rem] mb-2">Helen Zeray</h1>
            <p className="font-normal text-[1.45rem;] mb-2">Sderot hachmel Israel 32</p>
            <p className="font-normal text-[1.45rem;] mb-2">WhatsApp: +9725353323525</p>
          </div>

          <div className="flex justify-center gap-4">
            {socialMediaLinks.map((paths, index) => {
              return (
                <Link key={index} href={paths.path} target="_blank">
                  {paths.path}
                </Link>
              );
            })}
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name:
              <span className="text-gray-500 text-sm ml-1">(required)</span>
            </label>
            <Field
              type="name"
              id="name"
              name="name"
              className="w-full p-2 text-black border border-"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
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
              className="w-full p-2 text-black border border-"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">
              Phone:
              <span className="text-gray-500 text-sm ml-1">(required)</span>
            </label>
            <Field
              type="text"
              id="phone"
              name="phone"
              className="w-full p-2 text- border border-"
            />
            <ErrorMessage
              name="phone"
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
              className="w-full p-2 text-black border border-"
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
