import React from 'react'

const CircularProgessBar = ({percent = 90, size = 50, strokeWidth = 5}) => {
  return (
    <div>
    <svg width="50px" height="50px">
      <circle r="20px" cx='25px' cy='25px' strokeWidth={strokeWidth} stroke='white'/>
      <circle r="20px" cx='25px' cy='25px' strokeWidth="5px" stroke='green' strokeDasharray={"125.65"} fill='none' strokeDashoffset={125.65- (percent / 100 * 125.65) } transform="rotate(-90)" style={{transformOrigin: "center"}} strokeLinecap='round'/>
      {/* // dash ==> 1px dash 1 || gap 1 || dash 1 || gap 1 */}
      {/* P = 2 * pi * R = 2 * 20 * 3.14 = 125.65*/}
      <text x="25px" y="25px" fill='white' fontSize="20px" alignmentBaseline='middle' textAnchor='middle'>{percent}</text>
    </svg>
    </div>
  )
}

export default CircularProgessBar
