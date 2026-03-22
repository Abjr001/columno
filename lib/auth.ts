import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
import type { Adapter } from "next-auth/adapters";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,

  // Credentials nécessite strategy "jwt" car l'adapter database
  // ne fonctionne pas avec les credentials par défaut
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

        // Cherche l'utilisateur en base par email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.password) return null;

        // Compare le mot de passe fourni avec le hash en base
        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isValid) return null;

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Au premier login, on enrichit le token avec les infos user
      if (user) {
        token.id = user.id;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
      }
      return token;
    },

    async session({ session, token }) {
      // On expose les infos du token dans la session côté client
      if (session.user) {
        session.user.id = token.id as string;
        session.user.firstname = token.firstname as string;
        session.user.lastname = token.lastname as string;
      }
      return session;
    },
  },

  pages: {
    // Indique à NextAuth d'utiliser notre page login custom
    signIn: "/login",
  },
});