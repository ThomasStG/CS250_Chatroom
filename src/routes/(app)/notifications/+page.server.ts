import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request, locals }) => {
  const userId = locals.user.id;

  const notifications = prisma.notification.findMany({
    where: {
      receiverId: userId,
    },
  });

  return {
    userId,
    notifications,
  };
};
