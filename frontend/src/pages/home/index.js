import React, { useEffect } from 'react'
import Header from '../../components/header';
import Options from '../../components/options';
import useTimer from '../../hooks/useTimer';

export default function Home() {
    const {time, startTime} = useTimer()
    

    useEffect(() => {
        startTime(2, 30, 10)
        async function getData() {
            let res = await fetch("http://localhost:3000/api/banner")
            let data = await res.json()
            console.log(data);
            
        }

        getData()
        
    }, [0])

    console.log(time);
    

    // Loader
    // Light mode/ Dark Mode
    // toggle button for banner visibility
    // slider for banner visibility
    // 

    return (
        <div className='container'>
            <Header />
            <Options />
            <div>
                {/* {time.h}
                {time.m}
                {time.s} */}
            </div>
        </div>
    )
}
