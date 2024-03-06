

import { FaUser } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";
import { useCurrentUser } from "../../../hooks/use-current-user";
import { LogoutButton } from "../../../components/auth/logout-button";
import { IoExitOutline } from "react-icons/io5";
import Link from "next/link";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-[#4942E4]">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-70 p-3" align="end">
        <div className="flex">
          <div className="mr-2">
            <Avatar>
              <AvatarImage src={user?.image || ""} />
              <AvatarFallback className="bg-[#4942E4]">
                <FaUser className="text-white" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="block">
            <p>{user?.name}</p>
            <em className="text-sm">{user?.email}</em>
          </div>
          <div className="mx-3 rounded-full">
            <Link href="/profile">
              <HiPencilSquare className="text-[#4942E4] h-4 w-4 " />
            </Link>
          </div>
        </div>
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer mt-3">
            <IoExitOutline className="text-[#4942E4] h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
