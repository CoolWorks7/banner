import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Options from '../../components/options'
import './style.css'
import TextBox from '../../components/textBox'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import Loader from '../../components/loader'
import Notice from '../../components/notice'

export default function Dashboard({server}) {    
    const [data, setData] = useState({
        isVisible: false, description: '', time: {h: 0, m: 0, s: 0}
    })
    const [loaded, setLoaded] = useState(false)
    const [updating, setUpdating] = useState(false)
    const [notice, setNotice] = useState('')
    
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

    function handleDescription(e) {
        setData(prev => {
            return {
                ...prev,
                description: e.target.value
            }
        })
    }

    function handleTimer(e) {
        let {name, value} = e.target
        if (name != 'h' && value > 60) value = 60

        setData(prev => {
            return {
                ...prev,
                time: {
                    ...prev.time,
                    [name]: value
                }
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        updateData({
            isVisible: data.isVisible,
            description: data.description,
            timer: data.time
        })
    }

    async function updateData(data) {
        try {
            setUpdating(true)
            let res = await fetch(`${server}/api/banner/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            let {success} = await res.json()
            if (success) {
                setNotice(success)
                setTimeout(() => { setNotice('') }, 3000)
            }
            setUpdating(false)
        } catch (error) {
            setUpdating(error.message)
        }

    }

    return (
        <>
        <form className='top'>
            {loaded?  <>
                <Header title={"Dashboard"} isDashboard={true}/>
                <Options isVisible={data.isVisible} setIsVisible={handleVisible}/>
                <TextBox placeholder={'Description'} value={data.description} handleDescription={handleDescription}/>
                
                <div className='bottom'>
                    <div className='timer-container-dash'>
                        <Input type="number" name="h" value={data.time.h} handleTimer={handleTimer} placeholder={"Hr"} min="0"/>
                        <Input type="number" name="m" value={data.time.m} handleTimer={handleTimer} placeholder={"Mn"} min="0"/>                
                        <Input type="number" name="s" value={data.time.s} handleTimer={handleTimer} placeholder={"Sc"} min="0"/>
                    </div>

                    {updating?
                        <button className='primary-btn updating'><Loader /></button> :
                        <button className='primary-btn' onClick={handleSubmit} > Update! </button>
                    }
                </div>
                <Link to="/" className='goto'>Go to Main Page <FaArrowRightLong /></Link>
            </> :  <Loader />}
        </form>
        
        {notice.trim() != ''? <Notice text={notice} /> : ''}
        </>
    )
}
