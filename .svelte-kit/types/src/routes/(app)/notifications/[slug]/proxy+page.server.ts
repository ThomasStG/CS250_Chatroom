// @ts-nocheck
import type { PageServerLoad, Actions } from "./$types";
import prisma from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ params, locals }: Parameters<PageServerLoad>[0]) => {
  try {
    const notificationId: number = parseInt(params.slug); // Convert the slug to an integer using parseInt()
    console.log("notificationId: ", notificationId);
    // Fetch the specific notification
    if (notificationId) {
      const notifications = await prisma.notification.findMany({
        where: {
          id: notificationId,
        },
      });
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
      const message = await prisma.notification.findMany({
        where: {
          id: notificationId,
        },
      });

      if (message.length > 0) {
        console.log(message[0]);
        const notifications = await prisma.notification.deleteMany({
          where: {
            id: notificationId,
          },
        });
        console.log(notificationId, " deleted");
      }
    } catch (err) {
      console.error(err);
      return fail(500, { error: { message: "Internal Server Error" } });
    }
    throw redirect(303, "/notifications");
  },
};
;null as any as Actions;