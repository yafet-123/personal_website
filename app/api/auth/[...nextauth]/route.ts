import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/utils/db.server";
import jwt from "jsonwebtoken";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user, credentials }) {
      try {
        const userExists = await prisma.User.findUnique({
          where: { email: profile.email },
        });
        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          throw new Error("User not found in the database");
        }
        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
    async jwt ({token,user}) {
      console.log(user)
      if (user) {
        const sessionUser = await prisma.User.findUnique({
          where: { email: user.email },
        });
        const role = 'admin'; // Assuming you have a `role` field in your user model

        token.userId = sessionUser.user_id.toString();
        token.role = role;     
      }
      return token
    },
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await prisma.User.findUnique({
        where: { email: session.user.email },
      });
      
      session.userId = sessionUser.user_id.toString();
      // session.user have all the information from the database and inaddition we send the mongoose id
      return session;
    },
  },
});

export { handler as GET, handler as POST };
