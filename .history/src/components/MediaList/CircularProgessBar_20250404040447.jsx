import React from 'react'

const CircularProgessBar = ({percent = 90, size = 50, strokeWidth = 5}) => {
  const radius = size/2 - strokeWidth
  return (
    <div>
    <svg width="50px" height="50px">
      <circle r={size/2-strokeWidth} cx={size/2} cy={size/2} strokeWidth={strokeWidth} stroke='white'/>
      <circle r={size/2-strokeWidth} cx={size/2} cy={size/2} strokeWidth={strokeWidth} stroke='green' strokeDasharray={2*(size/2-strokeWidth) * 3.14 } fill='none' strokeDashoffset={125.65- (percent / 100 * 125.65) } transform="rotate(-90)" style={{transformOrigin: "center"}} strokeLinecap='round'/>
      {/* // dash ==> 1px dash 1 || gap 1 || dash 1 || gap 1 */}
      {/* P = 2 * pi * R = 2 * 20 * 3.14 = 125.65*/}
      <text x={size/2} y={size/2} fill='white' fontSize="20px" alignmentBaseline='middle' textAnchor='middle'>{percent}</text>
    </svg>
    </div>
  )
}

export default CircularProgessBar
