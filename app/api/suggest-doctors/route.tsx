import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/config/OpenAIModel";
import { AIDoctorList } from "@/shared/list";
export async function POST(req: NextRequest) {
    const {notes} = await req.json();
    try {
        const completion = await openai.chat.completions.create({
            model: "google/gemini-2.5-flash-lite",
            messages: [
                {role:"system",content:JSON.stringify(AIDoctorList)},
                { role: "user", content: "User Notes/Symptoms:" + notes + "Depends on User notes and Symptoms, Suggest top 3 doctors,Return object in JSON only" }
            ],
        });

        const rawResponse = completion.choices[0].message;
        //@ts-ignore
        const Resp=rawResponse.content.trim().replace('```json','').replace('```','');  
        const parsedResponse=JSON.parse(Resp);
        return NextResponse.json(parsedResponse);  

    }
    catch (err) {
        return new Response(JSON.stringify({ error: "Internal Server Error, unable to fetch doctors" }), { status: 500 });
    }
}