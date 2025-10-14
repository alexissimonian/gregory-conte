
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
	export const XDG_DATA_HOME: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const ALACRITTY_SOCKET: string;
	export const MYVIMRC: string;
	export const NVIM_LOG_FILE: string;
	export const USER: string;
	export const XDG_MENU_PREFIX: string;
	export const PAGER: string;
	export const SHELL: string;
	export const NOTIFY_SOCKET: string;
	export const XDG_STATE_HOME: string;
	export const SHLVL: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM_VERSION: string;
	export const COLORTERM: string;
	export const XDG_VTNR: string;
	export const WINDOWID: string;
	export const MASON: string;
	export const HYPRCURSOR_SIZE: string;
	export const XDG_CONFIG_DIRS: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const SYSTEMD_EXEC_PID: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_CACHE_HOME: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const INVOCATION_ID: string;
	export const VIMRUNTIME: string;
	export const HOME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const ZSH: string;
	export const MANAGERPID: string;
	export const PWD: string;
	export const MAIL: string;
	export const WAYLAND_DISPLAY: string;
	export const __GLX_VENDOR_LIBRARY_NAME: string;
	export const LS_COLORS: string;
	export const XDG_SEAT: string;
	export const TMUX_PANE: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const _: string;
	export const LIBVA_DRIVER_NAME: string;
	export const LOGNAME: string;
	export const XCURSOR_SIZE: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DEBUGINFOD_URLS: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const HYPRLAND_CMD: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const TERM_PROGRAM: string;
	export const UWSM_FINALIZE_VARNAMES: string;
	export const LSCOLORS: string;
	export const TERM: string;
	export const UWSM_WAIT_VARNAMES: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const TMUX: string;
	export const ALACRITTY_LOG: string;
	export const XDG_SESSION_TYPE: string;
	export const XDG_CONFIG_HOME: string;
	export const XDG_BACKEND: string;
	export const MANAGERPIDFDID: string;
	export const NVIM: string;
	export const PATH: string;
	export const XDG_SESSION_ID: string;
	export const JOURNAL_STREAM: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const LANG: string;
	export const MOTD_SHOWN: string;
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
	export const PUBLIC_EMAIL_ADDRESS: string;
	export const PUBLIC_PHONE_NUMBER: string;
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
		XDG_DATA_HOME: string;
		XDG_CURRENT_DESKTOP: string;
		ALACRITTY_SOCKET: string;
		MYVIMRC: string;
		NVIM_LOG_FILE: string;
		USER: string;
		XDG_MENU_PREFIX: string;
		PAGER: string;
		SHELL: string;
		NOTIFY_SOCKET: string;
		XDG_STATE_HOME: string;
		SHLVL: string;
		OLDPWD: string;
		TERM_PROGRAM_VERSION: string;
		COLORTERM: string;
		XDG_VTNR: string;
		WINDOWID: string;
		MASON: string;
		HYPRCURSOR_SIZE: string;
		XDG_CONFIG_DIRS: string;
		ALACRITTY_WINDOW_ID: string;
		SYSTEMD_EXEC_PID: string;
		XDG_DATA_DIRS: string;
		XDG_CACHE_HOME: string;
		MEMORY_PRESSURE_WRITE: string;
		INVOCATION_ID: string;
		VIMRUNTIME: string;
		HOME: string;
		XDG_SESSION_DESKTOP: string;
		ZSH: string;
		MANAGERPID: string;
		PWD: string;
		MAIL: string;
		WAYLAND_DISPLAY: string;
		__GLX_VENDOR_LIBRARY_NAME: string;
		LS_COLORS: string;
		XDG_SEAT: string;
		TMUX_PANE: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		_: string;
		LIBVA_DRIVER_NAME: string;
		LOGNAME: string;
		XCURSOR_SIZE: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DEBUGINFOD_URLS: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		HYPRLAND_CMD: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		TERM_PROGRAM: string;
		UWSM_FINALIZE_VARNAMES: string;
		LSCOLORS: string;
		TERM: string;
		UWSM_WAIT_VARNAMES: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		TMUX: string;
		ALACRITTY_LOG: string;
		XDG_SESSION_TYPE: string;
		XDG_CONFIG_HOME: string;
		XDG_BACKEND: string;
		MANAGERPIDFDID: string;
		NVIM: string;
		PATH: string;
		XDG_SESSION_ID: string;
		JOURNAL_STREAM: string;
		MEMORY_PRESSURE_WATCH: string;
		MOZ_ENABLE_WAYLAND: string;
		LANG: string;
		MOTD_SHOWN: string;
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
		PUBLIC_EMAIL_ADDRESS: string;
		PUBLIC_PHONE_NUMBER: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
