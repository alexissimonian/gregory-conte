export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.CWos3N_D.js",app:"_app/immutable/entry/app.mhfl9NXn.js",imports:["_app/immutable/entry/start.CWos3N_D.js","_app/immutable/chunks/CkYkGPy4.js","_app/immutable/chunks/Dbj-YOnO.js","_app/immutable/chunks/BMV5E-wD.js","_app/immutable/chunks/V4BZ3Pus.js","_app/immutable/entry/app.mhfl9NXn.js","_app/immutable/chunks/BMV5E-wD.js","_app/immutable/chunks/V4BZ3Pus.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dbj-YOnO.js","_app/immutable/chunks/Fr0iVJ7o.js","_app/immutable/chunks/BKTtrWdN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/ateliers",
				pattern: /^\/ateliers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/parcours",
				pattern: /^\/parcours\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/spectacles",
				pattern: /^\/spectacles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/verify-turnstile",
				pattern: /^\/verify-turnstile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
