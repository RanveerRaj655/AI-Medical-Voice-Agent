'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { doctorAgent } from './DoctorAgentCard';
import DoctorAgentCard from './DoctorAgentCard';
import SuggestedDoctorCard from './SuggestedDoctorCard';
import { useRouter } from 'next/navigation';
import { useUser,useAuth } from '@clerk/nextjs';



function AddNewSessionDialog() {
    const [note, setNote] = useState('');
    const [loading, setLoading] = useState(false);
    const [suggestedDoctors, setSuggestedDoctors] = useState<doctorAgent[]>([]);
    const [selectedDoctor, setSelectedDoctor] = useState<doctorAgent | null>(null);
    const router = useRouter();
    const {has}=useAuth();
      
      const paidUser = has?.({ plan: 'pro' });
    const OnClickNext = async () => {
        setLoading(true);
        const result = await axios.post('/api/suggest-doctors', {
            notes: note
        });
        console.log(result.data);
        setSuggestedDoctors(result.data || []);
        setLoading(false);
    }

    const onStartConsultation=async()=>{
        if (selectedDoctor?.subcriptionRequired && !paidUser) {
            alert('Subscription required for this doctor');
            return;
        }
        setLoading(true);
        const result=await axios.post('/api/session-chat',{
            notes:note,
            selectedDoctor:selectedDoctor
        });
        console.log(result.data);
        if(result.data?.sessionId){
            console.log("Navigate to session chat page with id:",result.data.sessionId);
            router.push('/dashboard/medical-agents/'+result.data.sessionId);
        }
        setLoading(false);

    };
    return (
        <Dialog>
            <DialogTrigger>
                <Button className='mt-5' disabled={!paidUser}>+ start a conversation</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Basic details</DialogTitle>
                    <DialogDescription asChild>
                        {suggestedDoctors.length === 0 ?
                            <div>
                                <h2>
                                    Add symptoms you are experiencing or any other details.
                                </h2>
                                <Textarea placeholder='Add details here' className='mt-1 h-[150px]' value={note}
                                    onChange={(e) => setNote(e.target.value)} />
                            </div> :
                            <div>
                                <h2 className='font-bold text-lg mb-4'>Suggested Doctors</h2>
                                <div className='grid grid-cols-3 gap-5'>
                                    {
                                        suggestedDoctors.map((doctor, index) => (
                                            <SuggestedDoctorCard key={index} doctorAgent={doctor}
                                                setSelectedDoctor={() => setSelectedDoctor(doctor)}
                                                selectedDoctor={selectedDoctor} />
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button variant={'outline'}>Cancel</Button>
                    </DialogClose>
                    {suggestedDoctors.length === 0 ?
                        <Button disabled={!note || loading} onClick={() => OnClickNext()}>
                            {loading && <Loader2 className='animate-spin' />}
                            Next <ArrowRight className='ml-2' /> </Button>
                        :
                        <Button disabled={loading||!selectedDoctor} onClick={()=>onStartConsultation()}>
                            {loading && <Loader2 className='animate-spin' />}
                            Start Consultation
                            <ArrowRight className='ml-2' /></Button>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddNewSessionDialog

