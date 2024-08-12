import React from 'react'
import './style.css'

export default function Notice({text}) {
  return (
    <div className="notice">
        {text}
    </div>
  )
}
