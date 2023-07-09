"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full h-full"
      >
        {CardHeo.map((data, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${data.image} w-full h-screen bg-fixed relative`}
            >
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

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
