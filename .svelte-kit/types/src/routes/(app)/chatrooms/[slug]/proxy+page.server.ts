// @ts-nocheck
import type { Action, PageServerLoad, Actions } from "./$types";
import prisma from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";
import db from "$lib/database";


export const load = async ({ params, locals }: Parameters<PageServerLoad>[0]) => {
    const userId = locals.user?.id; // Get the userId from the locals object
    const roomId = parseInt(params.slug); // Convert the slug to an integer using parseInt()
    console.log("roomId: ", roomId)
    // Fetch the messages for the specific chat room and include sender and receiver details
    const messages = await prisma.message.findMany({
        where: {
            roomId: roomId, // Use the roomId here, not params.slug
        },
        include: {
            sender: true,
            //receiver: true,

        },
    });

    return {
        messages,
    };
};

export const actions = {
    sendMessage: async ({ request, params, locals }: import('./$types').RequestEvent) => {
        const formData = Object.fromEntries(await request.formData()) as Record<string, string | number>;

        const {
            content,
        } = formData;

        const convertedFormData = {
            content: String(content),
        };

        const userId = locals.user?.id; // Get the userId from the locals object
        const roomId = parseInt(params.slug); // Convert the slug to an integer using parseInt()
        //const sentAt: Date = new Date();

        if (!userId) {
            return fail(403, { error: { message: "User not authenticated." } });
        }


        try {
            await prisma.message.create({
                data: {
                    ...convertedFormData,
                    sender: {
                        connect: {
                            id: userId,
                        },
                    },
                    receiver: {
                        connect: {
                            id: userId,
                        },
                    },
                    room: {
                        connect: {
                            id: roomId,
                        },
                    },
                    content: String(content),
                    status: "unread",
                    //sentAt: sentAt,
                },
            });
        }
        catch (err) {
            console.error(err);
            return fail(500, { error: { message: "Failed to send message." } });
        }
        return {
            status: 201,
        }
    }, editMessage: async ({ request, params, locals }: import('./$types').RequestEvent) => {
        const data = await request.formData();
        let newMessage = data.get("message")?.toString();
        const messageI = Number(data.get("messageId"));
        if (newMessage == null) {
            newMessage = "";
        }

        await db.message.update({
            where: {
                id: messageI,
            },
            data: {
                content: newMessage,
            },
        });
        console.log(newMessage);
    }
};null as any as Actions;