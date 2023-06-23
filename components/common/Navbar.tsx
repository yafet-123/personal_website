"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import navbarImage from "@/public/logo.svg";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession(); // this is for next-auth
  const [open, setOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  const NavLinks = [
    { path: "/", name: "Home" },
    { path: "/SelectedWorks", name: "Selected Works" },
    { path: "/bio", name: "Bio" },
    { path: "/exhibitions", name: "Exhibitions" },
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
    router.push("/contact");
  };

  return (
    <nav
      className={`fixed ${
        scrollDirection === "down" ? "md:-top-24 -top-16 bg-black" : "top-0"
      } ${
        open && "bg-black bg-opacity-75"
      }  w-full md:h-24 h-16 fixed z-50 transition-all duration-300`}
    >
      <div
        className={`${
          open && "bg-black bg-opacity-75"
        } md:justify-center md:px-2 px-4 md:mx-8 items-center md:flex md:pt-4 `}
      >
        <div className="flex items-center md:justify-between justify-end py-3 md:py-0">
          <div className="md:hidden">
            <button
              className="p-2  text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setOpen(!open)}
            >
              {open === true ? (
                <AiOutlineClose color="white" size={35} />
              ) : (
                <AiOutlineMenu color="white" size={35} />
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
            <ul className="items-center font-bold paragraph-fonts justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-white">
              {NavLinks.map((link) => (
                <li
                  key={link.name}
                  className={`md:my-0 my-7 text-2xl hover:underline cursor-pointer hover:text-[#17c294] ${
                    pathname === link.path
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

        { pathname == "/Admin" &&
        <div className={`lg:ml-10 md:block ${
              open ? "flex" : "hidden"
            }`}>
              {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                  <button type="button" onClick={signOut} className="outline_btn">
                    Sign Out
                  </button>

                  <Link href="/profile">
                    <Image
                      src={session?.user.image}
                      width={37}
                      height={37}
                      className="rounded-full"
                      alt="profile"
                    />
                  </Link>
                </div>
                ) : (
                <>
                  {providers &&
                    // bring the providers then list them  in this particular example it is only one
                    Object.values(providers).map((provider) => (
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => {
                          signIn(provider.id);
                        }}
                        className="black_btn"
                      >
                        Sign in
                      </button>
                    ))}
                </>
              )}
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
