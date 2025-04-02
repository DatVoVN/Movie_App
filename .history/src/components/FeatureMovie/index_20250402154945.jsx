import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PaginateIndicator from './PaginateIndicator'
import Movie from '../Movie'

const FeatureMovie = () => {
  // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODRkZDcwNWVjZWU3N2EzYmFmMWE5OTYwMGUyN2MwNCIsIm5iZiI6MTcyMTcxMDQyOC4zMjgsInN1YiI6IjY2OWYzNzVjNTI0M2RhODhhNzUwNGE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nolvMGzTv0LYOa24_n9GfZjcgogpyVNNIlXiHhX1MpY
  const response = await fetch("https://api.themoviedb.org/3/movie/popular")
  console.log({res});

  return (
    <div className="relative text-white">
    <Movie/>
    <PaginateIndicator/>
  </div>
  )
}

export default FeatureMovie
