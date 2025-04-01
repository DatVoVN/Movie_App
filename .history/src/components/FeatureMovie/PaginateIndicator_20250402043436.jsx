import React from 'react'
import Movie from '../Movie'

const PaginateIndicator = () => {
  return (
    <div className="absolute right-8 bottom-[10%]">
    <Movie/>
    <ul className="flex gap-1">
      <li className="w-6 h-1 bg-slate-100 cursor-pointer"></li>
      <li className="w-6 h-1 bg-slate-600 cursor-pointer"></li>
      <li className="w-6 h-1 bg-slate-600 cursor-pointer"></li>
      <li className="w-6 h-1 bg-slate-600 cursor-pointer"></li>
    </ul>
  </div>
  )
}

export default PaginateIndicator
