"use client"
import { useState } from "react";
import Sidebar from "./@sidebar/page";
import Providers from "./_components/Providers";
import { usePathname } from "next/navigation";
import { IoReorderThreeOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { NotificationButton } from "./_components/notification-button";
import { AddSpaceButton } from "./_components/add-space-button";
import { UserButton } from "./_components/user-button";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isClick, setIsClick] = useState(true);
  const toogleSidebar = (): void => {
    setIsClick(!isClick);
  };
  return (
    <Providers>
      <div className="h-screen">
      <nav className="flex w-full py-5 px-5 border-b shadow-md">
        <button
          onClick={toogleSidebar}
          className="mr-2 hover:bg-[#BADAF7] p-1 rounded-full"
        >
          <IoReorderThreeOutline height={20} className="text-2xl" />
        </button>

        <div>
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/assets/sync.png"
              alt="SyncSpace Logo"
              width={30}
              height={25}
              className="mx-1"
            />
            <p className="logo_text text-2xl">SyncSpace</p>
          </Link>
        </div>
        <div className="flex gap-x-3 absolute right-2 mr-2">
          <NotificationButton />
          <AddSpaceButton />
          <UserButton />
        </div>
      </nav>

      <div className="flex">
        {isClick &&
          <Sidebar/>
        }
        <div className="p-5 ">
          {children}
          </div>
        
      </div>

      </div>
            
    </Providers>
  );
};

export default MainLayout;
