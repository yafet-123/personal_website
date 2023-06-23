"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import dynamic from "next/dynamic";

const Form = ({
  type,
  typeofCategory,
  Works,
  setWorks,
  submitting,
  handleSubmit,
}) => {
  const blob = new Blob([Works.Image], { type: "image" });
  return (
    <section className="w-full lg:px-20">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {type} {typeofCategory}
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} the {typeofCategory} share amazing news with the hulu_neger, and
        help millions of connect with the worlds.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full flex flex-col gap-7 glassmorphism"
      >
        <div className="flex flex-col my-5 w-full px-2">
          <div className="relative flex-1">
            <input
              id="title"
              type="text"
              required
              className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              value={Works.title}
              onChange={(e) => setWorks({ ...Works, title: e.target.value })}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Title
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 px-2">
          <div className="relative mb-5">
            <textarea
              id="exhibitions"
              required
              className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              value={Works.exhibitions}
              rows="10"
              cols="20"
              onChange={(e) =>
                setWorks({ ...Works, exhibitions: e.target.value })
              }
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[10%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Exhibitions
            </label>
          </div>

          <div className="relative mb-5">
            <textarea
              id="description"
              required
              className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              value={Works.description}
              rows="10"
              cols="20"
              onChange={(e) =>
                setWorks({ ...Works, description: e.target.value })
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

        <div className="grid grid-cols-1 gap-5 my-10">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-black dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-sm lg:text-lg text-black mb-5">
                  Upload News Image
                </p>
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-xs lg:text-sm text-black">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) =>
                  setWorks({ ...Works, image: e.target.files[0] })
                }
              />
            </label>
          </div>
        </div>

        <div
          className={
            Works.image == ""
              ? "hidden"
              : "flex justify-center items-center mb-10"
          }
        >
          <Image
            src={
              Works.image == ""
                ? "/images/bgImage1.avif"
                : URL.createObjectURL(blob)
            }
            width={500}
            height={200}
            alt="image that will be displayed"
            className="w-full"
          />
        </div>

        <div className="flex justify-end items-center mx-3 mb-5 gap-4">
          <Link href="/Admin" className="bg-white text-black px-5 py-1.5 rounded-full text-sm">
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
