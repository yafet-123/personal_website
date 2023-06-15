'use client'
import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroImageOne from '@/public/image1.png';
import HeroImageTwo from '@/public/image2.png';
import HeroImageThree from '@/public/image3.png';
import HeroImageFour from '@/public/image4.png'; 
import HeroImageFive from '@/public/image5.png'; 

const Hero: React.FC = () => {
  var settings: Settings = {
    dots: false,
    lazyLoad: 'ondemand' as LazyLoadTypes,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
    // slidesToScroll: 1,
  };
  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {CardHeo.map((data,index)=>(
          <div key={index} className="h-full">
            <div className="relative h-screen">
              <Image
                src={data.image}
                alt="Slide"
                className="object-cover object-center h-full w-full"
                layout="fill"
              />
             </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


           

export default Hero

const CardHeo = [
  {
    id: 1,
    image: HeroImageOne,
  },
  {
    id: 2,
    image: HeroImageTwo,
  },
  {
    id: 3,
    image: HeroImageThree,
  },
  {
    id: 4,
    image: HeroImageFour,
  },
  {
    id: 5,
    image: HeroImageFive,
  },
];
