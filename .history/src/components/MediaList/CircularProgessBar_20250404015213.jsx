import React from 'react'

const CircularProgessBar = ({percent = 100}) => {
  return (
    <div>
    <svg width="50px" height="50px">
      <circle r="20px" cx='25px' cy='25px' strokeWidth="5px" stroke='white'/>
      <circle r="20px" cx='25px' cy='25px' strokeWidth="5px" stroke='green' strokeDasharray={"125.65"} strokeDashoffset={125.65- (percent / 100 * 125.65) } transform="rotate(-90deg)" style={{transformOrigin: "center"}}/>
      {/* // dash ==> 1px dash 1 || gap 1 || dash 1 || gap 1 */}
      {/* P = 2 * pi * R = 2 * 20 * 3.14 = 125.65*/}
    </svg>
    </div>
  )
}

export default CircularProgessBar
