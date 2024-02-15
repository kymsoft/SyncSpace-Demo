"use client";
import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button"


const LandNav = () => {
  const [header, setHeader] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const toogleNavbar = (): void => {
    setIsClick(!isClick);
  };
  const scrollHeader = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <div
      className={
        header
          ? "fixed w-[100%] bg-[#0D1117] border-b-20 border-black shadow-2xl"
          : "bg-[transparent]"
      }
    >
      <nav className="flex flex-between w-full py-5 px-10">
        <div>
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/assets/sync.png"
              alt="SyncSpace Logo"
              width={35}
              height={35}
              className=""
            />
            <p className="logo_text text-2xl">SyncSpace</p>
          </Link>
        </div>

        <div className="flex gap-5 flex-center justify-center ml-12 nav_text hidden md:block">
          <Link href="#features" className="hover:text-blue-500 mx-3">
            <div className="group inline-block">
              <p className=" text-md inline-block relative group">
                Features
                <span className="before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"></span>
              </p>
            </div>
          </Link>
          <Link href="#team" className="hover:text-blue-500 mx-3">
            <div className="group inline-block">
              <p className=" text-md inline-block relative group">
                Team
                <span className="before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"></span>
              </p>
            </div>
          </Link>
          <Link href="#contacts" className="hover:text-blue-500 mx-3">
            <div className="group inline-block">
              <p className=" text-md inline-block relative group">
                Contact and Support
                <span className="before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"></span>
              </p>
            </div>
          </Link>
        </div>
        <div className="absolute right-2 mt-1 flex gap-3 mx-3 hidden md:block">
          <Link href="/auth/signin">
            <Button className="bg-[#4942E4] rounded-2xl px-3 py-1 ml-3 mr-1.5">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="bg-[#9400FF] rounded-2xl px-3 py-1 mr-3 ml-1.5">
              Sign Up
            </Button>
          </Link>
        </div>
        <div className="md:hidden absolute right-2">
          <Button
            className="inline-flex items-center justify-center p-2 rounded-md
          focus:outline-none "
            onClick={toogleNavbar}
          >
            {isClick ? (
              <ImCross height={20} className="text-2xl" />
            ) : (
              <IoReorderThreeOutline className="text-2xl" />
            )}
          </Button>
        </div>
        {isClick && (
          <div className="md:hidden ml-auto w-full mt-10 p-4 rounded-md absolute left-0 right-0 shadow-md transition-all duration-1000 ease-in-out max-h-96 overflow-y-auto">
            <div className="px-2 pt-2 pb-2 space-y-3 sm:px-3 ">
              <Link href="#features" className="hover:text-blue-500 mx-3 block">
                <div className="group inline-block">
                  <p className=" text-md inline-block relative group">
                    Features
                    <span className="before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"></span>
                  </p>
                </div>
              </Link>
              <Link href="#team" className="hover:text-blue-500 mx-3 block">
                <div className="group inline-block">
                  <p className=" text-md inline-block relative group">
                    Team
                    <span className="before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"></span>
                  </p>
                </div>
              </Link>
              <Link href="#contacts" className="hover:text-blue-500 mx-3 block">
                <div className="group inline-block">
                  <p className=" text-md inline-block relative group">
                    Contact and Support
                    <span className="before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"></span>
                  </p>
                </div>
              </Link>
              <div className="w-full">
                <Link href="/auth/signin">
                  <Button className="bg-[#4942E4] w-full rounded-2xl px-3 py-1 ">
                    Sign In
                  </Button>
                </Link>
              </div>
              <div className="w-full">
                <Link href="/auth/signup">
                  <Button className="bg-[#9400FF] w-full rounded-2xl px-3 py-1 ">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default LandNav;
