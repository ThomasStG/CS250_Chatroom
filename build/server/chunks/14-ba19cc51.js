import { d as db } from "./database-637f9b59.js";
import { f as fail, r as redirect } from "./index-0087e825.js";
import "@prisma/client";

const load = async ({ params, locals }) => {
  try {
    const notificationId = parseInt(params.slug);
    console.log("notificationId: ", notificationId);
    if (notificationId) {
      const notifications = await db.notification.findMany({
        where: {
          id: notificationId,
        },
      });
      const notification = notifications[0];
      return {
        notification,
      };
    }
  } catch (err) {
    console.error(err);
    return fail(500, { error: { message: "Internal Server Error" } });
  }
};
const actions = {
  deleteMessage: async ({ request, params }) => {
    try {
      const notificationId = parseInt(params.slug);
      console.log(notificationId);
      const message = await db.notification.findMany({
        where: {
          id: notificationId,
        },
      });
      if (message.length > 0) {
        console.log(message[0]);
        const notifications = await db.notification.deleteMany({
          where: {
            id: notificationId,
          },
        });
        console.log(notificationId, " deleted");
      }
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
    throw redirect(303, "/notifications");
  },
};

var _page_server_ts = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  actions: actions,
  load: load,
});

const index = 14;
let component_cache;
const component = async () =>
  (component_cache ??= (await import("./_page.svelte-16618eda.js")).default);
const server_id = "src/routes/(app)/notifications/[slug]/+page.server.ts";
const imports = [
  "_app/immutable/nodes/14.317de12f.js",
  "_app/immutable/chunks/index.229400e6.js",
  "_app/immutable/chunks/forms.4c325e09.js",
  "_app/immutable/chunks/parse.bee59afc.js",
  "_app/immutable/chunks/singletons.dd9c9a0a.js",
  "_app/immutable/chunks/navigation.71f60e69.js",
];
const stylesheets = ["_app/immutable/assets/14.9218ae43.css"];
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
//# sourceMappingURL=14-ba19cc51.js.map
