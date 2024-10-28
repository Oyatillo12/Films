import React from 'react'
import LogoImg from '../assets/images/nav-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { PATH } from '../hooks/usePath'

function SiteFooter() {
    const navigate = useNavigate()
    const Links = [
        {
            id:1,
            title:"Home",
            path:PATH.home
        },
        {
            id:2,
            title:"Now Playing",
            path:PATH.nowPlaying
        },
        {
            id:3,
            title:"Popular",
            path:PATH.popular
        },
        {
            id:4,
            title:"Top rated",
            path:PATH.topRated
        },
        {
            id:5,
            title:"Up coming",
            path:PATH.upcoming
        }
    ]
  return (
    <div className='bg-black pt-[65px] pb-[45px]'>
        <div className='w-[1280px] mx-auto pb-[46px] flex items-center justify-between'>
            <button onClick={() => navigate('/')}><img src={LogoImg} alt="Logo img" width={154} height={22}/></button>
            <div className='w-[168px]'>
                <strong className='text-white text-[22px] leading-[26px]'>Useful Links</strong>
                <div className='flex flex-col mt-3 space-y-4'>
                    {Links.map(item => <NavLink to={item.path} key={item.id} className='text-[18px] block leading-5 text-white'>{item.title}</NavLink>)}
                </div>
            </div>
            <div className='flex items-start space-x-4'>
                <div className='w-[401px]'>
                    <strong className='text-white text-[22px] leading-6 font-semibold pb-[15px] block border-b-[1px] border-white'>Address</strong>
                    <p className='text-[18px] opacity-70 leading-[21px] tracking-[3%] text-white line-clamp-3 mt-[15px] mb-8'>Address: 1234 Elm Street, Suite 567, Downtown City, State, ZIP Code</p>
                    <strong className='text-white mb-[15px] text-[22px] leading-6 font-semibold pb-[15px] block border-b-[1px] border-white'>Email:</strong>
                    <span className='text-[#FF4C4C] text-[18px] leading-[21px]'>email@example.com</span>
                </div>
                <div className='w-[401px]'>
                    <strong className='text-white text-[22px] leading-6 font-semibold pb-[15px] mb-[15px] block border-b-[1px] border-white'>Phone</strong>
                    <div className='flex items-center justify-between'>
                        <strong className='text-white font-medium text-[18px] leading-[23px] opacity-90'>Service:</strong>
                        <strong className='text-white font-medium text-[18px] leading-[23px] opacity-90'>Office Reception:</strong>
                    </div>
                    <div className='flex items-center justify-between mt-[15px]'>
                        <span className='text-white font-medium text-[18px] leading-[22px] opacity-70'>(123) 456-7890</span>
                        <span className='text-white font-medium text-[18px] leading-[22px] opacity-70'>(123) 456-7890</span>
                    </div>
                </div>
            </div>
        </div>
        <span className='w-full h-[3px] bg-[#767676] block'></span>
      <p className='font-medium text-[18px] leading-[22px] text-white pt-[45px] opacity-70 text-center'>© 2024 MoviZone. All rights reserved.</p>
    </div>
  )
}

export default SiteFooter
