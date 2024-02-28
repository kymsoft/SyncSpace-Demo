"use client"


import * as z from "zod";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../../../components/ui/dialog";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, 
} from "../../../../../components/ui/form";
import { useForm } from "react-hook-form";
import { NewSpaceSchema } from "../../../../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createspace } from "../../../../../actions/create-space";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FormError } from "../../../../../components/form-error";
import { FormSuccess } from "../../../../../components/form-success";



const NewSpace = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const router = useRouter()

  const form = useForm<z.infer<typeof NewSpaceSchema>>({
    resolver: zodResolver(NewSpaceSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewSpaceSchema>) => {
    
      // createspace(values)
         
    console.log(values)
  }


  return (
    <DialogContent className="sm:max-w-[425px] kilo">
      <DialogHeader>
        <DialogTitle>Create New Space</DialogTitle>
        <DialogDescription>Add a new space</DialogDescription>
      </DialogHeader>
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
      
    </DialogContent>
  );
};

export default NewSpace;
