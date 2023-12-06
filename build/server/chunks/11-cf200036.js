import { d as db } from './database-637f9b59.js';
import { f as fail } from './index-0087e825.js';
import '@prisma/client';

const load = async ({ request, locals }) => {
  const userId = locals.user.id;
  const userWithFriends = await db.user.findUnique({
    where: { id: userId },
    include: {
      friendsAsUser1: {
        include: {
          user2: true
        }
      },
      friendsAsUser2: {
        include: {
          user1: true
        }
      }
    }
  });
  let friends;
  if (userWithFriends != null) {
    friends = [
      ...userWithFriends.friendsAsUser1.map((friend) => friend.user2),
      ...userWithFriends.friendsAsUser2.map((friend) => friend.user1)
    ];
  }
  const friendRequests = await db.friendRequest.findMany({
    where: {
      OR: [
        { fromId: userId, status: "pending" },
        { toId: userId, status: "pending" }
      ]
    },
    include: {
      from: true,
      // Include the details of the user who sent the request
      to: true
      // Include the details of the user to whom the request was sent
    }
  });
  return {
    friendRequests,
    friends,
    userId
    // Include the friends array in the returned props
  };
};
const actions = {
  friendRequest: async ({ request, locals }) => {
    try {
      const formData = Object.fromEntries(await request.formData());
      const { userName } = formData;
      console.log(userName);
      const userTo = await db.user.findUnique({
        where: {
          username: String(userName)
        }
      });
      if (!userTo) {
        return fail(404, { error: { message: "User not found" } });
      }
      const userFromId = locals.user.id;
      if (userTo.id == userFromId) {
        return fail(404, {
          error: { message: "You cannot send a friend request to yourself" }
        });
      }
      const friendRequest = await db.friendRequest.create({
        data: {
          fromId: userFromId,
          toId: userTo.id
        }
      });
      const from = await db.user.findUnique({ where: { id: userFromId } });
      const to = userTo.id;
      const message = from?.username + " has sent you a friend request. Go to your friends page to accept.";
      await db.notification.create({
        data: {
          content: message,
          receiverId: to,
          senderName: from?.username
        }
      });
      return {
        body: {
          userName: userTo.username,
          friendRequest: friendRequest.id
        }
      };
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
  accept: async ({ request, locals }) => {
    try {
      const userId = locals.user.id;
      const formData = Object.fromEntries(await request.formData());
      const { requestId } = formData;
      const friendRequest = await db.friendRequest.findUnique({
        where: { id: Number(requestId) },
        include: { from: true, to: true }
      });
      if (!friendRequest) {
        return fail(404, { error: { message: "Friend request not found" } });
      }
      const usernames = await db.user.findMany({
        where: {
          id: {
            in: [friendRequest.fromId, friendRequest.toId]
          }
        }
      });
      await db.$transaction([
        db.friendRequest.update({
          where: { id: Number(requestId) },
          data: { status: "accepted", acceptedAt: /* @__PURE__ */ new Date() }
        }),
        db.friend.create({
          data: {
            userId1: friendRequest.fromId,
            userId2: friendRequest.toId
          }
        })
      ]);
      const name = usernames[0].username + "‎" + usernames[1].username;
      console.log(name);
      await db.room.create({
        data: {
          name: "DirectMessage",
          // Specify the room name
          users: {
            connect: [
              { id: friendRequest.from.id },
              { id: friendRequest.to.id }
            ]
          },
          Chatroom: false
        }
      });
      return { body: { message: "Friend request accepted" } };
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
  removeFriend: async ({ request, locals }) => {
    try {
      const userId = locals.user.id;
      const data = await request.formData();
      const friendIDTemp = data.get("friendID");
      if (!friendIDTemp) {
        throw new Error("No friend ID provided.");
      }
      const friendID = +friendIDTemp;
      await db.friend.deleteMany({
        where: {
          OR: [
            {
              userId1: friendID,
              userId2: userId
            },
            {
              userId1: userId,
              userId2: friendID
            }
          ]
        }
      });
      const roomsToDelete = await db.room.findMany({
        where: {
          AND: [
            {
              OR: [
                {
                  users: {
                    some: {
                      id: friendID
                    }
                  }
                },
                {
                  users: {
                    some: {
                      id: userId
                    }
                  }
                }
              ]
            },
            {
              Chatroom: false
            }
          ]
        },
        include: {
          users: true
        }
      });
      for (const room of roomsToDelete) {
        console.log(room);
        const userIds = room.users.map((user) => user.id);
        await db.room.update({
          where: { id: room.id },
          data: {
            users: {
              disconnect: userIds.map((id) => ({ id }))
            }
          }
        });
        await db.message.deleteMany({
          where: {
            roomId: room.id
          }
        });
        await db.room.delete({
          where: { id: room.id }
        });
      }
      return { body: { message: "Friend request accepted" } };
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6816b8c7.js')).default;
const server_id = "src/routes/(app)/friends/+page.server.ts";
const imports = ["_app/immutable/nodes/11.687b08bf.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/forms.4c325e09.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.dd9c9a0a.js","_app/immutable/chunks/navigation.71f60e69.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-cf200036.js.map
