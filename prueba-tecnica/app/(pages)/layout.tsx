"use client";

import React, { ReactNode, useRef } from "react";
import { SessionProvider } from "next-auth/react";
import Header from "../../components/LayoutComponents/nav.component";
import '../../styles/globals.css';
import ErrorBoundary from "../../components/ErrorHandlers/ErrorBoundary.component";
import { ToastPortal } from "../../components/ToasterComponents";

interface Props {
  children: ReactNode
}

export const ToasterContext = React.createContext<any>(null);

export default function RootLayout({ children }: Props) {
  const toastRef = useRef();

  return (
    <html>
      <head />
      <body className="bg-black">
        <ErrorBoundary>
          <SessionProvider>
            <ToasterContext.Provider value={toastRef}>
              <Header />
              {children}
            </ToasterContext.Provider>
            <ToastPortal ref={toastRef} autoClose={false} />
          </SessionProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}