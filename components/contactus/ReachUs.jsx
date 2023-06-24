import React from "react";
import Link from "next/link";
import Image from "next/image";
import reachUsImage from "@/public/image4.png";
import {BsFacebook, BsYoutube, BsLinkedin, BsInstagram, BsTwitter} from 'react-icons/bs'

const ReachUs = () => {
  const socialMediaLinks = [
    {id:"/",path:<BsFacebook size={30} />},
    {id:"/",path:<BsYoutube size={30} />},
    {id:"/",path:<BsLinkedin size={30} />},
    {id:"/",path:<BsInstagram size={30} />},
    {id:"/",path:<BsTwitter size={30} />},
  ]
  
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <h1 className="headings-fonts text-white text-4xl md:text-6xl">
        Or Reach Us Here
      </h1>

      <Link target="_blank" href="mailto:thescentseekerweb@gmail.com">
        <p className="flex flex-row gap-2 hover:text-[#17c294] cursor-pointer text-lg md:text-xl md:px-8">
          helenzeray8905@gmail.com
        </p>
      </Link>

      <div className="flex gap-3 md:px-8 border-b-2 pb-4 md:pb-10 border-gray-500">
        {socialMediaLinks.map((paths, index) => {
          return (
            <Link key={index} href={paths.id} target="_blank">
              {paths.icon}
            </Link>
          );
        })}
      </div>
      <div className="w-full h-72 relative">
        <Image
          src={reachUsImage}
          alt="Reach Us Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default ReachUs;
