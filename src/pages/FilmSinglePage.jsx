import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
import { API_KEY, IMG_URL } from '../hooks/useEnv'
import Loading from '../assets/images/loading.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import YouTube from 'react-youtube'
import EmptyImg from '../assets/images/empty-user.png'
import { Button } from '@mui/material'

function FilmSinglePage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [singleData, setSingleData] = useState({})
  const [videos, setVideos] = useState([])
  const [actors, setActors] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedTrailer, setSelectedTrailer] = useState({})


  // Get the movie start
  useEffect(() => {
    useAxios().get(`/movie/${id}?api_key=${API_KEY}`).then(res => {
      setSingleData(res.data);
      setLoading(false);
    })
  }, [id])
  // Get the movie end

  // get videos start
  useEffect(() => {
    useAxios().get(`/movie/${id}/videos?api_key=${API_KEY}`).then(res => {
      const trailerList = res.data.results.filter(video => video.type === 'Trailer' || video.type === 'Teaser') 
      setVideos(res.data.results.slice(0, 5));
      setSelectedTrailer(res.data.results[0]);
    })
  }, [id])
  // get videos end

  // get actors start
  useEffect(() => {
    useAxios().get(`/movie/${id}/credits?api_key=${API_KEY}`).then(res => {
      setActors(res.data.crew.reduce((acc, item) => {
        if (!acc.some(actor => actor.id === item.id)) {
          acc.push(item)
        }
        return acc;
      }, []).slice(0, 12)
      );
    })
  }, [id])
  // get actors end

  function handleErrorImg(e) {
    e.target.src = EmptyImg;
  }

  return (
    <div className='w-[1280px] mx-auto mt-[100px]'>
      <div className='py-[15px] mx-auto mb-[20px] flex items-center space-x-4'>
        <button type='button' className='text-white scale-125' onClick={() => navigate(-1)}><ArrowBackIosIcon /></button>
        <h2 className='text-3xl  text-white'>{singleData.original_title}</h2>
      </div>
      {loading ? <img className='absolute inset-0 m-auto' src={Loading} alt='laoding img' width={100} height={100} /> :
        <div>
          <div className={`flex  space-x-[40px] items-start ${videos.length > 0 ? "" : "justify-center"}`}>
            <img onError={handleErrorImg} className='rounded-lg' src={`${IMG_URL}${singleData.poster_path}`} alt="movie img" width={320} />
            <div className={`${videos.length > 0 ? "w-[450px]" : ""}`}>
              <h2 className='text-[40px]  text-white font-bold'>{singleData.title}</h2>
              {singleData?.production_companies && singleData?.production_companies.slice(0, 1).map(item => (
                <div key={item.id} className='flex items-center space-x-2 mt-2'>
                  {item.logo_path ? <img src={`${IMG_URL}${item.logo_path}`} alt="logo company" width={60} /> : ""}
                  <strong className='text-gray-400 font-normal '>{item.name}</strong>
                </div>

              ))}
              { singleData.genres.length ? <div className='flex items-center space-x-6 mt-6'>
                <strong className='text-white text-[20px] leading-[24px] opacity-80'>Genres</strong>
                {singleData?.genres ? singleData?.genres.slice(0, 3).map(item => (
                  <strong key={item.id} className='px-2 py-1 rounded-3xl block bg-[#00000033] text-gray-400 font-normal'>{item.name}</strong>
                )) : ""}
              </div> : null}
              <p className='text-[16px] leading-[22px] text-white opacity-70 mt-3 line-clamp-5'>{singleData.overview}</p>

             {singleData?.production_countries.length ? <div className='space-x-4 mt-3'>
                <strong className='text-white text-[20px] leading-[24px] opacity-80'>Country</strong>
                {singleData?.production_countries ? singleData?.production_countries.map(item => (
                  <strong key={item.id} className='px-2 py-1 inline-block rounded-3xl bg-[#00000033] text-gray-400 font-normal'>{item.name}</strong>
                )) : ""}
              </div> : null}
              <div className='space-x-4 '>
                <strong className='text-white text-[20px] leading-[24px] opacity-80'>Spoken languages </strong>
                {singleData?.spoken_languages ? singleData?.spoken_languages.map(item => (
                  <strong key={item.id} className='px-2 py-1  inline-block rounded-3xl bg-[#00000033] text-gray-400 font-normal'> {item.name}</strong>
                )) : ""}
              </div>
              <p className='text-[16px] leading-[22px] text-white opacity-70 '>Realised Date {singleData.release_date}</p>
              <Link target='_blank' to={singleData.homepage} className=' text-[18px] leading-normal text-blue-500'>Full video</Link>
            </div>
            {videos.length ?
              <div className='min-w-[440px]'>
                <strong className='text-white opacity-90 text-[25px] block mb-2'>Watch Trailers</strong>
                <div className={`flex flex-wrap-reverse ${videos.length < 4 ? "space-x-4"  : "justify-between"} `}>
                  {videos.map((item,index) => (
                      <Button key={item.id}  variant='text' className='text-white !capitalize  !bg-[#00000044] opacity-70 !text-[16px] !leading-[20px]' onClick={() => setSelectedTrailer(item)}>Trailer {index +1}</Button>
                  ))}
                </div>
                <YouTube id={selectedTrailer.id} videoId={selectedTrailer.key} />
              </div> : null}
          </div>
          {actors.length ? <div className='mt-[80px] mb-10'>
            <h2 className='text-[28px] text-white font-bold mb-4'>Actors Cast & Crew</h2>
            <div className='flex flex-wrap gap-y-8 justify-between'>
              {actors.map(item => (
                <div key={item.id} className='bg-[#00000077] overflow-hidden rounded-lg h-[350px] w-[270px] '>
                  <img className='w-[270px] h-[270px] object-cover rounded-lg ' src={`${IMG_URL}${item.profile_path}`} alt="Profile img" width={270} />
                  <div className='p-4 '>
                    <strong className='text-white opacity-80 text-[18px] leading-[22px]'>{item.name}</strong>
                    <p className='text-[16px] text-white opacity-70 leading-4'>{item.job}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> : null}
        </div>}
    </div>
  )
}

export default FilmSinglePage
