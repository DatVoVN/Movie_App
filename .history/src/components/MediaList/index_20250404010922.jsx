import React from 'react'
import MovieCard from './MovieCard'

const MediaList = () => {
  return (
    <div className='px-8 text-[1.2vw] py-10 bg-black text-white'>
    <div className='flex items-center gap-4 mb-6'>
    <p className='text-[2vw] font-bold'>Trending</p>
    <ul className='flex border border-white rounded'>
      <li className='bg-white text-black px-2 py-1 rounded cursor-pointer'>All</li>
      <li className='px-2 py-1 rounded cursor-pointer'>Movie</li>
      <li className='px-2 py-1 rounded cursor-pointer'>TV Shows</li>
    </ul></div>
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
    </div>
    </div>
  )
}

export default MediaList
