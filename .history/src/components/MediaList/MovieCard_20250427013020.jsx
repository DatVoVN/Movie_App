import React from 'react'
import CircularProgessBar from '../CircularProgessBar'
import { Link } from 'react-router-dom'

const MovieCard = ({movie, activeTabId}) => {
  const id = movie.id
  return (
    <Link to={`/movie/${movie.id}`}>
          <div className='border border-slate-800 rounded-lg relative'>
    {
      (movie.media_type || activeTabId) === "tv" && (<p className='absolute right-1 top-1 bg-black text-white p-1 text-sm rounded shadow-md font-bold'>TV Show</p>)
    }
    <img className='rounded-lg' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/default-movie.png'} alt={movie.title || movie.name}/>

    <div className='px-4 relative -top-[1.5vw]'>
      <CircularProgessBar percent={Math.round(movie.vote_average* 10)} strokeColor = {movie.vote_average >= 7 ? "green" : movie.vote_average >=5 ? "orange" : "red"}/>
      <p className='font-bold mt-2'>{movie.title || movie.name}</p>
      <p className='text-slate-300'>{movie.release_date || movie.first_air_date}</p>
    </div>
    </div>
    </Link>
  )
}

export default MovieCard
