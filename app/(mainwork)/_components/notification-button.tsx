

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Bookmark } from "lucide-react";

export const NotificationButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="hover:bg-[#BADAF7] p-1 rounded-full active:bg-[#BADAF7]">
          <Bookmark className="text-2xl text-[#4942E4]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50" align="end">
        <DropdownMenuItem>No marked documents</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
