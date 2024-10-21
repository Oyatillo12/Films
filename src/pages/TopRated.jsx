import React, { useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import CustomCard from '../components/CustomCard'
import { API_KEY } from '../hooks/useEnv'
import CustomSwiper from '../components/Swiper/Swiper'

function TopRated() {
  const [data, setData] = useState([])
  useEffect(() => {
    useAxios().get(`movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`).then(res => {
      setData(res.data.results)
    })
  }, [])
  return (
    <div>
    <CustomSwiper data={data}/>
    <div className='p-4 mt-10  flex flex-wrap justify-between gap-5 '>
      {data.map(item => <CustomCard key={item.id} item={item} />)}
    </div>
  </div>
  )
}

export default TopRated
