import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { env as privateEnv } from '$env/dynamic/private'
import { env as publicEnv } from '$env/dynamic/public';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
  return {
    isValidated: locals.isValidated,
    phoneNumber: locals.isValidated ? publicEnv.PUBLIC_PHONE_NUMBER : undefined,
    emailAddress: locals.isValidated ? publicEnv.PUBLIC_EMAIL_ADDRESS : undefined
  };
};

async function verifyTurnstile(token: string, remoteip?: string) {
  const formData = new FormData();
  formData.append('secret', privateEnv.SECRET_TURNSTILE_SECRET_KEY);
  formData.append('response', token);
  if (remoteip) {
    formData.append('remoteip', remoteip);
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  console.log('Turnstile API response:', result);
  return result.success === true;
}


export const actions: Actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const turnstileToken = data.get('cf-turnstile-response') as string;

    console.log('Turnstile token received:', turnstileToken ? 'YES' : 'NO');

    if (!turnstileToken) {
      console.log('No turnstile token found');
      return {
        success: false,
        error: 'Captcha manquant'
      };
    }

    const isValidCaptcha = await verifyTurnstile(turnstileToken);
    console.log('Turnstile verification result:', isValidCaptcha);

    if (!isValidCaptcha) {
      console.log('Captcha validation failed');
      return {
        success: false,
        error: 'Captcha invalide'
      };
    }

    locals.validateSession();

    throw redirect(303, '/contact');

  }
}
