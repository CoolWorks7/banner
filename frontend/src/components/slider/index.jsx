import React from 'react'
import './style.css'

export default function Slider() {
  return (
    <div className="slideContainer">
        <input type="range" min="0" max="100" value="0" className="slider" id="myRange" />
    </div>
  )
}
