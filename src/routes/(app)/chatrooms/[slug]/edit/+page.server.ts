import type { Action, PageServerLoad, Actions } from "./$types";
import prisma from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
    try {
        const roomId: number = parseInt(params.slug);

        const room = await prisma.room.findUnique({
            where: {
                id: roomId,
            },
        });
        return {
            room,
        };
    } catch (err) {
        console.error("Error: ", err);
        return fail(500, { error: { message: "Internal server error" } });
    }
};

export const actions: Actions = {
  rename: async ({ params, request }) => {
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
  exit: async ({ locals, params }) => {
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
