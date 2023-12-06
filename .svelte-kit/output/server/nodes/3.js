import * as server from '../entries/pages/(app)/directMessage/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/directMessage/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.5519d859.js","_app/immutable/chunks/index.229400e6.js"];
export const stylesheets = [];
export const fonts = [];
