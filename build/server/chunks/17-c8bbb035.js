import { r as redirect, f as fail } from "./index-0087e825.js";
import bcrypt from "bcrypt";
import { d as db } from "./database-637f9b59.js";
import "@prisma/client";

const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/");
  }
};
const login = async ({ cookies, request }) => {
  const data = await request.formData();
  data.get("userName");
  const email = data.get("email");
  const password = data.get("password");
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email ||
    !password
  ) {
    return fail(400, {
      error: { message: "email and password are required." },
    });
  }
  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    return fail(400, { error: { message: "Email not found." } });
  }
  const userPassword = await bcrypt.compare(password, user.passwordHash);
  if (!userPassword) {
    return fail(400, { error: { message: "Invalid credentials." } });
  }
  const authenticatedUser = await db.user.update({
    where: { email: user.email },
    data: { userAuthToken: crypto.randomUUID() },
  });
  cookies.set("session", authenticatedUser.userAuthToken, {
    // send cookie for every page
    path: "/",
    // server side only cookie so you can't use `document.cookie`
    httpOnly: true,
    // only requests from same site can send cookies
    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
    sameSite: "strict",
    // only sent over HTTPS in production
    secure: process.env.NODE_ENV === "production",
    // set cookie to expire after a month
    maxAge: 60 * 60 * 24 * 30,
  });
  throw redirect(302, "/");
};
const actions = { login };

var _page_server_ts = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  actions: actions,
  load: load,
});

const index = 17;
let component_cache;
const component = async () =>
  (component_cache ??= (await import("./_page.svelte-bf53cae0.js")).default);
const server_id = "src/routes/(auth)/login/+page.server.ts";
const imports = [
  "_app/immutable/nodes/17.dd3e4e34.js",
  "_app/immutable/chunks/index.229400e6.js",
  "_app/immutable/chunks/forms.4c325e09.js",
  "_app/immutable/chunks/parse.bee59afc.js",
  "_app/immutable/chunks/singletons.dd9c9a0a.js",
  "_app/immutable/chunks/navigation.71f60e69.js",
  "_app/immutable/chunks/Alert.d237b4ef.js",
  "_app/immutable/chunks/clsx.m.1229b3e0.js",
];
const stylesheets = [];
const fonts = [];

export {
  component,
  fonts,
  imports,
  index,
  _page_server_ts as server,
  server_id,
  stylesheets,
};
//# sourceMappingURL=17-c8bbb035.js.map
