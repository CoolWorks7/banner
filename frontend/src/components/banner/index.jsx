import React from 'react'
import './style.css'

export default function Banner({isVisible, description}) {
  return (
    <div className="banner">
        {description}
    </div>
  )
}
