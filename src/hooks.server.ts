function generateSessionId(): string {
  return crypto.randomUUID();
}

export async function handle({ event, resolve }) {
  // Access Cloudflare KV namespace
  const SESSIONS = event.platform?.env?.SESSIONS;

  // Get or create session ID
  let sessionId = event.cookies.get('sessionId');

  if (!sessionId) {
    sessionId = generateSessionId();
    event.cookies.set('sessionId', sessionId, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 hours
    });
  }

  // Check if session is validated (from KV)
  const isValidated = SESSIONS ? await SESSIONS.get(sessionId) === 'validated' : false;

  event.locals.isValidated = isValidated;
  event.locals.sessionId = sessionId;
  event.locals.validateSession = async () => {
    if (SESSIONS) {
      // Store in KV with 24h expiration (TTL in seconds)
      await SESSIONS.put(sessionId, 'validated', { expirationTtl: 60 * 60 * 24 });
    }
  };

  const response = await resolve(event);

  // Set charset in Content-Type header for all HTML responses
  const contentType = response.headers.get('content-type');
  if (!contentType || contentType.includes('text/html')) {
    response.headers.set('content-type', 'text/html; charset=utf-8');
  }

  return response;
}
