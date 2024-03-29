import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(){
    const session = await getServerSession();

    return NextResponse.json({ 
        user: session?.user ?? "Not Logged In",
     })
}