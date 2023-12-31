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

export const actions: Actions = {};
