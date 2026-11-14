/**
 * Spam protections that need no external service. They complement the honeypot field and
 * the optional Cloudflare Turnstile captcha (src/lib/turnstile.ts).
 */

/** A person cannot fill and send a form faster than this. */
const MIN_FILL_MS = 2500;

/**
 * Time trap: the browser reports how long the form was open before it was sent.
 * Scripts that post directly, or instantly, are rejected. (A determined bot can fake the value:
 * this filters the bulk of automated spam, Turnstile handles the rest.)
 */
export function filledTooFast(elapsed: string | undefined): boolean {
  const ms = Number(elapsed);
  return !Number.isFinite(ms) || ms < MIN_FILL_MS;
}

const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

/**
 * Best-effort rate limit per IP address and form. Counters live in the memory of one server
 * instance, so the limit is approximate on serverless hosting, but it stops a burst from one source.
 * Returns true when the caller has exceeded `max` requests in the last 10 minutes.
 */
export function rateLimited(scope: string, ip: string | undefined, max: number): boolean {
  if (!ip) return false;
  const now = Date.now();
  const key = `${scope}:${ip}`;
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return recent.length > max;
}
