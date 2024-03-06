"use client";

import { SubmitHandler } from "react-hook-form";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../../../components/ui/dialog";
import CreateSpace from "../../workspace/create-space-form";
import { FormInputPost } from "../../../../../types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";

const NewSpace = () => {
  const router = useRouter()
  const handleCreateSpace: SubmitHandler<FormInputPost> = (data) => {
    createSpace(data);
  };

  const {mutate: createSpace} =useMutation({
    mutationFn: (newSpace: FormInputPost) => {
      return axios.post('/api/create', newSpace)
    },
    onError: (error)=>{
      console.error(error);
    },
    onSuccess: () => {
      router.push('/home')
      router.refresh();
    },
  });

  return (
    <DialogContent className="sm:max-w-[425px] kilo">
      <DialogHeader>
        <DialogTitle>Create New Space</DialogTitle>
        <DialogDescription>Add a new space</DialogDescription>
      </DialogHeader>
      <CreateSpace submit={handleCreateSpace} />
    </DialogContent>
  );
};

export default NewSpace;
