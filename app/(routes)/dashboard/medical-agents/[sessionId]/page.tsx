'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { doctorAgent } from '../../_components/DoctorAgentCard';
import { Circle, Loader, PhoneCall, PhoneOff } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Vapi from '@vapi-ai/web';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"

export type SessionDetail = {
  id: string,
  notes: string,
  sessionId: string,
  report: any,
  selectedDoctor: doctorAgent,
  createdOn: string
}

type messages = {
  role: string,
  text: string
}
function MedicalVoiceAgent() {

  const { sessionId } = useParams();
  const [sessionDetail, setSessionDetail] = useState<SessionDetail>();
  const [callStarted, setCallStarted] = useState(false);
  const [vapiInstance, setVapiInstance] = useState<any>();
  const [currentRole, setCurrentRole] = useState<string | null>();
  const [liveTranscript, setLiveTranscript] = useState<string>("");
  const [messages, setMessages] = useState<messages[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  useEffect(() => {
    sessionId && GetSessionDetails();

  }, [sessionId]);

   const GetSessionDetails = async () => {
    try {
      const result = await axios.get('/api/session-chat?sessionId=' + sessionId);
      console.log(result.data);
      setSessionDetail(result.data);
    }
    catch (err) {
      console.log("Error fetching session details", err);
    }
  }

  const StartCall = () => {
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
    setVapiInstance(vapi);


    vapi.start(process.env.NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID);
    vapi.on('call-start', () => {
      console.log('Call started')
      setCallStarted(true);
    });

    vapi.on('call-end', () => {
      console.log('Call ended')
      setCallStarted(false);
    });

    vapi.on('message', (message) => {
      if (message.type === 'transcript') {
        const { role, transcriptType, transcript } = message;
        console.log(`${message.role}: ${message.transcript}`);
        if (transcriptType === 'partial') {
          setLiveTranscript(transcript);
          setCurrentRole(role);
        }
        else if (transcriptType === 'final') {
          // Final transcript
          setMessages((prev: any) => [...prev, { role: role, text: transcript }]);
          setLiveTranscript("");
          setCurrentRole(null);
        }

      }
    });
    vapi.on('speech-start', () => {
      console.log('Assistant started speaking');
      setCurrentRole('assistant');
    });
    vapi.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setCurrentRole('user');
    });


  }
  const endCall = async() => {
    setLoading(true);
    if (!vapiInstance) return;
    console.log(vapiInstance)

    vapiInstance.stop();
    vapiInstance.removeAllListeners('call-start');
    vapiInstance.removeAllListeners('call-end');
    vapiInstance.removeAllListeners('message');
    vapiInstance.removeAllListeners('speech-start');
    vapiInstance.removeAllListeners('speech-end');
    setCallStarted(false);
    setVapiInstance(null);
    const result = await GenerateReport();
    setLoading(false);
    toast.success("Report Generated");
    router.replace('/dashboard');

  }

  const GenerateReport = async () => {
    const result = await axios.post('/api/medical-report', {
      messages: messages,
      sessionDetails: sessionDetail,
      sessionId: sessionId
    });
    console.log("Report Generated:", result.data);
    return result.data;
  }
  return (
    <div className='p-10 border rounded-3xl bg-secondary'>
      <div className='flex justify-between items-center'>
        <h2 className='p-1 px-2 border rounded-md flex gap-2 items-center'>
          <Circle className={`h-4 w-4 rounded-full' ${callStarted ? 'bg-green-600' : 'bg-red-600'}`} />{callStarted ? 'Connected...' : 'Not Connected'} </h2>
        <h2 className='font-bold text-gray-400'>00:00</h2>
      </div>

      {sessionDetail && <div className='flex items-center flex-col mt-10'>
        <Image src={sessionDetail?.selectedDoctor?.image}
          alt={sessionDetail?.selectedDoctor?.specialist}
          width={120} height={120}
          className='h-[100px] w-[100px] object-cover rounded-full' />
        <h2 className='font-bold text-2xl mt-4'>{sessionDetail?.selectedDoctor?.specialist}</h2>
        <p className='text-center mt-2 px-5'>AI medical Voice</p>

        <div className='mt-12 overflow-y-auto pl-80 pr-80 flex flex-col items-centerpx-10 md:px-28 lg:px-52 xl:px:72 '>
          {
            messages?.map((msg: messages, index) => (
              <div key={index} className='mt-2'>
                <h2 className='text-gray-600' key={index}> {msg.role}: {msg.text}</h2>
              </div>
            ))}
          {liveTranscript && liveTranscript?.length > 0 && <h2 className='text-lg text-center'> {currentRole}:{liveTranscript}</h2>}

          
        </div>



        {!callStarted ? (<Button className='mt-20' onClick={StartCall} 
           disabled={loading}>{loading ? <Loader className='animate-spin' /> : <PhoneCall />} Start Call</Button>
        )
          : (<Button variant={'destructive'} onClick={endCall} disabled={loading}>
            {loading ? <Loader className='animate-spin' /> : <PhoneOff />}Disconnect</Button>
          )}

      </div>


      }
    </div>
  )
}


export default MedicalVoiceAgent
