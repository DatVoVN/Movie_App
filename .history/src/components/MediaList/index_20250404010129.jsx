import React from 'react'

const MediaList = () => {
  return (
    <div className='px-8 text-[1.2vw] py-10 bg-black text-white'>
    <div className='flex items-center gap-4 mb-6'>
    <p className='text-[2vw] font-bold'>Trending</p>
    <ul className='flex border border-white'>
      <li>All</li>
      <li>Movie</li>
      <li>TV Shows</li>
    </ul></div>
    </div>
  )
}

export default MediaList
