import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstname: string;
      lastname: string;
    } & DefaultSession["user"];
  }

  interface User {
    firstname: string;
    lastname: string;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    firstname: string;
    lastname: string;
  }
}
