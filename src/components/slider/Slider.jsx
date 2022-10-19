/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react';
import img from '../assets/img/BANNER_PRADO_VX-1-1.jpg';

function Slider() {
  // const img = '../assets/img/BANNER_PRADO_VX-1-1.jpg';
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 1,
        rewind: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        pagination: true,
        gap: '2px'
      }}
    >
      <SplideSlide>
        <img
          src={img}
          alt="Imagen 1"
          className="sm:h-96 h-36 w-full object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={img}
          className="sm:h-96 h-36 w-full object-cover"
          alt="Image 3"
        />
      </SplideSlide>
    </Splide>
  );
}

export default Slider;
