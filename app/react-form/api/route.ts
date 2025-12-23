import { addEngineers } from "@/app/prisma-db";

export async function POST(request: Request) {
    const body = await request.json();
    const {name , email , engineering} = body;
    const engineer = await addEngineers(name , email , engineering )

    return new Response(JSON.stringify(engineer) , {
        headers: {"Content-Type": "application/json"},
    } )
}