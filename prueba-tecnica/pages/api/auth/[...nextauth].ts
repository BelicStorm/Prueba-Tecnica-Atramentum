import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { toFormData } from "../../../utils";
export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "userName" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials:any, req) {
        // Add logic here to look up the user from the credentials supplied
       
        
        const res = await fetch("https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/authenticate", {
          method: "POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: toFormData(credentials)
        });
        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }:any) {
      if (token || user) {
        token.userRole = "admin";
      }
      return {...token, ...user};
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, token, user }) {    
      // console.log(process.env.SECRET);
      
      session = {
        token:token.token,
        user: token.user
      } as any;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});