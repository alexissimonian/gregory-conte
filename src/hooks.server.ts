// Session storage for validation state
const validatedSessions = new Set<string>();

function generateSessionId(): string {
  return crypto.randomUUID();
}

export async function handle({ event, resolve }) {
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

  // Check if session is validated
  event.locals.isValidated = validatedSessions.has(sessionId);
  event.locals.sessionId = sessionId;
  event.locals.validateSession = () => {
    validatedSessions.add(sessionId);
  };

  const response = await resolve(event);

  // Set charset in Content-Type header for all HTML responses
  const contentType = response.headers.get('content-type');
  if (!contentType || contentType.includes('text/html')) {
    response.headers.set('content-type', 'text/html; charset=utf-8');
  }


  return response;
}
