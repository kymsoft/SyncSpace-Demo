"use client";

import { FC, useState } from "react";
import {
  DialogFooter,
} from "../../../../components/ui/dialog";
import { FormMessage } from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { Button } from "../../../../components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputPost } from "../../../../types";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>
}

const CreateSpace: FC<FormPostProps> = ({ submit }) => {
  const {register, handleSubmit} = useForm<FormInputPost>();


  
  return (
    
      <form
        onSubmit={handleSubmit(submit)}
        className="space-y-6 grid gap-4 py-4"
      >
        <div className="grid grid-cols-4 items-center gap-4">
          <Label>Space Name</Label>
          <Input
            type="text"
            {...register("name", {required: true})}
            placeholder="Enter your space name"
            className="col-span-3"
          />
          
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label>
            Description <span className="text-sm font-light">(optional)</span>
          </Label>
          <Textarea
          {...register("description")}
            placeholder="Enter your space name"
            className="col-span-3"
          />
        
        </div>
        <DialogFooter>
        <Button type="submit" className="bg-[#4942E4] hover:bg-[#1A1679]">
          Create
        </Button>
        {/* <FormMessage/> */}
      </DialogFooter>
      </form>
    
  );
};

export default CreateSpace;
