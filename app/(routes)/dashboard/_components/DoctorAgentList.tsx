import { AIDoctorList } from '@/shared/list'
import React from 'react'
import Image from 'next/image'
import DoctorAgentCard from './DoctorAgentCard'

function DoctorAgentList() {
  return (
    <div className='mt-10'>
      <h2 className='font-bold'>
        AI Specialist Doctors List
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {AIDoctorList.map((doctor,index)=>(
          <div key={index} className='m-5 p-5 border rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200'>
            <DoctorAgentCard doctorAgent={doctor} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorAgentList
