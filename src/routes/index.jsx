import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {NowPlaying,UpComing,TopRated, Popular,} from '../pages'
import {PATH} from '../hooks/usePath'

function CustomRoutes() {
    const routesList = [
        {
            id:1,
            path: PATH.nowPlaying,
            element:<NowPlaying/>
        },
        {
            id:2,
            path: PATH.popular,
            element:<Popular/>
        },
        {
            id:3,
            path: PATH.topRated,
            element:<TopRated/>
        },
        {
            id:4,
            path: PATH.upcoming,
            element:<UpComing/>
        },
    ]
  return (
    <Routes>
      {routesList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default CustomRoutes
