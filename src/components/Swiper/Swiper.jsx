import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

import { Autoplay, } from 'swiper/modules';
import { IMG_URL } from '../../hooks/useEnv';
import { Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PlayCircle } from '@mui/icons-material';

export default function CustomSwiper({ data }) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const [open, setOpen] = useState(false)


  const handleCLickToSingle = (id) => {
    user ? navigate(`/movie/${id}`) : setOpen(true);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Please Log in to watch this movie"
      />
      <Swiper className='swiper-container'
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}

      >
        {data && data.map(item => (
          <SwiperSlide key={item.id}>

            <img className='backimg' src={`${IMG_URL}${item.backdrop_path ? item.backdrop_path : item.poster_path}`} alt={item.title + "img"} />
            <div className="slider-container p-5">
              <div className='w-[1280px] mt-[174px] mx-auto flex items-start justify-between'>
                <div>
                  <strong className='text-white mt-10 block text-2xl mb-3'>{item.title}</strong>
                  <p className='w-[500px] text-lg text-white line-clamp-3 mb-5'>{item.overview}</p>
                  <Button onClick={() => handleCLickToSingle(item.id)} variant='contained' size='large' className='!text-white !bg-[#9747FF]'>watch</Button>
                </div>
                <div className='relative'>
                  <img className='w-[270px] h-[270px] object-cover rounded-lg border-[2px] border-white' src={`${IMG_URL}${item.poster_path}`} alt="movie img" width={270} height={270} />
                  <button onClick={() => handleCLickToSingle(item.id)} className='absolute  text-white scale-[2]  inset-0 m-auto'><PlayCircle /></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}
