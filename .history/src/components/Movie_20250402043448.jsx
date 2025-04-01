import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Movie = () => {
  return (
    <>
      <img src="https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg" className="aspect-video brightness-50"/>
    <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
      <p className="font-bold sm:text-[2vw] mb-2">Inside Out 2</p>
      <div>
        <p className="text-gray-400 border border-gray-400 inline-block p-1 mb-1">PG13</p>
        <p className="text-[1.2vw]">2024-05-11</p>
      </div>
      <div>
      <div className="hidden sm:block text-[1.2vw] mt-4">
        <p className="font-bold mb-2">Overview</p>
        <p>Teenager Riley&apos;s mind headquarters is undergoing a sudden
          demolition to make room for something entirely unexpected: new
          Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been
          running a successful operation by all accounts, aren’t sure how to
          feel when Anxiety shows up. And it looks like she’s not alone.</p>
      </div>
      </div>
      <div className="mt-4">
        <button className="bg-white text-black py-2 px-4 rounded text-[10px] lg:text-lg mr-2"> <FontAwesomeIcon icon={faPlay}/>Trailer</button>
        <button className="bg-slate-300/35 py-2 px-4 rounded text-[10px] lg:text-lg">View Detail</button>
      </div>
    </div>
    </>
  )
}

export default Movie
