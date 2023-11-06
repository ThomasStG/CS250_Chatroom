import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

import db from "$lib/database";

export const load: PageServerLoad = async ({ request, locals }) => {
  const userId = locals.user.id;

  const notifications = await prisma.notification.findMany({
    where: {
        receiverId: userId,
    },
  });

  return {
    userId, notifications,
  };
};
