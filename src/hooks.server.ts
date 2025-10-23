import { redirect } from "@sveltejs/kit";
import { dev } from '$app/environment';

export async function handle({ event, resolve }) {
  const verified = event.cookies.get('verificationSiRobot');

  if (event.url.pathname.includes('contact')) {
    if (!verified) {
      throw redirect(303, '/verify-turnstile');
    }
  }

  const response = await resolve(event);

  // Set charset in Content-Type header for all HTML responses
  const contentType = response.headers.get('content-type');
  if (!contentType || contentType.includes('text/html')) {
    response.headers.set('content-type', 'text/html; charset=utf-8');
  }


  return response;
}
