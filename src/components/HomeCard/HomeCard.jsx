import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Button } from '@mui/material';
import { useAxios } from '../../hooks/useAxios';
import { API_KEY, IMG_URL } from '../../hooks/useEnv';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function HomeCard({ item }) {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    useAxios().get(`movie/${item.fetching}?language=en-US&page=1&api_key=${API_KEY}`).then(res => {
      setData(res.data.results.slice(0, 8))
    })
  }, [])
  const handleCLickToSingle = () => {
    if (!user) {
      toast("Please Log in to watch this movie",{duration: 2000, });
    }
    else{
      navigate(`/movie/${item.id}`)
    }
  }
  return (
    <>
    <Toaster position="top-right" reverseOrder={true}/>
      <div>
        <div className='flex relative items-center justify-between pb-[21px] border-b-[2px] border-[#3A3A3A] mb-[30px]'>
          <span className='absolute w-[100px] h-[2px] bg-[#E50914] bottom-[-2px]'></span>
          <h2 className='text-white text-[31px] leading-[37px] font-bold'>{item.title}</h2>
          <Button onClick={() => navigate(`${item.path}`)} className='!text-[#AAA9A9] text-[14px] leading-[16px] font-medium' endIcon={<ArrowForwardIosIcon />}>View all</Button>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.length ? data.map(item => (
            <SwiperSlide key={item.id} onClick={handleCLickToSingle} className='home-slide '>
              <img className='w-[190px] h-[255px] object-cover rounded-[12px]' src={`${IMG_URL}${item.poster_path}`} alt={item.title} width={190} height={255} />
              <h3 className='text-[18px] text-white mt-3 leading-[24px] font-semibold'>{item.title}</h3>
            </SwiperSlide>
          )) : <SwiperSlide className='text-white text-[25px] text-center mx-auto'>No data</SwiperSlide>}

        </Swiper>
      </div>
    </>
  );
}
