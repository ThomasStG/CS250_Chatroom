import { r as redirect } from "../../../../chunks/index.js";
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
export {
  load
};
