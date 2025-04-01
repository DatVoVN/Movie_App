import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PaginateIndicator from './PaginateIndicator'
import Movie from '../Movie'

const FeatureMovie = () => {
  return (
    <div className="relative text-white">
    <Movie/>
    <PaginateIndicator/>
  </div>
  )
}

export default FeatureMovie
