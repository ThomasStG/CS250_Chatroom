

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.3a400405.js","_app/immutable/chunks/index.229400e6.js"];
export const stylesheets = [];
export const fonts = [];
