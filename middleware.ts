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
  // console.log("token from Middleware:", token);

  if (token) {
    const userRole = token.role || "client";

    // console.log(userRole);

    if (pathname.startsWith("/auth")) {
      // console.log("Middleware Signin:", token);
      return NextResponse.redirect(new URL("/client", request.url));
    }

    // if (pathname.startsWith("/auth/admin/sign-in")) {
    //   console.log("Middleware Signup:", token);
    //   return NextResponse.redirect(new URL("/admin", request.url));
    // }

    // Prevent redirect loops
    if (pathname.startsWith("/admin") && userRole === "Admin") {
      return NextResponse.next();
    }
    if (pathname.startsWith("/client") && userRole === "client") {
      return NextResponse.next();
    }

    // Redirect based on roles
    if (
      userRole === "Admin" ||
      userRole === "Manager" ||
      userRole === "CustomerSupport"
    ) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    if (userRole === "client") {
      return NextResponse.redirect(new URL("/client", request.url));
    }

    // Default fallback redirect for other roles
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/auth/admin/sign-in", request.url));
    }
    if (pathname.startsWith("/client")) {
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }
  }

  // Allow unauthenticated users to proceed
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/admin/:path*", "/client/:path*", "/auth/:path*"],
};
