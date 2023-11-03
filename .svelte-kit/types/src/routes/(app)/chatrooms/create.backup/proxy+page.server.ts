// @ts-nocheck
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

//input userName, and ChatName,and user's username
export const load = async ({ request, cookies }: Parameters<PageServerLoad>[0]) => {
  const foundUserCookie = cookies.get("foundUser");
  return {
    foundUserCookie: foundUserCookie,
  };
};

export const actions = {
  findUser: async ({ request, cookies }: import('./$types').RequestEvent) => {
    try {
      const formData = Object.fromEntries(await request.formData());
      const { userName } = formData;

      const foundUser = await prisma.user.findUnique({
        where: {
          username: String(userName),
        },
      });
      console.log(foundUser);
      if (!foundUser) {
        // User not found
        return fail(404, { error: { message: "User not found" } });
      }

      if (foundUser) {
        cookies.set("foundUser", JSON.stringify(foundUser));
      }

      return {
        body: {
          foundUser,
        },
      };
    } catch (err) {
      console.error(err);
      return fail(500, {
        error: { message: "Internal Server Error: finding user" },
      });
    }
  },
};
;null as any as Actions;