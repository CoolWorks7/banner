import React from 'react'
import './style.css'

export default function Loader() {
  return (
    <div className="svg-loader">
        <svg className="svg-container" viewBox="0 0 100 100">
            {/* <circle class="loader-svg bg" cx="50" cy="50" r="45"></circle> */}
            <circle className="loader-svg animate" cx="50" cy="50" r="45"></circle>
        </svg>
    </div>
  )
}
