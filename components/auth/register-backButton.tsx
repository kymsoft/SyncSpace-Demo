"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface RegBackButtonProps {
  href: string;
  label: string;
}

export const RegBackButton = ({ href, label }: RegBackButtonProps) => {
  return (
    <>
      <p className="font-normal w-auto text-sm">Already have an account?</p>
      <Button variant="link" className="w-auto text-[#4942E4] text-sm" asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </>
  );
};
