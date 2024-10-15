import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-x-10 mb-10'>
        <NavLink style={(e) => e.isActive ? {textDecoration: "underline"} : {}} className={(e) => e.isActive ? "text-red-500" : ""} to='/'>Home</NavLink>
        <NavLink style={(e) => e.isActive ? {textDecoration: "underline"} : {}} className={(e) => e.isActive ? "text-red-500" : ""} to='/about'>About</NavLink>
        <NavLink style={(e) => e.isActive ? {textDecoration: "underline"} : {}} className={(e) => e.isActive ? "text-red-500" : ""} to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Nav