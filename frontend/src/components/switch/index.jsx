import React from 'react'
import './style.css'

export default function Switch({onn, handleClick}) {
  return (
    <div className={onn? "switch onn" : "switch off"} onClick={handleClick}>
        {/* <div className="text">
            {onn? "ON" : "OFF"}
        </div> */}
        <div className="dot"></div>
        <div className="hover">
            Toggle Visibility
        </div>
    </div>
  )
}
