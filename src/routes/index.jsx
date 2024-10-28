import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hooks/usePath'
import {ProfilePage, FilmsSinglePage, HomePage,LoginPage,NowPlaying,Popular,RegistrPage,TopRated,UpComing } from '../pages'





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
    {
      id: 7,
      path: PATH.login,
      element: <LoginPage />
    },
    {
      id: 7,
      path: PATH.register,
      element: <RegistrPage />
    },
    {
      id: 8,
      path: PATH.profile,
      element: <ProfilePage />
    },
  ]
  return (
    <Routes>
      {routesList.map(item => (<Route key={item.id} path={item.path} element={item.element} />))}
    </Routes>
  )
}

export default CustomRoutes
