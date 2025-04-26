import React from 'react'

const Banner = () => {
  return (
    <div className='relative text-white overflow-hidden'>
      <img className='absolute inset-0 brightness-[0.2]' src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}/>
      <div className='flex relative max-w-screen-xl mx-auto px-6 py-10 gap-6 lg:gap-8'>
      <div className='flex-1'>
        <img  src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movieInfo.poster_path}`} alt="" />
      </div>
        <div className='flex-[2] text-[1.2vw]'>
          <p className='font-bold mb-2 text-[2vw]'>{movieInfo.original_title}</p>
          <div className='flex gap-4 items-center'>
            <span className='text-gray-400 border border-gray-400 p-1'>{certification}</span>
            <p>{movieInfo.release_date}</p>
            <p>{(movieInfo.genres || []).map(genre=>genre.name).join(", ")}</p>
          </div>
          <div className='flex mt-4 items-center gap-4'>
            <div className='flex items-center gap-2'><CircularProgessBar percent={Math.round(movieInfo.vote_average*10)} size={3.5} strokeWidth={0.3}/>Rating</div>
            <button>
              <FontAwesomeIcon icon={faPlay} className='mr-1'/>
              Trailer
            </button>
          </div>
          <div className='mt-4'>
            <p className='font-bold text-[1.3vw] mb-2'>Overview</p>
            <p>{movieInfo.overview}</p>
          </div>
          <div className='grid grid-cols-2 gap-2 mt-4'>
          {
            Object.keys(groupedCrews).map((job)=>(
              <div key={job}>
              <p className='font-bold'>{job}</p>
              <p>{groupedCrews[job].map(crews=>crews.name).join(", ")}</p>
            </div>
            ))
          }
            {/* <div>
              <p className='font-bold'>Director</p>
              <p>Healing</p>
            </div>
            <div>
              <p className='font-bold'>Writer</p>
              <p>Healing</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
