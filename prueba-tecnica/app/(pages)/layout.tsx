"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import Header from "../../components/LayoutComponents/nav.component";

interface Props {
    children:ReactNode
}

export default function RootLayout({ children }:Props) {
  return (
    <html>
      <head />
      <body>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}