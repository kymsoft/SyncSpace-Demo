import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
// import { useCurrentUser } from "../../../hooks/use-current-user";



export async function POST(req: Request) {
    const generateRandomString = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
      
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
      
        return result;
      };
      
      const randomString = generateRandomString();
      console.log(randomString);

    try {
        const body = await req.json()
        // const creator = useCurrentUser();
        const space = await db.space.create({
            data: {
                name: body.name,
                description: body?.description,
                tag: randomString,
                // user: {
                //     connect: { id: creator?.id },
                // },
            },
        });
        return NextResponse.json(space, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Could not create space"}, {status: 500})
    }
}