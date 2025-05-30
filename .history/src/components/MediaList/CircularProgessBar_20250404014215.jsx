import React from 'react'

const CircularProgessBar = () => {
  return (
    <div>
    <svg width="50px" height="50px">
      <circle r="20px" cx='25px' cy='25px' strokeWidth="5px" stroke='white'/>
      <circle r="20px" cx='25px' cy='25px' strokeWidth="5px" stroke='green' strokeDasharray={"125.65"}/>
      {/* // dash ==> 1px dash 1 || gap 1 || dash 1 || gap 1 */}
    </svg>
    </div>
  )
}

export default CircularProgessBar
