import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
import { API_KEY, IMG_URL } from '../hooks/useEnv'
import Loading from '../assets/images/loading.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function FilmSinglePage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [singleData, setSingleData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    useAxios().get(`movie/${id}&api_key=${API_KEY}`).then(res => {
      setSingleData(res.data);
      setLoading(false);
    })
  }, [])

  return (
    <>
      <div className='mt-10 mx-auto flex items-center space-x-4 w-[900px]'>
        <button type='button' className='text-white scale-125' onClick={() => navigate(-1)}><ArrowBackIosIcon /></button>
        <h2 className='text-3xl  text-white'>{singleData.original_title}</h2>
      </div>
      {loading ? <img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100} /> : 
      <div className='mx-auto w-[900px] rounded-lg mt-4 p-5 bg-[rgb(23,35,52)] '>
        <div className='flex justify-between '>
          <img className='w-[300px] h-[380px] border-[3px] border-[#304156] object-[center] object-cover' src={`${IMG_URL}${singleData.poster_path}`} alt="film img" width={300} height={380} />
          <div className='w-[60%] space-y-3'>
            <div className='flex items-center space-x-4 bg-[#253142] '>
              <strong className='w-[100px] text-xl text-white py-2 text-center bg-[#304156]'>Name</strong>
              <h3 className='text-xl font-bold text-white'>{singleData.title}</h3>
            </div>
            <div className='flex items-center space-x-4 bg-[#253142] '>
              <strong className='w-[100px] text-xl text-white py-2 text-center bg-[#304156]'>Genres</strong>
              <div className='text-lg space-x-2 font-bold text-white '>{singleData.genres ? singleData.genres.map(item => (
                <span key={item.id}>{item.name}</span>
              )) : <span>-</span>}</div>
            </div>
            <div className='flex items-center space-x-4 bg-[#253142] '>
              <strong className='w-[100px] text-xl text-white py-2 text-center bg-[#304156]'>Country</strong>
              <h3 className='text-xl font-bold text-white'>{singleData.production_countries ? singleData.production_countries.map(item => item.name) : "-"}</h3>
            </div>
            <div className='flex items-center space-x-4 bg-[#253142] '>
              <strong className='w-[100px] text-xl text-white py-2 text-center bg-[#304156]'>Date</strong>
              <h3 className='text-xl font-bold text-white'>{singleData.release_date}</h3>
            </div>
            <div className='flex items-center space-x-4 bg-[#253142] '>
              <strong className='w-[100px] text-xl text-white py-2 text-center bg-[#304156]'>Lang</strong>
              <h3 className='text-xl font-bold text-white'>{singleData.spoken_languages ? singleData.spoken_languages.map(item => item.name) : "-"}</h3>
            </div>
            <div className='flex items-center space-x-4 bg-[#253142] '>
              <strong className='w-[100px] text-xl text-white py-2 text-center bg-[#304156]'>Popular</strong>
              <h3 className='text-xl font-bold text-white'>{singleData.popularity}</h3>
            </div>
            <div className='flex items-center space-x-4 bg-[#253142] '>
              <strong className='w-[100px] text-xl text-white py-2 text-center bg-[#304156]'>Watched</strong>
              <h3 className='text-xl font-bold text-white'>{singleData.vote_count}</h3>
            </div>
          </div>
        </div>
        <div className='mt-6 text-center w-[70%] mx-auto'>
          <strong className=' text-[30px] text-white font-bold'>Overview</strong>
          <p className='text-lg text-white font-normal'>{singleData.overview}</p>
        </div>
      </div> }
    </>
  )
}

export default FilmSinglePage
