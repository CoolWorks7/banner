import React, { useState } from 'react'
import './style.css'
import Switch from '../switch'
import Slider from '../slider'

export default function Options() {
    const [switchBool, setSwitchBool] = useState(false)

    return (
        <div className="options">
            {/* <Slider /> */}

            <Switch onn={switchBool} handleClick={() => setSwitchBool(prev => !prev)}/>
        </div>
    )
}
