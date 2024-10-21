import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import {PATH} from '../hooks/usePath'
import Loading from '../assets/images/loading.png'
import {FilmsSinglePage} from '../pages'

const NowPlaying = lazy(() => new Promise(resolve =>{
  return setTimeout(() => resolve(import('../pages/NowPlaying')), 1000)
}))
const Popular = lazy(() => new Promise(resolve =>{
  return setTimeout(() => resolve(import('../pages/Popular')), 1000)
}))
const TopRated = lazy(() => new Promise(resolve =>{
  return setTimeout(() => resolve(import('../pages/TopRated')), 1000)
}))
const UpComing = lazy(() => new Promise(resolve =>{
  return setTimeout(() => resolve(import('../pages/UpComing')), 1000)
}))

function CustomRoutes() {
    const routesList = [
        {
            id:1,
            path: PATH.nowPlaying,
            element:<Suspense fallback={<img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100}/>}> <NowPlaying/> </Suspense>
        },
        {
            id:2,
            path: PATH.popular,
            element:<Suspense fallback={<img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100}/>}> <Popular/> </Suspense>
        },
        {
            id:3,
            path: PATH.topRated,
            element:<Suspense fallback={<img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100}/>}> <TopRated/> </Suspense>
        },
        {
            id:4,
            path: PATH.upcoming,
            element:<Suspense fallback={<img className='absolute inset-0 m-auto' src={Loading} alt='loading' width={100} height={100}/>}> <UpComing/> </Suspense>
        },
    ]
  return (
    <Routes>
      {routesList.map(item => (<Route key={item.id} path={item.path} element={item.element}/>))}
      {routesList.map(item => (<Route key={item.id} path={`${item.path}/:id`} element={<FilmsSinglePage/>}/>))}
    </Routes>
  )
}

export default CustomRoutes
