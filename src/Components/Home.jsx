import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import Content from './Content'
const Home = () => {
  return (
    <div className='flex flex-col items-center'>
        <Nav/>
        <Hero/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Home