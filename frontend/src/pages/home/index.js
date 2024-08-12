import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import Timer from '../../components/timer';
import Banner from '../../components/banner';
import Loader from '../../components/loader';
import Switch from '../../components/switch';
import Confetti from 'react-confetti'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Home({server, colorsArray}) {    
    const [data, setData] = useState({
        isVisible: false, description: '', time: {h: 0, m: 0, s: 0}, colorId: ''
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
                },
                colorId: data.colorId
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
                    {!timeOver && <>
                        <div className="options f-e">
                            <Switch onn={data.isVisible} handleClick={handleVisible}/>
                        </div>
                    </>}
                </div>
                {(!timeOver && data.isVisible != 0)? 
                    <Banner description={data.description} bgColorId={data.colorId} colorsArray={colorsArray}/> 
                    :
                    <div>
                        <Confetti />
                        <div className='thanks'>Thank You!</div>
                        
                        <div className='links'>
                            <Link to="https://github.com/CoolWorks7"><FaGithub /></Link>
                            <Link to="https://www.linkedin.com/in/satyaprakash-tiwari-b4b711262/"><FaLinkedin /></Link>
                        </div>
                    </div>
                    
                }
                <Timer setTimeOver={() => setTimeOver(true)} timeFromDB={data.time}/>
            </> : <Loader />}
        </div>
    )
}
