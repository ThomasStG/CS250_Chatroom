import { d as db } from "./database-637f9b59.js";
import { f as fail } from "./index-0087e825.js";
import "@prisma/client";

const load = async ({ request, locals }) => {
  const userId = locals.user.id;
  if (!userId) {
    return fail(403, { error: { message: "User not authenticated." } });
  }
  try {
    const rooms = await db.room.findMany({
      where: {
        users: {
          some: {
            id: userId,
          },
        },
      },
      include: {
        users: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    });
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        email: true,
        passwordHash: true,
        userAuthToken: true,
      },
    });
    console.log(user);
    return {
      rooms,
      usr: user,
    };
  } catch (err) {
    console.error(err);
    return fail(500, { error: { message: "Failed to fetch rooms." } });
  }
};
const actions = {};

var _page_server_ts = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  actions: actions,
  load: load,
});

const index = 5;
let component_cache;
const component = async () =>
  (component_cache ??= (await import("./_page.svelte-f2ce155e.js")).default);
const server_id = "src/routes/(app)/chatrooms/+page.server.ts";
const imports = [
  "_app/immutable/nodes/5.54e92a0f.js",
  "_app/immutable/chunks/index.229400e6.js",
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
//# sourceMappingURL=5-87b57963.js.map
