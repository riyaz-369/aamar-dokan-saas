/* eslint-disable @typescript-eslint/ban-ts-comment */
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

      //@ts-ignore
      async authorize(credentials) {
        if (!credentials || !credentials.phone || !credentials.password) {
          return null;
        }
        try {
          await connectToDatabase();

          const admin = await prisma.user.findFirst({
            where: { phone: credentials.phone },
          });

          if (admin) {
            const isPasswordValid = await bcrypt.compare(
              credentials.password,
              admin.password,
            );

            if (!isPasswordValid) {
              return null;
            }
            return admin;
          }
        } catch (error) {
          console.error("Admin authorization error:", error);
          return null;
        } finally {
          await prisma.$disconnect();
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt: ({ token, user }) => {
      // console.log("JWT Callback - Token:", token);
      // console.log("JWT Callback - User:", user);

      if (user) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          phone: u.phone,
          role: u.type || "client",
          aamardokanId: u.aamardokanId,
          authToken: token.authToken,
        };
      } else {
        return token;
      }
    },

    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          phone: token.phone,
          role: token.role,
          aamardokanId: token.aamardokanId,
          authToken: token.authToken,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
