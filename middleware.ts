import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Middleware function
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // console.log("Current Path:", pathname);

  // Retrieve the session JWT token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  // console.log("Middleware token:", token);

  if (token && pathname === "/auth/sign-in") {
    return NextResponse.redirect(new URL("/client", request.url));
  }

  if (token && pathname === "/auth/admin/sign-in") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (token) {
    const userRole = token.role || "client";

    // Prevent redirect loops
    if (pathname.startsWith("/admin") && userRole === "admin") {
      return NextResponse.next();
    }
    if (pathname.startsWith("/client") && userRole === "client") {
      return NextResponse.next();
    }

    // Redirect based on roles
    if (
      userRole === "admin" ||
      userRole === "manager" ||
      userRole === "customerSupport"
    ) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    if (userRole === "client") {
      return NextResponse.redirect(new URL("/client", request.url));
    }

    // Default fallback redirect for other roles
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow unauthenticated users to proceed
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/admin/:path*", "/client/:path*"],
};
