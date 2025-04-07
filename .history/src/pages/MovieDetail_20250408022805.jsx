import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MovieDetail = () => {
  return (
    <div>
      <img src='https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg'/>
      <div>
        <img src="https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg" alt="" srcset="" />
        <div>
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
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
