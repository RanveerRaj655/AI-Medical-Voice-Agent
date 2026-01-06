import React from 'react'
import HistoryList from './_components/HistoryList';
import { Button } from '@/components/ui/button';
import DoctorAgentList from './_components/DoctorAgentList';
import AddNewSessionDialog from './_components/AddNewSessionDialog';

function Dashboard() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-6">
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
            <h2 className='font-bold text-xl md:text-2xl'>
                My Dashboard
            </h2>
            <AddNewSessionDialog />
        </div>
        <HistoryList />
        <DoctorAgentList />
    </div>
  )
}

export default Dashboard
