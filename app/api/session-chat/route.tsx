import { uuid } from "drizzle-orm/gel-core";
import { Session } from "inspector/promises";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { SessionChatTable } from "@/config/schema";
import { v4 as uuidv4 } from 'uuid';
import { currentUser } from "@clerk/nextjs/server";
import { Search } from "lucide-react";
import { eq } from 'drizzle-orm';
import { desc } from 'drizzle-orm';
import { useAuth } from "@clerk/nextjs";
export async function POST(req: NextRequest) {
    const{notes,selectedDoctor}=await req.json();
    const user=await currentUser();
    try{
        // Check subscription if required
        if (selectedDoctor?.subcriptionRequired) {
            const {has}=useAuth();              
              const paidUser = has?.({ plan: 'pro' });
            if (!paidUser) {
                return NextResponse.json({ error: 'Subscription required for this doctor' }, { status: 403 });
            }
        }
        const sessionId=uuidv4();
        const result=await db.insert(SessionChatTable).values({
            sessionId:sessionId,
            createdBy:user?.primaryEmailAddress?.emailAddress!,
            createdOn:new Date().toISOString(),
            selectedDoctor:selectedDoctor,
            notes:notes,
            //@ts-ignore
        }).returning();
        return NextResponse.json(result[0]);
    }
    catch(err){
        return new Response(JSON.stringify({error:"Internal Server Error,unable to create session"}),{status:500});
    }
}

export async function GET(req:NextRequest){
    try{
        const {searchParams}=new URL(req.url);
        const sessionId=searchParams.get('sessionId');
        console.log("Fetching session for id:",sessionId);
        const user=await currentUser();

        if(sessionId=='all')
        {
            const result=await db.select().from(SessionChatTable)
            //@ts-ignore
            .where(eq(SessionChatTable.createdBy,user?.primaryEmailAddress?.emailAddress!))
            .orderBy(desc(SessionChatTable.id));
            return NextResponse.json(result);
        }
        const result=await db.select().from(SessionChatTable)
        //@ts-ignore    
        .where(eq(SessionChatTable.sessionId,sessionId!))
        console.log("DB Result:",result);
        
        return NextResponse.json(result[0]);
    }
    catch(err){
        return new Response(JSON.stringify({error:"Internal Server Error, unable to fetch session"}),{status:500});
    }
}