import React, {  useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { API_KEY } from '../hooks/useEnv'
import CustomCard from '../components/CustomCard'
import CustomSwiper from '../components/Swiper/Swiper'
import Loading from '../assets/images/loading.png'
import { Pagination } from '@mui/material'


function MoviePage({fetchData}) {
    const [data, setData] = useState(null)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    useEffect(() => {
        useAxios().get(`movie/${fetchData}?language=en-US&page=${page}&api_key=${API_KEY}`).then(res => {
            setData(res.data.results)
            setTotalPages(res.data.total_pages)
        })
    }, [page])

    return (
        <div >
            <CustomSwiper data={data} />
            <div className='p-4 mt-[60px] max-w-[1280px] w-full gap-x-4 mx-auto flex flex-wrap justify-between gap-y-5 '>
                {data ? data.map(item => <CustomCard key={item.id} item={item} />) : <img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100} />}
            </div>
            <div className='flex items-center justify-center mb-[80px] mt-6'><Pagination size='large' className='!text-white' onChange={(a,b) => setPage(b)} count={totalPages} color="primary" /></div>
        </div>
    )
}

export default MoviePage
