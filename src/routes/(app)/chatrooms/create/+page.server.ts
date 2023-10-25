import type { Actions } from "./$types";
import prisma from "$lib/database";
import { fail, json } from "@sveltejs/kit";

let userIds: string[] = [];
export const actions: Actions = {
    search: async ({ request }) => {
        try {
            const formData = Object.fromEntries(await request.formData());
            const username = formData.get("username");

            if (!username) {
                return fail(400, { error: { message: "Missing username" } });
            }

            const user = await prisma.user.findUnique({
                where: { username },
            });

            if (!user) {
                return fail(404, { error: { message: "User not found" } });
            }

            return json({ user });
        } catch (error) {
            console.error("Error searching for user:", error);
            return fail(500, { error: { message: "Internal server error" } });
        }
    },
    usrlist: async ({ requests, locals }) => {
        const userId = locals.user?.id;
        if (userIds.length == 0) {
            userIds.push(userId);
        }
        const formData = new URLSearchParams(await requests.text());
        const addname: string | null = formData.get("name");
        if (addname != null)
            userIds.push(addname);
    },

    createChatroom: async ({ request, locals }) => {
        try {
            console.log(1);
            const formData = new URLSearchParams(await request.text());
            console.log(2);

            const chatname = formData.get("chatname");
            console.log(chatname);
            const userId = locals.user?.id;
            if (!chatname) {
                console.log("Early return due to missing username or chatname");
                return fail(400, { error: { message: "Missing username or chatname" } });
            }
            if (!userId) {
                console.log("Early return due to user not authenticated");
                return fail(403, { error: { message: "User not authenticated." } });
            }
            console.log(4);
            console.log(5);

            console.log(6);  // Add additional log here
            const usersToConnect = userIds.map((id) => ({ id: Number(id) }));
            usersToConnect.push({ id: userId }); // Add the current user
            console.log(7);  // Add additional log here

            const newRoom = await prisma.room.create({
                data: {
                    name: chatname,
                    users: {
                        connect: usersToConnect,
                    },
                    Chatroom: true,
                },
            });

            //console.log(`${user.username} added to chatroom ${chatname}`);

            // Clear the userIds array
            userIds = [];

            return {
                status: 201, headers: {
                    'Location': '/chatrooms'
                }
            };
        } catch (error) {
            console.error("Error creating chatroom:", error);
            return fail(500, { error: { message: "Failed to create chatroom." } });
        }
    },
};