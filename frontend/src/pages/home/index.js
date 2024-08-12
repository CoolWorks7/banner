import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import Options from '../../components/options';
import Timer from '../../components/timer';
import Banner from '../../components/banner';
import Loader from '../../components/loader';

export default function Home({server}) {
    const [data, setData] = useState({
        isVisible: false, description: '', time: {h: 0, m: 0, s: 0}
    })
    const [timeOver, setTimeOver] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        async function getData() {
            let res = await fetch(`${server}/api/banner`)
            let data = await res.json()
            
            setData({
                isVisible: data.isVisible,
                description: data.description,
                time: {
                    h: data.hour,
                    m: data.minute,
                    s: data.second
                }
            })
            setLoaded(true)
        }
        getData()    
    }, [0])


    function handleVisible() {
        setData(prev => {
            return {
                ...prev,
                isVisible: !prev.isVisible
            }
        })
    }

    return (
        <div className='container'>
            {loaded? <>
                <div className='top'>
                    <Header title={"My Banner"}/>
                    {!timeOver && <Options isVisible={data.isVisible} setIsVisible={handleVisible}/>}
                </div>
                {!timeOver && data.isVisible != 0 && <Banner description={data.description}/>}
                <Timer setTimeOver={() => setTimeOver(true)} timeFromDB={data.time}/>
            </> : <Loader />}
        </div>
    )
}
