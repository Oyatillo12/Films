import React from 'react'
import MoviePage from '../components/MoviPage'

function TopRated() {
  return <MoviePage fetchData={'top_rated'}/>
}

export default TopRated
