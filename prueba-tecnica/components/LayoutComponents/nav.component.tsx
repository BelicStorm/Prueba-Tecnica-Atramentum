import React from "react";

import { useSession, signOut, signIn } from "next-auth/react";

const Header = () => {
  const { data } = useSession();
  // console.log();
  
  return (
    <div className="w-full mx-auto bg-black border-b border-grey-600 justify-center">
      <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between max-w-9xl mx-auto px-8 
                    py-2 " x-data="{ open: false }">
        {data?.user ? (
          <nav className="flex-grow justify-between items-center flex flex-row mt-0 gap-3 gap-6 p-0 px-0 opacity-100">
            <div className="flex items-center flex-row justify-between">
              <a href="/" className="group block flex-shrink-0">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p
                      className="uppercase italic font-medium text-white group-hover:text-gray-300">
                      Prueba Tecnica
                    </p>
                  </div>
                </div>
              </a>
            </div >
            <span className="cursor-pointer font-bold text-white text-sm duration-200 ease-in-out focus:outline-none focus:shadow-none focus:text-white/5 hover:text-white my-0 py-2 transition"
              onClick={() => signOut()} >
              Logout
            </span>
          </nav>
        ) : (
          <nav className="flex-grow justify-between items-center flex flex-row mt-0 gap-3 gap-6 p-0 px-0 opacity-100">
            <div className="flex items-center flex-row justify-between text-white">
              <a href="/" className="group block flex-shrink-0">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="uppercase italic font-bold text-white group-hover:text-gray-300">
                      Prueba Tecnica
                    </p>
                  </div>
                </div>
              </a>
            </div >
            <span className="cursor-pointer font-bold text-white/60 text-sm duration-200 ease-in-out focus:outline-none focus:shadow-none focus:text-white/5 hover:text-white my-0 py-2 transition"
              onClick={() => signIn()} >
              Login
            </span>
          </nav>
        )}
      </div >
    </div >
  )
};

export default Header;