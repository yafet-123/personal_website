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
  const [shadow, setShadow] = useState(false);
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

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // when it will scrolldown greater than 90 it will have navbar will change it style
    const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        } 
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);

  const handleTryNowButton = () => {
    router.push("/contact");
  };

  return (
    <nav
      className={`
        ${ shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-zinc-300 bg-opacity-80'
          : 'fixed w-full h-20 z-[100] border-b-2 border-slate-100 '}
      `}
    >
      <div
        className={` ${ open ? "bg-black bg-opacity-90" :"" } lg:justify-between justify-around px-5 lg:px-10 items-center lg:flex`}
      >
        <div className="flex items-center justify-between py-3 ">
          <h1 className={` ${ pathname == '/' || pathname == '/bio' && !shadow || open ? "text-white" : "text-black" } font-poppins text-xl md:text-2xl font-bold`}>
            Helen Zeray
          </h1>
          <div className="lg:hidden">
            <div className="md:hidden">
              <button
                className={` ${ pathname == '/' || pathname == '/bio' && !shadow || open ? "text-white" : "text-black" } p-2 rounded-md outline-none focus:border-gray-400 focus:border`}
                onClick={() => setOpen(!open)}
              >
                {open === true ? ( 
                  <AiOutlineClose size={35} />
                ) : (
                  <AiOutlineMenu size={35} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div
            className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
              open ? "flex bg-transparent" : "hidden"
            }`}
          >
            <ul className={` ${ pathname == '/' || pathname == '/bio' && !shadow || open ? "text-white" : "text-black" } items-center font-bold paragraph-fonts justify-center space-y-8 md:flex md:space-x-6 md:space-y-0`}>
              {NavLinks.map((link) => (
                <li
                  key={link.name}
                  className={` md:my-0 my-7 text-2xl hover:underline cursor-pointer hover:text-[#17c294] ${
                    pathname === link.path
                      ? "text-[#17c294] underline"
                      : ""
                  } `}
                >
                  <Link href={link.path}>
                    <p onClick={closeDropdown}>{link.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        { (pathname == "/Admin" || pathname == "/Admin/User"|| pathname == "/Admin/Works" || pathname == "/Admin/Exhibitions")  &&
          <div className={`mt-5 lg:mt-0 lg:ml-10 md:block ${
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
