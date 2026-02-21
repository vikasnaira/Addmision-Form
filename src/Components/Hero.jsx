import React from 'react'
import { FaHandPointDown} from "react-icons/fa";
const Hero = () => {
  return (
    <div className='flex-1 w-full flex  flex-col'>
        <div className="banner w-full flex justify-center items-center md:flex-row flex-col bg-green-300 h-200 md:h-80">
            <img src="https://rukminim2.flixcart.com/image/480/640/xif0q/poster/z/t/t/medium-dr-babasaheb-ambedkar-i-educate-agitate-organize-i-quote-original-imagyr6haqxqksbg.jpeg?q=90" alt="Dr bhim rao ambedkar" className='h-full' />
            <div className="text w-full text-black h-full flex  justify-center items-center  font-bold text-center px-4 ">
                <h1 className='md:text-5xl text-4xl text-center '>BABA SAHEB BHIM RAO AMBEDKAR <br /> SAMAJ SEWA SANSTHA  <br />NORTH HARYANA</h1>
            </div>
        </div>
        <div className="section w-full flex-col md:py-5 p-4 bg-teal-400 gap-10 md:h-40 flex justify-start items-center px-4">
            <h1 className='flex justify-center items-center p-2 bg-red-500  rounded-2xl gap-5 px-3'> Free Coching Awailble :<FaHandPointDown/></h1>
            <p className='text-lg font-medium text-center'>HSSC , SSC , Haryana , Bank Railway , Special for Haryana Cet Group C and D 
            </p>
        </div>
    </div>
  )
}

export default Hero