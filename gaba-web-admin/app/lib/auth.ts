import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "./prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
    
  },

  session: {

    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
       
        if (!credentials?.email || !credentials?.password) {

         
          return null;
        }
       
        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!existingUser) {

          return null;
        }
       
        if (credentials?.password) {
          const passwordMatch = await compare(
            credentials.password,
            existingUser.password
          );
          console.log(credentials.password)
          if(!passwordMatch) return null
            const {id, password, ...rest} = existingUser;
          return {
            id: `${id}`,
            ...rest
          };
        }
        else{
            return null
        }
      

        // If no error and we have user data, return it
      
        // Return null if user data could not be retrieved
    
      },
    }),
  ],
};
