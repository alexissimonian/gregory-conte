// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			isValidated: boolean;
			sessionId: string;
			validateSession: () => Promise<void>;
		}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env?: {
				SESSIONS?: KVNamespace;
			};
		}
	}
}

export {};
