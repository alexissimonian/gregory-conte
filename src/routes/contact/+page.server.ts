import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // This ensures the server hook runs on every visit
    return {};
};
