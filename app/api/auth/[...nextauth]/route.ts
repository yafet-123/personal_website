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
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await prisma.User.findUnique({
        where: { email: session.user.email },
      });
      
      session.user.id = sessionUser.user_id.toString();
      session.user.token = token
      // session.user have all the information from the database and inaddition we send the mongoose id
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        console.log("user");
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
    async jwt({ token, user }) {
      const sessionUser = await prisma.User.findUnique({
        where: { email: session.user.email },
      });
      const token = jwt.sign(
        { userId: sessionUser.user_id.toString(), role: "admin" },process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_LIFETIME,}
      );
      if (sessionUser) {
          token.userId = user.userId;
          token.accessToken = token;
          token.role = user.role;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
