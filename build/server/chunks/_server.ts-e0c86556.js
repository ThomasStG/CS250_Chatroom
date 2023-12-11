import { d as db } from "./database-637f9b59.js";
import "dns";
import { j as json } from "./index-0087e825.js";
import "@prisma/client";

async function POST({ request }) {
  const { addedUsers, chatname } = await request.json();
  const usersToConnect = addedUsers.map((id) => ({
    id,
  }));
  const room = await db.room.create({
    data: {
      name: chatname,
      Chatroom: true,
      users: {
        connect: usersToConnect,
      },
    },
    include: {
      users: true,
    },
  });
  if (!room) {
    console.error("error creating room");
  } else {
    console.log("room created: ", room);
  }
  return json({ room }, { status: 201 });
}

export { POST };
//# sourceMappingURL=_server.ts-e0c86556.js.map
