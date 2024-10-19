import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

function FilmSinglePage() {
    const {id} = useParams()

    useEffect(() => {
        useAxios().get(``)
    })
  return (
    <div>
      
    </div>
  )
}

export default FilmSinglePage
