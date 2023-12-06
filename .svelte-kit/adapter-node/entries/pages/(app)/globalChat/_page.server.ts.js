import { d as db } from "../../../../chunks/database.js";
import { f as fail } from "../../../../chunks/index.js";
const load = async ({ params, locals }) => {
  try {
    const userId = locals.user?.id;
    const roomId = 0;
    const room = await db.room.findUnique({
      where: { id: roomId }
    });
    if (!room) {
      const test = await db.room.create({
        data: {
          id: 0,
          name: "Global",
          Chatroom: true
        }
      });
    }
    const messages = await db.message.findMany({
      where: {
        roomId
        // Use the roomId here, not params.slug
      },
      include: {
        sender: true
      }
    });
    return {
      messages,
      userId
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
        content: String(content)
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
                id: userId
              }
            },
            room: {
              connect: {
                id: roomId
              }
            },
            content: String(content),
            status: "unread",
            sentAt: now
          }
        });
      } catch (err) {
        console.error(err);
        return fail(500, { error: { message: "Failed to send message." } });
      }
      return {
        status: 303,
        headers: { Location: "/globalChat/" }
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
          id: messageI
        },
        data: {
          content: newMessage,
          updatedAt: now
        }
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
          id: messageI
        }
      });
      if (message) {
        await db.message.delete({
          where: {
            id: messageI
          }
        });
        console.log(messageI, " deleted");
      }
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  }
};
export {
  actions,
  load
};
