// @ts-nocheck
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load = async ({ request, locals }: Parameters<PageServerLoad>[0]) => {
  const userId = locals.user.id;

  // Fetch the user's friends
  const userWithFriends = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      friendsAsUser1: {
        include: {
          user2: true,
        },
      },
      friendsAsUser2: {
        include: {
          user1: true,
        },
      },
    },
  });

  let friends;
  // Merge friends from both relations into a single array
  if (userWithFriends != null) {
    friends = [
      ...userWithFriends.friendsAsUser1.map((friend) => friend.user2),
      ...userWithFriends.friendsAsUser2.map((friend) => friend.user1),
    ];
  }

  // Fetch the user's friend requests
  const friendRequests = await prisma.friendRequest.findMany({
    where: {
      OR: [
        { fromId: userId, status: "pending" },
        { toId: userId, status: "pending" },
      ],
    },
    include: {
      from: true, // Include the details of the user who sent the request
      to: true, // Include the details of the user to whom the request was sent
    },
  });

  return {
    friendRequests,
    friends,
    userId, // Include the friends array in the returned props
  };
};

export const actions = {
  friendRequest: async ({ request, locals }: import('./$types').RequestEvent) => {
    try {
      const formData = Object.fromEntries(await request.formData());
      const { userName } = formData;
      console.log(userName);

      const userTo = await prisma.user.findUnique({
        where: {
          username: String(userName),
        },
      });

      if (!userTo) {
        // User not found
        return fail(404, { error: { message: "User not found" } });
      }

      const userFromId = locals.user.id;
      if (userTo.id == userFromId) {
        return fail(404, {
          error: { message: "You cannot send a friend request to yourself" },
        });
      }

      const friendRequest = await prisma.friendRequest.create({
        data: {
          fromId: userFromId,
          toId: userTo.id,
        },
      });

      const from = await prisma.user.findUnique({ where: { id: userFromId } });
      const to: number = userTo.id;
      const message =
        from?.username +
        " has sent you a friend request. Go to your friends page to accept.";
      await prisma.notification.create({
        data: {
          content: message,
          receiverId: to,
          senderName: from?.username,
        },
      });

      // User found, return the username
      return {
        body: {
          userName: userTo.username,
          friendRequest: friendRequest.id,
        },
      };
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
  accept: async ({ request, locals }: import('./$types').RequestEvent) => {
    try {
      const userId = locals.user.id;
      const formData = Object.fromEntries(await request.formData());
      const { requestId } = formData;

      // Fetch the friend request details
      const friendRequest = await prisma.friendRequest.findUnique({
        where: { id: Number(requestId) },
        include: { from: true, to: true },
      });

      if (!friendRequest) {
        // Friend request not found
        return fail(404, { error: { message: "Friend request not found" } });
      }
      const usernames = await prisma.user.findMany({
        where: {
          id: {
            in: [friendRequest.fromId, friendRequest.toId],
          },
        },
      });

      // Begin a transaction to update the friend request and create the friend record
      await prisma.$transaction([
        prisma.friendRequest.update({
          where: { id: Number(requestId) },
          data: { status: "accepted", acceptedAt: new Date() },
        }),
        prisma.friend.create({
          data: {
            userId1: friendRequest.fromId,
            userId2: friendRequest.toId,
          },
        }),
      ]);
      const name: string = usernames[0].username + "‎" + usernames[1].username;
      console.log(name);

      await prisma.room.create({
        data: {
          name: "DirectMessage", // Specify the room name
          users: {
            connect: [
              { id: friendRequest.from.id },
              { id: friendRequest.to.id },
            ],
          },
          Chatroom: false,
        },
      });

      return { body: { message: "Friend request accepted" } };
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
  removeFriend: async ({ request, locals }: import('./$types').RequestEvent) => {
    try {
      const userId = locals.user.id;
      const data = await request.formData();
      const friendIDTemp = data.get("friendID");
      if (!friendIDTemp) {
        throw new Error("No friend ID provided.");
      }
      const friendID: number = +friendIDTemp;

      // Fetch the friend request details

      await prisma.friend.deleteMany({
        where: {
          OR: [
            {
              userId1: friendID,
              userId2: userId,
            },
            {
              userId1: userId,
              userId2: friendID,
            },
          ],
        },
      });
      const roomsToDelete = await prisma.room.findMany({
        where: {
          AND: [
            {
              OR: [
                {
                  users: {
                    some: {
                      id: friendID,
                    },
                  },
                },
                {
                  users: {
                    some: {
                      id: userId,
                    },
                  },
                },
              ],
            },
            {
              Chatroom: false,
            },
          ],
        },
        include: {
          users: true,
        },
      });
      for (const room of roomsToDelete) {
        console.log(room);

        // Get the user IDs related to this room
        const userIds = room.users.map((user) => user.id);

        // Disconnect users from the room
        await prisma.room.update({
          where: { id: room.id },
          data: {
            users: {
              disconnect: userIds.map((id) => ({ id })),
            },
          },
        });
        await prisma.message.deleteMany({
          where: {
            roomId: room.id,
          },
        });

        await prisma.room.delete({
          where: { id: room.id },
        });
      }
      return { body: { message: "Friend request accepted" } };
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
};
;null as any as Actions;