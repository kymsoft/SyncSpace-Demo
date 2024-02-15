"use client";

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Header } from "./header";
import { RegBackButton } from "./register-backButton";
import { Social } from "./social";

interface RegCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const RegCardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: RegCardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md bg-[#ffffff] border-none">
      <CardHeader className="text-center">
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {
        showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
        )
      }
      <CardFooter>
        <RegBackButton
          href={backButtonHref}
          label={backButtonLabel}
        />
      </CardFooter>
    </Card>
  );
};
