// @ts-nocheck
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import prisma from "$lib/database";

export const load = async ({ locals }: Parameters<LayoutServerLoad>[0]) => {
  if (!locals.user) {
    throw redirect(302, "/login");
  }

  return {
    user: locals.user,
  };
};
