import React, { useEffect, useState } from 'react'
import useTimer from '../../hooks/useTimer'
import './style.css'

export default function Timer({setTimeOver, timeFromDB}) {
    const {time, startTime} = useTimer()
    const [timerStarted, setTimerStarted] = useState(false)

    useEffect(() => {
        startTime(timeFromDB)
        setTimerStarted(true)
    }, [0])


    useEffect(() => {
        if (timerStarted && time.s == 0 && time.m == 0 && time.h == 0) {
            setTimeOver()
        }
    }, [time])

    function checkLength(t) {
        // return t.toString().length == 1? "0" + t : t
        return t
    }

    
    

    return (
        <div className="timer-container">
            <p><b>🧙‍♂️</b> The Banner Will Disappear <b>🪄</b></p>
            <p>in</p>

            <div className="timer">
                <div className="card">
                    <div className="title">HR</div>
                    {checkLength(time.h)}
                </div>
                :
                <div className="card">   
                    <div className="title">MN</div>
                    {checkLength(time.m)}
                </div>
                :
                <div className="card">
                    <div className="title">SC</div>
                    {checkLength(time.s)}
                </div>
            </div>
        </div>
    )
}
