"use server"

import * as z from "zod"
import {v4 as uuidv4} from "uuid";
import { db } from "../lib/db"
import { NewSpaceSchema } from "../schemas"
import { NextApiRequest, NextApiResponse } from "next";
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











<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 grid gap-4 py-4">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel>Space Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter the space name"
                      className="col-span-3"

                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          
          
          <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel>Description <span className="text-sm font-light">(optional)</span></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="...."
                      className="col-span-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <Button type="submit" className="bg-[#4942E4] hover:bg-[#1A1679]">
            Create
          </Button>
    
        </form>
        </Form>








        const [form, setForm] = useState<FormData>({
          name: "",
          description: "",
          tag: "",
        });
      
        async function create(data: FormData){
          try {
            fetch('http://localhost:3000/api/create', {
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
            }).then(() => setForm({name: '', description: '', tag:''}))
          } catch (error) {
            console.log(error);
          }
        }
      
        const handleSubmit = async(data: FormData) => {
          try {
            create(data)
          } catch (error) {
            console.log(error)
          }
        }



        
import { db } from "../../../lib/db";
import { v4 as uuidv4 } from "uuid";


export default async function POST(req: Request) {
    
        const { name, description } = req.body;

        
        const spaceTag = uuidv4();

        try {
            
            await db.space.create({
                data: {
                    name,
                    description,
                    tag: spaceTag,
                },
            });

        
            res.status(200).json({ message: "Space Created" });
        } catch (error) {
    
            console.log("Something went wrong", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
}

      