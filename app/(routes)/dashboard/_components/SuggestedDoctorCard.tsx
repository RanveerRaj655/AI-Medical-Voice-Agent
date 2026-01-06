import React from 'react'
import { doctorAgent } from './DoctorAgentCard'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Props = {
    doctorAgent: doctorAgent,
    setSelectedDoctor:any,
    selectedDoctor:any
}
function SuggestedDoctorCard({ doctorAgent, setSelectedDoctor ,selectedDoctor}: Props) {
    const onClick = () => {
        setSelectedDoctor(doctorAgent);
    };
  return (
    <div className={`flex flex-col items-center border p-2 rounded-lg shadow
     hover:border-blue-500 transition cursor-pointer ${selectedDoctor?.id == doctorAgent?.id && 'border-blue-500'}`}
     onClick={onClick}>
       <Image src={doctorAgent.image}
       alt={doctorAgent.specialist} width={60} height={60} className='rounded-full w-15 h-15 md:w-[70px] md:h-[70px]' />
      <h3 className='font-bold mt-1 text-center text-sm md:text-base'>{doctorAgent?.specialist}</h3>
      <p className='gap-2 text-xs text-center line-clamp-2 px-1'>{doctorAgent?.description}</p>
      {/* <Button className='w-full '>Start Consult<ArrowRight className='ml-2' /></Button> */}
    </div>
  )
}

export default SuggestedDoctorCard
