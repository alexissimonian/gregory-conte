

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ateliers/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.C-GdKl1v.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/MLcTdgOy.js","_app/immutable/chunks/BMV5E-wD.js"];
export const stylesheets = ["_app/immutable/assets/3.CxSr_q_9.css"];
export const fonts = [];
