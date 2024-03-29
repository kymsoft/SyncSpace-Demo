"use client";

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  backButtonRequest: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  backButtonRequest,
  showSocial,
}: CardWrapperProps) => {
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
        <BackButton
          href={backButtonHref}
          label={backButtonLabel}
          request={backButtonRequest}
        />
      </CardFooter>
    </Card>
  );
};
