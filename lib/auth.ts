import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
import type { Adapter } from "next-auth/adapters";

const adapter = PrismaAdapter(prisma);

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: {
    ...adapter,
    // Intercepte la création OAuth pour extraire firstname/lastname depuis name
    createUser: (user) => {
      const [firstname, ...rest] = (user.name ?? "").split(" ");
      const lastname = rest.join(" ");
      return adapter.createUser!({
        ...user,
        // name garde la valeur complète envoyée par Google/GitHub
        name: user.name ?? "",
        firstname,
        lastname,
      });
    },
  } as Adapter,

  session: { strategy: "jwt" },

  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.password) return null;

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password,
        );

        if (!isValid) return null;

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.firstname = token.firstname as string;
        session.user.lastname = token.lastname as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});
