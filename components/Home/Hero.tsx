"use client";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {CardHeo.map((data, index) => (
          <div
            key={index}
            className={`${data.image} w-full h-screen bg-fixed relative`}
          >
            <h1 className="absolute top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 font-bold text-white text-3xl md:text-8xl text-center">
              {`Immersed in Nature's Palette:The Artistry of Helen Zeray`}
            </h1>
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
