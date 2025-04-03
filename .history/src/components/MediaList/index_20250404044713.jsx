import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const MediaList = () => {
  const [mediaList, setMediaList] = useState([])
  const [activeTabId, setActiveTabId] = useState("All")
  useEffect(()=>{fetch(`https://api.themoviedb.org/3/trending/${activeTabId}/day?language=en-US`, {
    method: "GET",
    headers: {
          accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODRkZDcwNWVjZWU3N2EzYmFmMWE5OTYwMGUyN2MwNCIsIm5iZiI6MTcyMTcxMDQyOC4zMjgsInN1YiI6IjY2OWYzNzVjNTI0M2RhODhhNzUwNGE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nolvMGzTv0LYOa24_n9GfZjcgogpyVNNIlXiHhX1MpY",
    }
  }).then(async (res)=>{
    const data = await res.json()
    const trendingMediaList = data.results.slice(0,12)
    setMediaList(trendingMediaList)

  }  )}, [])
  console.log(mediaList);

  return (
    <div className='px-8 text-[1.2vw] py-10 bg-black text-white'>
    <div className='flex items-center gap-4 mb-6'>
    <p className='text-[2vw] font-bold'>Trending</p>
    <ul className='flex border border-white rounded'>
      <li className='bg-white text-black px-2 py-1 rounded cursor-pointer'>All</li>
      <li className='px-2 py-1 rounded cursor-pointer'>Movie</li>
      <li className='px-2 py-1 rounded cursor-pointer'>TV Shows</li>
    </ul></div>
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
    {mediaList.map((movie)=>(
      <MovieCard movie={movie} key={movie.id}/>
    ))}
    </div>
    </div>
  )
}

export default MediaList
