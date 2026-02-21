import React from 'react'
import { FaTwitter , FaInstagram , FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex-1 w-full min-h-80 bg-gray-950 flex  flex-col md:flex-row'>
        <div className="ls w-1/3">
        <img src="logo.jpeg" alt="Logo" className="w-24 h-24 object-contain" /></div>
        <div className="md w-1/3"></div>
        <div className="rs w-1/3 text-white justify-center  items-center flex flex-col">
        <h1 className='text-3xl font-bold py-5'>Follow Our Community</h1>
        <div className="logo text-2xl flex gap-4 ">
        <FaTwitter />
        <FaInstagram />
        <FaFacebook />
        </div>
        </div>
    </div>
    
  )
}

export default Footer