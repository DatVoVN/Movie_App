import React from 'react'
import CircularProgessBar from './CircularProgessBar'

const MovieCard = ({movie}) => {
  return (
    <div className='border border-slate-800 rounded-lg'>
    <img className='rounded-lg' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
    <div className='px-4 relative -top-[1.5vw]'>
      <CircularProgessBar point={movie.vote_average}/>
      <p className='font-bold mt-2'>{movie.title}</p>
      <p className='text-slate-300'>{movie.release_date}</p>
    </div>
    </div>
  )
}

export default MovieCard
