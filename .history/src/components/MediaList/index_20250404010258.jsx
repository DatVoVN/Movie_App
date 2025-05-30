import React from 'react'

const MediaList = () => {
  return (
    <div className='px-8 text-[1.2vw] py-10 bg-black text-white'>
    <div className='flex items-center gap-4 mb-6'>
    <p className='text-[2vw] font-bold'>Trending</p>
    <ul className='flex border border-white rounded'>
      <li className='bg-white text-black px-2 py-1 rounded cursor-pointer'>All</li>
      <li className='px-2 py-1 rounded cursor-pointer'>Movie</li>
      <li>TV Shows</li>
    </ul></div>
    </div>
  )
}

export default MediaList
