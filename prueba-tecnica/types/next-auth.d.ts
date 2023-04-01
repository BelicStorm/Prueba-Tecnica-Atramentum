import NextAuth from "next-auth";


declare module "next-auth" {
        interface Session {
            token:string,
            user:{
                message: string,
                user: {
                    username: string,
                },
                token:string
            }
        }
}