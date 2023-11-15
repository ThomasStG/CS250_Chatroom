// @ts-nocheck
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load = async ({ request, locals }: Parameters<PageServerLoad>[0]) => {
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
            username: true,
          },
        },
      },
    });
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        email: true,
        passwordHash: true,
        userAuthToken: true,
      },
    });
    console.log(user);
    return {
      rooms: rooms,
      usr: user,
    };
  } catch (err) {
    console.error(err);
    return fail(500, { error: { message: "Failed to fetch rooms." } });
  }
};

export const actions = {
  delete: async ({ request }: import('./$types').RequestEvent) => {
    try {
      console.log(1);
      const formData = Object.fromEntries(await request.formData());
      const roomtmp = formData.room;
      console.log(2);
      let room: number = -1;
      console.log(roomtmp);
      if (roomtmp) {
        room = +roomtmp;
      }
      console.log(room);

      if (room == null || room == -1) {
        return fail(400, { error: { message: "Missing room ID" } });
      }

      console.log(5);
      await prisma.message.deleteMany({
        where: {
          roomId: room,
        },
      });
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
  },
};
;null as any as Actions;