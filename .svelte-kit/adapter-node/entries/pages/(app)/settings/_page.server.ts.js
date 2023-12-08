import { d as db } from "../../../../chunks/database.js";
import { f as fail, r as redirect } from "../../../../chunks/index.js";
import bcrypt from "bcrypt";
const load = async ({ request, locals }) => {
  const userId = locals.user.id;
  const user = await db.user.findUnique({
    where: { id: userId }
  });
  return {
    userId,
    user
  };
};
const actions = {
  changeName: async ({ request, params, locals }) => {
    try {
      const userId = locals.user.id;
      const formData = Object.fromEntries(await request.formData());
      const newName = formData.username.toString();
      const updatedUser = await db.user.update({
        data: { username: newName },
        where: {
          id: userId
        }
      });
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
      const userId = locals.user.id;
      const formData = Object.fromEntries(await request.formData());
      const oldPass = formData.oldPass.toString();
      const newPass1 = formData.newPass1.toString();
      const newPass2 = formData.newPass2.toString();
      if (newPass1 != newPass2) {
        return fail(400, { error: { message: "Passwords do not match" } });
      }
      const user = await db.user.findUnique({ where: { id: userId } });
      if (!user) {
        return fail(400, { error: { message: "Could not find user." } });
      }
      const userPassword = await bcrypt.compare(oldPass, user.passwordHash);
      if (!userPassword) {
        return fail(400, { error: { message: "Invalid credentials." } });
        console.log("pass fail");
      }
      const newPassHash = await bcrypt.hash(newPass1, 10);
      const updatedPass = await db.user.update({
        where: {
          id: userId
        },
        data: {
          passwordHash: newPassHash
        }
      });
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
      const userId = locals.user.id;
      await db.$transaction(async (prisma2) => {
        await prisma2.message.deleteMany({
          where: {
            OR: [{ senderId: userId }, { receiverId: userId }]
          }
        });
        const roomsToUpdate = await prisma2.room.findMany({
          where: {
            users: { some: { id: userId } }
          }
        });
        for (const room of roomsToUpdate) {
          const updatedUsers = room.users.filter((user) => user.id !== userId);
          await prisma2.room.update({
            where: { id: room.id },
            data: {
              users: {
                disconnect: updatedUsers.map((user) => ({ id: user.id }))
              }
            }
          });
        }
        await prisma2.friendRequest.deleteMany({
          where: {
            OR: [{ fromId: userId }, { toId: userId }]
          }
        });
        await prisma2.friend.deleteMany({
          where: {
            OR: [{ userId1: userId }, { userId2: userId }]
          }
        });
        await prisma2.notification.deleteMany({
          where: {
            receiverId: userId
          }
        });
        await prisma2.user.delete({
          where: {
            id: userId
          }
        });
      });
    } catch (err) {
      console.log("Error", err);
    }
    throw redirect(302, "/");
  }
};
export {
  actions,
  load
};
