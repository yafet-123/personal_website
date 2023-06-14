'use client'
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import navbarImage from "@/public/vercel.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const NavLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/how_it_works", name: "How It Works" },
    { path: "/contact", name: "Contact" },
  ];

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);

  const handleTryNowButton = () => {
    router.push("/questions");
  };

  return (
    <nav
      className={`sticky ${
        scrollDirection === "down" ? "md:-top-24 -top-16" : "top-0"
      }  bg-black bg-opacity-80  w-full md:h-24 h-10 transition-all duration-300 top-0 fixed z-50`}
    >
      <div className="md:justify-between justify-around md:px-2 px-4 md:mx-8 items-center md:flex md:pt-4 bg-transparent bg-opacity-80 ">
        <div className="flex items-center justify-between py-3 md:py-0">
          {/* <h1 className="paragraph-fonts text-2xl md:text-4xl cursor-pointer text-white hover:text-[#17c294]">
              TheScentSeeker
            </h1> */}
          <div className="h-10 w-24 md:w-36 md:h-12">
            <Link href="/" className="block">
              <Image
                src={navbarImage}
                alt="Navbar"
                className="object-contain w-full h-full cursor-pointer"
              />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="p-2  text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setOpen(!open)}
            >
              {open === true ? (
                <AiOutlineClose color="white" size={25} />
              ) : (
                <AiOutlineMenu color="white" size={25} />
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
              open ? "flex" : "hidden"
            }`}
          >
            <ul className="items-center paragraph-fonts justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-white">
              {NavLinks.map((link) => (
                <li
                  key={link.name}
                  className={`md:my-0 my-7 text-xl hover:underline cursor-pointer hover:text-[#17c294] ${
                    router.pathname === link.path
                      ? "text-[#17c294] underline"
                      : "text-white"
                  }`}
                >
                  <Link href={link.path}>
                    <p onClick={closeDropdown}>{link.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button
            onClick={handleTryNowButton}
            className="bg-[#17c294] text-white paragraph-fonts py-2 px-4 mb-4 md:mb-0 md:py-3 md:px-5 shadow-black items-center rounded-md justify-center hidden md:flex shadow-md hover:scale-105 duration-300"
          >
            <p>Try Now For Free</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
