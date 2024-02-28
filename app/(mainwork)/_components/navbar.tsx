"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoReorderThreeOutline } from "react-icons/io5";

import { FaRegBell } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import { UserButton } from "./user-button";
import { NotificationButton } from "./notification-button";
import { AddSpaceButton } from "./add-space-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex w-full py-5 px-5 border-b shadow-md">
      <button
        onClick={() => {}}
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
        <NotificationButton/>
        <AddSpaceButton/>
        <UserButton/>
      </div>
    </nav>
  );
};
