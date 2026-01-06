import React from 'react'
import 
{
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter,
    TableCaption
  } from "@/components/ui/table"
  import { SessionDetail } from '../medical-agents/[sessionId]/page';
  import { Button } from '@/components/ui/button';
  import moment from 'moment';
import ViewReportDialog from './ViewReportDialog';

type Props=
{
    historyList:SessionDetail[]
}

function HistoryTable({historyList}:Props) {
  return (
    <div className="overflow-x-auto">
      <Table>
      <TableCaption>Previous Consultation Reports</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px] md:w-[200px]">AI medical Specialist</TableHead>
          <TableHead className='w-[150px] md:w-[200px]'>Description</TableHead>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead className="text-right w-[100px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        { historyList.map((record:SessionDetail,index:number)=>(
          <TableRow key={index}>
            <TableCell className="font-medium text-sm md:text-base">{record.selectedDoctor.specialist}</TableCell>
            <TableCell className="text-sm md:text-base max-w-[150px] md:max-w-none truncate">{record.notes}</TableCell>
            <TableCell className="text-sm md:text-base">{moment(new Date(record.createdOn)).fromNow()}</TableCell>   
            <TableCell className="text-right"><ViewReportDialog record={record} /></TableCell>
          </TableRow>   
        ))

        }
      </TableBody>
      
    </Table>
    </div>
  )
}

export default HistoryTable
