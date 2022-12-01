import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='py-10 px-44 container mt-10'>
        <div className='bg-light-blue py-10 px-20 rounded-2xl'>
            <div className='flex gap-4'>
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