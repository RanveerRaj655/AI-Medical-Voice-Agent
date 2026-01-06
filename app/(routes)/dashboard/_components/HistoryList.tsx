'use client'
import React, { useState,useEffect } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AddNewSessionDialog from './AddNewSessionDialog';
import axios from 'axios';
import HistoryTable from './HistoryTable';
import { SessionDetail } from '../medical-agents/[sessionId]/page';



function HistoryList() {
    const [historyList, setHistoryList] = useState<SessionDetail[]>([]);

    useEffect(() => {
      GetHistoryList();
    })
    const GetHistoryList=async()=>
    {
      const result=await axios.get('/api/session-chat?sessionId=all');
      console.log(result.data);
      setHistoryList(result.data);
    }
  return (
    <div className='mt-6 md:mt-10 mb-0.1'>
      {
        historyList.length===0 ? 
        <div className='flex items-center flex-col justify-center p-4 md:p-7 border border-dashed rounded-2xl border-2 mx-4 md:mx-0'>
            <Image 
            src={'/medical-assistant.png'}
            alt='No History'
            width={120}
            height={120}
            className="md:w-[150px] md:h-[150px]"
            />
            <h2 className='font-bold text-lg md:text-2xl mt-5 text-center'>No History Available</h2>
            <p className='text-gray-500 mt-2 text-center text-sm md:text-base px-4'>You have not consulted with any doctor yet.</p>
            <div className="mt-4">
              <AddNewSessionDialog />
            </div>
        </div>
        :
        <div>
            <HistoryTable historyList={historyList}/>
        </div>
      }
    </div>
  )
}

export default HistoryList
