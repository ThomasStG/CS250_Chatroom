

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/directMessage/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.f49b046d.js","_app/immutable/chunks/index.229400e6.js"];
export const stylesheets = [];
export const fonts = [];
