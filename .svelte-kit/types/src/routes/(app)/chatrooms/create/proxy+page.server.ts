// @ts-nocheck
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { json } from "@sveltejs/kit";

export const actions = {
    default: async ({request}: import('./$types').RequestEvent) => {
        const formData = Object.fromEntries(await request.formData());
        const { username } = formData;
        console.log("action: ", username);

        const user = await prisma.user.findUnique({
            where: {username: String(username)}
        })

        console.log("user found in action:", user)
    }
};null as any as Actions;