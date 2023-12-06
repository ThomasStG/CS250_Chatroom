import { d as db } from "../../../../chunks/database.js";
import { f as fail } from "../../../../chunks/index.js";
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
            id: userId
          }
        }
      },
      include: {
        users: {
          select: {
            email: true
          }
        }
      }
    });
    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    });
    return {
      rooms: roo,
      usr: user
    };
  } catch (err) {
    console.error(err);
    return fail(500, { error: { message: "Failed to fetch rooms." } });
  }
};
export {
  load
};
