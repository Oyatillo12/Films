import React from 'react'
import { useSelector } from 'react-redux'
import CustomCard from '../components/CustomCard'
import Loading from '../assets/images/loading.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom'


function Liked() {
    const navigate = useNavigate()
    const liked = useSelector(state => state.liked)
    return (
        <div className='p-4 mt-5'>
            <div className='flex items-center space-x-4 px-10' >
                <button type='button' className='text-white scale-125' onClick={() => navigate(-1)}><ArrowBackIosIcon /></button>
                <strong className='text-3xl  text-white'>Liked</strong>
            </div>
            <div className=' mt-10  flex flex-wrap justify-between gap-5 '>
                {liked ? liked?.map(item => <CustomCard key={item.id} item={item} />) : <img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100} />}
            </div>
        </div>
    )
}

export default Liked
