import { d as db } from "../../../../../../chunks/database.js";
import { f as fail, r as redirect } from "../../../../../../chunks/index.js";
const load = async ({ params }) => {
  try {
    const roomId = parseInt(params.slug);
    const room = await db.room.findUnique({
      where: {
        id: roomId
      }
    });
    return {
      room
    };
  } catch (err) {
    console.error("Error: ", err);
    return fail(500, { error: { message: "Internal server error" } });
  }
};
const actions = {
  rename: async ({ params, request }) => {
    try {
      const roomId = parseInt(params.slug);
      const data = await request.formData();
      const newName = data.get("newName")?.toString();
      if (newName && (newName.length > 15 || newName.length < 3)) {
        throw "Name is too long or too short";
      }
      await db.room.update({
        where: {
          id: roomId
        },
        data: {
          name: newName
        }
      });
    } catch (err) {
      console.error("Error: ", err);
      return fail(500, { error: { message: "Internal server error" } });
    }
  },
  exit: async ({ locals, params }) => {
    try {
      const roomId = parseInt(params.slug);
      const userId = parseInt(locals.user.id);
      const room = await db.room.findUnique({
        where: { id: roomId },
        include: { users: true }
        // Include users for filtering
      });
      if (!room) {
        return fail(400, { error: { message: "Missing room ID" } });
      }
      if (room.users.length == 1) {
        await db.room.update({
          where: { id: roomId },
          data: {
            users: {
              disconnect: { id: userId }
              // Disconnect the specific user
            }
          }
        });
        await db.room.delete({
          where: { id: roomId }
        });
        console.log("deleted");
      } else {
        await db.room.update({
          where: { id: roomId },
          data: {
            users: {
              disconnect: { id: userId }
              // Disconnect the specific user
            }
          }
        });
      }
    } catch (error) {
      console.error("Error removing user:", error);
      return fail(500, { error: { message: "Internal server error" } });
    }
    throw redirect(302, "/chatrooms");
  }
};
export {
  actions,
  load
};
