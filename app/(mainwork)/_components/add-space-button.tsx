"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
} from "../../../components/ui/dialog"
import { TiPlus } from "react-icons/ti";
import NewSpace from "./@modal/new-space/page";
import ImportSpace from "./@modal/import-space/page";

export const AddSpaceButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="hover:bg-[#BADAF7] p-1 rounded-full">
          <TiPlus className="text-2xl text-[#4942E4]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        
          <Dialog>
            <DialogTrigger asChild className="hover:bg-[#BADAF7] p-2 rounded-md">
              <div className="w-full cursor-pointer">
                 <button> New Space</button>
              </div>
            </DialogTrigger>
            <NewSpace/>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild className="hover:bg-[#BADAF7] p-2 rounded-md">
            <div className="w-full cursor-pointer">
                 <button> Import Space</button>
              </div>
            </DialogTrigger>
            <ImportSpace/>
          </Dialog>
        
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
