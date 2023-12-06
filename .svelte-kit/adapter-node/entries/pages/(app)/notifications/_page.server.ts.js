import { d as db } from "../../../../chunks/database.js";
import "../../../../chunks/index.js";
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
export {
  load
};
