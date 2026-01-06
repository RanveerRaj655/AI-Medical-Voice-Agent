import { PricingTable } from '@clerk/nextjs'
import React from 'react'

function Billing() {
  return (
    <div className='px-10 md:px-24 lg:px-48'>
      <h1 className='font-bold text-3xl mt-1 mb-10 text-blue-950'>Join subscription</h1>
      <PricingTable/>
    </div>
  )
}

export default Billing
