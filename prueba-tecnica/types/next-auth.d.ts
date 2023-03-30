import NextAuth from "next-auth";


declare module "next-auth" {
        interface Session {
            user:{
                message: string,
                user: {
                    username: string,
                },
                token:string
            }
        }
}