import { d as db } from "./database-637f9b59.js";
import { f as fail } from "./index-0087e825.js";
import "@prisma/client";

const load = async ({ request, locals }) => {
  const userId = locals.user.id;
  if (!userId) {
    return fail(403, { error: { message: "User not authenticated." } });
  }
  try {
    const roo = await db.room.findMany({
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
          },
        },
      },
    });
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });
    return {
      rooms: roo,
      usr: user,
    };
  } catch (err) {
    console.error(err);
    return fail(500, { error: { message: "Failed to fetch rooms." } });
  }
};

var _layout_server_ts = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  load: load,
});

const index = 3;
let component_cache;
const component = async () =>
  (component_cache ??= (await import("./layout.svelte-38e1b153.js")).default);
const server_id = "src/routes/(app)/directMessage/+layout.server.ts";
const imports = [
  "_app/immutable/nodes/3.5519d859.js",
  "_app/immutable/chunks/index.229400e6.js",
];
const stylesheets = [];
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
//# sourceMappingURL=3-a9d2dd7e.js.map
