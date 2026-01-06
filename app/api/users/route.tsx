import { usersTable } from '@/config/schema';
import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { db } from '@/config/db';

export async function POST(req: NextRequest) {
    const user=await currentUser();
    try{
        const users=await db.select().from(usersTable)
        .where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress!));
        if(users?.length==0){
            const result=await db.insert(usersTable).values({
                name:user?.fullName||'No Name',
                email:user?.primaryEmailAddress?.emailAddress||'No Email',
                credits:10
            }).returning();
        return NextResponse.json(result[0]as any);
        }
        return NextResponse.json(users[0]);
       
    }catch(err){
        return new Response(JSON.stringify({error:"Internal Server Error,unable to create user"}),{status:500});
    }

    }