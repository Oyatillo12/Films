import React, { useEffect, useState } from 'react'
import {useAxios} from '../hooks/useAxios'
import { API_KEY, IMG_URL } from '../hooks/useEnv'
import CustomCard from '../components/CustomCard'
function NowPlaying() {
  const [data,setData] = useState([])
  useEffect(() => {
    useAxios().get(`movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`).then(res => {
      setData(res.data.results)
    })
  }, [])

  return (
    <div className='mt-10 flex flex-wrap justify-between gap-5 p-4'>
      {data.map(item => <CustomCard key={item.id} item={item}/>)}
    </div>
  )
}

export default NowPlaying
