import React from 'react'

const PaginateIndicator = ({movies, activeMovieId}) => {
  return (
    <div className="absolute right-8 bottom-[10%]">
    <ul className="flex gap-1">
    {
      movies.map((movie)=>(<li key={movie.id} className={`w-6 h-1 ${movie.id===acbg-slate-100 cursor-pointer `}></li>))
    }
      {/* <li className="w-6 h-1 bg-slate-100 cursor-pointer"></li>
      <li className="w-6 h-1 bg-slate-600 cursor-pointer"></li>
      <li className="w-6 h-1 bg-slate-600 cursor-pointer"></li>
      <li className="w-6 h-1 bg-slate-600 cursor-pointer"></li> */}
    </ul>
  </div>
  )
}

export default PaginateIndicator
