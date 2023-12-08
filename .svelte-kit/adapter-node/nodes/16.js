import * as server from '../entries/pages/(app)/settings/_page.server.ts.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/settings/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/settings/+page.server.ts";
export const imports = ["_app/immutable/nodes/16.158ccea1.js","_app/immutable/chunks/index.229400e6.js"];
export const stylesheets = ["_app/immutable/assets/16.5073478e.css"];
export const fonts = [];
