
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SECRET_TURNSTILE_SECRET_KEY: string;
	export const SHLVL: string;
	export const XDG_SESSION_CLASS: string;
	export const LOGNAME: string;
	export const SSH_TTY: string;
	export const LS_COLORS: string;
	export const HOME: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MYVIMRC: string;
	export const VIMRUNTIME: string;
	export const XDG_SESSION_ID: string;
	export const MASON: string;
	export const VIM: string;
	export const LANG: string;
	export const MOTD_SHOWN: string;
	export const USER: string;
	export const SSH_CLIENT: string;
	export const SSH_CONNECTION: string;
	export const SHELL: string;
	export const ZSH: string;
	export const OLDPWD: string;
	export const TMUX_PANE: string;
	export const PWD: string;
	export const PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const NVIM_LOG_FILE: string;
	export const TERM_PROGRAM: string;
	export const LSCOLORS: string;
	export const PAGER: string;
	export const TERM: string;
	export const _: string;
	export const NVIM: string;
	export const LESS: string;
	export const TMUX: string;
	export const XDG_SESSION_TYPE: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_TURNSTILE_SITE_KEY: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SECRET_TURNSTILE_SECRET_KEY: string;
		SHLVL: string;
		XDG_SESSION_CLASS: string;
		LOGNAME: string;
		SSH_TTY: string;
		LS_COLORS: string;
		HOME: string;
		TERM_PROGRAM_VERSION: string;
		MYVIMRC: string;
		VIMRUNTIME: string;
		XDG_SESSION_ID: string;
		MASON: string;
		VIM: string;
		LANG: string;
		MOTD_SHOWN: string;
		USER: string;
		SSH_CLIENT: string;
		SSH_CONNECTION: string;
		SHELL: string;
		ZSH: string;
		OLDPWD: string;
		TMUX_PANE: string;
		PWD: string;
		PATH: string;
		XDG_RUNTIME_DIR: string;
		NVIM_LOG_FILE: string;
		TERM_PROGRAM: string;
		LSCOLORS: string;
		PAGER: string;
		TERM: string;
		_: string;
		NVIM: string;
		LESS: string;
		TMUX: string;
		XDG_SESSION_TYPE: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_TURNSTILE_SITE_KEY: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
