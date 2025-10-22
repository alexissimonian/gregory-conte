import type { Actions } from './$types';
import { env } from '$env/dynamic/private'
import { redirect } from '@sveltejs/kit';

async function verifyTurnstile(token: string, remoteip?: string) {
    const formData = new FormData();
    formData.append('secret', env.SECRET_TURNSTILE_SECRET_KEY);
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
    default: async ({ request, cookies }) => {
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

        console.log('Setting cookie and redirecting...');
        cookies.set('verificationSiRobot', 'true', {
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 //24 hours
        });

        throw redirect(303, '/contact');

    }
}
