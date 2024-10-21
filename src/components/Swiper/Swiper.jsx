import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, } from 'swiper/modules';
import { IMG_URL } from '../../hooks/useEnv';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CustomSwiper({ data }) {
  const navigate = useNavigate ()
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}

      >
        {data.map(item => (
          <SwiperSlide key={item.id}>

            <img src={`${IMG_URL}${item.poster_path}`} alt={item.title + "img"} />
            <div className="swiper-slide p-5">
              <strong className='text-white mt-10 block text-2xl mb-3'>{item.title}</strong>
              <p className='w-[500px] text-lg text-white line-clamp-3 mb-5'>{item.overview}</p>
              <Button onClick={() => navigate(`${item.id}`)} variant='contained' size='large' className='!text-white !bg-[#00000055]'>More</Button>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}
