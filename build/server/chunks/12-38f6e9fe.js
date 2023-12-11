import { d as db } from "./database-637f9b59.js";
import { f as fail } from "./index-0087e825.js";
import "@prisma/client";

const load = async ({ params, locals }) => {
  try {
    const userId = locals.user?.id;
    const roomId = 0;
    const room = await db.room.findUnique({
      where: { id: roomId },
    });
    if (!room) {
      const test = await db.room.create({
        data: {
          id: 0,
          name: "Global",
          Chatroom: true,
        },
      });
    }
    const messages = await db.message.findMany({
      where: {
        roomId,
        // Use the roomId here, not params.slug
      },
      include: {
        sender: true,
      },
    });
    return {
      messages,
      userId,
    };
  } catch (err) {
    console.error(err);
    return fail(500, { error: { message: "Internal Server Error" } });
  }
};
const actions = {
  sendMessage: async ({ request, params, locals }) => {
    try {
      const formData = Object.fromEntries(await request.formData());
      const now = /* @__PURE__ */ new Date();
      const { content } = formData;
      const convertedFormData = {
        content: String(content),
      };
      const userId = locals.user?.id;
      const roomId = 0;
      if (!userId) {
        return fail(403, { error: { message: "User not authenticated." } });
      }
      try {
        await db.message.create({
          data: {
            ...convertedFormData,
            sender: {
              connect: {
                id: userId,
              },
            },
            room: {
              connect: {
                id: roomId,
              },
            },
            content: String(content),
            status: "unread",
            sentAt: now,
          },
        });
      } catch (err) {
        console.error(err);
        return fail(500, { error: { message: "Failed to send message." } });
      }
      return {
        status: 303,
        headers: { Location: "/globalChat/" },
      };
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
  editMessage: async ({ request }) => {
    try {
      const data = await request.formData();
      const now = /* @__PURE__ */ new Date();
      let newMessage = data.get("message")?.toString();
      const messageI = Number(data.get("messageId"));
      if (newMessage == null) {
        newMessage = "";
      }
      await db.message.update({
        where: {
          id: messageI,
        },
        data: {
          content: newMessage,
          updatedAt: now,
        },
      });
      console.log(messageI, " to ", newMessage);
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
  deleteMessage: async ({ request }) => {
    try {
      const data = await request.formData();
      const messageI = Number(data.get("messageId"));
      const message = await db.message.findUnique({
        where: {
          id: messageI,
        },
      });
      if (message) {
        await db.message.delete({
          where: {
            id: messageI,
          },
        });
        console.log(messageI, " deleted");
      }
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
};

var _page_server_ts = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  actions: actions,
  load: load,
});

const index = 12;
let component_cache;
const component = async () =>
  (component_cache ??= (await import("./_page.svelte-1c613615.js")).default);
const server_id = "src/routes/(app)/globalChat/+page.server.ts";
const imports = [
  "_app/immutable/nodes/12.daddda2b.js",
  "_app/immutable/chunks/index.229400e6.js",
  "_app/immutable/chunks/forms.4c325e09.js",
  "_app/immutable/chunks/parse.bee59afc.js",
  "_app/immutable/chunks/singletons.dd9c9a0a.js",
  "_app/immutable/chunks/navigation.71f60e69.js",
];
const stylesheets = ["_app/immutable/assets/6.81312968.css"];
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
//# sourceMappingURL=12-38f6e9fe.js.map
