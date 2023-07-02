import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  // FaYoutube,
  // FaTwitter,
  FaPhone,
} from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  const socialMediaLinks = [
    {
      icon: <FaLinkedin size={30} color="black" />,
      path: 'https://www.linkedin.com/in/ecotravel-ethiopia-ab4519260/',
    },
    {
      icon: <FaInstagram size={30} color="black" />,
      path: 'https://www.instagram.com/ecotravels_ethiopia/',
    },
    // { icon: <FaTelegram size={30} color="white" /> , path:""},
  ];

  const quickLinks = [
    { link: 'Home', url: '/' },
    { link: 'SelectedWorks', url: '/SelectedWorks' },
    { link: 'Bio', url: '/bio' },
    { link: 'Exhibitions', url: '/exhibitions' },
    { link: 'Contact', url: '/contact' },
  ];

  return (
    <footer className="bg-white fixed z-[100] bottom-0 w-full">
      <div className="flex flex-col lg:flex-row  md:justify-evenly p-6 bg-primaryColor gap-4 text-black ">
        <div className="flex flex-col gap-8 items-start justify-evemly mb-10 md:mb-0">
          <div className="">
            
          </div>

          <p className="font-semibold">
            DON&apos;T FORGET TO FOLLOW US ON OUR SOCIAL MEDIA!
          </p>
          <div className="flex justify-center gap-4">
            {socialMediaLinks.map((paths, index) => {
              return (
                <Link key={index} href={paths.path} target="_blank">
                  {paths.icon}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Contact Info</h1>

          <Link
            target="_blank"
            className="flex flex-row = items-center gap-2 hover:text-gray-300"
            href={`tel:${+251927016060}`}
          >
            <FaPhone /> <p>+251927016060</p>
          </Link>
          <div>
            <Link
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-gray-300"
              href="mailto:info@ecotravelethiopia.com"
            >
              <MdEmail />
              <p>info@ecotravelethiopia.com</p>
            </Link>
            <Link
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-gray-300"
              href="mailto:info.ecotravelethiopia@gmail.com"
            >
              <MdEmail />
              <p>info.ecotravelethiopia@gmail.com</p>
            </Link>
          </div>

          <Link
            target="_blank"
            className="flex flex-row items-center gap-2 hover:text-gray-300"
            href={`https://goo.gl/maps/Gc6478sG5ZecmfSj6`}
          >
            <ImLocation />{' '}
            <p>
              4th floor, Tsion Building, Summit Safari, Addis Ababa, Ethiopia.
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2  justify-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Quick Links</h1>
            {quickLinks.map((links, index) => {
              return (
                <Link
                  key={index}
                  href={links.url}
                  className="hover:text-gray-300"
                >
                  {links.link}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:h-10 h-12 mx-10">
        <div className="text-gray-100 md:block">
          &copy; Eco Travel Ethiopia 2023.
        </div>

        <div className="text-gray-100">
          <Link
            target="_blank"
            className="flex flex-row = items-center gap-2 hover:text-gray-300"
            href="mailto:meetnatnaelkebede@gmail.com"
          >
            <p className="underline">Website made by Natnael K. </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer