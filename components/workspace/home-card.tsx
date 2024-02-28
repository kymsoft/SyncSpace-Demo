import "../../app/globals.css"
import { Card } from "../ui/card";
import { SpaceHeader } from "./space-headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaUser } from "react-icons/fa";

interface HomeCardProps {
  spaceLabel: string;
  profileImage: string;
}

const HomeCard = ({ spaceLabel, profileImage }: HomeCardProps) => {
  return (
    <Card className="w-[300px] h-[64px] shadow-md bg-[#9400FF] border-none flex p-3">
      <div className="flex gap-2 w-[240px]">
        <div>
        <Avatar>
          <AvatarImage src={profileImage} />
          <AvatarFallback className="bg-[#ffffff]">
            <FaUser className="text-[#4942E4]" />
          </AvatarFallback>
          
        </Avatar>
        <img src="/assets/file.png" alt="file" className="h-5 w-5 file_img"/>
        </div>
        
        <SpaceHeader label={spaceLabel} />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-5">
          <HiOutlineDotsVertical className="text-white " />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-30 p-1" align="end">
          <DropdownMenuItem>Delete</DropdownMenuItem>
          <DropdownMenuItem>Share</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
};

export default HomeCard;
