import crypto from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "mahalaxmi_admin_session";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@mahalaxmi.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "000000";
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ?? "mahalaxmi-led-admin-secret-2026";

export function verifyCredentials(email: string, password: string): boolean {
  return (
    email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
    password === ADMIN_PASSWORD
  );
}

export function createSessionToken(email: string): string {
  const payload = Buffer.from(
    JSON.stringify({ email, iat: Date.now() })
  ).toString("base64url");
  const sig = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(payload)
    .digest("base64url");
  return `${payload}.${sig}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payload, sig] = parts;
  const expected = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(payload)
    .digest("base64url");
  if (sig.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}
