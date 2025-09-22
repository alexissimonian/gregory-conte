import type { Actions } from './$types';
import { SECRET_TURNSTILE_SECRET_KEY } from '$env/static/private'

async function verifyTurnstile(token: string, remoteip?: string) {
    const formData = new FormData();
    formData.append('secret', SECRET_TURNSTILE_SECRET_KEY);
    formData.append('response', token);
    if (remoteip) {
        formData.append('remoteip', remoteip);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData,
    });

    const result = await response.json();
    return result.success === true;
}

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const turnstileToken = data.get('cf-turnstile-response') as string;

        if (!turnstileToken) {
            return {
                success: false,
                error: 'Captcha manquant'
            };
        }

        const isValidCaptcha = await verifyTurnstile(turnstileToken);

        if (!isValidCaptcha) {
            return {
                success: false,
                error: 'Captcha invalide'
            };
        }

        const nom = data.get('nom') as string;
        const prenom = data.get('prenom') as string;
        const email = data.get('email') as string;
        const message = data.get('message') as string;

        try {
            console.log('Nouveau message de contact:', { nom, prenom, email, message });

            return {
                success: true,
                message: 'Message envoyé avec succès!'
            };
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            return {
                success: false,
                error: 'Erreur lors de l\'envoi du message'
            };
        }
    }
};
