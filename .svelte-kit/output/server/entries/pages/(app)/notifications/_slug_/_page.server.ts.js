import { d as db } from "../../../../../chunks/database.js";
import { f as fail, r as redirect } from "../../../../../chunks/index.js";
const load = async ({ params, locals }) => {
  try {
    const notificationId = parseInt(params.slug);
    console.log("notificationId: ", notificationId);
    if (notificationId) {
      const notifications = await db.notification.findMany({
        where: {
          id: notificationId
        }
      });
      const notification = notifications[0];
      return {
        notification
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
          id: notificationId
        }
      });
      if (message.length > 0) {
        console.log(message[0]);
        const notifications = await db.notification.deleteMany({
          where: {
            id: notificationId
          }
        });
        console.log(notificationId, " deleted");
      }
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
    throw redirect(303, "/notifications");
  }
};
export {
  actions,
  load
};
