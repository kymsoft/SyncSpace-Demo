import { FolderPlus, FolderTree, Home, MoonStar, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
import "../../globals.css";
import { Input } from "../../../components/ui/input";
// import Sidespace from "../_components/workspace/sidespace";

const Sidebar = () => {
  return (
    <aside className="h-screen relative left-0 h-[600px]">
      <nav className="flex h-full flex-col bg-white border-r shadow-md">
        <ul className="flex-1 px-2 py-3">
        <Link href="/home">
          <li
            className="w-[250px] relative flex gap-3 items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer 
                      hover:bg-[#4942E4] hover:text-white"
          >
            <Home />
            Home
          </li>
          </Link>
          <Link href="/settings">
          <li
            className="w-[250px] relative flex gap-3 items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer 
                      hover:bg-[#4942E4] hover:text-white"
          >
            <Settings />
             Settings
          </li>
          </Link>
          <li className="mt-12 text-center">
            <div>
              <button className="mr-3 folderplus">
                <FolderTree />
              </button>
              My Spaces
            </div>
          </li>
          <li className="text-center py-2">
            <Input
              placeholder="Search your space"
            />
          </li>
          <li>
            {/* <Sidespace/> */}
          </li>

          <div className="border-t flex p-3">
          <MoonStar />
        </div>
        </ul>
        {/* <div className="border-t flex p-3">
          <MoonStar />
        </div> */}
        
      </nav>
    </aside>
  );
};

export default Sidebar;
