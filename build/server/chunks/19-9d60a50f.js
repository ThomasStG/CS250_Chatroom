import { r as redirect, f as fail } from './index-0087e825.js';
import bcrypt from 'bcrypt';
import { d as db } from './database-637f9b59.js';
import '@prisma/client';

const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/");
  }
};
const register = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get("email");
    const username = data.get("username");
    const password = data.get("password");
    const passwordConfirmation = data.get("password-confirmation");
    console.log(data);
    if (typeof email !== "string" || typeof username !== "string" || !username || typeof password !== "string" || !email || !password) {
      return fail(400, {
        error: { message: "email and password are required." }
      });
    }
    if (password !== passwordConfirmation) {
      return fail(400, {
        error: { message: "Password confirmation doesn't match." }
      });
    }
    const user = await db.user.findUnique({ where: { email } });
    if (user) {
      return fail(400, { error: { message: "email already exists." } });
    }
    await db.user.create({
      data: {
        email,
        username,
        passwordHash: await bcrypt.hash(password, 10),
        userAuthToken: crypto.randomUUID()
      }
    });
  } catch (err) {
    console.error(err);
    return fail(500, {
      error: {
        message: "There was an issue with registering. That username may be taken."
      }
    });
  }
  throw redirect(303, "/login");
};
const actions = { register };

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 19;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fac84011.js')).default;
const server_id = "src/routes/(auth)/register/+page.server.ts";
const imports = ["_app/immutable/nodes/19.ae2f769b.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/Alert.d237b4ef.js","_app/immutable/chunks/clsx.m.1229b3e0.js","_app/immutable/chunks/forms.4c325e09.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dd9c9a0a.js","_app/immutable/chunks/navigation.71f60e69.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=19-9d60a50f.js.map
