
import "../../../globals.css";
import { Card } from "../../../../components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FC } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FolderGit } from "lucide-react";

interface SpaceCardProps {
  space: {
    name: string;
    
  }
}
const SpaceList: FC<SpaceCardProps> = ({space}) => {
  const {name} = space
  

  return (
      <div className="flex gap-2">
          <Link href={`/spaces/${name}`} className="text-md mt-2 flex gap-3">
          <FolderGit/> /{name}
          
          </Link>
      </div>

  );
};

export default SpaceList;
