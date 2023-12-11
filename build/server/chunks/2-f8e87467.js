import { r as redirect } from "./index-0087e825.js";
import "./database-637f9b59.js";
import "@prisma/client";

const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, "/login");
  }
  return {
    user: locals.user,
  };
};

var _layout_server_ts = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  load: load,
});

const index = 2;
let component_cache;
const component = async () =>
  (component_cache ??= (await import("./_layout.svelte-c0332a13.js")).default);
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = [
  "_app/immutable/nodes/2.2167fff5.js",
  "_app/immutable/chunks/index.229400e6.js",
  "_app/immutable/chunks/navigation.71f60e69.js",
  "_app/immutable/chunks/singletons.dd9c9a0a.js",
  "_app/immutable/chunks/clsx.m.1229b3e0.js",
];
const stylesheets = ["_app/immutable/assets/2.39103503.css"];
const fonts = [];

export {
  component,
  fonts,
  imports,
  index,
  _layout_server_ts as server,
  server_id,
  stylesheets,
};
//# sourceMappingURL=2-f8e87467.js.map
