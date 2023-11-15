import prisma from "$lib/database";
import { resolveCname } from "dns";
import type { RequestEvent, RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  const { addedUsers, chatname } = await request.json();

  const usersToConnect = addedUsers.map((id) => ({
    id: id,
  }));

  const room = await prisma.room.create({
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
