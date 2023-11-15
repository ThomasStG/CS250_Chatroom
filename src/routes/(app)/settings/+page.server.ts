import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";
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

      const deleteRooms = await prisma.room.deleteMany({
        where: {
          AND: [
            {
              OR: [
                { users: { some: { id: userId } } },
                { users: { some: { id: userId } } },
              ],
            },
            { Chatroom: false },
          ],
        },
      });

      const deleteFriends = await prisma.friend.deleteMany({
        where: {
          OR: [
            {
              user1: {
                id: userId,
              },
            },
            {
              user2: {
                id: userId,
              },
            },
          ],
        },
      });

      const deleteFriendsRequests = await prisma.friendRequest.deleteMany({
        where: {
          OR: [
            {
              to: {
                id: userId,
              },
            },
            {
              from: {
                id: userId,
              },
            },
          ],
        },
      });
      if (deleteFriends && deleteFriendsRequests && deleteRooms) {
        const deleteUser = await prisma.user.delete({
          where: {
            id: userId,
          },
        });
        if (deleteUser) {
          console.log("Account deleted successfully:", deleteUser);
        } else {
          console.log("User not found or update failed.");
        }
      }
    } catch (err) {
      console.log("Error", err);
    }
  },
};
