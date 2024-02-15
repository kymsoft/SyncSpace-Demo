"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps{
    href: string;
    label: string;
}

export const BackButton = (
    {
        href,
        label
    }: BackButtonProps
) => {
  return (
    <>
    <p className="font-normal w-auto text-sm">Don't have an account?</p>
     <Button
      variant="link"
      className="w-auto text-[#9400FF] text-sm"
      asChild
    >
        <Link href={href}>
           {label}
        </Link>

    </Button>
    </>
   
  )
}
