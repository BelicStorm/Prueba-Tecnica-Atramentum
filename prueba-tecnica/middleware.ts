import { withAuth } from "next-auth/middleware"

export default withAuth(
    {
        callbacks: {
            authorized: ({ token }) => token?.userRole === "admin",
        },
      }
)

export const config = { matcher: ["/users"] }