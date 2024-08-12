import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import Options from '../../components/options';
import Timer from '../../components/timer';
import Banner from '../../components/banner';

export default function Home() {
    const [isVisible, setIsVisible] = useState(true)
    const [timeOver, setTimeOver] = useState(false)

    useEffect(() => {
        async function getData() {
            let res = await fetch("http://localhost:3000/api/banner")
            let data = await res.json()
            console.log(data);
        }

        getData()
        
    }, [0])

    
    // const timeElement = 
    

    // Loader
    // Light mode/ Dark Mode
    // toggle button for banner visibility
    // slider for banner visibility
    // 

    return (
        <div className='container'>
            <div className='top'>
                <Header title={"My Banner"}/>
                {!timeOver && <Options isVisible={isVisible} setIsVisible={() => setIsVisible(prev => !prev)}/>}
            </div>
            {!timeOver && isVisible && <Banner description={"Banner"}/>}
            <Timer setTimeOver={() => setTimeOver(true)}/>
        </div>
    )
}
