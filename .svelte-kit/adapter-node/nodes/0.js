import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.5b60bc0c.js","_app/immutable/chunks/index.229400e6.js"];
export const stylesheets = ["_app/immutable/assets/0.cb6a6307.css"];
export const fonts = [];
