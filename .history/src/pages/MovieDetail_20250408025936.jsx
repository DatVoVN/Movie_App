import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CircularProgessBar from '../components/CircularProgessBar'

const MovieDetail = () => {
  return (
    <div className='relative text-white'>
      <img className='absolute inset-0 brightness-[0.2]' src='https://image.tmdb.org/t/p/original/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg'/>
      <div className='flex relative max-w-screen-xl mx-auto p-6 gap-6'>
      <div className='flex-1'>
        <img  src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg" alt="" srcset="" />
      </div>
        <div className='flex-[2] text-[1.2vw]'>
          <p className='font-bold mb-2 text-[2vw]'>Test</p>
          <div className='flex gap-4 items-center'>
            <span className='text-gray-400 border border-gray-400 p-1'>G</span>
            <p>2024/11/11</p>
            <p>Adventure, Horror</p>
          </div>
          <div>
            <div className='flex items-center'><CircularProgessBar percent={90} size={3.5} strokeWidth={0.3}/></div>
            <button>
              <FontAwesomeIcon icon={faPlay}/>
              Trailer
            </button>
          </div>
          <div>
            <p>Overview</p>
            <p>After the queens, you are hero between devil and hero </p>
          </div>
          <div>
            <div>
              <p>Director</p>
              <p>Healing</p>
            </div>
            <div>
              <p>Writer</p>
              <p>Healing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
