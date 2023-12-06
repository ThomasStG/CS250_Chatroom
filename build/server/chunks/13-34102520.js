import { d as db } from './database-637f9b59.js';
import './index-0087e825.js';
import '@prisma/client';

const load = async ({ request, locals }) => {
  const userId = locals.user.id;
  const notifications = db.notification.findMany({
    where: {
      receiverId: userId
    }
  });
  return {
    userId,
    notifications
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-3734b8d0.js')).default;
const server_id = "src/routes/(app)/notifications/+page.server.ts";
const imports = ["_app/immutable/nodes/13.c695be80.js","_app/immutable/chunks/index.229400e6.js"];
const stylesheets = ["_app/immutable/assets/13.a6a2f9f0.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-34102520.js.map
