import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
const Nav = () => {
    const [Show, setShow] = useState(false)
  return (
    <div className='w-full h-18 flex items-center justify-between top-0  sticky  px-4 bg-red-500 md:bg-white border-b shadow-black shadow-xs border-gray-400 z-999'>
        <div className="logo flex h-full justify-center  items-center md:py-1  gap-4">
            <img src="logo.jpeg" alt="logo" className='md:h-full h-10' />
            <h1 className='title md:text-xl  text-sm text-white  md:text-red-500 font-extrabold '>AMBEDKAR SAMAJ SEWA</h1>
        </div>
        <div className="utils hidden  md:flex gap-4">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Help</button>
        </div>
        <div className={`dropdown flex-col flex gap-4 md:hidden bg-white w-2/3 z-10 right-0 top-18 transform transition-all duration-300     p-5 h-242  absolute ${ Show ?"translate-0" : "translate-x-200"}` }>
            <button className='w-full border-b text-left px-3 py-2'>Home</button>
            <button className='w-full border-b text-left px-3 py-2'>About</button>
            <button className='w-full border-b text-left px-3 py-2'>Contact</button>
            <button className='w-full border-b text-left px-3 py-2'>Help</button>
        </div>
        {Show&& ( <div className="blank absolute top-18 md:hidden bg-black/30 h-120 w-full left-0  z-9 " onClick={()=>{setShow(false)}}></div>)}
       

        <button className='md:hidden text-2xl text-white' onClick={()=>{setShow(!Show)}}>
            <CiMenuBurger />
        </button>
    </div>
  )
}

export default Nav