import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import PaginateIndicator from './PaginateIndicator'
import Movie from '../Movie'

const FeatureMovie = () => {
  const [movies, setMovie] = useState([])
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular", {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODRkZDcwNWVjZWU3N2EzYmFmMWE5OTYwMGUyN2MwNCIsIm5iZiI6MTcyMTcxMDQyOC4zMjgsInN1YiI6IjY2OWYzNzVjNTI0M2RhODhhNzUwNGE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nolvMGzTv0LYOa24_n9GfZjcgogpyVNNIlXiHhX1MpY"
          }
        }).then(async (res)=> {const data = await res.json()
          const popularMovies = data.results.slice(0,4)
        setMovie(popularMovies)
    })
  }, [])

  return (
    <div className="relative text-white">
    <Movie movie={movies[2]}/>
    <PaginateIndicator/>
  </div>
  )
}

export default FeatureMovie
