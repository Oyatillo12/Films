import React, { useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { API_KEY } from '../hooks/useEnv'
import Loading from '../assets/images/loading.png'
import { useParams } from 'react-router-dom'
import CustomCard from '../components/CustomCard'

function SearchPage() {
    const {name} = useParams()
    const [searchedItems, setSearchedItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log(name);
    

    useEffect(() => {
        useAxios().get(`/search/movie?query=${name}&api_key=${API_KEY}}`).then(res => {
          setSearchedItems(res.data.results)
          setIsLoading(false)
        })
    },[])
  return (
    <div className='p-4 mt-10  flex flex-wrap justify-between gap-5 '>
      {isLoading ? <img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100} /> :
       searchedItems.length ? searchedItems.map(item => <CustomCard key={item.id} item={item} />) : <p className='text-white mt-10 text-center mx-auto text-xl'>No results matched for <span className='italic'>"{name}"</span></p>}
    </div>
  )
}

export default SearchPage
