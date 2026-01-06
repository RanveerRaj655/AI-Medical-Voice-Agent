import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { openai } from "@/config/OpenAIModel";
import { AIDoctorList } from "@/shared/list";
import { Session } from "inspector/promises";
import { SessionChatTable } from "@/config/schema";
import { report } from "process";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
const Report_GEN_PROMPT=`You are an Al Medical Voice Agent that just finished a voice conversation with a user. 
Based on the doctor ai agent info and conversation between user and agent, generate a structured report with the following fields:

1. sessionld: a unique session identifier
2. agent: the medical specialist name (e.g., "General Physician Al")
3. user: name of the patient or "Anonymous" if not provided
4. timestamp: current date and time in ISO format
5. chiefComplaint: one-sentence summary of the main health concern
6. summary: a 2-3 sentence summary of the conversation, symptoms, and recommendations
7. symptoms: list of symptoms mentioned by the user
8. duration: how long the user has experienced the symptoms
9. severity: mild, moderate, or severe
10. medications Mentioned: list of any medicines mentioned
11. recommendations: list of Al suggestions (e.g., rest, see a doctor)
Return the result in this JSON format:
{
"sessionid": "string".
"agent": "string".
"user": "string",
"timestamp": "ISO Date string",
"chief Complaint": "string".
"summary": "string".
"symptoms": ["symptom1", "symptom2"],
"duration": "string",
"severity": "string",
"medications Mentioned": ["med1", "med2"],
"recommendations": ["rect", "rec2"],
}
Only include valid fields. Respond with nothing else.`;


export async function POST(req: NextRequest) {
    const {sessionId,sessionDetail,messages} = await req.json();
    try {
        const UserInput="AI Doctor Agent Info:"+JSON.stringify(sessionDetail)+", conversation :"+JSON.stringify(messages);
        const completion = await openai.chat.completions.create({
            model: "google/gemini-2.5-flash-lite",
            messages: [
                {role:"system",content:Report_GEN_PROMPT},
                { role: "user", content: UserInput }
            ],
        });
        const rawResponse = completion.choices[0].message;
        //@ts-ignore
        const resp=rawResponse.content.trim().replace('```json','').replace('```','');
        const JSONResp=JSON.parse(resp);
        const result=await db.update(SessionChatTable).set({
            report:JSONResp,
            conversation:messages
        }).where(eq(SessionChatTable.sessionId,sessionId!));
        return NextResponse.json(JSONResp);  
    }
    catch (err) {
        return new Response(JSON.stringify({ error: "Internal Server Error, unable to generate report" }), { status: 500 });
    }
}