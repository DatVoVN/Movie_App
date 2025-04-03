import React from 'react'

const MovieCard = () => {
  return (
    <div className='border border-slate-800 rounded-lg'>
    <img className='rounded-lg' src='https://image.tmdb.org/t/p/original/9OO6I25MHhCDd0XwNk4oZl0fpwB.jpg'/>
    <div className='px-4 py-2'>
      <p>69</p>
      <p>Kingdom of the Planet of the Ages</p>
      <p>2025-09-04</p>
    </div>
    </div>
  )
}

export default MovieCard
