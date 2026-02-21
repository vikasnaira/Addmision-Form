
import React from 'react'

const Content = () => {
  return (
    <div className='bg-gray-600 items-center gap-10 flex flex-col  h-fit w-full '>
        <div className="bg-green-500 h-fit w-full flex items-center justify-between">
            <marquee behavior="scroll" direction="left">  
            <h1 className='text-3xl text-white font-bold'>AMBEDKAR  SAMAJ SEWA</h1>
            </marquee>
        </div>
        <h1 className='bg-gray-900 w-fit z-10   rounded-2xl  text-2xl text-white font-bold  p-4  '>Our Team</h1>
        <section className='md:h-60  h-fit w-full flex justify-around flex-col md:flex-row  bg-teal-700 '>
            <div className="lside md:w-1/4 w-full md:block  flex items-center justify-center h-full p-3">
            <img src="chairman.jpg" alt="Chairman" className='md:h-full h-50 border-3 border-green-800' />
            </div>
            <div className="rside md:w-fit w-full text-white gap-4 flex justify-center items-center flex-col md:py-5 md:px-8">
                <p className='text-black text-3xl font-bold py-4'>Chairman</p>
                <h1  className='bg-teal-800 w-fit p-3'>Ch. Jaspal singh</h1>
                <p>Village Kaptan majri </p>
                <p>Mob:9416465665</p>
            </div>
            <div className="rside md:w-fit w-full text-white gap-4 flex justify-center items-center flex-col md:py-5 md:px-8">
                <p className='text-black text-3xl font-bold py-4'>Vise Chairman</p>
                <h1  className='bg-teal-800 w-fit p-3'>Sh. Rajender Kumar</h1>
                <p>Village kanipla </p>
                <p>Mob:9315454163</p>
            </div>
            <div className="rside md:w-fit w-full py-5 text-white gap-4 flex justify-center items-center flex-col md:py-5 md:px-8">
                <p className='text-black text-3xl font-bold py-4'>General Secretary</p>
                <h1  className='bg-teal-800 w-fit p-3'>Sh. vinod kumar</h1>
                <p>Village Rampur</p>
                <p>Mob:9996718728</p>
            </div>
        </section>
    </div>
  )
}

export default Content