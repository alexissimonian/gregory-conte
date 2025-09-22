
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
		RouteId(): "/" | "/ateliers" | "/contact" | "/parcours" | "/spectacles";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/ateliers": Record<string, never>;
			"/contact": Record<string, never>;
			"/parcours": Record<string, never>;
			"/spectacles": Record<string, never>
		};
		Pathname(): "/" | "/ateliers" | "/ateliers/" | "/contact" | "/contact/" | "/parcours" | "/parcours/" | "/spectacles" | "/spectacles/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/fonts/ITC Benguiat Bold Condensed Italic.woff" | "/fonts/ITC Benguiat Bold Condensed Italic.woff2" | "/fonts/ITC Benguiat Bold Condensed.woff" | "/fonts/ITC Benguiat Bold Condensed.woff2" | "/fonts/ITC Benguiat Book Condensed Italic.woff" | "/fonts/ITC Benguiat Book Condensed Italic.woff2" | "/fonts/ITC Benguiat Book Condensed.woff" | "/fonts/ITC Benguiat Book Condensed.woff2" | "/styles/fonts.css" | string & {};
	}
}