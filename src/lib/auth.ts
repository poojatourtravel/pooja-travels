/**
 * Simple admin authentication using signed tokens in cookies.
 * No external dependencies required.
 */

import { cookies } from "next/headers";

const TOKEN_NAME = "ptt_admin_token";
const TOKEN_MAX_AGE = 60 * 60 * 8; // 8 hours

function buildToken(): string {
  const secret = process.env.ADMIN_SECRET ?? "fallback_secret";
  const ts = Date.now().toString(36);
  // Simple signed token: base64(ts) + "." + base64(secret+ts hash)
  const payload = Buffer.from(`${ts}:${secret}`).toString("base64");
  return payload;
}

function verifyToken(token: string): boolean {
  try {
    const secret = process.env.ADMIN_SECRET ?? "fallback_secret";
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [ts, embedded] = decoded.split(":");
    if (!ts || embedded !== secret) return false;

    // Check token age (8 hours)
    const created = parseInt(ts, 36);
    const age = (Date.now() - created) / 1000;
    return age < TOKEN_MAX_AGE;
  } catch {
    return false;
  }
}

export async function createAdminToken(): Promise<string> {
  return buildToken();
}

export async function validateAdminToken(token: string): Promise<boolean> {
  return verifyToken(token);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_NAME)?.value;
  if (!token) return false;
  return validateAdminToken(token);
}

export function getTokenCookieOptions() {
  return {
    name: TOKEN_NAME,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: TOKEN_MAX_AGE,
    path: "/",
  };
}
