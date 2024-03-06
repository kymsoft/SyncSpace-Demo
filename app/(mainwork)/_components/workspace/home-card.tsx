"use client"
import "../../../globals.css";
import { Card } from "../../../../components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { FC } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface SpaceCardProps {
  space: {
    name: string;
    description: string | null;
  }
}
const HomeCard: FC<SpaceCardProps> = ({space}) => {
  const {name, description} = space
  
    const router = useRouter()
    const {mutate: deleteSpace} = useMutation({
      mutationFn: async () =>{
          return axios.delete(`/api/manager/${name}`)
      },
      onError: (error)=>{
        console.error(error);
      },
      onSuccess: () => {
        router.push('/home')
        router.refresh();
      },
})
  

  return (
    <Card className="w-[280px] shadow-lg bg-[#9400FF] border flex p-3 card">
      <div className="flex gap-2 w-[240px]">
        <div>
          <Avatar>
            <AvatarImage />
            <AvatarFallback className="bg-[#ffffff]">
              <FaUser className="text-[#4942E4]" />
            </AvatarFallback>
          </Avatar>
          <img src="/assets/file.png" alt="file" className="h-5 w-5 file_img" />
        </div>

        <div>
          <Link href={`/spaces/${name}`}>
          <p className="text-md font-bold text-white mt-2">/{name}</p>
          
          </Link>
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-5">
          <HiOutlineDotsVertical className="text-white " />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-30 p-1" align="end">
        <Link href={`/spaces/${name}`}><DropdownMenuItem>Open</DropdownMenuItem></Link>
          <DropdownMenuItem>Copy Link</DropdownMenuItem>
          <DropdownMenuItem><button onClick={()=>deleteSpace()}>Delete</button></DropdownMenuItem>
          <DropdownMenuItem>Share</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>

  );
};

export default HomeCard;
