import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "../auth";

export const metadata = {
  title: {
    absolute: "",
    default: "Home - SyncSpace",
    template: "%s | SyncSpace",
    
  },
  description: "Final Year Project",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}
