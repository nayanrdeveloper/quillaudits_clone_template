import React from 'react'
import HeroSection from '../Herosection/HeroSection'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <div className='bg-gradient-light-blue'>
        <div>
            <Navbar />
            <HeroSection />
        </div>
    </div>
  )
}

export default Header