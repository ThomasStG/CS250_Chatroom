import { r as redirect } from './index-0087e825.js';

const load = async ({ cookies }) => {
  if (!cookies.get("session")) {
    throw redirect(302, "/");
  }
  cookies.set("session", "", {
    path: "/",
    expires: /* @__PURE__ */ new Date(0)
  });
  throw redirect(302, "/login");
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 18;
const server_id = "src/routes/(auth)/logout/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=18-f026ab19.js.map
