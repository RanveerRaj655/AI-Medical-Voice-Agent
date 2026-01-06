'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export type doctorAgent={
    id:number,
    specialist:string,
    description:string,
    image:string,
    agentprompt:string,
    voiceId?:string,
    subcriptionRequired?:boolean

}
type Props={
    doctorAgent:doctorAgent
}

function DoctorAgentCard({doctorAgent}:Props) {
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<doctorAgent | null>(null);
  const [note, setNote] = useState('');
  const router = useRouter();


  const {has}=useAuth();
  
  const paidUser = has && has({ plan: 'pro' });
  const onStartConsultation=async()=>{
        if (selectedDoctor?.subcriptionRequired && !paidUser) {
            alert('Subscription required for this doctor');
            return;
        }
        setLoading(true);
        const result=await axios.post('/api/session-chat',{
            notes:note,
            selectedDoctor:doctorAgent
        });
        console.log(result.data);
        if(result.data?.sessionId){
            console.log("Navigate to session chat page with id:",result.data.sessionId);
            router.push('/dashboard/medical-agents/'+result.data.sessionId);
        }
        setLoading(false);

    };
  return (
    <div className='relative'>
     { doctorAgent.subcriptionRequired && paidUser &&<Badge className='absolute p-1 right-0'>Premium</Badge>}
      <Image src={doctorAgent.image} alt={doctorAgent.specialist} width={100} height={100} />
      <h3 className='font-bold mt-1'>{doctorAgent.specialist}</h3>
      <p className='gap-2 line-clamp-2'>{doctorAgent.description}</p>
      <Button className='w-full mt-2' disabled={!paidUser && doctorAgent.subcriptionRequired} onClick={onStartConsultation}>Start Consult<ArrowRight className='ml-2' /></Button>
    </div>
  )
}

export default DoctorAgentCard
