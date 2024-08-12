import React from 'react'
import './style.css'

export default function Input({type, name, min, max, value, handleTimer, placeholder}) {
    
  return (
    <div className="input-box">
        <input type={type} name={name} min={min} max={max} value={value} placeholder='' onChange={handleTimer}/>
        <label>{placeholder}</label>
    </div>
  )
}
