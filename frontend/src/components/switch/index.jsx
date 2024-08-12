import React from 'react'
import './style.css'
import HoverCard from '../hoverCard'

export default function Switch({onn, handleClick}) {
  return (
    <div className={onn? "switch onn" : "switch off"} onClick={handleClick}>
        {/* <div className="text">
            {onn? "ON" : "OFF"}
        </div> */}
        <div className="dot"></div>
        <HoverCard text={"Toggle Visibility"} align={"left"}/>
    </div>
  )
}
