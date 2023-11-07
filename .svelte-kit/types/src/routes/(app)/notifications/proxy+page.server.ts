// @ts-nocheck
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

import db from "$lib/database";

export const load = async ({ request, locals }: Parameters<PageServerLoad>[0]) => {
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
