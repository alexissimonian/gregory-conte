import { redirect } from "@sveltejs/kit";
import { dev } from '$app/environment';

export async function handle({event, resolve}){
    const verified = event.cookies.get('verificationSiRobot');

    if (event.url.pathname.includes('contact') && !dev){
        if (!verified){
            throw redirect(303, '/verify-turnstile');
        }
    }

    return resolve(event);
}
