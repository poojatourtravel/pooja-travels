import { NextRequest, NextResponse } from "next/server";

const TOKEN_NAME = "ptt_admin_token";

function verifyToken(token: string): boolean {
  try {
    const secret = process.env.ADMIN_SECRET ?? "fallback_secret";
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const colonIdx = decoded.indexOf(":");
    if (colonIdx === -1) return false;
    const ts = decoded.slice(0, colonIdx);
    const embedded = decoded.slice(colonIdx + 1);
    if (embedded !== secret) return false;
    const created = parseInt(ts, 36);
    const age = (Date.now() - created) / 1000;
    return age < 60 * 60 * 8; // 8 hours
  } catch {
    return false;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /admin/dashboard and sub-paths
  if (pathname.startsWith("/admin/dashboard")) {
    const token = req.cookies.get(TOKEN_NAME)?.value;
    if (!token || !verifyToken(token)) {
      const loginUrl = new URL("/admin/login", req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect /admin to /admin/login
  if (pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/dashboard/:path*"],
};
