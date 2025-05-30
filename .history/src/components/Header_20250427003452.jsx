import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="h-14 lg:h-20 bg-slate-950 flex justify-between text-white items-center px-8">
        <div className="flex items-center gap-4 lg:gap-6">
        <Link to={"/netflix.png"}>
        <img className="w-16 sm:w-28" />
        </Link>
          <a className='lg:text-xl' href="#">Phim</a>
          <a className='lg:text-xl' href="#">Truyền hình</a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
  )
}

export default Header
