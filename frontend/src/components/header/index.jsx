import React from 'react'
import './style.css'
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom'
import HoverCard from '../hoverCard';

export default function Header({title, isDashboard}) {
  
  
  return (
    <>
    <div className='header'>
      {!isDashboard && <Link to="/dashboard">
        <div className='dash-btn'>
          <MdDashboard />
          <HoverCard text={"Dashboard"} />
        </div>
      </Link>}
      <header>{title}</header>
    </div>
    </>
  )
}
