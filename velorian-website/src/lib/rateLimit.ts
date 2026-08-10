const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 3;

type Entry = { count: number; resetAt: number };

// In-memory, scoped to a single warm serverless function instance - resets
// on cold start and isn't shared across concurrent instances under scale-out.
// Acceptable for this site's traffic volume; a persistent store (Vercel
// KV/Upstash) would be needed for real cross-instance enforcement.
const hits = new Map<string, Entry>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return req.headers.get('x-real-ip') ?? 'unknown';
}
