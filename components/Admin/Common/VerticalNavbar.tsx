"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const VerticalNavbar: React.FC = () => {
  const SideBarList = [
    { link: "/Admin", name: "Dashboard" },
    { link: "/Admin/User", name: "User" },
    { link: "/Admin/Works", name: "Works" },
    { link: "/Admin/Exhibitions", name: "Exhibitions" },
  ];
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={`flex h-full w-full lg:w-40 pt-24`}>
      <nav className="w-full lg:h-screen flex flex-col py-8 lg:px-4">
        <div className="flex justify-between ml-2">
          <h1 className={`text-xl font-bold text-black`}>Admin Page</h1>
        </div>

        <div className="mt-10">
          <ul className="flex flex-row lg:flex-col w-full lg:w-40 lg:h-screen scroll_width">
            {SideBarList.map((side, index) => (
              <li className="mb-5" key={index}>
                <Link
                  href={side.link}
                  className={
                    side.link == pathname
                      ? "whitespace-nowrap bg-[#009688] text-black flex items-center p-4 text-xs lg:text-sm rounded-xl"
                      : "whitespace-nowrap lg:w-full flex items-center p-4 text-xs lg:text-sm text-black hover:bg-white hover:text-[#009688]"
                  }
                >
                  <span className={`ml-0 lg:ml-4 font-semibold`}>
                    {side.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default VerticalNavbar;
