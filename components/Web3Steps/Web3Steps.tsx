import Image from 'next/image'
import React from 'react'

function Web3Steps() {
  return (
    <div className='flex flex-col gap-2 py-4 px-20 container items-center justify-center'>
      <h2 className='uppercase text-light-blue'>THE SECURITY</h2>
      <h3 className='text-light-black font-semibold text-2xl'>How We Secure Your Web3 Project</h3>
      <Image src={'/web3_steps.png'} alt={'web3 steps'} height={1000} width={1000} className="mt-5" />
    </div>
  )
}

export default Web3Steps