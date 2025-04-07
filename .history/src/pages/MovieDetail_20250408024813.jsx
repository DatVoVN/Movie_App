import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MovieDetail = () => {
  return (
    <div className='relative text-white'>
      <img className='absolute inset-0 brightness-[0.2]' src='https://image.tmdb.org/t/p/original/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg'/>
      <div className='flex relative max-w-screen-xl'>
      <div className='flex-1'>
        <img  src="https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg" alt="" srcset="" />
      </div>
        <div className='flex-[2]'>
          <p>Test</p>
          <div>
            <span>G</span>
            <p>2024/11/11</p>
            <p>Adventure, Horror</p>
          </div>
          <div>
            <div>73 Rating</div>
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
