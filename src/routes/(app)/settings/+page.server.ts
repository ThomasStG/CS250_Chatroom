import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";

import db from "$lib/database";

export const load: PageServerLoad = async ({ request, locals }) => {
  const userId = locals.user.id;

  // Fetch the user's friends
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return {
    userId,
    user,
  };
};

export const actions: Actions = {
  changeName: async ({ request, params, locals }) => {
    try {
      const userId: number = locals.user.id;
      const formData = Object.fromEntries(await request.formData());
      const newName: string = formData.username.toString();

      // Use the `await` keyword to wait for the Prisma update operation to complete
      const updatedUser = await prisma.user.update({
        data: { username: newName },
        where: {
          id: userId,
        },
      });

      // Check if the update was successful
      if (updatedUser) {
        console.log("User name updated successfully:", updatedUser);
      } else {
        console.log("User not found or update failed.");
      }
    } catch (err) {
      console.log("Error", err);
    }
  },
  changePass: async ({ request, params, locals }) => {
    try {
      const userId: number = locals.user.id;
      const formData = Object.fromEntries(await request.formData());
      const oldPass: string = formData.oldPass.toString();
      const newPass1: string = formData.newPass1.toString();
      const newPass2: string = formData.newPass2.toString();

      if (newPass1 != newPass2) {
        return fail(400, { error: { message: "Passwords do not match" } });
      }

      // Use the `await` keyword to wait for the Prisma update operation to complete
      const user = await db.user.findUnique({ where: { id: userId } });
      if (!user) {
        return fail(400, { error: { message: "Could not find user." } });
      }

      const userPassword = await bcrypt.compare(oldPass, user.passwordHash);
      if (!userPassword) {
        return fail(400, { error: { message: "Invalid credentials." } });
        console.log("pass fail");
      }
      // If the old password is correct, hash the new password and update it in the database
      const newPassHash = await bcrypt.hash(newPass1, 10);

      const updatedPass = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          passwordHash: newPassHash,
        },
      });

      // Check if the update was successful
      if (updatedPass) {
        console.log("Password updated successfully:", updatedPass);
      } else {
        console.log("User not found or update failed.");
      }
    } catch (err) {
      console.log("Error", err);
    }
  },
  deleteAccount: async ({ request, params, locals }) => {
    try {
      const userId: number = locals.user.id;

      await prisma.$transaction(async (prisma) => {
        // Manually handle deletions based on relationships
        await prisma.message.deleteMany({
          where: {
            OR: [{ senderId: userId }, { receiverId: userId }],
          },
        });

        // Remove the user from rooms or delete rooms associated only with this user
        const roomsToUpdate = await prisma.room.findMany({
          where: {
            users: { some: { id: userId } },
          },
        });

        for (const room of roomsToUpdate) {
          const updatedUsers = room.users.filter((user) => user.id !== userId);

          await prisma.room.update({
            where: { id: room.id },
            data: {
              users: {
                disconnect: updatedUsers.map((user) => ({ id: user.id })),
              },
            },
          });
        }

        // Handle friend relationships and friend requests
        await prisma.friendRequest.deleteMany({
          where: {
            OR: [{ fromId: userId }, { toId: userId }],
          },
        });

        await prisma.friend.deleteMany({
          where: {
            OR: [{ userId1: userId }, { userId2: userId }],
          },
        });

        // Delete notifications related to the user
        await prisma.notification.deleteMany({
          where: {
            receiverId: userId,
          },
        });

        // Finally, delete the user
        await prisma.user.delete({
          where: {
            id: userId,
          },
        });
      });
    } catch (err) {
      console.log("Error", err);
    }
    throw redirect(302, "/");
  },
};
