import Image from 'next/image'
import React, { useEffect } from 'react'

function Banner() {
  return (
    <div className='py-10 px-0 md:px-44 container mt-0 md:mt-10'>
        <div className='bg-light-blue py-10 px-3 md:px-20 rounded-2xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-2xl'>Join Hands With us to secure Web3 Together</h3>
                    <p>Help us in our journey to secure web3 by joining our team of talented individuals spread across the globe.</p>
                    <button className='text-black py-2 px-4 uppercase w-40 bg-white rounded-lg'>Apply Now</button>
                </div>
                <div>
                    <Image src={'/business.jpeg'} width={500} height={500} alt={'business'} className='rounded-md opacity-80' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner