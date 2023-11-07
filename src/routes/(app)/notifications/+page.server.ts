import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request, locals }) => {
  const userId = locals.user.id;

  const notifications =
    await prisma.$queryRaw`select * from Notification where receiverId = ${userId}`;

  console.log(notifications[0]);
  return {
    userId,
    notifications,
  };
};
