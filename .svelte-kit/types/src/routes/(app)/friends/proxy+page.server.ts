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
    // Merge friends from both relations into a single array
    if (userWithFriends != null) {
        friends = [
            ...userWithFriends.friendsAsUser1.map(friend => friend.user2),
            ...userWithFriends.friendsAsUser2.map(friend => friend.user1)
        ];
    }

    // Fetch the user's friend requests
    const friendRequests = await prisma.friendRequest.findMany({
        where: {
            OR: [
                { fromId: userId, status: 'pending' },
                { toId: userId, status: 'pending' }
            ]
        },
        include: {
            from: true,  // Include the details of the user who sent the request
            to: true    // Include the details of the user to whom the request was sent
        }
    });

    return {

        friendRequests,
        friends  // Include the friends array in the returned props
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

            const friendRequest = await prisma.friendRequest.create({
                data: {
                    fromId: userFromId,
                    toId: userTo.id,
                }
            })

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
            const formData = Object.fromEntries(await request.formData());
            const { requestId } = formData;

            // Fetch the friend request details
            const friendRequest = await prisma.friendRequest.findUnique({
                where: { id: Number(requestId) },
                include: { from: true, to: true }
            });

            if (!friendRequest) {
                // Friend request not found
                return fail(404, { error: { message: "Friend request not found" } });
            }

            // Begin a transaction to update the friend request and create the friend record
            await prisma.$transaction([
                prisma.friendRequest.update({
                    where: { id: Number(requestId) },
                    data: { status: 'accepted', acceptedAt: new Date() }
                }),
                prisma.friend.create({
                    data: {
                        userId1: friendRequest.fromId,
                        userId2: friendRequest.toId
                    }
                })
            ]);

            return { body: { message: 'Friend request accepted' } };

        } catch (err) {
            console.error(err);
            return fail(500, { error: { message: "Internal Server Error" } });
        }
    },
};
;null as any as Actions;