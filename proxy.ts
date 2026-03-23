import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

// auth() de NextAuth v5 peut s'utiliser directement comme middleware
// Il vérifie la session sur chaque requête qui match le config.matcher
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");

  // Si pas connecté et pas sur la page login → redirige vers /login
  if (!isLoggedIn && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Si connecté et sur la page login → redirige vers l'app
  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/app", req.url));
  }
});

export const config = {
  // Protège toutes les routes sauf les assets statiques et l'api auth
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|landing|register).*)",
  ],
};
