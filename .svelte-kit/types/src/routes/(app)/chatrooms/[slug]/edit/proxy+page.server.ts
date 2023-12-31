// @ts-nocheck
import type { Action, PageServerLoad, Actions } from "./$types";
import prisma from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ params, locals }: Parameters<PageServerLoad>[0]) => {
  try {
    const roomId: number = parseInt(params.slug);
    const userId = locals.user.id;

    const room = await prisma.room.findUnique({
      where: {
        id: roomId,
      },
      include: {
        users: true,
      },
    });
    return {
      room,
      userId,
    };
  } catch (err) {
    console.error("Error: ", err);
    return fail(500, { error: { message: "Internal server error" } });
  }
};

export const actions = {
  rename: async ({ params, request }: import('./$types').RequestEvent) => {
    try {
      const roomId: number = parseInt(params.slug);
      const data = await request.formData();
      const newName = data.get("newName")?.toString();
      if (newName && (newName.length > 15 || newName.length < 3)) {
        throw "Name is too long or too short";
      }
      await prisma.room.update({
        where: {
          id: roomId,
        },
        data: {
          name: newName,
        },
      });
    } catch (err) {
      console.error("Error: ", err);
      return fail(500, { error: { message: "Internal server error" } });
    }
    //throw redirect(302, "/chatrooms/" + parseInt(params.slug));
  },
  exit: async ({ locals, params }: import('./$types').RequestEvent) => {
    try {
      const roomId: number = parseInt(params.slug);
      const userId: number = parseInt(locals.user.id); // Assuming user ID is a number

      const room = await prisma.room.findUnique({
        where: { id: roomId },
        include: { users: true }, // Include users for filtering
      });

      if (!room) {
        return fail(400, { error: { message: "Missing room ID" } });
      }
      if (room.users.length == 1) {
        await prisma.room.update({
          where: { id: roomId },
          data: {
            users: {
              disconnect: { id: userId }, // Disconnect the specific user
            },
          },
        });
        await prisma.room.delete({
          where: { id: roomId },
        });
        console.log("deleted");
      } else {
        await prisma.room.update({
          where: { id: roomId },
          data: {
            users: {
              disconnect: { id: userId }, // Disconnect the specific user
            },
          },
        });
      }

      // Return success or appropriate response
    } catch (error) {
      console.error("Error removing user:", error);
      return fail(500, { error: { message: "Internal server error" } });
    }
    throw redirect(302, "/chatrooms");
  },
};
;null as any as Actions;