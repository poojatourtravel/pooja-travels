import { NextRequest, NextResponse } from "next/server";
import { NextResponse as _NR } from "next/server";

export async function POST(req: NextRequest) {
  // Re-use the token name constant inline to avoid importing server-only code
  const tokenName = "ptt_admin_token";
  const response = NextResponse.json({ ok: true });
  response.cookies.set(tokenName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });
  return response;
}
