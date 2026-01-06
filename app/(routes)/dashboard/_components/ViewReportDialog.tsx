import React from 'react'
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
import { Button } from '@/components/ui/button';
import { SessionDetail } from '../medical-agents/[sessionId]/page';
import moment from 'moment';
type props=
{
    record:SessionDetail
}

function ViewReportDialog({record}:props) {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button variant={'link'} size={'sm'}>View Report</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle asChild><h2 className='text-center text-2xl'>
                            AI Medical Voice Agent Report
                        </h2>
                            </DialogTitle>
                        <DialogDescription asChild>
                            <div>
                                <h2 className='font-bold text-blue text-lg'>Medical Report</h2>
                                <div className='space-y-2'>
                                    <h2><strong>Agent:</strong> {record.report?.agent || 'N/A'}</h2>
                                    <h2><strong>Chief Complaint:</strong> {record.report?.["chief Complaint"] || 'N/A'}</h2>
                                    <h2><strong>Duration:</strong> {record.report?.duration || 'N/A'}</h2>
                                    <h2><strong>Medications Mentioned:</strong> {record.report?.["medications Mentioned"] ? record.report["medications Mentioned"].join(', ') : 'None'}</h2>
                                    <h2><strong>Recommendations:</strong> {record.report?.recommendations ? record.report.recommendations.join(', ') : 'None'}</h2>
                                    <h2><strong>Session ID:</strong> {record.report?.sessionid || record.sessionId}</h2>
                                    <h2><strong>Severity:</strong> {record.report?.severity || 'N/A'}</h2>
                                    <h2><strong>Summary:</strong> {record.report?.summary || 'N/A'}</h2>
                                    <h2><strong>Symptoms:</strong> {record.report?.symptoms ? record.report.symptoms.join(', ') : 'None'}</h2>
                                    <h2><strong>Timestamp:</strong> {record.report?.timestamp ? moment(record.report.timestamp).format('MMMM Do YYYY, h:mm:ss a') : 'N/A'}</h2>
                                    <h2><strong>User:</strong> {record.report?.user || 'N/A'}</h2>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ViewReportDialog

