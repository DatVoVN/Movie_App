import React from 'react'
import CircularProgessBar from './CircularProgessBar'

const MovieCard = () => {
  return (
    <div className='border border-slate-800 rounded-lg'>
    <img className='rounded-lg' src='https://image.tmdb.org/t/p/original/9OO6I25MHhCDd0XwNk4oZl0fpwB.jpg'/>
    <div className='px-4 relative -top-[1.5vw]'>
      <CircularProgessBar/>
      <p className='font-bold mt-2'>Kingdom of the Planet of the Ages</p>
      <p className='text-slate-300'>2025-09-04</p>
    </div>
    </div>
  )
}

export default MovieCard
