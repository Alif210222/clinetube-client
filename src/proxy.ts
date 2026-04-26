import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

type TokenPayload = {
  role?: string;
  exp?: number;
};

const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/movies",
//   "/movies/:slug",
  "/unauthorized",
];

const adminRoutes = [
  "/admin",
  "/admin/dashboard",
];

const userRoutes = [
  "/user",
  "/user/dashboard",
  "/my-purchase",
  "/watchlist",
];

function isPublic(pathname: string) {
  return publicRoutes.some(
    (route) =>
      pathname === route ||
      pathname.startsWith(route + "/")
  );
}

function matchProtected(
  pathname: string,
  routes: string[]
) {
  return routes.some(
    (route) =>
      pathname === route ||
      pathname.startsWith(route + "/")
  );
}

function redirectWithReason(
  req: NextRequest,
  reason: string
) {
  const url = new URL("/login", req.url);
  url.searchParams.set("reason", reason);
  url.searchParams.set(
    "redirect",
    req.nextUrl.pathname
  );

  return NextResponse.redirect(url);
}

export function proxy(
  req: NextRequest
) {
  const { pathname } = req.nextUrl;

  // ignore next internals/static/api files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const token =
    req.cookies.get("accessToken")
      ?.value;

  // Public route allow
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  // No token = login first
  if (!token) {
    return redirectWithReason(
      req,
      "login-required"
    );
  }

  try {
    const decoded =
      jwtDecode<TokenPayload>(token);

    // token expired
    if (
      decoded.exp &&
      decoded.exp * 1000 <
        Date.now()
    ) {
      return redirectWithReason(
        req,
        "session-expired"
      );
    }

    const role =
      decoded.role || "USER";

    // admin route
    if (
      matchProtected(
        pathname,
        adminRoutes
      ) &&
      role !== "ADMIN"
    ) {
      const url = new URL(
        "/unauthorized",
        req.url
      );
      url.searchParams.set(
        "reason",
        "admin-only"
      );
      return NextResponse.redirect(
        url
      );
    }

    // user route
    if (
      matchProtected(
        pathname,
        userRoutes
      ) &&
      !["USER", "ADMIN"].includes(
        role
      )
    ) {
      return redirectWithReason(
        req,
        "login-required"
      );
    }

    return NextResponse.next();
  } catch (error) {
    return redirectWithReason(
      req,
      "invalid-token"
    );
  }
}