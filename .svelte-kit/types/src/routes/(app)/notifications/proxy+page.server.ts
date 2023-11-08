// @ts-nocheck
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load = async ({ request, locals }: Parameters<PageServerLoad>[0]) => {
  const userId = locals.user.id;


    const notifications = prisma.notification.findMany({
        where: {
            receiverId: userId,
        }
    });
    

  console.log(notifications[0]);
  return {
    userId,
    notifications,
  };
};
