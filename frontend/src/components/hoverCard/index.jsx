import React from 'react'
import './style.css'

export default function HoverCard({text, align}) {
  return (
    <div className={`hover ${align}`}>
        {text}
    </div>
  )
}
