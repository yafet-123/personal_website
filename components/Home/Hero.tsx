"use client";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsFacebook, BsYoutube, BsLinkedin, BsInstagram, BsTwitter, BsTelegram} from 'react-icons/bs'
import Link from 'next/link'
const Hero: React.FC = () => {
  var settings: Settings = {
    dots: false,
    lazyLoad: "ondemand" as LazyLoadTypes,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
 
  };
  const socialMediaLinks = [
    {id:"/",path:<BsFacebook size={30} />},
    {id:"/",path:<BsYoutube size={30} />},
    {id:"/",path:<BsLinkedin size={30} />},
    {id:"/",path:<BsInstagram size={30} />},
    {id:"/",path:<BsTwitter size={30} />},
    {id:"/",path:<BsTelegram size={30} />},
  ]
  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {CardHeo.map((data, index) => (
          <div
            key={index}
            className={`${data.image} w-full h-screen bg-fixed relative`}
          >
            <div className="absolute top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2">
              <h1 className="font-poppins text-7xl font-bold text-[#A3B3BC] w-full">
                Helen Zeray
              </h1>

              <div className="flex gap-3 md:px-8 pb-4 md:pb-10 z-50">
                {socialMediaLinks.map((paths, index) => {
                  return (
                    <Link key={index} href={paths.id} target="_blank">
                      {paths.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

const CardHeo = [
  {
    id: 1,
    image: "hero-background-one",
  },
  {
    id: 2,
    image: "hero-background-two",
  },
  {
    id: 3,
    image: "hero-background-three",
  },
  {
    id: 4,
    image: "hero-background-four",
  },
  {
    id: 5,
    image: "hero-background-five",
  },
];
