// @ts-nocheck
import type { PageServerLoad, Actions } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load = async ({ params, locals }: Parameters<PageServerLoad>[0]) => {
  try {
    const notificationId: number = parseInt(params.slug); // Convert the slug to an integer using parseInt()
    console.log("notificationId: ", notificationId);
    // Fetch the specific notification
    if (notificationId) {
      const notifications =
        await prisma.$queryRaw`select * from Notification where id = ${notificationId}`;
      const notification = notifications[0];
      return {
        notification,
      };
    }
  } catch (err) {
    console.error(err);
    return fail(500, { error: { message: "Internal Server Error" } });
  }
};

export const actions = {
  deleteMessage: async ({ request, params }: import('./$types').RequestEvent) => {
    try {
      const notificationId: number = parseInt(params.slug);
      console.log(notificationId);
      const message =
        await prisma.$queryRaw`select * from Notification where id = ${notificationId}`;

      if (message.length > 0) {
        console.log(message[0]);
        await prisma.$queryRaw`Delete from Notification where id = ${notificationId}`;
        console.log(notificationId, " deleted");
      }
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
  },
};
;null as any as Actions;