import React from 'react'
import './style.css'

export default function TextBox({value, handleDescription, placeholder}) {
    return (
        <div className="text-box">
            <textarea value={value} placeholder='' onChange={handleDescription}/>
            <label>{placeholder}</label>
        </div>
    )
}
