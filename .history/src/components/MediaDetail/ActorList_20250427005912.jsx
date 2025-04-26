import React from 'react'

const ActorList = () => {
  return (
    <div className='border border-slate-300 shadow-sm rounded-lg'>
    <p>Actors</p>
    <div className='grid grid-cols-3 sm:grid-cols-4'>
      <ActorList/>
      <ActorList/>
      <ActorList/>
      <ActorList/>
    </div>
    </div>
  )
}

export default ActorList
