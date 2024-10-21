import React, { memo, useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { API_KEY } from '../hooks/useEnv'
import CustomCard from '../components/CustomCard'
import CustomSwiper from '../components/Swiper/Swiper'
import Loading from '../assets/images/loading.png'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION } from '../redux/actions'
function NowPlaying() {
  const movies = useSelector(state => state.nowPlaying)
  const dispatch = useDispatch()
  
  useEffect(() => {
    useAxios().get(`movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`).then(res => {
      dispatch({type:ACTION.playing, payload: res.data.results.map(item => {
        item.isLiked = false;
        item.isSaved = false;
        return item;
      })})
    })
  }, [])

  return (
    <div>
      <CustomSwiper data={movies}/>
      <div className='p-4 mt-10  flex flex-wrap justify-between gap-5 '>
        {movies ? movies?.map(item => <CustomCard key={item.id} item={item} />) : <img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100} />}
      </div>
    </div>
  )
}

export default memo(NowPlaying)
