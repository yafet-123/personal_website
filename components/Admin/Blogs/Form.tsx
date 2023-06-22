"use client";
import Link from "next/link";
import Multiselect from "multiselect-react-dropdown";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useMemo, useRef } from "react";
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(
  async () => {
    const QuillNoSSRWrapper = (await import("react-quill")).default;
    function Imagehandle({ forwardedRef, ...rest }) {
      return <QuillNoSSRWrapper ref={forwardedRef} {...rest} />;
    }
    return Imagehandle;
  },
  {
    ssr: false,
  }
);

const Form = ({
  type,
  typeofCategory,
  blogs,
  setBlogs,
  Description,
  setDescription,
  categoryId,
  setCategoryId,
  categories,
  submitting,
  handleSubmit,
}) => {
  const quillRef = useRef(null);
  const blob = new Blob([blogs.Image], { type: "image" });
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }], // superscript/subscript
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ direction: "rtl" }], // text direction

          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ["link", "image", "video"],
        ],
        handlers: {
          image: imageHandler,
        },
      },

      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  function imageHandler() {
    console.log(quillRef);
    if (!quillRef.current) return;

    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();
    const value = prompt("Please enter the image URL");
    console.log(value);
    console.log(range);
    console.log(editor);
    if (value && range) {
      editor.insertEmbed(range.index, "image", value, "user");
    }
  }
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
              id="Header"
              type="text"
              required
              className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              value={blogs.Header}
              onChange={(e) => setBlogs({ ...blogs, Header: e.target.value })}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Header
            </label>
          </div>
        </div>

        <div className="my-5">
          <Multiselect
            displayValue="CategoryName"
            placeholder="Category"
            className="z-50 w-full px-1 lg:px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={(e) => {
              e.map((data, index) =>
                setCategoryId([...categoryId, data.category_id])
              );
            }}
            options={categories}
          />
        </div>

        <div className="relative mb-5">
          <textarea
            id="ShortDescription"
            required
            className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" "
            value={blogs.ShortDescription}
            rows="10"
            cols="40"
            onChange={(e) =>
              setBlogs({ ...blogs, ShortDescription: e.target.value })
            }
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[10%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Short Description
          </label>
        </div>

        <div className="mb-10 ">
          <p className="text-md lg:text-xl text-black dark:text-white mb-5 mx-5">
            Description
          </p>

          <QuillNoSSRWrapper
            forwardedRef={quillRef}
            value={Description}
            onChange={setDescription}
            modules={modules}
            className="!bg-white dark:!bg-white dark:!text-black !mx-2"
            theme="snow"
          />
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
                  setBlogs({ ...blogs, Image: e.target.files[0] })
                }
              />
            </label>
          </div>
        </div>

        <div
          className={
            blogs.Image == ""
              ? "hidden"
              : "flex justify-center items-center mb-10"
          }
        >
          <Image
            src={
              blogs.Image == ""
                ? "/images/bgImage1.avif"
                : URL.createObjectURL(blob)
            }
            width={500}
            height={200}
            alt="image that will be displayed"
            className="w-full"
          />
        </div>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/Admin" className="text-gray-500 text-sm">
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
