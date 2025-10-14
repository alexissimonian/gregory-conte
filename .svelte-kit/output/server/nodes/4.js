import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.2hHMwiG6.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/MLcTdgOy.js","_app/immutable/chunks/BMV5E-wD.js","_app/immutable/chunks/V4BZ3Pus.js","_app/immutable/chunks/CVmiiNhH.js"];
export const stylesheets = ["_app/immutable/assets/4.tn0RQdqM.css"];
export const fonts = [];
