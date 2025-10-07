
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/ateliers" | "/contact" | "/parcours" | "/spectacles" | "/verify-turnstile";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/ateliers": Record<string, never>;
			"/contact": Record<string, never>;
			"/parcours": Record<string, never>;
			"/spectacles": Record<string, never>;
			"/verify-turnstile": Record<string, never>
		};
		Pathname(): "/" | "/ateliers" | "/ateliers/" | "/contact" | "/contact/" | "/parcours" | "/parcours/" | "/spectacles" | "/spectacles/" | "/verify-turnstile" | "/verify-turnstile/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}