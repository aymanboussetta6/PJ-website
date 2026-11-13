import { TURNSTILE_SECRET_KEY } from 'astro:env/server';

/** Verifies a Cloudflare Turnstile token. Skipped (returns true) when no secret is configured. */
export async function verifyTurnstile(token: string | undefined, ip?: string): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token });
  if (ip) body.set('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}
