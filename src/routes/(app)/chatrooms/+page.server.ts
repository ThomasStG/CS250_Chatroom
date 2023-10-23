import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request, locals }) => {
  // Get the userId from the user object in event.locals
  const userId = locals.user.id;

  if (!userId) {
    // Handle the case when userId is not available (user is not authenticated)
    return fail(403, { error: { message: "User not authenticated." } });
  }

  try {
    // Fetch the rooms associated with the user's userId
    const rooms = await prisma.room.findMany({
      where: {
        users: {
          some: {
            id: userId,
          },
        },
      },
      include: {
        users: {
          select: {
            email: true,
          },
        },
      },
    });

    return {
      rooms,
    };
  } catch (err) {
    console.error(err);
    return fail(500, { error: { message: "Failed to fetch rooms." } });
  }
};

export const actions: Actions = {
  delete: async ({ request }) => {
    try {
      console.log(1);
      const formData = new URLSearchParams(await request.text());
      const roomtmp: string | null = formData.get("room");
      console.log(2);
      let room: number | null = null;
      console.log(roomtmp)
      if (roomtmp) {
        room = +roomtmp;
      }
      console.log(room);

      if (room == null) {
        return fail(400, { error: { message: "Missing room ID" } });
      }

      console.log(5);
      await prisma.room.delete({
        where: {
          id: room,
        },
      });
      console.log(6);
    } catch (error) {
      console.error("Error deleting room:", error);
      return fail(500, { error: { message: "Internal server error" } });
    }
  }
};