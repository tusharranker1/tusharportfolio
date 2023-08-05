import React from 'react'
import '../css/Cube.css'

export const Cube = ({imgset}) => {
    
  return (
    <div class="container">
    <div class="cube">
      <div class="face front"><img src={imgset[3].src} alt='img'/></div>
      <div class="face back"><img src={imgset[2].src} alt='img' style={{transform:'rotateZ(180deg)'}}/></div>
      <div class="face right"><img src={imgset[0].src} alt='img'/></div>
      <div class="face left"><img src={imgset[1].src} alt='img'/></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
    </div>
  </div>
  )
}
