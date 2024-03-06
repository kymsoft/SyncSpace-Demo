import { NextResponse } from "next/server";
import { db } from "../../../lib/db";


export async function GET() {
    try {
        const spaces = await db.space.findMany();
        return NextResponse.json(spaces, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Could not fetch spaces"}, {status: 500})
    }
}