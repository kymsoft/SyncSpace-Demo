"use client";

import { FC } from "react";

import BackButton from "../../../../components/back-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { DataTableDemo } from "../../_components/documents/docs";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

interface SpaceDetailsProps {
  params: {
    spaces: string;
  };
}

const SpaceDetails: FC<SpaceDetailsProps> = ({ params }) => {
  const name = decodeURIComponent(params.spaces);
  const router = useRouter();
  const { mutate: deleteSpace } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/manager/${name}`);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/home");
      router.refresh();
    },
  });

  return (
    <div>
      <div className="flex">
        <BackButton />
        <div className="ml-4">
          <h2 className="text-lg">/{name}</h2>
        </div>
        <div className="absolute right-5">
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-5 text-lg">
              <HiOutlineDotsVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-30 p-1" align="end">
              <DropdownMenuItem>Copy Link</DropdownMenuItem>
              <button className="w-full" onClick={() => deleteSpace()}>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </button>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className=" mt-2 md:mx-60">
        <ScrollArea className="min-[320px]:text-center max-[600px]:w-90 whitespace-nowrap rounded-md p-5 border">
          <DataTableDemo />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default SpaceDetails;
