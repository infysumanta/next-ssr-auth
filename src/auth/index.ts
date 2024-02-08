import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";

export const config = {
  theme: {
    logo: "https://www.example.com/logo.svg",
    brandColor: "#000000",
    buttonText: "Sign in with GitHub",
    colorScheme: "auto",
  },
  providers: [Github],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname !== "/middleware-example") return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
