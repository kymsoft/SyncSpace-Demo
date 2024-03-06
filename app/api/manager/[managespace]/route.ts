import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
// import { useCurrentUser } from "../../../hooks/use-current-user";

interface contextProps{
    params: {
        managespace: string
    }
}

export async function DELETE(req: Request, context: contextProps) {
    try {
        const {params} = context;
        console.log(params.managespace)
        await db.space.delete({
            where: {
                name: params.managespace,
            }
        });
        return new Response(null, {status: 204})
    } catch (error) {
        return NextResponse.json({message: "Could not delete space"}, {status: 500})
    }
}

export async function PATCH(req: Request, context: contextProps) {
    try {
        const {params} = context;
        const body = await req.json();
    
        await db.space.update({
            where: {
                id: params.managespace
            }, 
            data: {
                name: body.name,
                description: body.description,
            }
        });
        return NextResponse.json({message: "Update Successful"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Could not delete space"}, {status: 500})
    }
}