"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";

export const Social = () => {
  const onCLick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="items-center w-full space-y-3">
      <Button size="lg" className="w-full" variant="outline" onClick={() => onCLick("google")}>
        <FcGoogle className="h-5 w-5 mx-2" /> <span>Continue with Google</span>
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => onCLick("github")}>
        <FaGithub className="h-5 w-5 mx-2" />{" "}
        <span>Continue with Github</span>
      </Button>
    </div>
  );
};
