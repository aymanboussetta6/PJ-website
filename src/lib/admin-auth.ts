import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import type { AstroCookies } from 'astro';
import { ADMIN_PASSWORD, ADMIN_SESSION_SECRET } from 'astro:env/server';

/**
 * Minimal authentication for the internal admin area.
 * - One shared password (ADMIN_PASSWORD, at least 12 characters) set in the hosting settings.
 * - After login, a signed session cookie (HMAC-SHA256 with ADMIN_SESSION_SECRET) valid 8 hours:
 *   httpOnly, SameSite=Strict, Secure in production, limited to /admin.
 * The admin area stays disabled until both variables are set.
 */
const COOKIE = 'pj_admin';
const MAX_AGE = 8 * 60 * 60; // seconds
const MIN_PASSWORD_LENGTH = 12;
const MIN_SECRET_LENGTH = 32;

export function isAdminConfigured(): boolean {
  return (
    Boolean(ADMIN_PASSWORD && ADMIN_SESSION_SECRET) &&
    ADMIN_PASSWORD!.length >= MIN_PASSWORD_LENGTH &&
    ADMIN_SESSION_SECRET!.length >= MIN_SECRET_LENGTH
  );
}

const digest = (value: string) => createHash('sha256').update(value).digest();
const sign = (payload: string) => createHmac('sha256', ADMIN_SESSION_SECRET!).update(payload).digest('base64url');

/** Constant-time password check. */
export function checkPassword(candidate: string): boolean {
  if (!isAdminConfigured()) return false;
  return timingSafeEqual(digest(candidate), digest(ADMIN_PASSWORD!));
}

export function startSession(cookies: AstroCookies): void {
  const expires = String(Math.floor(Date.now() / 1000) + MAX_AGE);
  cookies.set(COOKIE, `${expires}.${sign(expires)}`, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'strict',
    path: '/admin',
    maxAge: MAX_AGE,
  });
}

export function endSession(cookies: AstroCookies): void {
  cookies.delete(COOKIE, { path: '/admin' });
}

export function isAuthenticated(cookies: AstroCookies): boolean {
  if (!isAdminConfigured()) return false;
  const value = cookies.get(COOKIE)?.value;
  if (!value) return false;
  const [expires, signature] = value.split('.');
  if (!expires || !signature) return false;
  const expected = sign(expires);
  if (signature.length !== expected.length) return false;
  if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
  return Number(expires) > Date.now() / 1000;
}
