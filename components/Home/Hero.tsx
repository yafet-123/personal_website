"use client";
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';

const Hero = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 'auto', // Set the number of slides per view
        spaceBetween: 16, // Set the space between slides
        grabCursor: true, // Enable grab cursor when user hovers over the swiper
        pagination: {
          el: '.swiper-pagination', // Specify the pagination container element
          clickable: true // Enable clickable pagination bullets
        }
      });
    }
  }, []);

  return (
    <div ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">
        {/* Add your slides here */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Hero;
