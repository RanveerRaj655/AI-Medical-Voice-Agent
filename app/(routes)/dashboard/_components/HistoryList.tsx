'use client'
import React, { useState,useEffect } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AddNewSessionDialog from './AddNewSessionDialog';
import axios from 'axios';
import HistoryTable from './HistoryTable';
import { SessionDetail } from '../medical-agents/[sessionId]/page';
import { ChevronDown, ChevronUp, History } from 'lucide-react';



function HistoryList() {
    const [historyList, setHistoryList] = useState<SessionDetail[]>([]);
    const [isOpen, setIsOpen] = useState(false);

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
    <div className='mt-6 md:mt-10 mb-4'>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="w-full justify-between mb-4"
      >
        <div className="flex items-center gap-2">
          <History className="w-4 h-4" />
          <span>Consultation History ({historyList.length})</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </Button>

      {isOpen && (
        <div className="border rounded-lg p-4 bg-white shadow-sm">
          {
            historyList.length===0 ?
            <div className='flex items-center flex-col justify-center p-4 md:p-7 border border-dashed rounded-2xl border-2'>
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
      )}
    </div>
  )
}

export default HistoryList
