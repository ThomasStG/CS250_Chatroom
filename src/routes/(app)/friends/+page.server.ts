import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const actions: Actions = {
    friendRequest: async ({ request }) => {
        try {
            const formData = Object.fromEntries(await request.formData());
            const { userName } = formData;
            console.log(userName);

            const user = await prisma.user.findUnique({
                where: {
                    username: String(userName),
                },
            });

            if (!user) {
                // User not found
                return fail(404, "User not found");
            }

            // User found, return the username
            return {
                body: {
                    userName: user.username,
                },
            };
        } catch (error) {
            console.error(error);
            return fail(500, "Internal Server Error");
        }
    },
};
