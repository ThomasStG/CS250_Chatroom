// @ts-nocheck
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail, json, redirect } from "@sveltejs/kit";

export const load = async ({ params, locals }: Parameters<PageServerLoad>[0]) => {
    const userId = locals.user?.id; // Get the userId from the locals object
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user || user.id != 2) {
      throw redirect(302, "/");
    }
};



export const actions = {
  search: async ({ request }: import('./$types').RequestEvent) => {
    try {
      const formData = Object.fromEntries(await request.formData());
      const username = formData.username.toString();

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

  send: async ({ request }: import('./$types').RequestEvent) => {
    try {
      const formData = new URLSearchParams(await request.text());
      console.log(2);

      const content = formData.get("content");
      const id = formData.get("id");
      const sender = formData.get("sender");
      console.log(content);
      if (!content) {
        console.log("Early return due to missing content");
        return fail(400, {
          error: { message: "Missing content" },
        });
      }

      if (sender != "")
        await prisma.$queryRaw`insert into Notification (receiverId, content, senderName) values (${id}, ${content}, ${sender})`;
      else
        await prisma.$queryRaw`insert into Notification (receiverId, content) values (${id}, ${content})`;

      return {
        status: 201,
        headers: {
          Location: "/sendNot",
        },
      };
    } catch (error) {
      console.error("Error creating notification:", error);
      return fail(500, {
        error: { message: "Failed to create notification." },
      });
    }
  },
  del: async ({ request }: import('./$types').RequestEvent) => {
    try {
      const deletedRooms = await prisma.room.deleteMany({
        where: {
          Chatroom: false,
        },
      });
    } catch (err) {
      console.log("Error", err);
    }
  },
};
;null as any as Actions;