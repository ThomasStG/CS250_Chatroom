import prisma from "$lib/database";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export async function POST({ request }) {
  try {
    const { addedUsers, chatId } = await request.json();

    const room = await prisma.room.update({
      where: { id: chatId },
      data: { users: { connect: addedUsers.map((id) => ({ id })) } },
    });

    if (!room) {
      console.error("Error updating room");
      return json({ error: "Error updating room" }, { status: 400 });
    }

    console.log("Room updated:", room);
    return json({ room }, { status: 201 });
  } catch (error) {
    console.error("Error updating room:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}
