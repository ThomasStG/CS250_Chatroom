import { d as db } from "../../../../../chunks/database.js";
import { r as redirect, f as fail } from "../../../../../chunks/index.js";
class Invalid extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
const load = async ({ params, locals }) => {
  try {
    const userId = locals.user?.id;
    const roomId = parseInt(params.slug);
    console.log("roomId: ", roomId);
    if (roomId) {
      const messages = await db.message.findMany({
        where: {
          roomId
          // Use the roomId here, not params.slug
        },
        include: {
          sender: true
        }
      });
      const roomName = await db.room.findUnique({
        where: {
          id: roomId
        }
      });
      const room = await db.room.findUnique({
        where: {
          id: roomId
        },
        include: {
          users: true
        }
      });
      if (room && room.users) {
        let isinroom = false;
        console.log("checking");
        for (const user of room.users) {
          if (user.id === userId) {
            console.log("found");
            isinroom = true;
          }
        }
        if (!isinroom) {
          console.log("invalid");
          throw new Invalid("Invalid User");
        }
      }
      return {
        messages,
        roomName,
        userId,
        roomId
      };
    }
  } catch (err) {
    if (err instanceof Invalid)
      throw redirect(302, "/chatrooms");
    else {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
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
      const roomId = parseInt(params.slug);
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
