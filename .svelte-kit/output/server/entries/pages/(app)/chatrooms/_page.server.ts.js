import { d as db } from "../../../../chunks/database.js";
import { f as fail } from "../../../../chunks/index.js";
const load = async ({ request, locals }) => {
  const userId = locals.user.id;
  if (!userId) {
    return fail(403, { error: { message: "User not authenticated." } });
  }
  try {
    const rooms = await db.room.findMany({
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
            email: true,
            username: true
          }
        }
      }
    });
    const user = await db.user.findUnique({
      where: {
        id: userId
      },
      select: {
        id: true,
        username: true,
        email: true,
        passwordHash: true,
        userAuthToken: true
      }
    });
    console.log(user);
    return {
      rooms,
      usr: user
    };
  } catch (err) {
    console.error(err);
    return fail(500, { error: { message: "Failed to fetch rooms." } });
  }
};
const actions = {};
export {
  actions,
  load
};
