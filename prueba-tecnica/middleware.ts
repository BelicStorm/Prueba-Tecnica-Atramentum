import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {
        if (req.nextUrl.pathname === "/" && req.nextauth.token) {
            return NextResponse.redirect(
                `${req.nextUrl.origin}/users`
            );
        }
    },
    {
        callbacks: {
            authorized: ({ token, req}:any) => {     
                const isAuthorized = req.nextUrl.pathname === "/" || token?.userRole === "admin"  
                console.log([req.nextUrl.pathname,req.nextUrl.pathname === "/",token?.userRole === "admin" ]);
                
                return isAuthorized
            },
            
        },
      }
)

// export const config = { matcher: ["/users"] }