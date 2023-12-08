import { d as db } from './database-637f9b59.js';
import { r as redirect, f as fail, j as json } from './index-0087e825.js';
import '@prisma/client';

const load = async ({ params, locals }) => {
  const userId = locals.user?.id;
  const user = await db.user.findUnique({
    where: { id: userId }
  });
  if (!user || user.id != 2) {
    throw redirect(302, "/");
  }
};
const actions = {
  search: async ({ request }) => {
    try {
      const formData = Object.fromEntries(await request.formData());
      const username = formData.username.toString();
      if (!username) {
        return fail(400, { error: { message: "Missing username" } });
      }
      const user = await db.user.findUnique({
        where: { username }
      });
      if (!user) {
        return fail(404, { error: { message: "User not found" } });
      }
      return json({ user });
    } catch (error) {
      console.error("Error searching for user:", error);
      return fail(500, { error: { message: "Internal server error" } });
    }
  },
  send: async ({ request }) => {
    try {
      const formData = new URLSearchParams(await request.text());
      console.log(2);
      const content = formData.get("content");
      const id = formData.get("id");
      const sender = formData.get("sender");
      console.log(content);
      if (!content) {
        console.log("Early return due to missing content");
        return fail(400, {
          error: { message: "Missing content" }
        });
      }
      if (sender != "")
        await db.$queryRaw`insert into Notification (receiverId, content, senderName) values (${id}, ${content}, ${sender})`;
      else
        await db.$queryRaw`insert into Notification (receiverId, content) values (${id}, ${content})`;
      return {
        status: 201,
        headers: {
          Location: "/sendNot"
        }
      };
    } catch (error) {
      console.error("Error creating notification:", error);
      return fail(500, {
        error: { message: "Failed to create notification." }
      });
    }
  },
  del: async ({ request }) => {
    try {
      const deletedRooms = await db.room.deleteMany({
        where: {
          Chatroom: false
        }
      });
    } catch (err) {
      console.log("Error", err);
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e12c7590.js')).default;
const server_id = "src/routes/(app)/sendNot/+page.server.ts";
const imports = ["_app/immutable/nodes/15.688ed06c.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/forms.4c325e09.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dd9c9a0a.js","_app/immutable/chunks/navigation.71f60e69.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-9138d8f8.js.map
