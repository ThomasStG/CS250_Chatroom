import * as server from '../entries/pages/(app)/chatrooms/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/chatrooms/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/chatrooms/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.54e92a0f.js","_app/immutable/chunks/index.229400e6.js"];
export const stylesheets = [];
export const fonts = [];
