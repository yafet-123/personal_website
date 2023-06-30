"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import dynamic from "next/dynamic";

const Form = ({
  type,
  typeofCategory,
  Exhibitions,
  setExhibitions,
  typechange,
  settypechange,
  submitting,
  handleSubmit,
}) => {
  const blob = new Blob([Exhibitions.image], { type: "image" });
  return ( 
    <section className="w-full">
      <h1 className="head_text text-left mb-5">
        <span className="text-black">
          {type} {typeofCategory}
        </span>
      </h1>
      <p className="desc text-black">
        create Diffrent Exhibitions that can be view and shared from your own audience
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full flex flex-col gap-7 glassmorphism"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-2 px-2">
          <div className="relative flex-1">
            <input
              id="title"
              type="text"
              required
              className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              value={Exhibitions.title}
              onChange={(e) => setExhibitions({ ...Exhibitions, title: e.target.value })}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Title
            </label>
          </div>

          <div className="relative mb-5">
            <input
              id="date"
              type="text"
              required
              className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              value={Exhibitions.date}
              onChange={(e) => setExhibitions({ ...Exhibitions, date: e.target.value })}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Date
            </label>
          </div>
        </div>

        <div className="flex flex-col my-2 w-full px-2">
          <div className="relative mb-5">
            <textarea
              id="descreption"
              required
              className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              value={Exhibitions.descreption}
              rows="10"
              cols="20"
              onChange={(e) =>
                setExhibitions({ ...Exhibitions, descreption: e.target.value })
              }
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[10%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Description
            </label>
          </div>
        </div>

        <div className="flex justify-end items-center mx-3 mb-5 gap-4">
          <Link href="/Admin" className="bg-black text-white px-5 py-1.5 rounded-full text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
