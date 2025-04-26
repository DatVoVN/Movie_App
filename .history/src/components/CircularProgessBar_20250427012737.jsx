import React from 'react'

const CircularProgessBar = ({percent, size = 3, strokeWidth = 0.25 , strokeColor = "green"}) => {\
  const safePercent = isNaN(percent) ? 0 : percent;
  const radius = size/2 - strokeWidth
  return (
    <div>
    <svg width={`${size}vw`} height={`${size}vw`}>
      <circle r={`${radius}vw`} cx={`${size/2}vw`} cy={`${size/2}vw`} strokeWidth={`${strokeWidth}vw`} stroke='white'/>
      <circle r={`${radius}vw`} cx={`${size/2}vw`} cy={`${size/2}vw`} strokeWidth={`${strokeWidth}vw`} stroke={strokeColor} strokeDasharray={`${2*radius * Math.PI}vw`} fill='none' strokeDashoffset={`${2*radius* Math.PI- (safePercent / 100 * 2*radius * Math.PI)}vw`} transform="rotate(-90)" style={{transformOrigin: "center"}} strokeLinecap='round'/>
      {/* // dash ==> 1px dash 1 || gap 1 || dash 1 || gap 1 */}
      {/* P = 2 * pi * R = 2 * 20 * 3.14 = 125.65*/}
      <text x={`${size/2}vw`} y={`${size/2}vw`} fill='white' fontSize="1.2vw" alignmentBaseline='middle' textAnchor='middle'>{safePercent}</text>
    </svg>
    </div>
  )
}

export default CircularProgessBar
