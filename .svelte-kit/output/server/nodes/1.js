export const index = 1;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/fallbacks/error.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/1.8ed5a0a3.js",
  "_app/immutable/chunks/index.229400e6.js",
  "_app/immutable/chunks/singletons.dd9c9a0a.js",
];
export const stylesheets = [];
export const fonts = [];
