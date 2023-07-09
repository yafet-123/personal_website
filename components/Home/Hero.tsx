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
    {id:"https://www.linkedin.com/in/helen-zeray-789b89267",path:<BsLinkedin size={30} color="white"/>},
    {id:"https://instagram.com/helenzeray1?igshid=ZGUzMzM3NWJiOQ==",path:<BsInstagram size={30} color="white"/>},
  ]
  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {CardHeo.map((data, index) => (
          <div
            key={index}
            className={`${data.image} w-full h-screen bg-fixed relative`}
          >
            
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
