// @ts-nocheck
import type { PageServerLoad } from "./$types";

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
  const userId = locals.user.id;

  return {
    userId,
  };
};
