import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hooks/usePath'
import { FilmsSinglePage, HomePage,NowPlaying,Popular,TopRated,UpComing } from '../pages'





function CustomRoutes() {
  const routesList = [
    {
      id: 1,
      path: PATH.home,
      element: <HomePage />
    },
    {
      id: 2,
      path: PATH.nowPlaying,
      element: <NowPlaying />
    },
    {
      id: 3,
      path: PATH.popular,
      element: <Popular />
    },
    {
      id: 4,
      path: PATH.topRated,
      element: <TopRated />
    },
    {
      id: 5,
      path: PATH.upcoming,
      element: <UpComing />
    },
    {
      id: 6,
      path: PATH.more,
      element: <FilmsSinglePage />
    },
  ]
  return (
    <Routes>
      {routesList.map(item => (<Route key={item.id} path={item.path} element={item.element} />))}
    </Routes>
  )
}

export default CustomRoutes
