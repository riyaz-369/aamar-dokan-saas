import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma";
import { connectToDatabase } from "@/helper/server-helper";
import bcrypt from "bcrypt";

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

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            client.password,
          );

          if (!isPasswordValid) {
            return null; // Password is invalid
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
    CredentialsProvider({
      name: "clientAuth",
      id: "clientAuth",
      credentials: {
        aamardokanId: {
          label: "aamardokan ID",
          type: "text",
          placeholder: "Enter your aamardokanID",
        },
      },

      async authorize(credentials) {
        if (!credentials || !credentials.aamardokanId) {
          return null;
        }
        try {
          await connectToDatabase();

          const client = await prisma.client.findFirst({
            where: { aamardokanId: credentials.aamardokanId },
          });

          if (!client || !client.isPhoneVerified) {
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

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            admin.password,
          );

          if (!isPasswordValid) {
            return null; // Password is invalid
          }

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

  callbacks: {
    // JWT Callback to add user data and token to JWT
    async jwt({ token, user }) {
      if (user) {
        // Add user info and token details into the JWT
        token.id = user.id;
        token.phone = user.phone;
        token.role = user.type || "client"; // Default to "client" role if not specified
        token.authToken = "your-jwt-token"; // If you are generating a separate auth token, you can set it here
      }
      return token;
    },

    // Session Callback to add the JWT data to session
    async session({ session, token }) {
      session.id = token.id;
      session.phone = token.phone;
      session.role = token.role;
      session.authToken = token.authToken; // Set the auth token in session
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
