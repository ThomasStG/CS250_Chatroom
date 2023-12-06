import { d as db } from "../../../../../chunks/database.js";
import "dns";
import { j as json } from "../../../../../chunks/index.js";
async function POST({ request }) {
  const { addedUsers, chatname } = await request.json();
  const usersToConnect = addedUsers.map((id) => ({
    id
  }));
  const room = await db.room.create({
    data: {
      name: chatname,
      Chatroom: true,
      users: {
        connect: usersToConnect
      }
    },
    include: {
      users: true
    }
  });
  if (!room) {
    console.error("error creating room");
  } else {
    console.log("room created: ", room);
  }
  return json({ room }, { status: 201 });
}
export {
  POST
};
