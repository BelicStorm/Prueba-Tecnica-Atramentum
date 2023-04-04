"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import Header from "../../components/LayoutComponents/nav.component";
import '../../styles/globals.css';
import ErrorBoundary from "../../components/ErrorHandlers/ErrorBoundary.component";

interface Props {
    children:ReactNode
}

export default function RootLayout({ children }:Props) {
  return (
    <html>
      <head />
      <body className="bg-black">
      <ErrorBoundary>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </ErrorBoundary>
        
      </body>
    </html>
  );
}