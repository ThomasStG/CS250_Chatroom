const load = async ({ locals }) => {
  return {
    user: locals.user
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-38e1b153.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.5b60bc0c.js","_app/immutable/chunks/index.229400e6.js"];
const stylesheets = ["_app/immutable/assets/0.cb6a6307.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-17acda9e.js.map
