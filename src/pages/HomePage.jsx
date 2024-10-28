import React, { useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import Loading from '../assets/images/loading.png'
import CustomSwiper from '../components/Swiper/Swiper'
import { API_KEY } from '../hooks/useEnv'
import HomeCard from '../components/HomeCard/HomeCard'
import { PATH } from '../hooks/usePath'

function NowPlaying() {
    const [data, setData] = useState([])
    const [loadin, setLoading] = useState(true)
    useEffect(() => {
        useAxios().get(`movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`).then(res => {
            setData(res.data.results)
            setLoading(false)
        })
    }, [])
    const movieParts = [
        {
            id: 1,
            path: PATH.nowPlaying,
            title: 'Now Playing',
            fetching: 'now_playing'
        },
        {
            id: 2,
            path: PATH.popular,
            title: 'Popular Movies',
            fetching: 'popular'
        },
        {
            id: 3,
            path: PATH.topRated,
            title: 'Top rated Movies',
            fetching: 'top_rated'
        },
        {
            id: 4,
            path: PATH.upcoming,
            title: 'New Releases',
            fetching: 'upcoming'
        },
    ]

    return (
        <>
            <div >
                <CustomSwiper data={data} />
                <div className={`w-[1280px] mx-auto mt-[80px] mb-10 space-y-[100px] `}>
                    {movieParts.map(item => <HomeCard key={item.id} item={item} />)}
                </div>
            </div > 
            {!data.length &&<img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100} />}
        </>
    )
}

export default NowPlaying