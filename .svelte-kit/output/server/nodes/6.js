import * as server from "../entries/pages/(app)/chatrooms/_slug_/_page.server.ts.js";

export const index = 6;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import("../entries/pages/(app)/chatrooms/_slug_/_page.svelte.js")
  ).default);
export { server };
export const server_id = "src/routes/(app)/chatrooms/[slug]/+page.server.ts";
export const imports = [
  "_app/immutable/nodes/6.e9f2734f.js",
  "_app/immutable/chunks/index.229400e6.js",
  "_app/immutable/chunks/forms.4c325e09.js",
  "_app/immutable/chunks/parse.bee59afc.js",
  "_app/immutable/chunks/singletons.dd9c9a0a.js",
  "_app/immutable/chunks/navigation.71f60e69.js",
];
export const stylesheets = ["_app/immutable/assets/6.81312968.css"];
export const fonts = [];
