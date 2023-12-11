import * as server from "../entries/pages/(auth)/register/_page.server.ts.js";

export const index = 19;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import("../entries/pages/(auth)/register/_page.svelte.js")
  ).default);
export { server };
export const server_id = "src/routes/(auth)/register/+page.server.ts";
export const imports = [
  "_app/immutable/nodes/19.ae2f769b.js",
  "_app/immutable/chunks/index.229400e6.js",
  "_app/immutable/chunks/Alert.d237b4ef.js",
  "_app/immutable/chunks/clsx.m.1229b3e0.js",
  "_app/immutable/chunks/forms.4c325e09.js",
  "_app/immutable/chunks/parse.bee59afc.js",
  "_app/immutable/chunks/singletons.dd9c9a0a.js",
  "_app/immutable/chunks/navigation.71f60e69.js",
];
export const stylesheets = [];
export const fonts = [];
