import * as server from '../entries/pages/(app)/notifications/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/notifications/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/notifications/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.c695be80.js","_app/immutable/chunks/index.229400e6.js"];
export const stylesheets = ["_app/immutable/assets/13.a6a2f9f0.css"];
export const fonts = [];
