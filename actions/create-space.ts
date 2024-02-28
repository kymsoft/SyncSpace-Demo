"use server"

import * as z from "zod"
import {v4 as uuidv4} from "uuid";
import { db } from "../lib/db"
import { NewSpaceSchema } from "../schemas"
export const createspace = async (values: z.infer<typeof NewSpaceSchema>)=>{
    const validatedFields = NewSpaceSchema.safeParse(values);

    if(!validatedFields.success){
        return{error: "Invalid Fields"}
    }

    const { name, description, tag } = validatedFields.data;
    const spaceTag = uuidv4();
    spaceTag == tag;


    await db.space.create({
        data: {
            name,
            description,
            tag: spaceTag,
        }
    });

    return {success: "Created"}
}