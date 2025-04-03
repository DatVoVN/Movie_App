import React from 'react'

const CircularProgessBar = ({percent = 12, size = 3, strokeWidth = 0.25}) => {
  const radius = size/2 - strokeWidth
  return (
    <div>
    <svg width={size} height={size}>
      <circle r={radius} cx={size/2} cy={size/2} strokeWidth={strokeWidth} stroke='white'/>
      <circle r={radius} cx={size/2} cy={size/2} strokeWidth={strokeWidth} stroke='green' strokeDasharray={2*(radius) * Math.PI } fill='none' strokeDashoffset={125.65- (percent / 100 * 125.65) } transform="rotate(-90)" style={{transformOrigin: "center"}} strokeLinecap='round'/>
      {/* // dash ==> 1px dash 1 || gap 1 || dash 1 || gap 1 */}
      {/* P = 2 * pi * R = 2 * 20 * 3.14 = 125.65*/}
      <text x={size/2} y={size/2} fill='white' fontSize="20px" alignmentBaseline='middle' textAnchor='middle'>{percent}</text>
    </svg>
    </div>
  )
}

export default CircularProgessBar
