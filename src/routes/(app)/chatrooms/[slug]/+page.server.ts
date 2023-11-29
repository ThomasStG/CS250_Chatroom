import type { Action, PageServerLoad, Actions } from "./$types";
import prisma from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";
import db from "$lib/database";

class Invalid extends Error {
  constructor(message: string) {
    super(message); // call the parent constructor
    this.name = "CustomError"; // set the name property
  }
}

export const load: PageServerLoad = async ({ params, locals }) => {
  try {
    const userId = locals.user?.id; // Get the userId from the locals object
    const roomId: number = parseInt(params.slug);
    console.log("roomId: ", roomId);
    // Fetch the messages for the specific chat room and include sender and receiver details
    if (roomId) {
      const messages = await prisma.message.findMany({
        where: {
          roomId: roomId, // Use the roomId here, not params.slug
        },
        include: {
          sender: true,
        },
      });
      const roomName = await prisma.room.findUnique({
        where: {
          id: roomId,
        },
      });
      const room = await prisma.room.findUnique({
        where: {
          id: roomId,
        },
        include: {
          users: true,
        },
      });

      if (room && room.users) {
        let isinroom: boolean = false;
        console.log("checking");
        for (const user of room.users) {
          if (user.id === userId) {
            console.log("found");
            isinroom = true;
          }
        }
        if (!isinroom) {
          console.log("invalid");
          throw new Invalid("Invalid User");
        }
      }
      return {
        messages,
        roomName,
        userId,
        roomId,
      };
    }
  } catch (err) {
    if (err instanceof Invalid) throw redirect(302, "/chatrooms");
    else {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  }
};

export const actions: Actions = {
  sendMessage: async ({ request, params, locals }) => {
    try {
      const formData = Object.fromEntries(await request.formData()) as Record<
        string,
        string | number
      >;
      const now = new Date();

      const { content } = formData;

      const convertedFormData = {
        content: String(content),
      };

      const userId = locals.user?.id; // Get the userId from the locals object
      const roomId: number = parseInt(params.slug); // Convert the slug to an integer using parseInt()

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
            room: {
              connect: {
                id: roomId,
              },
            },
            content: String(content),
            status: "unread",
            sentAt: now,
          },
        });
      } catch (err) {
        console.error(err);
        return fail(500, { error: { message: "Failed to send message." } });
      }

      return {
        status: 303,
        headers: { Location: "/globalChat/" },
      };
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
  editMessage: async ({ request }) => {
    try {
      const data = await request.formData();
      const now = new Date();
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
          updatedAt: now,
        },
      });
      console.log(messageI, " to ", newMessage);
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
  deleteMessage: async ({ request }) => {
    try {
      const data = await request.formData();
      const messageI = Number(data.get("messageId"));
      const message = await prisma.message.findUnique({
        where: {
          id: messageI,
        },
      });
      if (message) {
        await db.message.delete({
          where: {
            id: messageI,
          },
        });
        console.log(messageI, " deleted");
      }
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
};
