import React from 'react'
import './style.css'

export default function Banner({isVisible, description, bgColorId, colorsArray}) {
  return (
    <div className="banner" style={{background: colorsArray[bgColorId]}}>
        {description}
    </div>
  )
}
