import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma";
import { connectToDatabase } from "@/helper/server-helper";

// NextAuth Configuration
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "clientCredentials",
      id: "clientCredentials",
      credentials: {
        phone: {
          label: "Phone",
          type: "text",
          placeholder: "Enter your phone",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials || !credentials.phone || !credentials.password) {
          return null;
        }
        try {
          await connectToDatabase();

          const client = await prisma.client.findFirst({
            where: { phone: credentials.phone },
          });

          if (!client || !client.password) {
            return null;
          }

          // Return the user object
          return client;
        } catch (error) {
          console.error("User authorization error:", error);
          return null;
        } finally {
          await prisma.$disconnect();
        }
      },
    }),

    // Provider for Admin users
    CredentialsProvider({
      name: "adminCredentials",
      id: "adminCredentials",
      credentials: {
        phone: {
          label: "Phone",
          type: "text",
          placeholder: "Enter your phone",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials || !credentials.phone || !credentials.password) {
          return null;
        }
        try {
          await connectToDatabase();

          const admin = await prisma.user.findFirst({
            where: { phone: credentials.phone },
          });
          return admin;
        } catch (error) {
          console.error("Admin authorization error:", error);
          return null;
        } finally {
          await prisma.$disconnect();
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
