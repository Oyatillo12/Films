import React from 'react'
import MoviePage from '../components/MoviPage'

function NowPlaying() {

  return <MoviePage fetchData={'now_playing'}/>
}

export default NowPlaying
