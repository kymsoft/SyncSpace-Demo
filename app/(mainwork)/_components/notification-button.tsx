"use client";

import { FaRegBell } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

export const NotificationButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="hover:bg-[#BADAF7] p-1 rounded-full active:bg-[#BADAF7]">
          <FaRegBell className="text-2xl text-[#4942E4]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem>No notifications yet</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
